// ==========================================
// DEMOS-ADVANCED.JS - Funções de demonstração interativas
// Curso Avançado/Expert
// ==========================================

// Utilitário para mostrar output
function showOutput(elementId, content) {
    const output = document.getElementById(elementId);
    if (output) {
        output.style.display = 'block';
        output.innerHTML = content;
    }
}

// ==========================================
// DEMOS DO MÓDULO: CALLBACKS & PROMISES
// ==========================================

function demoPromiseBasica() {
    let output = '<h4>Demo: Promise Básica</h4>';
    
    output += '<p>Criando uma Promise que resolve após 2 segundos...</p>';
    output += '<p id="promise-status">⏳ Aguardando...</p>';
    
    showOutput('callbacks-output', output);
    
    // Criar Promise
    const minhaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.3;
            if (sucesso) {
                resolve('✅ Promise resolvida com sucesso!');
            } else {
                reject('❌ Promise rejeitada (erro simulado)');
            }
        }, 2000);
    });
    
    // Consumir Promise
    minhaPromise
        .then(resultado => {
            document.getElementById('promise-status').innerHTML = resultado;
            document.getElementById('promise-status').style.color = '#10b981';
        })
        .catch(erro => {
            document.getElementById('promise-status').innerHTML = erro;
            document.getElementById('promise-status').style.color = '#ef4444';
        })
        .finally(() => {
            const finalMsg = document.createElement('p');
            finalMsg.textContent = '🏁 Finally: sempre executa (sucesso ou erro)';
            finalMsg.style.marginTop = '10px';
            finalMsg.style.padding = '10px';
            finalMsg.style.background = '#f0f9ff';
            finalMsg.style.border = '1px solid #3b82f6';
            finalMsg.style.borderRadius = '5px';
            document.getElementById('callbacks-output').appendChild(finalMsg);
        });
}

function demoPromiseChaining() {
    let output = '<h4>Demo: Promise Chaining</h4>';
    output += '<p>Encadeando múltiplas operações...</p>';
    output += '<div id="chain-log" style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;"></div>';
    
    showOutput('callbacks-output', output);
    
    const addLog = (msg) => {
        const log = document.getElementById('chain-log');
        const p = document.createElement('p');
        p.textContent = msg;
        p.style.margin = '5px 0';
        log.appendChild(p);
    };
    
    // Promise chain
    Promise.resolve(5)
        .then(num => {
            addLog(`1️⃣ Início: ${num}`);
            return num * 2;
        })
        .then(num => {
            addLog(`2️⃣ Multiplicado por 2: ${num}`);
            return num + 10;
        })
        .then(num => {
            addLog(`3️⃣ Somado 10: ${num}`);
            return num / 5;
        })
        .then(resultado => {
            addLog(`4️⃣ Dividido por 5: ${resultado}`);
            addLog(`✅ Resultado final: ${resultado}`);
        })
        .catch(erro => {
            addLog(`❌ Erro: ${erro.message}`);
        });
}

async function demoPromiseAll() {
    let output = '<h4>Demo: Promise.all()</h4>';
    output += '<p>Buscando 3 usuários em paralelo...</p>';
    output += '<p id="promise-all-status">⏳ Carregando...</p>';
    output += '<div id="promise-all-results"></div>';
    
    showOutput('callbacks-output', output);
    
    try {
        const ids = [1, 2, 3];
        
        // Buscar múltiplos usuários em paralelo
        const promises = ids.map(id => 
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(r => r.json())
        );
        
        const usuarios = await Promise.all(promises);
        
        document.getElementById('promise-all-status').innerHTML = '✅ Todos os usuários carregados!';
        document.getElementById('promise-all-status').style.color = '#10b981';
        
        const resultsDiv = document.getElementById('promise-all-results');
        resultsDiv.innerHTML = '<h5>Usuários:</h5>';
        
        usuarios.forEach(user => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
            p.style.padding = '10px';
            p.style.margin = '5px 0';
            p.style.background = '#e7f3ff';
            p.style.border = '1px solid #3b82f6';
            p.style.borderRadius = '5px';
            resultsDiv.appendChild(p);
        });
        
    } catch (erro) {
        document.getElementById('promise-all-status').innerHTML = `❌ Erro: ${erro.message}`;
        document.getElementById('promise-all-status').style.color = '#ef4444';
    }
}

