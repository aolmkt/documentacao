import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const FutureSaasSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - replace with actual implementation later
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store in localStorage for now
    const existingEmails = JSON.parse(localStorage.getItem("waitlistEmails") || "[]");
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem("waitlistEmails", JSON.stringify(existingEmails));
    }
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inscrição confirmada!",
      description: "Você será uma das primeiras a saber sobre a ferramenta.",
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-primary/5">
      <div className="container max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
          <Sparkles className="w-7 h-7 text-primary" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          O futuro da documentação pedagógica
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-8">
          Estamos desenvolvendo uma ferramenta para automatizar esse método no futuro. 
          Uma forma ainda mais simples de aplicar tudo o que você vai aprender no ebook.
        </p>
        
        <div className="bg-card rounded-xl p-6 md:p-8 border border-border/50 shadow-sm">
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-3 py-4">
              <CheckCircle className="w-12 h-12 text-success" />
              <p className="text-foreground font-medium">
                Você está na lista!
              </p>
              <p className="text-sm text-muted-foreground">
                Entraremos em contato quando a ferramenta estiver disponível.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-foreground mb-4">
                Quem adquirir o ebook pode se inscrever para participar dos testes:
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-background"
                  disabled={isLoading}
                />
                <Button 
                  type="submit"
                  className="h-12 px-6 bg-primary hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Inscrevendo..." : "Quero participar"}
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-3">
                Prometemos não enviar spam. Apenas novidades sobre a ferramenta.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
