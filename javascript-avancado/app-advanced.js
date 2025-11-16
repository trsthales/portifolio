// ==========================================
// JAVASCRIPT AVANÇADO/EXPERT
// Módulos: Callbacks, Async/Await, AJAX/HTTP, Modules ES6
// ==========================================

const MODULES_ADVANCED = {
    // ==========================================
    // MÓDULO: INTRODUÇÃO AVANÇADO
    // ==========================================
    intro: {
        render: () => `
            <div class="section">
                <h2>🚀 Bem-vindo ao JavaScript Avançado/Expert</h2>
                
                <p style="font-size: 1.2em; color: #555; line-height: 1.8;">
                    Parabéns por chegar até aqui! Você dominou os fundamentos e está pronto
                    para <strong>técnicas avançadas</strong> que transformarão você em um
                    <strong>desenvolvedor JavaScript profissional</strong>.
                </p>

                <div class="info-box">
                    <h3 style="margin-top: 0;">🎯 O que você vai dominar neste curso:</h3>
                    <p><strong>Nível 3 - Avançado:</strong></p>
                    <ul style="margin-left: 25px;">
                        <li>✓ <strong>Callbacks & Promises</strong> - Programação assíncrona</li>
                        <li>✓ <strong>Async/Await</strong> - Código assíncrono limpo</li>
                        <li>✓ <strong>AJAX & HTTP</strong> - Comunicação com APIs</li>
                        <li>✓ <strong>Modules ES6</strong> - Organização de código</li>
                    </ul>
                    
                    <p><strong>Nível 4 - Expert:</strong></p>
                    <ul style="margin-left: 25px;">
                        <li>✓ <strong>Design Patterns</strong> - Padrões de projeto</li>
                        <li>✓ <strong>Best Practices</strong> - Código profissional</li>
                        <li>✓ <strong>Performance</strong> - Otimização avançada</li>
                        <li>✓ <strong>ES6-ES2024</strong> - Features modernas</li>
                    </ul>
                </div>

                <h3>📋 Pré-requisitos</h3>
                
                <div class="warning-box">
                    <strong>⚠️ Conhecimentos necessários:</strong><br><br>
                    Antes de começar este curso, você deve dominar:<br>
                    ✓ Variáveis, tipos de dados, operadores<br>
                    ✓ Funções (incluindo arrow functions e closures)<br>
                    ✓ Objetos e arrays (destructuring, spread/rest)<br>
                    ✓ DOM manipulation e eventos<br>
                    ✓ Classes e POO básica<br>
                    ✓ JSON e Web APIs básicas<br><br>
                    <strong>Se você não domina esses tópicos, volte ao curso Básico/Intermediário!</strong>
                </div>

                <h3>🎓 Metodologia de Estudo</h3>

                <div class="key-points">
                    <h4>Como aproveitar ao máximo este curso:</h4>
                    
                    <p><strong>1️⃣ Prática Intensiva</strong></p>
                    <p>Conceitos avançados exigem prática. Digite TODOS os exemplos, não apenas leia.</p>
                    
                    <p><strong>2️⃣ Projetos Reais</strong></p>
                    <p>Aplique cada conceito em projetos pessoais. Teoria sem prática não funciona.</p>
                    
                    <p><strong>3️⃣ Debugging</strong></p>
                    <p>Use DevTools (F12) constantemente. Entenda o que está acontecendo "por baixo dos panos".</p>
                    
                    <p><strong>4️⃣ Estude o Código de Outros</strong></p>
                    <p>Leia código open-source no GitHub. Veja como profissionais resolvem problemas.</p>
                    
                    <p><strong>5️⃣ Refatore Sempre</strong></p>
                    <p>Código bom é código revisado. Volte e melhore seus projetos antigos.</p>
                </div>

                <h3>⏱️ Tempo Estimado</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Módulo</th>
                            <th>Tempo Estudo</th>
                            <th>Prática</th>
                            <th>Nível</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Callbacks & Promises</strong></td>
                            <td>4-6 horas</td>
                            <td>8-10 horas</td>
                            <td>🟠 Avançado</td>
                        </tr>
                        <tr>
                            <td><strong>Async/Await</strong></td>
                            <td>3-4 horas</td>
                            <td>6-8 horas</td>
                            <td>🟠 Avançado</td>
                        </tr>
                        <tr>
                            <td><strong>AJAX & HTTP</strong></td>
                            <td>4-5 horas</td>
                            <td>8-12 horas</td>
                            <td>🟠 Avançado</td>
                        </tr>
                        <tr>
                            <td><strong>Modules ES6</strong></td>
                            <td>3-4 horas</td>
                            <td>6-8 horas</td>
                            <td>🟠 Avançado</td>
                        </tr>
                        <tr>
                            <td><strong>Design Patterns</strong></td>
                            <td>6-8 horas</td>
                            <td>12-16 horas</td>
                            <td>🔴 Expert</td>
                        </tr>
                        <tr>
                            <td><strong>Best Practices</strong></td>
                            <td>4-5 horas</td>
                            <td>10-15 horas</td>
                            <td>🔴 Expert</td>
                        </tr>
                        <tr>
                            <td><strong>Performance</strong></td>
                            <td>5-6 horas</td>
                            <td>10-12 horas</td>
                            <td>🔴 Expert</td>
                        </tr>
                        <tr>
                            <td><strong>ES6-ES2024</strong></td>
                            <td>4-5 horas</td>
                            <td>8-10 horas</td>
                            <td>🔴 Expert</td>
                        </tr>
                        <tr style="background: #fff3cd;">
                            <td><strong>TOTAL</strong></td>
                            <td><strong>33-43 horas</strong></td>
                            <td><strong>68-91 horas</strong></td>
                            <td><strong>~4-6 meses</strong></td>
                        </tr>
                    </tbody>
                </table>

                <h3>🛠️ Ferramentas Essenciais</h3>

                <pre><code>// ========================================
// 1. EDITOR DE CÓDIGO
// ========================================
Visual Studio Code (recomendado)
+ Extensões importantes:
  - ESLint
  - Prettier
  - JavaScript (ES6) code snippets
  - Path Intellisense
  - GitLens

// ========================================
// 2. NAVEGADOR & DEVTOOLS
// ========================================
Chrome DevTools ou Firefox Developer Tools
+ Console
+ Debugger (breakpoints)
+ Network (requisições HTTP)
+ Performance (profiling)
+ Sources (debugging)

// ========================================
// 3. NODE.JS & NPM
// ========================================
Node.js v18+ (LTS)
npm ou yarn (package managers)

// Instalar Node.js:
// https://nodejs.org

// Verificar instalação:
node --version
npm --version

// ========================================
// 4. GIT & GITHUB
// ========================================
Git para controle de versão
GitHub para repositórios remotos

// Comandos essenciais:
git init
git add .
git commit -m "mensagem"
git push origin main

// ========================================
// 5. FERRAMENTAS ONLINE
// ========================================
- CodeSandbox (prototipagem rápida)
- StackBlitz (ambiente completo)
- JSFiddle (testes rápidos)
- Postman (testar APIs)
- JSONPlaceholder (API fake para testes)</code></pre>

                <h3>📚 Roadmap Completo</h3>

                <div style="background: linear-gradient(135deg, #f97316 0%, #dc2626 100%); color: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h4 style="margin-top: 0; color: white;">🗺️ Sua Jornada para Expert</h4>
                    
                    <p><strong>Nível 3 - Avançado (2-3 meses):</strong></p>
                    <ol style="margin-left: 25px;">
                        <li>Callbacks & Promises → Dominar async</li>
                        <li>Async/Await → Código limpo assíncrono</li>
                        <li>AJAX & HTTP → Integrar com APIs</li>
                        <li>Modules ES6 → Organizar projetos grandes</li>
                    </ol>
                    
                    <p><strong>Nível 4 - Expert (2-3 meses):</strong></p>
                    <ol start="5" style="margin-left: 25px;">
                        <li>Design Patterns → Soluções elegantes</li>
                        <li>Best Practices → Código profissional</li>
                        <li>Performance → Apps rápidas e eficientes</li>
                        <li>ES6-ES2024 → Recursos modernos</li>
                    </ol>
                    
                    <p><strong>Depois deste curso você estará pronto para:</strong></p>
                    <ul style="margin-left: 25px;">
                        <li>✓ Frameworks (React, Vue, Angular)</li>
                        <li>✓ Backend com Node.js</li>
                        <li>✓ TypeScript</li>
                        <li>✓ Testes automatizados</li>
                        <li>✓ Arquitetura de software</li>
                    </ul>
                </div>

                <h3>💡 Dicas de Ouro</h3>

                <div class="success-box">
                    <h4 style="margin-top: 0;">✨ Conselhos de quem já passou por isso:</h4>
                    
                    <p><strong>1. Não pule etapas</strong><br>
                    Async/Await sem entender Promises é decorar, não aprender.</p>
                    
                    <p><strong>2. Faça projetos paralelos</strong><br>
                    Crie um projeto pessoal usando cada conceito aprendido.</p>
                    
                    <p><strong>3. Leia documentação oficial</strong><br>
                    MDN (developer.mozilla.org) é sua melhor amiga.</p>
                    
                    <p><strong>4. Participe de comunidades</strong><br>
                    Stack Overflow, Reddit r/javascript, Discord de programação.</p>
                    
                    <p><strong>5. Code review</strong><br>
                    Peça para outros desenvolvedores revisarem seu código.</p>
                    
                    <p><strong>6. Contribua com open-source</strong><br>
                    Aprenda lendo e contribuindo para projetos reais.</p>
                    
                    <p><strong>7. Ensine o que aprendeu</strong><br>
                    Escreva artigos, faça vídeos, ajude iniciantes.</p>
                </div>

                <h3>🎯 Próximo Passo</h3>

                <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0;">
                    <h4 style="margin-top: 0; color: #1e40af;">🚀 Comece agora!</h4>
                    <p style="font-size: 1.1em;">
                        Clique em <strong>"Callbacks & Promises"</strong> no menu lateral para começar
                        sua jornada para se tornar um desenvolvedor JavaScript Expert!
                    </p>
                    <p style="margin-bottom: 0;">
                        Lembre-se: <strong>Programação é prática</strong>. Quanto mais você codar,
                        melhor você fica. Vamos lá! 💪
                    </p>
                </div>

                <div class="success-box">
                    <strong>🎉 Você está pronto!</strong><br>
                    Este curso vai transformar sua forma de programar em JavaScript.
                    Aproveite cada minuto e boa jornada! 🚀
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: CALLBACKS & PROMISES
    // ==========================================
    callbacks: {
        render: () => `
            <div class="section">
                <h2>⏳ Callbacks & Promises - Programação Assíncrona</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    JavaScript é <strong>single-threaded</strong> (uma thread), mas precisa lidar com
                    operações que <strong>levam tempo</strong> (requisições HTTP, timers, leitura de arquivos).
                    Callbacks e Promises são a solução!
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Síncrono vs Assíncrono<br>
                    ✓ Event Loop e Call Stack<br>
                    ✓ Callbacks - funções como parâmetro<br>
                    ✓ Callback Hell (problema)<br>
                    ✓ Promises - estados e métodos<br>
                    ✓ Promise chaining<br>
                    ✓ Promise.all, Promise.race<br>
                    ✓ Error handling assíncrono
                </div>

                <h3>📖 1. Síncrono vs Assíncrono</h3>

                <pre><code>// ========================================
// CÓDIGO SÍNCRONO - executa linha por linha
// ========================================
console.log('1. Início');

function tarefaDemorada() {
    // Simular processamento pesado (BLOQUEANTE)
    const inicio = Date.now();
    while (Date.now() - inicio < 3000) {
        // Espera 3 segundos fazendo nada
    }
    return 'Processamento concluído';
}

console.log('2. Executando tarefa...');
const resultado = tarefaDemorada(); // ❌ BLOQUEIA tudo por 3 segundos!
console.log('3. Resultado:', resultado);
console.log('4. Fim');

// Output:
// 1. Início
// 2. Executando tarefa...
// [espera 3 segundos - interface trava]
// 3. Resultado: Processamento concluído
// 4. Fim

// ========================================
// CÓDIGO ASSÍNCRONO - não bloqueia
// ========================================
console.log('1. Início');

setTimeout(() => {
    console.log('3. Callback executado após 2s');
}, 2000);

console.log('2. Fim');

// Output:
// 1. Início
// 2. Fim
// [espera 2 segundos - interface NÃO trava]
// 3. Callback executado após 2s

// ========================================
// Por que assíncrono?
// ========================================
// Requisição HTTP pode levar 1-5 segundos
// Se fosse síncrono, o site travaria totalmente!

// ❌ Síncrono (travaria o navegador)
const dados = fazerRequisicaoHTTP(); // Espera 3 segundos
console.log(dados);

// ✅ Assíncrono (não trava)
fazerRequisicaoHTTP((dados) => {
    console.log(dados); // Executa quando terminar
});
console.log('Continua executando...'); // Não espera!</code></pre>

                <h3>🔄 2. Event Loop e Call Stack</h3>

                <pre><code>// ========================================
// CALL STACK - pilha de execução
// ========================================
function primeira() {
    console.log('primeira');
    segunda();
}

function segunda() {
    console.log('segunda');
    terceira();
}

function terceira() {
    console.log('terceira');
}

primeira();

// Call Stack:
// [terceira] → executa → remove
// [segunda, terceira] → executa terceira
// [primeira, segunda] → executa segunda
// [primeira] → executa → remove
// [] → vazio

// ========================================
// EVENT LOOP - fila de callbacks
// ========================================
console.log('1');

setTimeout(() => {
    console.log('2 - timeout');
}, 0); // ⚠️ ZERO segundos, mas ainda é assíncrono!

console.log('3');

// Output:
// 1
// 3
// 2 - timeout

// Por quê? Event Loop:
// 1. Executa código síncrono (1, 3)
// 2. Coloca callbacks na fila
// 3. Quando call stack vazio, executa fila

// ========================================
// Exemplo mais complexo
// ========================================
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve().then(() => console.log('Promise 1'));

setTimeout(() => console.log('Timeout 2'), 0);

Promise.resolve().then(() => console.log('Promise 2'));

console.log('End');

// Output:
// Start
// End
// Promise 1  (microtask - prioridade)
// Promise 2  (microtask - prioridade)
// Timeout 1  (macrotask)
// Timeout 2  (macrotask)

// Promises têm PRIORIDADE sobre setTimeout!</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Aspecto</th>
                            <th>Síncrono</th>
                            <th>Assíncrono</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Execução</strong></td>
                            <td>Linha por linha</td>
                            <td>Não espera terminar</td>
                        </tr>
                        <tr>
                            <td><strong>Bloqueio</strong></td>
                            <td>Bloqueia (trava)</td>
                            <td>Não bloqueia</td>
                        </tr>
                        <tr>
                            <td><strong>Performance</strong></td>
                            <td>Lenta para I/O</td>
                            <td>Rápida para I/O</td>
                        </tr>
                        <tr>
                            <td><strong>Uso típico</strong></td>
                            <td>Cálculos simples</td>
                            <td>HTTP, File I/O, Timers</td>
                        </tr>
                    </tbody>
                </table>

                <h3>📞 3. Callbacks - Funções como Parâmetro</h3>

                <pre><code>// ========================================
// CALLBACK - função passada como argumento
// ========================================

function buscarUsuario(id, callback) {
    console.log('Buscando usuário...');
    
    // Simular requisição (demora 2s)
    setTimeout(() => {
        const usuario = {
            id: id,
            nome: 'João Silva',
            email: 'joao@email.com'
        };
        
        callback(usuario); // Chama a função passada
    }, 2000);
}

// Usar o callback
buscarUsuario(1, (usuario) => {
    console.log('Usuário recebido:', usuario.nome);
});

// ========================================
// Callbacks com error-first pattern (Node.js)
// ========================================
function buscarDados(id, callback) {
    setTimeout(() => {
        const erro = Math.random() > 0.5 ? null : new Error('Falha na busca');
        const dados = erro ? null : { id, nome: 'Dados' };
        
        // callback(erro, dados) - padrão Node.js
        callback(erro, dados);
    }, 1000);
}

buscarDados(1, (erro, dados) => {
    if (erro) {
        console.error('Erro:', erro.message);
        return;
    }
    console.log('Sucesso:', dados);
});

// ========================================
// Exemplo prático: processar imagem
// ========================================
function carregarImagem(url, sucesso, erro) {
    const img = new Image();
    
    img.onload = () => sucesso(img);
    img.onerror = () => erro(new Error('Falha ao carregar'));
    
    img.src = url;
}

carregarImagem(
    'foto.jpg',
    (img) => {
        console.log(\`Imagem carregada: \${img.width}x\${img.height}\`);
        document.body.appendChild(img);
    },
    (erro) => {
        console.error('Erro:', erro.message);
    }
);</code></pre>

                <h3>😱 4. Callback Hell (Pyramid of Doom)</h3>

                <pre><code>// ========================================
// CALLBACK HELL - callbacks aninhados (❌ RUIM)
// ========================================

buscarUsuario(1, (usuario) => {
    buscarPosts(usuario.id, (posts) => {
        buscarComentarios(posts[0].id, (comentarios) => {
            buscarAutores(comentarios, (autores) => {
                buscarPerfis(autores, (perfis) => {
                    // 😱😱😱 Código se tornou ilegível!
                    console.log(perfis);
                }, (erro) => {
                    console.error(erro);
                });
            }, (erro) => {
                console.error(erro);
            });
        }, (erro) => {
            console.error(erro);
        });
    }, (erro) => {
        console.error(erro);
    });
}, (erro) => {
    console.error(erro);
});

// Problemas:
// ❌ Difícil de ler
// ❌ Difícil de manter
// ❌ Difícil de debugar
// ❌ Error handling repetitivo
// ❌ Não pode usar try/catch

// ========================================
// SOLUÇÃO: Promises! (veremos a seguir)
// ========================================</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Callback Hell:</strong><br>
                    Quando você tem callbacks dentro de callbacks dentro de callbacks...
                    o código vira uma "pirâmide da destruição" impossível de manter.
                    <strong>Promises resolvem isso!</strong>
                </div>

                <h3>🎁 5. Promises - A Solução</h3>

                <pre><code>// ========================================
// PROMISE - objeto que representa operação assíncrona
// ========================================

// Promise tem 3 estados:
// 1. pending (pendente) - inicial
// 2. fulfilled (resolvida) - sucesso
// 3. rejected (rejeitada) - erro

// Criar uma Promise
const minhaPromise = new Promise((resolve, reject) => {
    // Operação assíncrona
    setTimeout(() => {
        const sucesso = true;
        
        if (sucesso) {
            resolve('Deu certo!'); // Sucesso
        } else {
            reject('Deu erro!'); // Erro
        }
    }, 1000);
});

// Consumir a Promise
minhaPromise
    .then((resultado) => {
        console.log('✅', resultado); // "Deu certo!"
    })
    .catch((erro) => {
        console.error('❌', erro);
    })
    .finally(() => {
        console.log('Sempre executa');
    });

// ========================================
// Exemplo prático: buscar usuário
// ========================================
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject(new Error('ID inválido'));
                return;
            }
            
            const usuario = {
                id: id,
                nome: 'Maria Silva',
                email: 'maria@email.com'
            };
            
            resolve(usuario);
        }, 1500);
    });
}

// Usar
buscarUsuario(1)
    .then(usuario => {
        console.log('Usuário:', usuario.nome);
    })
    .catch(erro => {
        console.error('Erro:', erro.message);
    });

// ========================================
// Promise com fetch (API real)
// ========================================
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(usuario => {
        console.log('Nome:', usuario.name);
        console.log('Email:', usuario.email);
    })
    .catch(erro => {
        console.error('Erro na requisição:', erro);
    });</code></pre>

                <h3>⛓️ 6. Promise Chaining - Encadear Promises</h3>

                <pre><code>// ========================================
// PROMISE CHAINING - resolver callback hell
// ========================================

// ❌ Callback Hell (antes)
buscarUsuario(1, (usuario) => {
    buscarPosts(usuario.id, (posts) => {
        console.log(posts);
    });
});

// ✅ Promise Chaining (depois)
buscarUsuario(1)
    .then(usuario => {
        console.log('1. Usuário:', usuario.nome);
        return buscarPosts(usuario.id); // Retorna outra Promise
    })
    .then(posts => {
        console.log('2. Posts:', posts.length);
        return buscarComentarios(posts[0].id);
    })
    .then(comentarios => {
        console.log('3. Comentários:', comentarios.length);
    })
    .catch(erro => {
        // UM ÚNICO catch para todos os erros!
        console.error('Erro em algum lugar:', erro);
    });

// ========================================
// Exemplo real: processar dados de API
// ========================================
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}\`);
        }
        return response.json();
    })
    .then(usuario => {
        console.log('Usuário:', usuario.name);
        // Buscar posts do usuário
        return fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${usuario.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log(\`Usuário tem \${posts.length} posts\`);
        // Buscar comentários do primeiro post
        return fetch(\`https://jsonplaceholder.typicode.com/comments?postId=\${posts[0].id}\`);
    })
    .then(response => response.json())
    .then(comentarios => {
        console.log(\`Primeiro post tem \${comentarios.length} comentários\`);
    })
    .catch(erro => {
        console.error('Erro:', erro.message);
    });

// ========================================
// Retornar valores no then
// ========================================
Promise.resolve(5)
    .then(num => num * 2)      // 10
    .then(num => num + 3)      // 13
    .then(num => num / 2)      // 6.5
    .then(resultado => {
        console.log(resultado); // 6.5
    });</code></pre>

                <h3>🏁 7. Promise.all e Promise.race</h3>

                <pre><code>// ========================================
// PROMISE.ALL - esperar TODAS as promises
// ========================================

const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 100));
const promise3 = fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json());

Promise.all([promise1, promise2, promise3])
    .then(([resultado1, resultado2, resultado3]) => {
        console.log(resultado1); // 3
        console.log(resultado2); // "foo"
        console.log(resultado3); // {id: 1, name: "Leanne Graham", ...}
    })
    .catch(erro => {
        // Se UMA falhar, todas falham
        console.error('Alguma promise falhou:', erro);
    });

// ========================================
// Exemplo prático: buscar vários usuários
// ========================================
const ids = [1, 2, 3, 4, 5];

const promises = ids.map(id => 
    fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
        .then(r => r.json())
);

Promise.all(promises)
    .then(usuarios => {
        console.log(\`Buscamos \${usuarios.length} usuários\`);
        usuarios.forEach(user => {
            console.log(\`- \${user.name}\`);
        });
    })
    .catch(erro => {
        console.error('Erro ao buscar usuários:', erro);
    });

// ========================================
// PROMISE.ALLSETTLED - espera todas (mesmo com erro)
// ========================================
const promisesBoas = [
    Promise.resolve('Sucesso 1'),
    Promise.reject('Erro 1'),
    Promise.resolve('Sucesso 2'),
    Promise.reject('Erro 2')
];

Promise.allSettled(promisesBoas)
    .then(resultados => {
        resultados.forEach((resultado, i) => {
            if (resultado.status === 'fulfilled') {
                console.log(\`Promise \${i}: ✅\`, resultado.value);
            } else {
                console.log(\`Promise \${i}: ❌\`, resultado.reason);
            }
        });
    });

// Output:
// Promise 0: ✅ Sucesso 1
// Promise 1: ❌ Erro 1
// Promise 2: ✅ Sucesso 2
// Promise 3: ❌ Erro 2

// ========================================
// PROMISE.RACE - primeira a terminar vence
// ========================================
const promiseRapida = new Promise(resolve => 
    setTimeout(() => resolve('Rápida (100ms)'), 100)
);

const promiseLenta = new Promise(resolve => 
    setTimeout(() => resolve('Lenta (500ms)'), 500)
);

Promise.race([promiseRapida, promiseLenta])
    .then(resultado => {
        console.log('Vencedora:', resultado); // "Rápida (100ms)"
    });

// Uso prático: timeout
function fetchComTimeout(url, timeout = 5000) {
    const promiseFetch = fetch(url);
    const promiseTimeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), timeout)
    );
    
    return Promise.race([promiseFetch, promiseTimeout]);
}

// ========================================
// PROMISE.ANY - primeira a ter sucesso
// ========================================
const p1 = Promise.reject('Erro 1');
const p2 = new Promise(resolve => setTimeout(() => resolve('Sucesso 2'), 100));
const p3 = new Promise(resolve => setTimeout(() => resolve('Sucesso 3'), 50));

Promise.any([p1, p2, p3])
    .then(resultado => {
        console.log('Primeira com sucesso:', resultado); // "Sucesso 3"
    });</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Método</th>
                            <th>Retorna</th>
                            <th>Uso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Promise.all()</strong></td>
                            <td>Todas ou erro</td>
                            <td>Buscar múltiplos recursos</td>
                        </tr>
                        <tr>
                            <td><strong>Promise.allSettled()</strong></td>
                            <td>Todas (mesmo com erro)</td>
                            <td>Processar independente de erros</td>
                        </tr>
                        <tr>
                            <td><strong>Promise.race()</strong></td>
                            <td>Primeira a terminar</td>
                            <td>Timeout, fallback</td>
                        </tr>
                        <tr>
                            <td><strong>Promise.any()</strong></td>
                            <td>Primeira com sucesso</td>
                            <td>Múltiplos endpoints</td>
                        </tr>
                    </tbody>
                </table>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoPromiseBasica()">Demo: Promise Básica</button>
                <button class="demo-button" onclick="demoPromiseChaining()">Demo: Promise Chaining</button>
                <button class="demo-button" onclick="demoPromiseAll()">Demo: Promise.all()</button>
                
                <div id="callbacks-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Excelente!</strong><br>
                    Você dominou Callbacks e Promises! Agora você entende como JavaScript
                    lida com operações assíncronas. Próximo: <strong>Async/Await</strong>
                    para tornar o código ainda mais limpo!
                </div>
            </div>
        `
    }
};

// Continua com async/await, ajax, modules, patterns, best-practices, performance, es6-2024...