// ==========================================
// DEMOS DO MÓDULO: ASYNC/AWAIT
// ==========================================

async function demoAsyncBasico() {
    let output = '<h4>Demo: Async/Await Básico</h4>';
    output += '<div id="async-log" style="background: #f5f5f5; padding: 15px; border-radius: 5px;"></div>';
    
    showOutput('async-output', output);
    
    const addLog = (msg) => {
        const log = document.getElementById('async-log');
        const p = document.createElement('p');
        p.textContent = msg;
        p.style.margin = '5px 0';
        log.appendChild(p);
    };
    
    addLog('1️⃣ Iniciando...');
    
    // Simular operação assíncrona
    const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    try {
        addLog('2️⃣ Aguardando 1 segundo...');
        await esperar(1000);
        
        addLog('3️⃣ Buscando usuário...');
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const usuario = await response.json();
        
        addLog(`4️⃣ Usuário recebido: ${usuario.name}`);
        addLog(`✅ Email: ${usuario.email}`);
        
    } catch (erro) {
        addLog(`❌ Erro: ${erro.message}`);
    }
}

async function demoAsyncParalelo() {
    let output = '<h4>Demo: Sequencial vs Paralelo</h4>';
    output += '<div id="comparison-results" style="margin-top: 15px;"></div>';
    
    showOutput('async-output', output);
    
    const resultsDiv = document.getElementById('comparison-results');
    
    // Função que simula operação lenta
    const operacaoLenta = (id) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(`Resultado ${id}`), 1000);
        });
    };
    
    // Sequencial (lento)
    resultsDiv.innerHTML += '<p><strong>⏳ Executando SEQUENCIAL...</strong></p>';
    const inicioSeq = Date.now();
    
    await operacaoLenta(1);
    await operacaoLenta(2);
    await operacaoLenta(3);
    
    const tempoSeq = Date.now() - inicioSeq;
    resultsDiv.innerHTML += `<p class="warning-box">Sequencial: ${tempoSeq}ms (cada uma espera a anterior)</p>`;
    
    // Paralelo (rápido!)
    resultsDiv.innerHTML += '<p style="margin-top: 15px;"><strong>⚡ Executando PARALELO...</strong></p>';
    const inicioPar = Date.now();
    
    await Promise.all([
        operacaoLenta(1),
        operacaoLenta(2),
        operacaoLenta(3)
    ]);
    
    const tempoPar = Date.now() - inicioPar;
    resultsDiv.innerHTML += `<p class="success-box">Paralelo: ${tempoPar}ms (todas ao mesmo tempo!)</p>`;
    
    resultsDiv.innerHTML += `<div class="info-box" style="margin-top: 15px;">
        <strong>💡 Diferença:</strong> ~${tempoSeq - tempoPar}ms mais rápido!<br>
        Use Promise.all() quando as operações não dependem uma da outra.
    </div>`;
}

async function demoAsyncError() {
    let output = '<h4>Demo: Error Handling com Async/Await</h4>';
    output += '<div id="error-log" style="background: #f5f5f5; padding: 15px; border-radius: 5px;"></div>';
    
    showOutput('async-output', output);
    
    const errorLog = document.getElementById('error-log');
    
    // Função que às vezes falha
    const operacaoArriscada = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve('✅ Operação bem-sucedida!');
                } else {
                    reject(new Error('❌ Operação falhou!'));
                }
            }, 1000);
        });
    };
    
    // Teste 1: Com try/catch
    errorLog.innerHTML += '<p><strong>Teste 1: Capturando erro com try/catch</strong></p>';
    
    try {
        const resultado = await operacaoArriscada();
        errorLog.innerHTML += `<p style="color: #10b981;">${resultado}</p>`;
    } catch (erro) {
        errorLog.innerHTML += `<p style="color: #ef4444;">${erro.message}</p>`;
        errorLog.innerHTML += '<p style="color: #666;">Erro capturado e tratado graciosamente!</p>';
    }
    
    // Teste 2: Múltiplas tentativas
    errorLog.innerHTML += '<p style="margin-top: 15px;"><strong>Teste 2: Tentando 3 vezes</strong></p>';
    
    for (let i = 1; i <= 3; i++) {
        try {
            errorLog.innerHTML += `<p>Tentativa ${i}...</p>`;
            const resultado = await operacaoArriscada();
            errorLog.innerHTML += `<p style="color: #10b981;">${resultado} (conseguiu na tentativa ${i})</p>`;
            break; // Sucesso, para o loop
        } catch (erro) {
            if (i === 3) {
                errorLog.innerHTML += `<p style="color: #ef4444;">Falhou após 3 tentativas 😢</p>`;
            } else {
                errorLog.innerHTML += `<p style="color: #f59e0b;">Tentativa ${i} falhou, tentando novamente...</p>`;
            }
        }
    }
}

