# 🚀 JavaScript Avançado/Expert

Curso completo de JavaScript nível avançado e expert, cobrindo técnicas profissionais, patterns, performance e recursos modernos (ES6-ES2024).

## 📚 Conteúdo do Curso

### 🟠 Nível 3 - Avançado

1. **⏳ Callbacks & Promises**
   - Programação assíncrona
   - Event Loop e Call Stack
   - Callback Hell e sua solução
   - Promise chaining
   - Promise.all, race, allSettled
   
2. **⚡ Async/Await**
   - Sintaxe moderna assíncrona
   - Error handling com try/catch
   - Async em loops
   - Top-level await (ES2022)
   - Best practices

3. **🌐 AJAX & HTTP** (implementado com demos)
   - Fetch API completa
   - Métodos HTTP (GET, POST, PUT/PATCH, DELETE)
   - Headers, autenticação (Bearer, Basic)
   - FormData e upload de arquivos
   - AbortController e Timeout
   - Retry com Exponential Backoff
   - CORS e segurança

4. **📦 Modules ES6** (implementado)
   - Import/Export (named vs default)
   - Re-export e barrel files
   - Dynamic import
   - Tree-shaking (conceitos)
   - Estrutura de pastas e organização

### 🔴 Nível 4 - Expert

5. **🎨 Design Patterns** (implementado)
   - Singleton, Factory, Observer, Strategy
   - Decorator
   - Module Pattern (conceito)
   - Aplicação prática e quando evitar

6. **✨ Best Practices** (implementado)
   - Nomes claros e semânticos
   - Funções pequenas e puras
   - Imutabilidade e side-effects
   - Tratamento consistente de erros
   - Testabilidade e isolamento
   - Documentação essencial (JSDoc)
   - Linting & formatação

7. **⚡ Performance** (implementado)
   - Profiling antes de otimizar
   - Complexidade e loops custosos
   - Debounce & Throttle
   - Lazy loading de imagens e módulos
   - Web Workers para tarefas pesadas
   - Memory leaks e limpeza de listeners

