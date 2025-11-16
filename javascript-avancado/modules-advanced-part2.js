// ==========================================
// MÓDULOS AVANÇADOS - PARTE 2
// Async/Await, AJAX/HTTP
// ==========================================

const MODULES_ADVANCED_PART2 = {
    // ==========================================
    // MÓDULO: ASYNC/AWAIT
    // ==========================================
    async: {
        render: () => `
            <div class="section">
                <h2>⚡ Async/Await - Promises Simplificadas</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Async/Await é <strong>açúcar sintático</strong> sobre Promises que torna código
                    assíncrono parecer síncrono. É mais <strong>limpo, legível e fácil de debugar</strong>.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Sintaxe async/await<br>
                    ✓ Async functions<br>
                    ✓ Await - esperar promises<br>
                    ✓ Error handling com try/catch<br>
                    ✓ Async/await em loops<br>
                    ✓ Promise.all com async/await<br>
                    ✓ Top-level await (ES2022)<br>
                    ✓ Best practices
                </div>

                <h3>📖 1. Sintaxe Básica</h3>

                <pre><code>// ========================================
// PROMISES (antes) vs ASYNC/AWAIT (depois)
// ========================================

// ❌ Com Promises (verbose)
function buscarUsuarioPromise(id) {
    return fetch(\`/api/usuarios/\${id}\`)
        .then(response => response.json())
        .then(usuario => {
            console.log(usuario);
            return usuario;
        })
        .catch(erro => {
            console.error(erro);
            throw erro;
        });
}

// ✅ Com Async/Await (limpo!)
async function buscarUsuarioAsync(id) {
    try {
        const response = await fetch(\`/api/usuarios/\${id}\`);
        const usuario = await response.json();
        console.log(usuario);
        return usuario;
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
}

// ========================================
// ASYNC - palavra-chave que cria função assíncrona
// ========================================

// Função async SEMPRE retorna uma Promise
async function minhaFuncao() {
    return 'Olá'; // Retorna Promise.resolve('Olá')
}

minhaFuncao().then(msg => console.log(msg)); // "Olá"

// É equivalente a:
function minhaFuncaoPromise() {
    return Promise.resolve('Olá');
}

// ========================================
// AWAIT - espera uma Promise resolver
// ========================================

async function exemplo() {
    console.log('1. Início');
    
    // Await PAUSA a execução até a Promise resolver
    const resultado = await Promise.resolve('Dados');
    
    console.log('2. Resultado:', resultado);
    console.log('3. Fim');
}

exemplo();
// Output:
// 1. Início
// 2. Resultado: Dados
// 3. Fim

// ⚠️ AWAIT só funciona dentro de async function!</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Regras importantes:</strong><br>
                    • <code>await</code> só pode ser usado dentro de <code>async function</code><br>
                    • <code>async function</code> sempre retorna uma Promise<br>
                    • <code>await</code> pausa a função, mas NÃO bloqueia o thread
                </div>

                <h3>🎯 2. Comparação Completa: Promises vs Async/Await</h3>

                <pre><code>// ========================================
// EXEMPLO 1: Buscar dados de usuário
// ========================================

// Com Promises
function getDadosUsuarioPromises(id) {
    return fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }
            return response.json();
        })
        .then(usuario => {
            return fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${usuario.id}\`)
                .then(response => response.json())
                .then(posts => {
                    return { usuario, posts };
                });
        })
        .catch(erro => {
            console.error('Erro:', erro);
            throw erro;
        });
}

// Com Async/Await (MUITO mais limpo!)
async function getDadosUsuarioAsync(id) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}\`);
        }
        
        const usuario = await response.json();
        
        const postsResponse = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${usuario.id}\`);
        const posts = await postsResponse.json();
        
        return { usuario, posts };
        
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}

// Usar
getDadosUsuarioAsync(1)
    .then(dados => {
        console.log('Usuário:', dados.usuario.name);
        console.log('Posts:', dados.posts.length);
    });

// ========================================
// EXEMPLO 2: Processar múltiplas etapas
// ========================================

async function processarPedido(pedidoId) {
    try {
        console.log('1. Validando pedido...');
        const pedido = await validarPedido(pedidoId);
        
        console.log('2. Processando pagamento...');
        const pagamento = await processarPagamento(pedido.valorTotal);
        
        console.log('3. Atualizando estoque...');
        await atualizarEstoque(pedido.itens);
        
        console.log('4. Enviando email...');
        await enviarEmailConfirmacao(pedido.clienteEmail);
        
        console.log('✅ Pedido processado com sucesso!');
        return { pedido, pagamento };
        
    } catch (erro) {
        console.error('❌ Erro ao processar pedido:', erro);
        // Rollback se necessário
        await cancelarPedido(pedidoId);
        throw erro;
    }
}</code></pre>

                <h3>🚨 3. Error Handling com Try/Catch</h3>

                <pre><code>// ========================================
// TRY/CATCH - capturar erros em async/await
// ========================================

async function buscarComErrorHandling(url) {
    try {
        const response = await fetch(url);
        
        // Verificar status HTTP
        if (!response.ok) {
            throw new Error(\`HTTP Error: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (erro) {
        // Captura QUALQUER erro (network, parsing, etc)
        console.error('Erro capturado:', erro.message);
        
        // Você pode re-lançar ou retornar valor padrão
        return null;
    }
}

// ========================================
// Múltiplos try/catch
// ========================================

async function processarDados() {
    let usuario, posts, comentarios;
    
    // Try/catch específico para cada operação
    try {
        usuario = await buscarUsuario(1);
    } catch (erro) {
        console.error('Erro ao buscar usuário:', erro);
        usuario = { nome: 'Desconhecido' }; // Fallback
    }
    
    try {
        posts = await buscarPosts(usuario.id);
    } catch (erro) {
        console.error('Erro ao buscar posts:', erro);
        posts = []; // Fallback
    }
    
    try {
        comentarios = await buscarComentarios(posts[0]?.id);
    } catch (erro) {
        console.error('Erro ao buscar comentários:', erro);
        comentarios = [];
    }
    
    return { usuario, posts, comentarios };
}

// ========================================
// Finally com async/await
// ========================================

async function operacaoComCleanup() {
    let conexao;
    
    try {
        conexao = await abrirConexao();
        const dados = await buscarDados(conexao);
        await processar(dados);
        return dados;
        
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
        
    } finally {
        // SEMPRE executa (sucesso ou erro)
        if (conexao) {
            await fecharConexao(conexao);
            console.log('Conexão fechada');
        }
    }
}

// ========================================
// Error handling customizado
// ========================================

class APIError extends Error {
    constructor(status, message) {
        super(message);
        this.name = 'APIError';
        this.status = status;
    }
}

async function fetchAPI(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new APIError(
                response.status,
                \`Erro na API: \${response.statusText}\`
            );
        }
        
        return await response.json();
        
    } catch (erro) {
        if (erro instanceof APIError) {
            if (erro.status === 404) {
                console.log('Recurso não encontrado');
                return null;
            }
            if (erro.status === 500) {
                console.log('Erro no servidor');
                throw erro;
            }
        }
        
        // Erro de rede ou parsing
        console.error('Erro desconhecido:', erro);
        throw erro;
    }
}</code></pre>

                <h3>🔄 4. Async/Await em Loops</h3>

                <pre><code>// ========================================
// SEQUENCIAL - um por vez (lento)
// ========================================

async function buscarUsuariosSequencial(ids) {
    const usuarios = [];
    
    // ⚠️ Cada await espera o anterior terminar
    for (const id of ids) {
        const usuario = await buscarUsuario(id);
        usuarios.push(usuario);
    }
    
    return usuarios;
}

// Se cada busca leva 1s, 5 usuários = 5 segundos

// ========================================
// PARALELO - todos ao mesmo tempo (rápido!)
// ========================================

async function buscarUsuariosParalelo(ids) {
    // Criar array de Promises
    const promises = ids.map(id => buscarUsuario(id));
    
    // Esperar todas ao mesmo tempo
    const usuarios = await Promise.all(promises);
    
    return usuarios;
}

// Se cada busca leva 1s, 5 usuários = ~1 segundo!

// ========================================
// Comparação de performance
// ========================================

const ids = [1, 2, 3, 4, 5];

// Sequencial
console.time('Sequencial');
await buscarUsuariosSequencial(ids);
console.timeEnd('Sequencial'); // ~5000ms

// Paralelo
console.time('Paralelo');
await buscarUsuariosParalelo(ids);
console.timeEnd('Paralelo'); // ~1000ms

// ========================================
// forEach NÃO funciona com async/await
// ========================================

// ❌ ERRADO - não espera!
ids.forEach(async (id) => {
    const usuario = await buscarUsuario(id);
    console.log(usuario); // Executam fora de ordem!
});

// ✅ CORRETO - use for...of
for (const id of ids) {
    const usuario = await buscarUsuario(id);
    console.log(usuario); // Ordem garantida
}

// Ou use map + Promise.all
await Promise.all(ids.map(async (id) => {
    const usuario = await buscarUsuario(id);
    console.log(usuario);
}));

// ========================================
// Processar em lotes (batches)
// ========================================

async function processarEmLotes(itens, tamanhoLote = 3) {
    const resultados = [];
    
    for (let i = 0; i < itens.length; i += tamanhoLote) {
        const lote = itens.slice(i, i + tamanhoLote);
        
        console.log(\`Processando lote \${i / tamanhoLote + 1}\`);
        
        // Processar lote em paralelo
        const resultadosLote = await Promise.all(
            lote.map(item => processar(item))
        );
        
        resultados.push(...resultadosLote);
    }
    
    return resultados;
}

// Exemplo: 10 itens, lotes de 3
// Lote 1: [0,1,2] - paralelo
// Lote 2: [3,4,5] - paralelo
// Lote 3: [6,7,8] - paralelo
// Lote 4: [9] - paralelo</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Método</th>
                            <th>Execução</th>
                            <th>Tempo (5 itens)</th>
                            <th>Uso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>for...of + await</strong></td>
                            <td>Sequencial</td>
                            <td>5x tempo</td>
                            <td>Ordem importa</td>
                        </tr>
                        <tr>
                            <td><strong>Promise.all()</strong></td>
                            <td>Paralelo</td>
                            <td>1x tempo</td>
                            <td>Mais rápido</td>
                        </tr>
                        <tr>
                            <td><strong>forEach + async</strong></td>
                            <td>❌ Não funciona</td>
                            <td>-</td>
                            <td>Evite!</td>
                        </tr>
                        <tr>
                            <td><strong>Lotes (batches)</strong></td>
                            <td>Grupos paralelos</td>
                            <td>~2x tempo</td>
                            <td>Controle de carga</td>
                        </tr>
                    </tbody>
                </table>

                <h3>⚡ 5. Promise.all com Async/Await</h3>

                <pre><code>// ========================================
// Buscar múltiplos recursos em paralelo
// ========================================

async function buscarTodosDados() {
    try {
        // Iniciar todas as requisições ao mesmo tempo
        const [usuarios, posts, comentarios] = await Promise.all([
            fetch('/api/usuarios').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/comentarios').then(r => r.json())
        ]);
        
        return { usuarios, posts, comentarios };
        
    } catch (erro) {
        console.error('Erro em uma das requisições:', erro);
        throw erro;
    }
}

// ========================================
// Com funções async separadas
// ========================================

async function buscarUsuarios() {
    const res = await fetch('/api/usuarios');
    return res.json();
}

async function buscarPosts() {
    const res = await fetch('/api/posts');
    return res.json();
}

async function buscarComentarios() {
    const res = await fetch('/api/comentarios');
    return res.json();
}

async function buscarTudo() {
    const [usuarios, posts, comentarios] = await Promise.all([
        buscarUsuarios(),
        buscarPosts(),
        buscarComentarios()
    ]);
    
    return { usuarios, posts, comentarios };
}

// ========================================
// Promise.allSettled com async/await
// ========================================

async function buscarComFallback() {
    const resultados = await Promise.allSettled([
        buscarUsuarios(),
        buscarPosts(),
        buscarComentarios()
    ]);
    
    const dados = {};
    
    resultados.forEach((resultado, i) => {
        const chave = ['usuarios', 'posts', 'comentarios'][i];
        
        if (resultado.status === 'fulfilled') {
            dados[chave] = resultado.value;
        } else {
            console.error(\`Erro em \${chave}:\`, resultado.reason);
            dados[chave] = []; // Fallback
        }
    });
    
    return dados;
}

// ========================================
// Promise.race com timeout
// ========================================

async function fetchComTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    
    const promiseTimeout = new Promise((_, reject) => 
        setTimeout(() => {
            controller.abort();
            reject(new Error('Timeout'));
        }, timeout)
    );
    
    const promiseFetch = fetch(url, { signal: controller.signal });
    
    try {
        return await Promise.race([promiseFetch, promiseTimeout]);
    } catch (erro) {
        if (erro.name === 'AbortError') {
            throw new Error('Requisição cancelada por timeout');
        }
        throw erro;
    }
}</code></pre>

                <h3>🌍 6. Top-Level Await (ES2022)</h3>

                <pre><code>// ========================================
// TOP-LEVEL AWAIT - await fora de async function
// ========================================

// ⚠️ Só funciona em módulos ES6!
// <script type="module">

// Antes (ES2021)
(async () => {
    const dados = await fetch('/api/config').then(r => r.json());
    console.log(dados);
})();

// Depois (ES2022+)
const dados = await fetch('/api/config').then(r => r.json());
console.log(dados);

// ========================================
// Casos de uso
// ========================================

// 1. Carregar configuração antes do app
const config = await fetch('/config.json').then(r => r.json());
const app = initApp(config);

// 2. Dynamic imports com await
const moment = await import('https://cdn.skypack.dev/moment');
console.log(moment.default().format());

// 3. Conexão com banco de dados
const db = await conectarBancoDeDados();
export default db;

// 4. Carregar dados necessários
const usuarios = await buscarUsuarios();
const produtos = await buscarProdutos();

export { usuarios, produtos };</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Top-Level Await:</strong><br>
                    • Só funciona em módulos ES6 (<code>type="module"</code>)<br>
                    • Pode bloquear outros módulos que dependem dele<br>
                    • Use com cuidado em produção
                </div>

                <h3>✅ 7. Best Practices</h3>

                <div class="key-points">
                    <h4>📋 Boas Práticas com Async/Await:</h4>
                    
                    <p><strong>1. Sempre use try/catch</strong></p>
                    <pre><code>// ✅ BOM
async function buscar() {
    try {
        return await fetch('/api/dados');
    } catch (erro) {
        console.error(erro);
    }
}

// ❌ RUIM - erro não capturado!
async function buscar() {
    return await fetch('/api/dados');
}</code></pre>

                    <p><strong>2. Não abuse de await</strong></p>
                    <pre><code>// ❌ RUIM - sequencial desnecessário
const usuario = await buscarUsuario(1);
const produto = await buscarProduto(1); // Não depende de usuario!

// ✅ BOM - paralelo
const [usuario, produto] = await Promise.all([
    buscarUsuario(1),
    buscarProduto(1)
]);</code></pre>

                    <p><strong>3. Return await só quando necessário</strong></p>
                    <pre><code>// ❌ Redundante
async function buscar() {
    return await fetch('/api'); // Await desnecessário
}

// ✅ Melhor
async function buscar() {
    return fetch('/api'); // Já retorna Promise
}

// ✅ Quando é necessário (por causa do try/catch)
async function buscar() {
    try {
        return await fetch('/api'); // Necessário aqui
    } catch (erro) {
        console.error(erro);
    }
}</code></pre>

                    <p><strong>4. Use Promise.all para paralelismo</strong></p>
                    <p><strong>5. Não use async/await em forEach</strong></p>
                    <p><strong>6. Configure timeouts para requisições longas</strong></p>
                </div>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoAsyncBasico()">Demo: Async/Await Básico</button>
                <button class="demo-button" onclick="demoAsyncParalelo()">Demo: Sequencial vs Paralelo</button>
                <button class="demo-button" onclick="demoAsyncError()">Demo: Error Handling</button>
                
                <div id="async-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Parabéns!</strong><br>
                    Você dominou Async/Await! Agora seu código assíncrono é limpo,
                    legível e fácil de manter. Próximo: <strong>AJAX & HTTP</strong>
                    para comunicação profissional com APIs!
                </div>
            </div>
        `
    }
};

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULES_ADVANCED_PART2;
}