console.log('✅ demos-advanced.js carregado com sucesso!');
 
// ==========================================
// DEMOS DO MÓDULO: AJAX & HTTP (Parte 3)
// ==========================================

async function demoAjaxGet() {
    let output = '<h4>Demo: GET Usuário (JSONPlaceholder)</h4>';
    output += '<p>Buscando usuário <code>/users/1</code>...</p>';
    output += '<p id="ajax-status">⏳ Carregando...</p>';
    output += '<div id="ajax-result"></div>';
    showOutput('ajax-output', output);
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const user = await resp.json();
        const status = document.getElementById('ajax-status');
        status.textContent = '✅ Sucesso';
        status.style.color = '#10b981';
        const div = document.getElementById('ajax-result');
        div.innerHTML = `<p><strong>${user.name}</strong> — ${user.email}</p>`;
    } catch (e) {
        const status = document.getElementById('ajax-status');
        status.textContent = '❌ ' + e.message;
        status.style.color = '#ef4444';
    }
}

async function demoAjaxRetry() {
    let output = '<h4>Demo: Retry com Backoff</h4>';
    output += '<p>Tentando buscar um endpoint com 3 tentativas...</p>';
    output += '<div id="ajax-retry-log" style="background:#f5f5f5;padding:12px;border-radius:6px"></div>';
    showOutput('ajax-output', output);

    const log = (m) => {
        const el = document.getElementById('ajax-retry-log');
        const p = document.createElement('p');
        p.textContent = m; el.appendChild(p);
    };

    async function fetchRetry(url, tentativas = 3) {
        for (let i = 0; i < tentativas; i++) {
            try {
                log(`Tentativa ${i+1}...`);
                const r = await fetch(url);
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return await r.json();
            } catch (e) {
                if (i === tentativas - 1) throw e;
                const espera = 2 ** i * 500;
                log(`Falhou (${e.message}). Aguardando ${espera}ms...`);
                await new Promise(res => setTimeout(res, espera));
            }
        }
    }

    try {
        // Usamos um endpoint válido para demonstrar fluxo de tentativas
        const data = await fetchRetry('https://jsonplaceholder.typicode.com/users/2');
        log('✅ Sucesso: ' + (data?.name || 'OK'));
    } catch (e) {
        log('❌ Erro final: ' + e.message);
    }
}

// POST demo
async function demoAjaxPost() {
    let output = '<h4>Demo: POST JSON</h4>';
    output += '<p>Enviando dados simulados...</p>';
    output += '<div id="ajax-post-status">⏳ Enviando...</div>';
    showOutput('ajax-output', output);
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Demo', body: 'Conteúdo exemplo', userId: 99 })
        });
        const data = await resp.json();
        const status = document.getElementById('ajax-post-status');
        status.innerHTML = `✅ Criado ID: ${data.id}`;
        status.style.color = '#10b981';
    } catch (e) {
        const status = document.getElementById('ajax-post-status');
        status.innerHTML = '❌ Erro: ' + e.message;
        status.style.color = '#ef4444';
    }
}

