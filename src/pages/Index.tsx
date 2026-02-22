import { useRef } from "react";
import { Button } from "@/components/ui/button";
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
      <div className="py-10 md:py-14 px-4 text-center">
        <Button 
          onClick={scrollToPrice}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-6 sm:px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Quero aplicar o método na minha rotina
        </Button>
      </div>
      <WhatIsNotSection />
      <WhatYouGetSection />
      <SecuritySection />
      <TimeSection />
      <div className="py-12 md:py-16 px-4 text-center bg-secondary/30">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground max-w-3xl mx-auto leading-snug">
          Método aplicado na prática com estrutura real de relatório evolutivo.
        </p>
      </div>
      <div ref={priceRef}>
        <PriceSection onCtaClick={() => window.open("#", "_blank")} />
      </div>
      <FutureSaasSection onCtaClick={scrollToPrice} />
      <Footer />
    </main>
  );
};

export default Index;