8. **🆕 ES6-ES2024** (implementado)
   - Optional chaining (?.) & Nullish (??)
   - Private fields (#)
   - Top-level await
   - flat / flatMap
   - Promise.any / allSettled
   - Conceitos de propostas (Temporal, Records & Tuples)

## 🎯 Pré-requisitos

**Conhecimentos necessários:**
- ✅ JavaScript básico e intermediário
- ✅ DOM e eventos
- ✅ Funções, closures, arrow functions
- ✅ Objetos, arrays, destructuring
- ✅ Classes e POO
- ✅ JSON e Web APIs

**Se você não tem esses conhecimentos, faça primeiro o curso Básico/Intermediário!**

## ⏱️ Duração Estimada

- **Estudo teórico:** 33-43 horas
- **Prática:** 68-91 horas
- **Total:** ~100-130 horas
- **Cronograma sugerido:** 4-6 meses (2-3h por dia, 5 dias/semana)

## 🛠️ Ferramentas Necessárias

### Editor de Código
- **Visual Studio Code** (recomendado)
- Extensões: ESLint, Prettier, GitLens

### Navegador
- Chrome DevTools ou Firefox Developer Tools
- Console, Debugger, Network, Performance

### Node.js
```bash
# Instalar Node.js v18+ (LTS)
# https://nodejs.org

# Verificar
node --version
npm --version
```

### Git
```bash
git --version
```

## 🚀 Como Usar

1. Abra `index.html` em um navegador moderno (Chrome/Firefox). Não é necessário servidor.
2. Navegue pelos módulos no menu lateral. Os novos módulos (AJAX, Modules, Patterns, Best Practices, Performance, ES6-ES2024) já estão ativos.
3. Use os botões de *Demo* nos módulos iniciais para visualizar comportamento dinâmico (Promises, Async/Await). Você pode criar seus próprios testes no console para os demais exemplos.
4. Digite os exemplos mostrados em cada módulo para absorver conceitos (evite copiar/colar).
5. Experimente modificar os códigos (ex.: alterar tempo de debounce, adicionar novos padrões, criar novo módulo).
6. Pressione `Alt + →` ou `Alt + ←` para navegar rapidamente entre módulos, `Alt + H` para voltar à introdução.
7. O progresso é salvo localmente (LocalStorage). Limpe via DevTools ou usando a função `resetProgress()` no console.

## 📖 Metodologia

### 1️⃣ Leia e Entenda
- Leia o conteúdo com atenção
- Entenda o **porquê**, não apenas o **como**

### 2️⃣ Digite o Código
- **Digite** todos os exemplos (não copie/cole)
- Veja os resultados no console (F12)

### 3️⃣ Experimente
- Modifique os exemplos
- Teste casos diferentes
- Quebre o código de propósito para entender erros

### 4️⃣ Pratique
- Faça os exercícios propostos
- Crie mini-projetos
- Aplique em projetos reais

### 5️⃣ Revise
- Volte e reveja conceitos anteriores
- Refatore código antigo com novos conhecimentos

## 💡 Dicas de Estudo

### ✅ Faça
- ✅ Pratique todo dia (consistência > intensidade)
- ✅ Use DevTools para debugar
- ✅ Leia documentação oficial (MDN)
- ✅ Participe de comunidades
- ✅ Contribua com open-source
- ✅ Ensine o que aprendeu

### ❌ Evite
- ❌ Pular conceitos (fundação é crucial)
- ❌ Apenas copiar/colar código
- ❌ Não praticar (teoria sem prática não funciona)
- ❌ Desistir nos primeiros erros
- ❌ Comparar seu progresso com outros

## 🎯 Projetos Sugeridos

Pratique criando estes projetos ao longo do curso (agora com reforço dos novos módulos):

1. **API Client avançado** - com retry & timeout
2. **Task Manager** - módulos separados (persistência, UI, domínio)
3. **GitHub Finder** - aplicar debounce em busca
4. **Weather App** - cache e fallback
5. **E-commerce Cart** - aplicar Strategy para cálculo de frete
6. **Real-time Chat** - adaptar Observer/EventBus
7. **Form Validator** - módulos + padrões + testes
8. **Image Gallery** - lazy loading + performance profiling
9. **Performance Dashboard** - medir e exibir métricas do app
10. **Worker Calculator** - usar Web Worker para cálculos pesados

## 📚 Recursos Complementares

### Documentação
- [MDN Web Docs](https://developer.mozilla.org) - Referência completa
- [JavaScript.info](https://javascript.info) - Tutorial moderno
- [ECMAScript Spec](https://tc39.es/ecma262/) - Especificação oficial

### Ferramentas Online
- [CodeSandbox](https://codesandbox.io) - Ambiente online
- [StackBlitz](https://stackblitz.com) - IDE online
- [JSONPlaceholder](https://jsonplaceholder.typicode.com) - API fake

### Comunidades
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
- [Reddit r/javascript](https://reddit.com/r/javascript)
- [Dev.to](https://dev.to/t/javascript)
- Discord de programação

## 🎓 Certificado

Ao completar este curso, você estará pronto para:
- ✅ Trabalhar com frameworks (React, Vue, Angular)
- ✅ Desenvolver backend com Node.js
- ✅ Migrar para TypeScript
- ✅ Escrever testes automatizados
- ✅ Participar de projetos profissionais
- ✅ Contribuir com open-source

## 🤝 Contribuindo

Encontrou um erro? Tem uma sugestão?
- Abra uma issue
- Envie um pull request
- Sugira novos módulos ou demos interativas

## 📝 Licença

Este material é livre para uso educacional.

---

**Bons estudos e boa jornada para se tornar um Expert em JavaScript! 🚀**

*Lembre-se: Programação é prática. Quanto mais você codar, melhor você fica!*
