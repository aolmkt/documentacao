import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/landing/HeroSection";
import { MirrorSection } from "@/components/landing/MirrorSection";
import { GuiltBreakSection } from "@/components/landing/GuiltBreakSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { WhatIsNotSection } from "@/components/landing/WhatIsNotSection";
import { WhatYouGetSection } from "@/components/landing/WhatYouGetSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { TimeSection } from "@/components/landing/TimeSection";
import { PriceSection } from "@/components/landing/PriceSection";
import { FutureSaasSection } from "@/components/landing/FutureSaasSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  const priceRef = useRef<HTMLDivElement>(null);

  const hotmartUrl = "https://pay.hotmart.com/L104708967T";

  const openHotmart = () => {
    window.open(hotmartUrl, "_self");
  };

  const scrollToPrice = () => {
    priceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onCtaClick={scrollToPrice} />
      <MirrorSection />
      <div className="h-px bg-border" />
      <GuiltBreakSection />
      <div className="h-px bg-border" />
      <MethodSection />
      <div className="h-px bg-border" />
      <BeforeAfterSection />
      <div className="h-px bg-border" />
      <div className="py-8 md:py-10 px-4 text-center bg-lavanda">
        <Button 
          onClick={scrollToPrice}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-base px-6 sm:px-8 py-5 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Quero aplicar o método na minha rotina
        </Button>
      </div>
      <div className="h-px bg-border" />
      <WhatIsNotSection />
      <div className="h-px bg-border" />
      <WhatYouGetSection />
      <div className="h-px bg-border" />
      <SecuritySection />
      <div className="h-px bg-border" />
      <TimeSection onCtaClick={scrollToPrice} />
      <div className="h-px bg-border" />
      <div className="py-8 md:py-10 px-4 text-center bg-lavanda">
        <p className="text-lg md:text-xl font-bold text-foreground max-w-3xl mx-auto leading-snug">
          Método aplicado na prática com estrutura real de relatório evolutivo.
        </p>
      </div>
      <div className="h-px bg-border" />
      <div ref={priceRef}>
        <PriceSection onCtaClick={openHotmart} />
      </div>
      <div className="py-4 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          Valor de lançamento válido por tempo limitado.
        </p>
      </div>
      <div className="h-px bg-border" />
      <FaqSection />
      <div className="h-px bg-border" />
      <FutureSaasSection onCtaClick={openHotmart} />
      <Footer />
    </main>
  );
};

export default Index;
