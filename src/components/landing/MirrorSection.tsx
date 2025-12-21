export const MirrorSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
            "Domingo à noite. O notebook está aberto na mesa da sala. No celular, dezenas de fotos das atividades da semana. Em outra aba, a BNCC — que você já leu tantas vezes, mas que nunca parece se encaixar direito. O café esfriou faz tempo. E a sensação de que você deveria estar descansando, não trabalhando, pesa mais do que qualquer palavra que você tenta escrever."
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium mt-4">
            Mas o relatório não espera.
          </p>
          
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-muted-foreground leading-relaxed">
              Se você se reconheceu nessa cena, saiba que você não está sozinha. E mais importante: 
              <strong className="text-foreground"> isso não é falta de competência</strong>. 
              É falta de um sistema que funcione de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
