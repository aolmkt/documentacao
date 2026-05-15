/**
 * FACEBOOK TRACKING GATEWAY v2.81 (React/Lovable Edition)
 * - Re-hidratação de Dados (Match Quality Máximo via /hydrate)
 * - Persistência Extrema sem Poluição de URL
 * - Preservação da Cadeia de SRC Original (original_src)
 */
(function() {
    // =================================================================
    const API_URL = 'https://tracking.lavishcreative.com';
    const FACEBOOK_PIXEL_ID = '960726789638096';
    // =================================================================

    const COOKIE_NAME = 'external_id';
    let cachedIp = null;
    let hydratedData = {};

    const STANDARD_EVENTS = ['AddPaymentInfo', 'AddToCart', 'AddToWishlist', 'CompleteRegistration', 'Contact', 'CustomizeProduct', 'Donate', 'FindLocation', 'InitiateCheckout', 'Lead', 'Purchase', 'Schedule', 'Search', 'StartTrial', 'SubmitApplication', 'Subscribe', 'ViewContent', 'PageView'];

    // --- 0. PRESERVAÇÃO DE ATRIBUIÇÃO ORIGINAL (SRC CHAIN) ---
    function captureOriginalSrc() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const src = urlParams.get('src');
            if (src && !document.cookie.includes('original_src=')) {
                const d = new Date(); d.setTime(d.getTime() + (30*24*60*60*1000));
                document.cookie = `original_src=${encodeURIComponent(src)};expires=${d.toUTCString()};path=/;SameSite=Lax;Secure`;
            }
        } catch(e) {}
    }
    captureOriginalSrc();

    // --- 1. PERSISTÊNCIA EXTREMA (Blindagem para SPAs/Lovable) ---
    function getExternalId() {
        const urlP = new URLSearchParams(window.location.search);
        let id = urlP.get('sck') || urlP.get('external_id');

        if (!id) { try { id = localStorage.getItem('sck_id'); } catch(e) {} }

        if (!id) {
            const m = document.cookie.match(new RegExp('(^| )'+COOKIE_NAME+'=([^;]+)'));
            if (m) id = m[2];
        }

        if (!id) id = 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

        try { localStorage.setItem('sck_id', id); } catch(e) {}
        const d = new Date(); d.setTime(d.getTime() + (30*24*60*60*1000));
        document.cookie = `${COOKIE_NAME}=${id};expires=${d.toUTCString()};path=/;SameSite=Lax;Secure`;

        return id;
    }

    const extId = getExternalId();
    window.trackingData = { external_id: extId };

    function getCleanUrl() {
        try {
            const u = new URL(window.location.href);
            u.searchParams.delete('sck');
            u.searchParams.delete('external_id');
            return u.toString();
        } catch (e) { return window.location.href; }
    }

    function getFbc() {
        const f = new URLSearchParams(window.location.search).get('fbclid');
        if(f) return `fb.1.${Date.now()}.${f}`;
        const m = document.cookie.match(/(^| )_fbc=([^;]+)/);
        return m ? m[2] : null;
    }

    // --- 2. BOILERPLATE DO PIXEL (SÍNCRONO PARA NÃO PERDER CLIQUES RÁPIDOS) ---
    if (!window.fbq) {
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    }

    // --- 3. FUNÇÃO DE DISPARO ---
    function sendEvent(n, ip, data={}) {
        const eid = n.toLowerCase() + '_' + extId + '_' + Date.now();

        if (typeof fbq === 'function') {
            const method = STANDARD_EVENTS.includes(n) ? 'track' : 'trackCustom';
            fbq(method, n, data, { eventID: eid });
        }

        const pl = {
            event_name: n, event_id: eid, external_id: extId,
            url: getCleanUrl(),
            fbp: (document.cookie.match(/(^| )_fbp=([^;]+)/)||[])[2],
            fbc: getFbc(), target_pixel_id: FACEBOOK_PIXEL_ID
        };
        if(ip) pl.client_ip = ip; else if(cachedIp) pl.client_ip = cachedIp;

        fetch(`${API_URL}/track`, {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pl), keepalive: true
        }).catch(()=>{});
    }

    window.trackEvent = function(n, data) { sendEvent(n, cachedIp, data); };

    // --- 4. INICIALIZAÇÃO + RE-HIDRATAÇÃO ---
    async function initSystem() {
        try {
            const res = await fetch(`${API_URL}/hydrate?sck=${encodeURIComponent(extId)}`);
            if (res.ok) hydratedData = await res.json();
        } catch(e) {}

        fbq('init', FACEBOOK_PIXEL_ID, { external_id: extId, ...hydratedData });

        fetch('https://api64.ipify.org?format=json')
            .then(r=>r.json()).then(d => {
                cachedIp = d.ip;
                sendEvent('PageView', d.ip);
                sendEvent('ViewContent', d.ip);
            })
            .catch(() => {
                sendEvent('PageView', null);
                sendEvent('ViewContent', null);
            });
    }

    initSystem();

    // --- 5. AUTO-LINKER HOTMART ---
    function autoLink() {
        setTimeout(()=>{
            document.querySelectorAll('a[href*="pay.hotmart.com"]').forEach(el=>{
                if(el.href.indexOf('sck=') < 0) {
                    const sep = el.href.includes('?') ? '&' : '?';
                    el.href += sep + 'sck=' + extId;
                }
            });
        }, 1200);
    }
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', autoLink); else autoLink();
})();
