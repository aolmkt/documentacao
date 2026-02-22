import { useRef } from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { MirrorSection } from "@/components/landing/MirrorSection";
import { GuiltBreakSection } from "@/components/landing/GuiltBreakSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { WhatIsNotSection } from "@/components/landing/WhatIsNotSection";
import { WhatYouGetSection } from "@/components/landing/WhatYouGetSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { TimeSection } from "@/components/landing/TimeSection";
import { PriceSection } from "@/components/landing/PriceSection";
import { FutureSaasSection } from "@/components/landing/FutureSaasSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  const priceRef = useRef<HTMLDivElement>(null);

  const scrollToPrice = () => {
    priceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onCtaClick={scrollToPrice} />
      <MirrorSection />
      <GuiltBreakSection />
      <MethodSection />
      <WhatIsNotSection />
      <WhatYouGetSection />
      <SecuritySection />
      <TimeSection />
      <div ref={priceRef}>
        <PriceSection onCtaClick={() => window.open("#", "_blank")} />
      </div>
      <FutureSaasSection onCtaClick={scrollToPrice} />
      <Footer />
    </main>
  );
};

export default Index;
