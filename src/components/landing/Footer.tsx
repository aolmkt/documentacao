export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container max-w-4xl text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Método Relatório Tranquilo. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          Feito com carinho para professoras que merecem seus domingos de volta.
        </p>
      </div>
    </footer>
  );
};
