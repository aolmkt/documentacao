import { useRef, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/landing/HeroSection";
import { MirrorSection } from "@/components/landing/MirrorSection";
import { WorkloadSection } from "@/components/landing/WorkloadSection";
import { GuiltBreakSection } from "@/components/landing/GuiltBreakSection";
import { BigIdeaSection } from "@/components/landing/BigIdeaSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { WhatIsNotSection } from "@/components/landing/WhatIsNotSection";
import { WhatYouGetSection } from "@/components/landing/WhatYouGetSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { TimeSection } from "@/components/landing/TimeSection";
import { PriceSection } from "@/components/landing/PriceSection";
import { FutureSaasSection } from "@/components/landing/FutureSaasSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";
import { buildHotmartUrl, fireInitiateCheckout } from "@/lib/checkout";

const Index = () => {
  const priceRef = useRef<HTMLDivElement>(null);
  const checkoutHref = useMemo(() => buildHotmartUrl({ srcAppend: "b" }), []);

  const openHotmart = () => {
    fireInitiateCheckout();
    window.open(checkoutHref, "_self");
  };

  const scrollToPrice = () => {
    if (typeof (window as any).trackEvent === 'function') {
      (window as any).trackEvent('AddToWishlist');
    }
    priceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const el = priceRef.current;
    if (!el) return;
    let fired = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired) {
        fired = true;
        if (typeof (window as any).trackEvent === 'function') {
          (window as any).trackEvent('AddToCart');
        }
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onCtaClick={scrollToPrice} />
      <MirrorSection />
      <div className="h-px bg-border" />
      <WorkloadSection />
      <div className="h-px bg-border" />
      <BigIdeaSection />
      <div className="h-px bg-border" />
      <TimeSection />
      <div className="h-px bg-border" />
      <MethodSection onCtaClick={scrollToPrice} />
      <div className="h-px bg-border" />
      <DemoSection />
      <div className="h-px bg-border" />
      <BeforeAfterSection />
      <div className="h-px bg-border" />
      <div className="py-10 md:py-12 px-6 text-center bg-background">
        <Button 
          onClick={scrollToPrice}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-base px-6 sm:px-8 py-5 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Quero organizar meus relatórios
        </Button>
      </div>
      <div className="h-px bg-border" />
      <WhatIsNotSection />
      <div className="h-px bg-border" />
      <WhatYouGetSection />
      <div className="h-px bg-border" />
      <SecuritySection />
      <div className="h-px bg-border" />
      <div className="py-10 md:py-12 px-6 text-center bg-lavanda">
        <p className="text-lg md:text-xl font-bold text-foreground max-w-3xl mx-auto leading-snug">
          Um método simples para transformar registros da rotina em relatórios pedagógicos claros e organizados.
        </p>
      </div>
      <div className="h-px bg-border" />
      <div ref={priceRef}>
        <PriceSection onCtaClick={openHotmart} ctaHref={checkoutHref} />
      </div>
      <div className="h-px bg-border" />
      <FaqSection />
      <div className="h-px bg-border" />
      <FutureSaasSection onCtaClick={openHotmart} ctaHref={checkoutHref} />
      <Footer />
    </main>
  );
};

export default Index;
