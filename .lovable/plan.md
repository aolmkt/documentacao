

## Plano: Criar e aplicar favicon temático

### O que será feito

Gerar um ícone/favicon relacionado ao tema do site (documentação pedagógica, relatórios evolutivos, educação infantil) usando o modelo de geração de imagens, e aplicá-lo como favicon no `index.html`.

### Etapas

1. **Gerar o ícone** usando a API de geração de imagens com um prompt descrevendo um ícone minimalista — algo como um caderno/documento com um lápis ou uma folha com marcações de progresso, em cores que combinem com o site (tons de roxo/lilás que o site usa).

2. **Salvar o ícone** no diretório `public/` como `favicon.png`.

3. **Atualizar `index.html`** para referenciar o novo favicon:
   ```html
   <link rel="icon" href="/favicon.png" type="image/png">
   ```

