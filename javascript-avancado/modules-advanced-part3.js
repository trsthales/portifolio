// ==========================================
// MÓDULOS AVANÇADOS - PARTE 3
// AJAX/HTTP, Modules ES6, Design Patterns,
// Best Practices, Performance, ES6-ES2024
// ==========================================

const MODULES_ADVANCED_PART3 = {
    // ==========================================
    // MÓDULO: AJAX & HTTP
    // ==========================================
  ajax: {
    render: () => `
            <div class="section">
                <h2>🌐 AJAX & HTTP - Comunicação com APIs</h2>
                <p style="font-size:1.15em;color:#555;margin:20px 0;">
                    Modernamente usamos a <strong>Fetch API</strong> ou bibliotecas como Axios para
                    realizar requisições HTTP assíncronas. Aqui você aprende a fazer
                    requisições profissionais, tratar erros, autenticar e otimizar.
                </p>
                <div class="info-box">
                    <strong>🎯 Você vai aprender:</strong><br>
                    ✓ Fetch API completa<br>
                    ✓ Métodos HTTP (GET, POST, PUT/PATCH, DELETE)<br>
                    ✓ Headers, JSON, FormData, Upload<br>
                    ✓ Autenticação (Bearer, Basic)<br>
                    ✓ AbortController e Timeout<br>
                    ✓ Retry + Exponential Backoff<br>
                    ✓ CORS & Segurança<br>
                </div>
                <h3>📖 1. Fetch Básico</h3>
                <pre><code>// GET simples
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(r => {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  })
  .then(data => console.log(data.name))
  .catch(err => console.error('Erro:', err.message));

// POST com JSON
async function criarPost(titulo, corpo) {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: titulo, body: corpo, userId: 1 })
  });
  if (!resp.ok) throw new Error('Falha ao criar');
  return resp.json();
}

criarPost('Hello', 'Conteúdo').then(p => console.log(p.id));</code></pre>
                <h3>🛡️ 2. Autenticação & Headers</h3>
                <pre><code>async function buscarProtegido(url, token) {
  const resp = await fetch(url, {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  if (resp.status === 401) throw new Error('Não autorizado');
  return resp.json();
}</code></pre>
                <h3>⏱️ 3. AbortController & Timeout</h3>
                <pre><code>async function fetchComTimeout(url, ms = 3000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  try {
    const resp = await fetch(url, { signal: ctrl.signal });
    return resp.json();
  } catch (e) {
    if (e.name === 'AbortError') throw new Error('Timeout');
    throw e;
  } finally {
    clearTimeout(id);
  }
}</code></pre>
                <h3>🔁 4. Retry com Exponential Backoff</h3>
                <pre><code>async function fetchRetry(url, tentativas = 3) {
  for (let i = 0; i < tentativas; i++) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return await r.json();
    } catch (e) {
      if (i === tentativas - 1) throw e;
      const espera = 2 ** i * 500; // backoff
      await new Promise(res => setTimeout(res, espera));
    }
  }
}</code></pre>
                <h3>📤 5. FormData & Upload</h3>
                <pre><code>async function enviarArquivo(url, arquivo) {
  const fd = new FormData();
  fd.append('file', arquivo, arquivo.name);
  const resp = await fetch(url, { method: 'POST', body: fd });
  if (!resp.ok) throw new Error('Falha no upload');
  return resp.json();
}</code></pre>
                <h3>🧪 5. Função utilitária fetchJSON</h3>
                <pre><code>async function fetchJSON(url, options = {}) {
  const resp = await fetch(url, options);
  const tipo = resp.headers.get('content-type') || '';
  if (!resp.ok) throw new Error('HTTP ' + resp.status);
  if (tipo.includes('application/json')) return resp.json();
  return resp.text();
}</code></pre>
                <h3>🧰 6. Cliente HTTP com "interceptores"</h3>
                <pre><code>function createHttpClient({ baseURL = '', getToken } = {}) {
  const before = [];// request interceptors
  const after = [];// response interceptors
  const client = async (path, options = {}) => {
    let url = baseURL + path;
    let init = { ...options };
    // run request interceptors
    for (const fn of before) ({ url, init } = await fn({ url, init }) || { url, init });
    const resp = await fetch(url, init);
    // run response interceptors
    let out = resp;
    for (const fn of after) out = await fn(out) || out;
    return out;
  };
  client.useRequest = (fn) => before.push(fn);
  client.useResponse = (fn) => after.push(fn);
  // exemplo: auth header
  if (getToken) client.useRequest(async ({ url, init }) => ({
    url,
    init: { ...init, headers: { ...(init.headers||{}), Authorization: 'Bearer ' + getToken() } }
  }));
  return client;
}

// uso
const http = createHttpClient({ baseURL: 'https://jsonplaceholder.typicode.com' });
http.useResponse(async (r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r; });
const user = await (await http('/users/1')).json();
console.log(user.name);</code></pre>
        <h3>🎬 Demonstrações Interativas</h3>
        <button class="demo-button" onclick="demoAjaxGet()">Demo: GET Usuário</button>
        <button class="demo-button" onclick="demoAjaxRetry()">Demo: Retry + Backoff</button>
                <button class="demo-button" onclick="demoAjaxPost()">Demo: POST JSON</button>
                <button class="demo-button" onclick="demoAjaxTimeout()">Demo: Timeout (Abort)</button>

        <div id="ajax-output" class="output-box" style="display:none;"></div>

        <div class="success-box"><strong>✅ Pronto!</strong><br>Você agora domina os fundamentos profissionais de comunicação HTTP.</div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: MODULES ES6
    // ==========================================
    modules: {
        render: () => `
            <div class="section">
                <h2>📦 Modules ES6 - Organização de Código</h2>
                <p>Modules permitem dividir seu código em arquivos isolados com escopo próprio e import/export explícitos.</p>
                <div class="info-box">✓ import/export ✓ default vs named ✓ Re-export ✓ Dynamic import ✓ Tree-shaking ✓ Estrutura de pastas</div>
                <h3>📁 1. Named vs Default</h3>
                <pre><code>// math.js
export function soma(a,b){return a+b}
export function mult(a,b){return a*b}
export default function dobro(x){return x*2}

// uso
import dobro, { soma, mult } from './math.js';
console.log(dobro(5), soma(2,3), mult(2,4));</code></pre>
                <h3>🔄 2. Re-export</h3>
                <pre><code>// index.js
export * from './math.js';
export { default as dobro } from './math.js';</code></pre>
                <h3>⚡ 3. Dynamic Import</h3>
                <pre><code>async function carregar(){
  const mod = await import('./math.js');
  console.log(mod.soma(1,2));
}</code></pre>
                <h3>🌳 4. Tree-Shaking</h3>
                <p>Bundlers removem código não utilizado (dead code elimination) quando você usa ES Modules.</p>
                <h3>🗂️ 5. Estrutura Sugerida</h3>
                <pre><code>src/
  api/
  core/
  ui/
  utils/
  index.js</code></pre>
                <h3>📦 6. Module Pattern (sem bundler)</h3>
                <pre><code>// IIFE para simular escopo de módulo
const Carrinho = (() => {
  const itens = [];
  function add(p){ itens.push(p); }
  function total(){ return itens.reduce((s,i)=>s+i.preco,0); }
  return { add, total };
})();
Carrinho.add({ nome:'Item', preco: 10 });
console.log(Carrinho.total());</code></pre>
                <div class="success-box"><strong>✅ Organize!</strong> Estruture seu projeto para escalar com clareza.</div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: DESIGN PATTERNS
    // ==========================================
    patterns: {
        render: () => `
            <div class="section">
                <h2>🎨 Design Patterns - Soluções Elegantes</h2>
                <p>Padrões ajudam a resolver problemas recorrentes com consistência e manutenção mais fácil.</p>
                <div class="info-box">Singleton • Factory • Observer • Strategy • Decorator • Module Pattern</div>
                <h3>🧱 Singleton</h3>
                <pre><code>class Config {
  constructor(){
    if (Config.instance) return Config.instance;
    this.cache = {}; Config.instance = this;
  }
}
const c1 = new Config(); const c2 = new Config(); // mesma instância</code></pre>
                <h3>🏭 Factory</h3>
                <pre><code>function criarUsuario(tipo){
  if (tipo==='admin') return {role:'admin',permissoes:['*']};
  return {role:'user',permissoes:['read']};
}</code></pre>
                <h3>👀 Observer</h3>
                <pre><code>class EventBus {
  constructor(){this.listeners={};}
  on(ev,fn){(this.listeners[ev]||(this.listeners[ev]=[])).push(fn);} 
  emit(ev,data){(this.listeners[ev]||[]).forEach(fn=>fn(data));}
}
const bus = new EventBus();
bus.on('log', console.log);
bus.emit('log','Olá');</code></pre>
                <h3>🧠 Strategy</h3>
                <pre><code>const estrategias = {
  soma:(a,b)=>a+b,
  mult:(a,b)=>a*b
};
function calcular(a,b,estrategia){return estrategias[estrategia](a,b)}
</code></pre>
                <h3>💄 Decorator</h3>
                <pre><code>function logExecution(fn){
  return (...args)=>{console.time(fn.name);const r=fn(...args);console.timeEnd(fn.name);return r;};
}
const pesado = logExecution(x => Array(x).fill(0).map((_,i)=>i*i).reduce((a,b)=>a+b));
console.log(pesado(3000));</code></pre>
        <h3>🎬 Demonstração</h3>
        <button class="demo-button" onclick="demoObserverEventBus()">Demo: Observer/EventBus</button>
        <div id="patterns-output" class="output-box" style="display:none;"></div>
                <div class="success-box"><strong>✅ Padrões aplicados!</strong> Use com parcimônia e propósito.</div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: BEST PRACTICES
    // ==========================================
    bestpractices: {
        render: () => `
            <div class="section">
                <h2>✨ Best Practices - Código Profissional</h2>
                <div class="info-box">Clean Code • Nomes claros • Funções pequenas • Imutabilidade • Tratamento de erros • Testabilidade</div>
                <h3>🧼 1. Nomes Claros</h3>
                <pre><code>// ❌ Ruim
function f(u){/* ... */}
// ✅ Melhor
function buscarUsuarioPorId(id){/* ... */}</code></pre>
                <h3>📦 2. Funções Pequenas</h3>
                <pre><code>// Divida responsabilidades
function validarEntrada(d){/* ... */}
function salvarNoBanco(d){/* ... */}
function enviarEmail(d){/* ... */}</code></pre>
                <h3>🛡️ 3. Evite Mutação Desnecessária</h3>
                <pre><code>const novo = { ...original, ativo: true };</code></pre>
                <h3>🧪 4. Testabilidade</h3>
                <pre><code>function soma(a,b){return a+b} // pura -> fácil de testar</code></pre>
                <h3>🚨 5. Tratamento de Erros Consistente</h3>
                <pre><code>async function executar(){
  try { await algo(); }
  catch(e){ registrarErro(e); throw e; }
}</code></pre>
                <h3>📝 6. Documentação</h3>
                <pre><code>/** Calcula total */
function calcularTotal(itens){ /* ... */ }</code></pre>
                <div class="success-box"><strong>✅ Código limpo!</strong> Refatore sempre que possível.</div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: PERFORMANCE
    // ==========================================
    performance: {
        render: () => `
            <div class="section">
                <h2>⚡ Performance - Apps Rápidos</h2>
                <div class="info-box">Profiling • Complexidade • Debounce/Throttle • Lazy Loading • Web Workers • Memory</div>
                <h3>🕵️ 1. Profiling</h3>
                <p>Use DevTools Performance & Memory para descobrir gargalos antes de "otimizar" às cegas.</p>
                <h3>🔢 2. Complexidade</h3>
                <pre><code>// Evite loops aninhados desnecessários
for (const a of arrA) {
  for (const b of arrB) { /* ... */ }
}</code></pre>
                <h3>⏳ 3. Debounce & Throttle</h3>
                <pre><code>function debounce(fn, delay){
  let id; return (...args)=>{clearTimeout(id);id=setTimeout(()=>fn(...args),delay);};
}
function throttle(fn, interval){
  let ultimo=0; return (...args)=>{const agora=Date.now();if(agora-ultimo>=interval){ultimo=agora;fn(...args);}};
}</code></pre>
                <h3>🧵 4. Web Worker</h3>
                <pre><code>// main.js
const worker = new Worker('worker.js');
worker.postMessage(500000);
worker.onmessage = e => console.log('Resultado', e.data);
// worker.js
onmessage = e => { let s=0; for(let i=0;i<e.data;i++) s+=i; postMessage(s); };</code></pre>
                <h3>🖼️ 5. Lazy Loading</h3>
                <pre><code>// Imagens: <img loading="lazy" src="..." />
// Componentes: import() quando necessários</code></pre>
                <h3>💾 6. Memory Leaks</h3>
                <pre><code>// Remova event listeners ao destruir componentes
element.removeEventListener('click', handler);</code></pre>
        <h3>🎬 Demonstrações</h3>
        <button class="demo-button" onclick="demoPerformanceDebounce()">Demo: Debounce (Input)</button>
        <button class="demo-button" onclick="demoPerformanceThrottle()">Demo: Throttle (Scroll)</button>
        <div id="performance-output" class="output-box" style="display:none;"></div>
                <div class="success-box"><strong>✅ Performance consciente!</strong> Meça antes e depois.</div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: ES6-ES2024
    // ==========================================
    versions: {
        render: () => `
            <div class="section">
                <h2>📅 ES6 → ES2024 - Recursos Modernos</h2>
                <div class="info-box">Destructuring • Spread/Rest • Optional Chaining • Nullish Coalescing • Private Fields • Top-Level Await • Novas APIs</div>
                <h3>🔓 Optional Chaining & Nullish</h3>
                <pre><code>const usuario = { perfil: { email: 'a@b.com' } };
console.log(usuario.perfil?.email); // evita erro
console.log(usuario.id ?? 'sem id'); // nullish fallback</code></pre>
                <h3>#️⃣ Campos Privados</h3>
                <pre><code>class Conta {
  #saldo = 0;
  depositar(v){this.#saldo += v;}
  ver(){return this.#saldo;}
}
const c = new Conta(); c.depositar(10); console.log(c.ver());</code></pre>
                <h3>🧪 Promise.any / allSettled</h3>
                <pre><code>Promise.any([
  Promise.reject('a'),
  Promise.resolve('b')
]).then(console.log); // b</code></pre>
                <h3>🧮 Array flat/flatMap</h3>
                <pre><code>[1,[2,[3]]].flat(2); // [1,2,3]
['a','b'].flatMap(x => [x.toUpperCase(), x]);</code></pre>
                <h3>🧵 Top-Level Await</h3>
                <pre><code>// Em &lt;script type="module"&gt;
const config = await fetch('/config.json').then(r=>r.json());
init(config);</code></pre>
                <h3>🆕 Novidades Recorrentes</h3>
                <p>Fique atento às propostas do TC39 (stages). Use apenas recursos estáveis ou com transpilers.</p>
                <div class="success-box"><strong>✅ Modernizado!</strong> Você está pronto para escrever JS moderno.</div>
            </div>
        `
    }
};

// Exportar para Node (tests) se necessário
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MODULES_ADVANCED_PART3;
}
