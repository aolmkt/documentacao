export const GuiltBreakSection = () => {
  const problems = [
    "Sobrecarga mental",
    "Cansaço acumulado",
    "Pressão com prazo",
    "Medo de esquecer algo importante",
    "Texto escrito às pressas",
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-lavanda">
      <div className="container max-w-3xl text-center">
        <div className="bg-card rounded-xl p-6 md:p-10 border border-border/60 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 uppercase">
            O erro não está em você.
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            Está no modelo.
          </p>

          <p className="text-left text-foreground/80 leading-relaxed mb-4">
            O modelo tradicional concentra toda a escrita no final do bimestre.
          </p>

          <p className="text-left text-foreground/80 mb-3">Isso gera:</p>

          <ul className="text-left space-y-2 mb-6">
            {problems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <span className="text-muted-foreground">–</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="text-left space-y-2">
            <p className="text-foreground/80">O que falta não é esforço.</p>
            <p className="font-medium text-foreground">
              É um sistema de organização contínua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
