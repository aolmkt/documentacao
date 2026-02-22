export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 border-t border-border/50 bg-lavanda">
      <div className="container max-w-4xl text-center">
        <p className="text-sm text-muted-foreground font-medium">
          © {currentYear} Método Relatório Evolutivo com IA
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1.5">
          Sistema de Documentação Pedagógica Contínua para Educação Infantil
        </p>
      </div>
    </footer>
  );
};
