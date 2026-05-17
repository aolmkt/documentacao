import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

const LandingV2 = lazy(() => import("./pages/LandingV2"));
const Index = lazy(() => import("./pages/Index"));
const Backredirect1 = lazy(() => import("./pages/Backredirect1"));
const Backredirect2 = lazy(() => import("./pages/Backredirect2"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LegacyLanding = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  return <Index />;
};

const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<LandingV2 />} />
        <Route path="/b" element={<LegacyLanding />} />
        <Route path="/br1" element={<Backredirect1 />} />
        <Route path="/br2" element={<Backredirect2 />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
