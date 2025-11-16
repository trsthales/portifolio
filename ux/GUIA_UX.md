# 📘 Guia Completo de Boas e Más Práticas de UX

## 🎯 Índice

1. [Formulários e Inputs](#formulários-e-inputs)
2. [Navegação](#navegação)
3. [Feedback e Comunicação](#feedback-e-comunicação)
4. [Acessibilidade](#acessibilidade)
5. [Performance Percebida](#performance-percebida)
6. [Hierarquia Visual](#hierarquia-visual)
7. [Mobile e Responsividade](#mobile-e-responsividade)
8. [E-commerce Específico](#e-commerce-específico)

---

## 📝 Formulários e Inputs

### ✅ BOAS PRÁTICAS

#### 1. Labels Sempre Visíveis
```html
<!-- ✅ CORRETO -->
<label for="email">Email</label>
<input type="email" id="email" placeholder="nome@exemplo.com">
```
**Por quê?** Labels mantêm o contexto mesmo durante a digitação. Placeholder é apenas uma dica adicional.

#### 2. Validação em Tempo Real
```javascript
// ✅ CORRETO
input.addEventListener('blur', () => {
    validateField(input);
});
```
**Por quê?** Feedback imediato ajuda o usuário a corrigir erros rapidamente.

#### 3. Mensagens de Erro Específicas
```html
<!-- ✅ CORRETO -->
<span class="error">Email inválido. Use formato: nome@exemplo.com</span>
```
**Por quê?** Erros específicos indicam exatamente como corrigir o problema.

#### 4. Campos com Tamanho Adequado
```css
/* ✅ CORRETO */
input {
    min-height: 44px;
    padding: 12px 16px;
}
```
**Por quê?** Mínimo de 44px facilita interação em dispositivos touch.

#### 5. Agrupamento Lógico
```html
<!-- ✅ CORRETO -->
<fieldset>
    <legend>Dados Pessoais</legend>
    <!-- Campos relacionados -->
</fieldset>
```
**Por quê?** Organização clara facilita compreensão e preenchimento.

### ❌ MÁS PRÁTICAS

#### 1. Apenas Placeholder sem Label
```html
<!-- ❌ ERRADO -->
<input type="email" placeholder="Digite seu email">
```
**Por quê?** Quando o usuário começa a digitar, perde o contexto do campo.

#### 2. Validação Apenas no Submit
```javascript
// ❌ ERRADO
form.addEventListener('submit', () => {
    // Validar tudo de uma vez
});
```
**Por quê?** Usuário descobre todos os erros apenas no final, causando frustração.

#### 3. Mensagens de Erro Genéricas
```html
<!-- ❌ ERRADO -->
<span class="error">Erro!</span>
```
**Por quê?** Usuário não sabe o que está errado nem como corrigir.

#### 4. Inputs Muito Pequenos
```css
/* ❌ ERRADO */
input {
    padding: 2px 4px;
    font-size: 10px;
}
```
**Por quê?** Difícil de clicar e ler, especialmente em mobile.

#### 5. Limpar Formulário ao Erro
```javascript
// ❌ ERRADO
if (hasError) {
    form.reset(); // Perde todo o trabalho do usuário!
}
```
**Por quê?** Usuário tem que preencher tudo novamente. Extremamente frustrante!

---

## 🧭 Navegação

### ✅ BOAS PRÁTICAS

#### 1. Menu Fixo com Contexto
```css
/* ✅ CORRETO */
header {
    position: sticky;
    top: 0;
    z-index: 1000;
}
```
**Por quê?** Acesso rápido à navegação sem precisar rolar para cima.

#### 2. Breadcrumbs Funcionais
```html
<!-- ✅ CORRETO -->
<nav aria-label="breadcrumb">
    <a href="/">Home</a> > 
    <a href="/categoria">Categoria</a> > 
    <span>Produto</span>
</nav>
```
**Por quê?** Usuário sabe onde está e pode voltar facilmente.

#### 3. Indicador de Página Atual
```html
<!-- ✅ CORRETO -->
<a href="/produtos" aria-current="page">Produtos</a>
```
**Por quê?** Orientação clara de localização no site.

#### 4. Links com Texto Descritivo
```html
<!-- ✅ CORRETO -->
<a href="/carrinho">Ir para o carrinho (3 itens)</a>
```
**Por quê?** Usuário sabe exatamente o que vai acontecer ao clicar.

### ❌ MÁS PRÁTICAS

#### 1. Menu que Cobre Conteúdo
```css
/* ❌ ERRADO */
header {
    position: fixed;
    height: 300px; /* Muito alto! */
}
```
**Por quê?** Esconde informações importantes, especialmente em mobile.

#### 2. Links sem Indicação Visual
```css
/* ❌ ERRADO */
a {
    color: black;
    text-decoration: none;
    cursor: default;
}
```
**Por quê?** Usuário não sabe que pode clicar.

#### 3. "Clique Aqui" Genérico
```html
<!-- ❌ ERRADO -->
<a href="/info">Clique aqui</a>
```
**Por quê?** Não informa o destino. Ruim para leitores de tela.

---

## 💬 Feedback e Comunicação

### ✅ BOAS PRÁTICAS

#### 1. Loading States Visíveis
```html
<!-- ✅ CORRETO -->
<button disabled>
    <span class="spinner"></span> Carregando...
</button>
```
**Por quê?** Usuário sabe que algo está acontecendo.

#### 2. Notificações Não-Intrusivas
```css
/* ✅ CORRETO - Toast notification */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    /* Desaparece automaticamente */
}
```
**Por quê?** Informa sem bloquear interação.

#### 3. Confirmação para Ações Destrutivas
```javascript
// ✅ CORRETO
if (confirm('Tem certeza que deseja remover este item?')) {
    removeItem();
}
```
**Por quê?** Previne ações acidentais irreversíveis.

#### 4. Estados de Sucesso Claros
```html
<!-- ✅ CORRETO -->
<div class="success">
    ✓ Produto adicionado ao carrinho com sucesso!
</div>
```
**Por quê?** Confirma que a ação foi completada.

### ❌ MÁS PRÁTICAS

#### 1. Loading Infinito sem Indicador
```html
<!-- ❌ ERRADO -->
<!-- Tela branca sem feedback -->
```
**Por quê?** Usuário não sabe se travou ou está carregando.

#### 2. Pop-ups Imediatos
```javascript
// ❌ ERRADO
window.addEventListener('load', () => {
    showModal(); // Imediatamente!
});
```
**Por quê?** Interrompe antes do usuário ver o conteúdo.

#### 3. Sem Confirmação em Ações Destrutivas
```javascript
// ❌ ERRADO
deleteButton.onclick = () => {
    deleteAccount(); // Sem confirmação!
};
```
**Por quê?** Usuário pode perder dados por acidente.

---

## ♿ Acessibilidade

### ✅ BOAS PRÁTICAS

#### 1. Contraste Adequado (4.5:1)
```css
/* ✅ CORRETO */
.text {
    color: #1f2937; /* Preto */
    background: #ffffff; /* Branco */
    /* Contraste: 21:1 */
}
```
**Por quê?** Legível para pessoas com baixa visão.

#### 2. Focus Visível
```css
/* ✅ CORRETO */
*:focus-visible {
    outline: 3px solid blue;
    outline-offset: 2px;
}
```
**Por quê?** Essencial para navegação por teclado.

#### 3. Alt Text em Imagens
```html
<!-- ✅ CORRETO -->
<img src="produto.jpg" alt="Smartphone com tela de 6.5 polegadas">
```
**Por quê?** Leitores de tela podem descrever a imagem.

#### 4. ARIA Labels
```html
<!-- ✅ CORRETO -->
<button aria-label="Adicionar Produto XYZ ao carrinho">
    🛒
</button>
```
**Por quê?** Contexto para tecnologias assistivas.

#### 5. Navegação por Teclado
```javascript
// ✅ CORRETO
element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        handleClick();
    }
});
```
**Por quê?** Nem todos usam mouse.

### ❌ MÁS PRÁTICAS

#### 1. Remover Outline
```css
/* ❌ ERRADO */
*:focus {
    outline: none; /* NUNCA faça isso! */
}
```
**Por quê?** Usuários de teclado ficam perdidos.

#### 2. Baixo Contraste
```css
/* ❌ ERRADO */
.text {
    color: #cccccc;
    background: #ffffff;
    /* Contraste: 1.6:1 - Muito baixo! */
}
```
**Por quê?** Inacessível para muitas pessoas.

#### 3. Apenas Cor como Indicador
```css
/* ❌ ERRADO */
.error {
    border: 2px solid red; /* Apenas cor */
}
```
**Por quê?** Daltônicos podem não distinguir.

---

## ⚡ Performance Percebida

### ✅ BOAS PRÁTICAS

#### 1. Skeleton Screens
```html
<!-- ✅ CORRETO -->
<div class="skeleton-card"></div>
<div class="skeleton-card"></div>
```
**Por quê?** Indica que o conteúdo está carregando mantendo layout.

#### 2. Otimistic UI Updates
```javascript
// ✅ CORRETO
addToCart(item);
updateUIImmediately(); // Antes da resposta do servidor
```
**Por quê?** Sensação de velocidade instantânea.

#### 3. Lazy Loading de Imagens
```html
<!-- ✅ CORRETO -->
<img src="thumb.jpg" data-src="full.jpg" loading="lazy">
```
**Por quê?** Carrega apenas o que é visível.

### ❌ MÁS PRÁTICAS

#### 1. Tela Branca Durante Loading
```html
<!-- ❌ ERRADO -->
<!-- Nada aparece até carregar tudo -->
```
**Por quê?** Usuário não sabe se travou.

#### 2. Esperar Resposta do Servidor
```javascript
// ❌ ERRADO
await addToCartAPI(item);
updateUI(); // Só depois
```
**Por quê?** Interface parece lenta.

---

## 🎨 Hierarquia Visual

### ✅ BOAS PRÁTICAS

#### 1. Tamanhos Proporcionais
```css
/* ✅ CORRETO */
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
body { font-size: 1rem; }
```
**Por quê?** Hierarquia clara guia o olhar.

#### 2. Espaçamento Consistente
```css
/* ✅ CORRETO */
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
```
**Por quê?** Ritmo visual agradável.

#### 3. CTAs Destacados
```css
/* ✅ CORRETO */
.btn-primary {
    background: #2563eb;
    font-size: 1.25rem;
    padding: 16px 32px;
}
```
**Por quê?** Ação principal óbvia.

### ❌ MÁS PRÁTICAS

#### 1. Tudo Mesmo Tamanho
```css
/* ❌ ERRADO */
h1, h2, h3, p, button {
    font-size: 14px;
}
```
**Por quê?** Sem hierarquia, usuário fica perdido.

#### 2. Espaçamentos Aleatórios
```css
/* ❌ ERRADO */
.section-1 { margin-bottom: 13px; }
.section-2 { margin-bottom: 47px; }
```
**Por quê?** Visual desorganizado e inconsistente.

---

## 📱 Mobile e Responsividade

### ✅ BOAS PRÁTICAS

#### 1. Mobile-First
```css
/* ✅ CORRETO */
/* Base para mobile */
.container { width: 100%; }

/* Desktop */
@media (min-width: 768px) {
    .container { max-width: 1200px; }
}
```
**Por quê?** Garante boa experiência em mobile.

#### 2. Área de Toque Adequada
```css
/* ✅ CORRETO */
button {
    min-height: 44px;
    min-width: 44px;
}
```
**Por quê?** Fácil de tocar com dedos.

#### 3. Viewport Meta Tag
```html
<!-- ✅ CORRETO -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
**Por quê?** Renderização correta em mobile.

### ❌ MÁS PRÁTICAS

#### 1. Elementos Muito Próximos
```css
/* ❌ ERRADO */
.button-group button {
    margin: 1px;
}
```
**Por quê?** Usuário clica no botão errado.

#### 2. Texto Muito Pequeno
```css
/* ❌ ERRADO */
body {
    font-size: 10px;
}
```
**Por quê?** Ilegível em mobile.

---

## 🛒 E-commerce Específico

### ✅ BOAS PRÁTICAS

#### 1. Produto com Informações Completas
```html
<!-- ✅ CORRETO -->
<div class="product">
    <img src="..." alt="...">
    <h3>Nome do Produto</h3>
    <p>Descrição clara</p>
    <span class="price">R$ 99,90</span>
    <span class="stock">15 disponíveis</span>
    <button>Adicionar ao Carrinho</button>
</div>
```
**Por quê?** Usuário tem todas as informações para decidir.

#### 2. Carrinho Sempre Visível
```html
<!-- ✅ CORRETO -->
<a href="/carrinho">
    🛒 Carrinho (3)
</a>
```
**Por quê?** Usuário sabe quantos itens tem.

#### 3. Checkout com Progresso
```html
<!-- ✅ CORRETO -->
Carrinho > Pagamento > Confirmação
```
**Por quê?** Reduz ansiedade do processo.

### ❌ MÁS PRÁTICAS

#### 1. Produto Sem Preço Visível
```html
<!-- ❌ ERRADO -->
<div class="product">
    <h3>Produto</h3>
    <!-- Preço escondido -->
</div>
```
**Por quê?** Informação essencial para decisão.

#### 2. Adicionar Sem Feedback
```javascript
// ❌ ERRADO
addToCart(item); // Sem feedback visual
```
**Por quê?** Usuário não sabe se funcionou.

---

## 🎯 Checklist Rápido

### Antes de Lançar, Verifique:

- [ ] Contraste mínimo 4.5:1 em todo texto
- [ ] Todos os botões com min-height: 44px
- [ ] Focus visível em todos elementos interativos
- [ ] Labels em todos os inputs
- [ ] Alt text em todas as imagens
- [ ] Funciona com navegação por teclado
- [ ] Responsivo em mobile (320px+)
- [ ] Loading states em ações assíncronas
- [ ] Mensagens de erro específicas
- [ ] Confirmação em ações destrutivas
- [ ] Testado com leitor de tela
- [ ] Performance: First Contentful Paint < 2s

---

## 📚 Recursos Adicionais

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design](https://material.io/design)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/)
- [Nielsen Norman Group](https://www.nngroup.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Lembre-se:** UX é sobre empatia e testes com usuários reais! 🚀
