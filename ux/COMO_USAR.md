# 🚀 Como Usar Este Projeto

## 📂 Estrutura Criada

```
UX2/
├── index.html                 # ✅ Página inicial
├── README.md                  # 📖 Documentação do projeto
├── GUIA_UX.md                # 📘 Guia completo de boas práticas
├── css/
│   ├── style.css             # ✅ Estilos com BOAS práticas
│   └── bad-practices.css     # ❌ Exemplos de MÁS práticas
├── js/
│   └── app.js                # ✅ Lógica com boas práticas
├── pages/
│   ├── cadastro.html         # 📝 Formulário de cadastro
│   ├── produtos.html         # 📦 Listagem de produtos
│   ├── carrinho.html         # 🛒 Carrinho de compras
│   └── checkout.html         # 💳 Finalização de compra
└── exercicios/
    └── exercicios.html       # 🧪 Exercícios práticos
```

## 🎯 Como Começar

### 1️⃣ Abrir o Projeto

**Opção 1: Duplo clique**
- Navegue até a pasta `UX2`
- Dê duplo clique em `index.html`

**Opção 2: Live Server (Recomendado)**
- Instale a extensão "Live Server" no VS Code
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

### 2️⃣ Explorar as Páginas

1. **Home (index.html)**
   - Visão geral do projeto
   - Links para todas as seções
   - Produtos em destaque

2. **Produtos (pages/produtos.html)**
   - Lista completa de produtos
   - Filtros por categoria e preço
   - Ordenação
   - Busca em tempo real
   - Adicionar ao carrinho

3. **Cadastro (pages/cadastro.html)**
   - Formulário completo de cadastro
   - Validação em tempo real
   - Máscaras de input (CPF, telefone)
   - Indicador de força de senha
   - Mensagens de erro específicas

4. **Carrinho (pages/carrinho.html)**
   - Lista de itens adicionados
   - Atualizar quantidades
   - Remover itens
   - Cupom de desconto
   - Cálculo de frete

5. **Checkout (pages/checkout.html)**
   - Indicador de progresso
   - Dados de entrega
   - Métodos de pagamento
   - Resumo do pedido
   - Finalização

6. **Exercícios (exercicios/exercicios.html)**
   - 5 exercícios práticos
   - Quiz interativo
   - Sistema de pontuação
   - Explicações detalhadas

## 📚 O Que Estudar

### No Código HTML
✅ Estrutura semântica (header, main, footer, article, section)
✅ Atributos de acessibilidade (aria-label, role, aria-current)
✅ Labels em todos os inputs
✅ Alt text em imagens
✅ Meta tags adequadas

### No Código CSS
✅ CSS Variables para consistência
✅ Mobile-first approach
✅ Sistema de espaçamento consistente
✅ Estados hover/focus/active
✅ Contraste adequado
✅ Transições suaves
✅ Media queries responsivas

### No Código JavaScript
✅ Gestão de estado centralizada
✅ LocalStorage para persistência
✅ Validação em tempo real
✅ Event delegation
✅ Debounce para performance
✅ Feedback visual imediato
✅ Tratamento de erros

## 🧪 Fazer os Exercícios

1. Acesse `exercicios/exercicios.html`
2. Leia cada exercício com atenção
3. Compare exemplos bons vs ruins
4. Responda as perguntas
5. Leia as explicações
6. Tente atingir 100% de acerto!

## 📖 Ler o Guia Completo

Abra o arquivo `GUIA_UX.md` para ver:
- Explicações detalhadas de cada prática
- Exemplos de código
- Comparações lado a lado
- Checklist de validação
- Recursos adicionais

## 🔍 Comparar Boas vs Más Práticas

### Para ver más práticas:
1. Abra `css/bad-practices.css`
2. Leia os comentários explicativos
3. Compare com `css/style.css`

### Exemplos para experimentar:

**Testar baixo contraste:**
```css
/* Adicione temporariamente ao seu CSS */
.hero {
    color: #cccccc !important;
    background: #ffffff !important;
}
```
Veja como fica difícil de ler!

**Testar sem focus:**
```css
/* Adicione temporariamente */
*:focus {
    outline: none !important;
}
```
Tente navegar com TAB - você vai se perder!

**Testar botões pequenos:**
```css
/* Adicione temporariamente */
.btn {
    padding: 2px 4px !important;
    font-size: 10px !important;
}
```
Tente clicar no celular - muito difícil!