// Timeout demo
async function demoAjaxTimeout() {
    let output = '<h4>Demo: Timeout com AbortController</h4>';
    output += '<p>Abortando requisição se demorar mais que 1s...</p>';
    output += '<div id="ajax-timeout-status">⏳ Aguardando...</div>';
    showOutput('ajax-output', output);
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 1000);
    try {
        // Endpoint existente (rápido). Para demonstrar, usaremos atraso artificial.
        const inicio = Date.now();
        const resp = await fetch('https://jsonplaceholder.typicode.com/users/3', { signal: ctrl.signal });
        const data = await resp.json();
        const status = document.getElementById('ajax-timeout-status');
        status.innerHTML = `✅ Resposta em ${Date.now()-inicio}ms: ${data.name}`;
        status.style.color = '#10b981';
    } catch (e) {
        const status = document.getElementById('ajax-timeout-status');
        status.innerHTML = '❌ ' + (e.name === 'AbortError' ? 'Timeout atingido' : e.message);
        status.style.color = '#ef4444';
    }
}

// Observer/EventBus demo
function demoObserverEventBus() {
    let output = '<h4>Demo: Observer/EventBus</h4>';
    output += '<p>Registrando ouvintes e emitindo eventos...</p>';
    output += '<div id="patterns-log" style="background:#f5f5f5;padding:12px;border-radius:6px"></div>';
    showOutput('patterns-output', output);
    const logEl = document.getElementById('patterns-log');
    const addLog = (m) => { const p = document.createElement('p'); p.textContent = m; logEl.appendChild(p); };
    class EventBus {
        constructor(){ this.l = {}; }
        on(ev, fn){ (this.l[ev]||(this.l[ev]=[])).push(fn); }
        emit(ev, data){ (this.l[ev]||[]).forEach(fn => fn(data)); }
    }
    const bus = new EventBus();
    bus.on('user:login', u => addLog('Listener A -> ' + u.name));
    bus.on('user:login', u => addLog('Listener B -> ' + u.email));
    addLog('Emitindo evento user:login');
    bus.emit('user:login', { name: 'Alice', email: 'alice@example.com' });
    addLog('Emitindo novamente');
    bus.emit('user:login', { name: 'Bob', email: 'bob@example.com' });
}

// Performance demos
function demoPerformanceDebounce() {
    let output = '<h4>Demo: Debounce de Input</h4>';
    output += '<p>Digite rápido; processamento só ocorre após parar por 500ms.</p>';
    output += '<input id="debounce-input" placeholder="Digite aqui" style="padding:8px;width:100%;max-width:320px" />';
    output += '<div id="debounce-log" style="margin-top:10px"></div>';
    showOutput('performance-output', output);
    const logEl = document.getElementById('debounce-log');
    const debounce = (fn, delay) => { let id; return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), delay); }; };
    const processar = debounce((valor) => {
        const p = document.createElement('p');
        p.textContent = 'Processado: ' + valor;
        logEl.appendChild(p);
    }, 500);
    document.getElementById('debounce-input').addEventListener('input', e => processar(e.target.value));
}

function demoPerformanceThrottle() {
    let output = '<h4>Demo: Throttle de Scroll</h4>';
    output += '<p>Role a página; logs são limitados a 1 por 300ms.</p>';
    output += '<div id="throttle-log" style="height:150px;overflow:auto;background:#f5f5f5;padding:8px;border-radius:6px"></div>';
    showOutput('performance-output', output);
    const logEl = document.getElementById('throttle-log');
    const throttle = (fn, interval) => { let ultimo = 0; return (...args) => { const agora = Date.now(); if (agora - ultimo >= interval) { ultimo = agora; fn(...args); } }; };
    const registrar = throttle(() => { const p = document.createElement('p'); p.textContent = 'Scroll tick ' + new Date().toLocaleTimeString(); logEl.appendChild(p); }, 300);
    // Usamos container interno para simular rolagem independente
    logEl.style.height = '200px';
    logEl.style.overflowY = 'scroll';
    logEl.addEventListener('scroll', registrar);
    // Preencher conteúdo grande
    const filler = document.createElement('div');
    filler.style.height = '800px';
    filler.textContent = 'Conteúdo para rolar...';
    logEl.appendChild(filler);
}