## 🎨 Experimente Modificar

### Exercício Prático 1: Mudar Cores
```css
/* Em style.css, linha ~30 */
:root {
    --primary-color: #10b981; /* Mude para verde */
    --primary-hover: #059669;
}
```

### Exercício Prático 2: Adicionar Produto
```javascript
// Em app.js, adicione ao array PRODUCTS
{
    id: 7,
    name: "Seu Produto",
    price: 199.90,
    description: "Descrição aqui",
    image: "🎮",
    category: "Games",
    stock: 10
}
```

### Exercício Prático 3: Criar Novo Exercício
Adicione um novo exercício em `exercicios/exercicios.html`
seguindo o padrão dos existentes.

## 🐛 Testar Acessibilidade

### Com Teclado
1. Pressione TAB para navegar
2. ENTER para clicar em links/botões
3. SPACE para checkboxes
4. Setas para selects e radios

Todos os elementos devem ser acessíveis!

### Com Leitor de Tela (Opcional)
- Windows: Ative o Narrator (Win + Ctrl + Enter)
- Mac: Ative o VoiceOver (Cmd + F5)
- Navegue pelo site e veja se faz sentido

### DevTools
1. F12 para abrir DevTools
2. Lighthouse > Accessibility
3. Rode auditoria
4. Veja a pontuação!

## 📱 Testar Responsividade

1. F12 para abrir DevTools
2. Clique no ícone de dispositivo (Ctrl + Shift + M)
3. Teste em diferentes tamanhos:
   - 320px (Mobile pequeno)
   - 375px (iPhone)
   - 768px (Tablet)
   - 1024px (Tablet landscape)
   - 1920px (Desktop)

## 🎯 Desafios Extras

### Desafio 1: Tema Escuro
Implemente um tema escuro usando CSS Variables

### Desafio 2: Favoritos
Adicione funcionalidade de favoritar produtos

### Desafio 3: Filtros Avançados
Adicione mais opções de filtro (marca, avaliação)

### Desafio 4: Paginação
Implemente paginação na lista de produtos

### Desafio 5: Animações
Adicione microinterações suaves

## 📝 Anotações Importantes

### ✅ O que SEMPRE fazer:
- [ ] Testar em mobile
- [ ] Testar com teclado
- [ ] Verificar contraste
- [ ] Validar HTML
- [ ] Ler o código com atenção
- [ ] Experimentar quebrar coisas
- [ ] Consertar o que quebrou

### ❌ O que NUNCA fazer:
- [ ] Remover outline sem alternativa
- [ ] Usar apenas placeholders
- [ ] Ignorar erros do console
- [ ] Copiar código sem entender
- [ ] Pular os exercícios
- [ ] Não testar em mobile

## 🚀 Próximos Passos

1. ✅ Explore todas as páginas
2. ✅ Faça todos os exercícios
3. ✅ Leia o GUIA_UX.md completo
4. ✅ Leia os comentários no código
5. ✅ Experimente modificar coisas
6. ✅ Compare boas vs más práticas
7. ✅ Teste acessibilidade
8. ✅ Teste responsividade
9. ✅ Tente os desafios extras
10. ✅ Aplique em seus projetos!

## 💡 Dicas de Ouro

1. **Leia TODOS os comentários no código** - Eles explicam o porquê de cada decisão
2. **Experimente quebrar coisas** - A melhor forma de aprender é vendo o que NÃO fazer
3. **Use DevTools** - Inspecione elementos, veja o CSS aplicado, teste responsividade
4. **Teste com usuários reais** - Peça para alguém usar o site e observe
5. **Sempre pense no usuário** - "Isso é fácil de usar? Está claro? É acessível?"

## 📞 Recursos Úteis

- **Testar Contraste:** https://webaim.org/resources/contrastchecker/
- **Validar HTML:** https://validator.w3.org/
- **Validar CSS:** https://jigsaw.w3.org/css-validator/
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Material Design:** https://material.io/design
- **Nielsen Norman Group:** https://www.nngroup.com/

---

## 🎉 Conclusão

Este projeto foi criado para você aprender UX na prática. Cada linha de código tem um propósito educacional. 

**Não tenha pressa!** Explore com calma, experimente, quebre coisas, conserte, e principalmente: **pratique muito!**

Boa sorte nos estudos! 🚀

---

**Dúvidas?** Releia o código, os comentários explicam tudo! 💡
