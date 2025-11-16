// ==========================================
// DEMOS.JS - Funções de demonstração interativas
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
// DEMOS DO MÓDULO: FUNCTIONS
// ==========================================

function demoClosures() {
    let output = '<h4>Demo: Closures</h4>';
    
    // Exemplo: contador com closure
    function criarContador() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }
    
    const contador1 = criarContador();
    const contador2 = criarContador();
    
    output += `<p><strong>Contador 1:</strong></p>`;
    output += `<p>1ª chamada: ${contador1()} </p>`;
    output += `<p>2ª chamada: ${contador1()} </p>`;
    output += `<p>3ª chamada: ${contador1()} </p>`;
    
    output += `<p><strong>Contador 2 (independente):</strong></p>`;
    output += `<p>1ª chamada: ${contador2()} </p>`;
    
    output += `<div class="info-box" style="margin-top: 15px;">
        <strong>💡 Como funciona:</strong><br>
        Cada contador tem sua própria variável 'count' privada.
        A função interna tem acesso ao escopo externo (closure).
    </div>`;
    
    showOutput('functions-output', output);
}

function demoArrowFunctions() {
    let output = '<h4>Demo: Arrow Functions vs Funções Normais</h4>';
    
    // Contexto 'this'
    const pessoa = {
        nome: 'João',
        normal: function() {
            return `Normal: ${this.nome}`;
        },
        arrow: () => {
            return `Arrow: ${this === window ? 'window' : 'objeto'}`;
        }
    };
    
    output += `<p><strong>Função Normal:</strong> ${pessoa.normal()}</p>`;
    output += `<p><strong>Arrow Function:</strong> ${pessoa.arrow}</p>`;
    
    output += `<div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ Importante:</strong><br>
        Arrow functions NÃO têm seu próprio 'this'.
        Herdam o 'this' do contexto onde foram criadas.
    </div>`;
    
    showOutput('functions-output', output);
}

function demoHigherOrder() {
    let output = '<h4>Demo: Higher-Order Functions</h4>';
    
    const numeros = [1, 2, 3, 4, 5];
    
    const dobrados = numeros.map(n => n * 2);
    const pares = numeros.filter(n => n % 2 === 0);
    const soma = numeros.reduce((acc, n) => acc + n, 0);
    
    output += `<p><strong>Array original:</strong> [${numeros.join(', ')}]</p>`;
    output += `<p><strong>Map (dobrar):</strong> [${dobrados.join(', ')}]</p>`;
    output += `<p><strong>Filter (pares):</strong> [${pares.join(', ')}]</p>`;
    output += `<p><strong>Reduce (soma):</strong> ${soma}</p>`;
    
    showOutput('functions-output', output);
}

// ==========================================
// DEMOS DO MÓDULO: OBJECTS
// ==========================================

function demoDestructuring() {
    let output = '<h4>Demo: Destructuring</h4>';
    
    const usuario = {
        nome: 'Maria',
        idade: 28,
        endereco: {
            cidade: 'São Paulo',
            estado: 'SP'
        }
    };
    
    const { nome, idade, endereco: { cidade } } = usuario;
    
    output += `<p><strong>Objeto original:</strong></p>`;
    output += `<pre>${JSON.stringify(usuario, null, 2)}</pre>`;
    
    output += `<p><strong>Após destructuring:</strong></p>`;
    output += `<p>nome = "${nome}"</p>`;
    output += `<p>idade = ${idade}</p>`;
    output += `<p>cidade = "${cidade}"</p>`;
    
    showOutput('objects-output', output);
}

function demoSpreadRest() {
    let output = '<h4>Demo: Spread (...) Operator</h4>';
    
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combinado = [...arr1, ...arr2];
    
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const objCombinado = { ...obj1, ...obj2 };
    
    output += `<p><strong>Arrays:</strong></p>`;
    output += `<p>arr1 = [${arr1}]</p>`;
    output += `<p>arr2 = [${arr2}]</p>`;
    output += `<p>combinado = [${combinado}]</p>`;
    
    output += `<p><strong>Objetos:</strong></p>`;
    output += `<pre>${JSON.stringify(obj1, null, 2)}</pre>`;
    output += `<pre>${JSON.stringify(obj2, null, 2)}</pre>`;
    output += `<p><strong>Combinado:</strong></p>`;
    output += `<pre>${JSON.stringify(objCombinado, null, 2)}</pre>`;
    
    showOutput('objects-output', output);
}

function demoObjectMethods() {
    let output = '<h4>Demo: Object Methods</h4>';
    
    const usuario = {
        nome: 'Carlos',
        idade: 35,
        email: 'carlos@email.com'
    };
    
    output += `<p><strong>Object.keys():</strong> [${Object.keys(usuario).join(', ')}]</p>`;
    output += `<p><strong>Object.values():</strong> [${Object.values(usuario).join(', ')}]</p>`;
    output += `<p><strong>Object.entries():</strong></p>`;
    output += `<pre>${JSON.stringify(Object.entries(usuario), null, 2)}</pre>`;
    
    showOutput('objects-output', output);
}

// ==========================================
// DEMOS DO MÓDULO: EVENTS
// ==========================================

function demoEventBubbling() {
    let output = '<h4>Demo: Event Bubbling</h4>';
    output += `<p>Clique nos elementos abaixo e veja a ordem de execução:</p>`;
    
    output += `<div id="bubbling-container" style="padding: 20px; background: #f0f0f0; border: 2px solid #ddd;">
        <strong>Container (externo)</strong>
        <div id="bubbling-inner" style="padding: 20px; margin-top: 10px; background: #e0e0ff; border: 2px solid #aaf;">
            <strong>Div interna</strong>
            <button id="bubbling-btn" style="margin-top: 10px; padding: 10px;">Botão</button>
        </div>
    </div>`;
    
    output += `<div id="bubbling-log" style="margin-top: 15px; padding: 10px; background: #fff; border: 1px solid #ccc;">
        <strong>Log de eventos:</strong>
        <div id="bubbling-log-content"></div>
    </div>`;
    
    showOutput('events-output', output);
    
    // Adicionar event listeners
    setTimeout(() => {
        const container = document.getElementById('bubbling-container');
        const inner = document.getElementById('bubbling-inner');
        const btn = document.getElementById('bubbling-btn');
        const log = document.getElementById('bubbling-log-content');
        
        const addLog = (msg) => {
            const p = document.createElement('p');
            p.textContent = msg;
            p.style.margin = '5px 0';
            log.appendChild(p);
        };
        
        container?.addEventListener('click', () => addLog('3️⃣ Container clicado (bubbling)'));
        inner?.addEventListener('click', () => addLog('2️⃣ Div interna clicada (bubbling)'));
        btn?.addEventListener('click', () => addLog('1️⃣ Botão clicado'));
    }, 100);
}

function demoEventDelegation() {
    let output = '<h4>Demo: Event Delegation</h4>';
    output += `<p>Adicione itens e clique neles (apenas 1 event listener no container):</p>`;
    
    output += `<button id="delegation-add-btn" style="margin-bottom: 10px; padding: 8px 16px;">➕ Adicionar Item</button>`;
    
    output += `<ul id="delegation-list" style="list-style: none; padding: 0;">
        <li style="padding: 10px; margin: 5px 0; background: #e7f3ff; border: 1px solid #90c8ff; cursor: pointer;">Item 1 - Clique em mim</li>
        <li style="padding: 10px; margin: 5px 0; background: #e7f3ff; border: 1px solid #90c8ff; cursor: pointer;">Item 2 - Clique em mim</li>
    </ul>`;
    
    output += `<div id="delegation-result" style="margin-top: 15px; padding: 10px; background: #fff8e1; border: 1px solid #ffd54f;"></div>`;
    
    showOutput('events-output', output);
    
    // Implementar delegation
    setTimeout(() => {
        const list = document.getElementById('delegation-list');
        const addBtn = document.getElementById('delegation-add-btn');
        const result = document.getElementById('delegation-result');
        let count = 3;
        
        // UM ÚNICO listener para TODOS os itens (presentes e futuros)
        list?.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                result.textContent = `Você clicou em: ${e.target.textContent}`;
            }
        });
        
        // Adicionar novos itens
        addBtn?.addEventListener('click', () => {
            const li = document.createElement('li');
            li.textContent = `Item ${count++} - Clique em mim`;
            li.style.cssText = 'padding: 10px; margin: 5px 0; background: #e7f3ff; border: 1px solid #90c8ff; cursor: pointer;';
            list.appendChild(li);
        });
    }, 100);
}

function demoCustomEvents() {
    let output = '<h4>Demo: Custom Events</h4>';
    
    output += `<button id="custom-event-trigger" style="padding: 10px 20px; margin-bottom: 15px;">🔔 Disparar Evento Customizado</button>`;
    output += `<div id="custom-event-log" style="padding: 15px; background: #f5f5f5; border: 1px solid #ddd; min-height: 100px;"></div>`;
    
    showOutput('events-output', output);
    
    setTimeout(() => {
        const btn = document.getElementById('custom-event-trigger');
        const log = document.getElementById('custom-event-log');
        
        // Criar listener para evento customizado
        document.addEventListener('userLogin', (e) => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>✅ Evento 'userLogin' recebido!</strong><br>
                           Usuário: ${e.detail.nome}<br>
                           Email: ${e.detail.email}`;
            p.style.margin = '10px 0';
            p.style.padding = '10px';
            p.style.background = '#e8f5e9';
            p.style.border = '1px solid #4caf50';
            log.appendChild(p);
        });
        
        // Botão que dispara o evento
        btn?.addEventListener('click', () => {
            const customEvent = new CustomEvent('userLogin', {
                detail: {
                    nome: 'João Silva',
                    email: 'joao@email.com',
                    timestamp: new Date().toISOString()
                }
            });
            
            document.dispatchEvent(customEvent);
        });
    }, 100);
}

// ==========================================
// DEMOS DO MÓDULO: DOM
// ==========================================

function demoQuerySelector() {
    let output = '<h4>Demo: Query Selectors</h4>';
    
    output += `<div id="demo-dom-container">
        <p class="demo-paragrafo">Parágrafo 1</p>
        <p class="demo-paragrafo">Parágrafo 2</p>
        <div id="demo-special">Elemento especial</div>
    </div>`;
    
    output += `<button id="btn-query-demo" style="margin: 15px 0; padding: 10px;">Executar Queries</button>`;
    output += `<div id="query-result" style="padding: 15px; background: #f9f9f9; border: 1px solid #ddd; margin-top: 10px;"></div>`;
    
    showOutput('dom-output', output);
    
    setTimeout(() => {
        document.getElementById('btn-query-demo')?.addEventListener('click', () => {
            const result = document.getElementById('query-result');
            const primeiro = document.querySelector('.demo-paragrafo');
            const todos = document.querySelectorAll('.demo-paragrafo');
            const especial = document.getElementById('demo-special');
            
            let html = '<p><strong>querySelector(".demo-paragrafo"):</strong><br>' + primeiro?.textContent + '</p>';
            html += '<p><strong>querySelectorAll(".demo-paragrafo"):</strong><br>';
            todos.forEach((p, i) => {
                html += `${i + 1}. ${p.textContent}<br>`;
            });
            html += '</p>';
            html += '<p><strong>getElementById("demo-special"):</strong><br>' + especial?.textContent + '</p>';
            
            result.innerHTML = html;
        });
    }, 100);
}

function demoCreateElements() {
    let output = '<h4>Demo: Criar Elementos Dinamicamente</h4>';
    
    output += `<button id="btn-add-item" style="padding: 10px; margin-bottom: 15px;">➕ Adicionar Item</button>`;
    output += `<button id="btn-clear-items" style="padding: 10px; margin-bottom: 15px; margin-left: 10px;">🗑️ Limpar</button>`;
    output += `<div id="items-container" style="margin-top: 15px;"></div>`;
    
    showOutput('dom-output', output);
    
    setTimeout(() => {
        let count = 1;
        const container = document.getElementById('items-container');
        
        document.getElementById('btn-add-item')?.addEventListener('click', () => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.style.cssText = 'padding: 10px; margin: 5px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 5px; display: flex; justify-content: space-between; align-items: center;';
            
            const text = document.createElement('span');
            text.textContent = `Item ${count++}`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.style.cssText = 'background: rgba(255,255,255,0.2); border: none; color: white; padding: 5px 10px; cursor: pointer; border-radius: 3px;';
            deleteBtn.addEventListener('click', () => div.remove());
            
            div.appendChild(text);
            div.appendChild(deleteBtn);
            container.appendChild(div);
        });
        
        document.getElementById('btn-clear-items')?.addEventListener('click', () => {
            container.innerHTML = '';
            count = 1;
        });
    }, 100);
}

function demoModifyStyles() {
    let output = '<h4>Demo: Modificar Estilos</h4>';
    
    output += `<div id="style-box" style="width: 200px; height: 200px; background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; border-radius: 10px; transition: all 0.3s; margin-bottom: 15px;">
        <strong>Box de Teste</strong>
    </div>`;
    
    output += `<button onclick="demoChangeColor()" style="padding: 8px 16px; margin: 5px;">🎨 Mudar Cor</button>`;
    output += `<button onclick="demoChangeSize()" style="padding: 8px 16px; margin: 5px;">📏 Mudar Tamanho</button>`;
    output += `<button onclick="demoToggleRounded()" style="padding: 8px 16px; margin: 5px;">⭕ Toggle Arredondado</button>`;
    output += `<button onclick="demoResetBox()" style="padding: 8px 16px; margin: 5px;">🔄 Resetar</button>`;
    
    showOutput('dom-output', output);
}

function demoChangeColor() {
    const box = document.getElementById('style-box');
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (box) box.style.background = randomColor;
}

function demoChangeSize() {
    const box = document.getElementById('style-box');
    const isLarge = box?.style.width === '300px';
    if (box) {
        box.style.width = isLarge ? '200px' : '300px';
        box.style.height = isLarge ? '200px' : '300px';
    }
}

function demoToggleRounded() {
    const box = document.getElementById('style-box');
    const isRounded = box?.style.borderRadius === '50%';
    if (box) box.style.borderRadius = isRounded ? '10px' : '50%';
}

function demoResetBox() {
    const box = document.getElementById('style-box');
    if (box) {
        box.style.cssText = 'width: 200px; height: 200px; background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; border-radius: 10px; transition: all 0.3s; margin-bottom: 15px;';
    }
}

// ==========================================
// DEMOS DO MÓDULO: ITERATIONS
// ==========================================

function demoMap() {
    let output = '<h4>Demo: Array.map()</h4>';
    
    const produtos = [
        { nome: 'Mouse', preco: 50 },
        { nome: 'Teclado', preco: 150 },
        { nome: 'Monitor', preco: 800 }
    ];
    
    const comDesconto = produtos.map(p => ({
        ...p,
        precoOriginal: p.preco,
        preco: p.preco * 0.9,
        desconto: '10%'
    }));
    
    output += '<p><strong>Produtos originais:</strong></p>';
    output += '<pre>' + JSON.stringify(produtos, null, 2) + '</pre>';
    
    output += '<p><strong>Com 10% desconto (map):</strong></p>';
    output += '<pre>' + JSON.stringify(comDesconto, null, 2) + '</pre>';
    
    showOutput('iterations-output', output);
}

function demoFilter() {
    let output = '<h4>Demo: Array.filter()</h4>';
    
    const numeros = [5, 12, 8, 130, 44, 3, 15];
    
    const maioresQue10 = numeros.filter(n => n > 10);
    const pares = numeros.filter(n => n % 2 === 0);
    
    output += `<p><strong>Array original:</strong> [${numeros.join(', ')}]</p>`;
    output += `<p><strong>Maiores que 10:</strong> [${maioresQue10.join(', ')}]</p>`;
    output += `<p><strong>Apenas pares:</strong> [${pares.join(', ')}]</p>`;
    
    showOutput('iterations-output', output);
}

function demoReduce() {
    let output = '<h4>Demo: Array.reduce()</h4>';
    
    const vendas = [
        { produto: 'Mouse', valor: 50 },
        { produto: 'Teclado', valor: 150 },
        { produto: 'Monitor', valor: 800 },
        { produto: 'Mouse', valor: 50 }
    ];
    
    const total = vendas.reduce((acc, venda) => acc + venda.valor, 0);
    
    const porProduto = vendas.reduce((acc, venda) => {
        acc[venda.produto] = (acc[venda.produto] || 0) + venda.valor;
        return acc;
    }, {});
    
    output += '<p><strong>Vendas:</strong></p>';
    output += '<pre>' + JSON.stringify(vendas, null, 2) + '</pre>';
    
    output += `<p><strong>Total de vendas:</strong> R$ ${total}</p>`;
    
    output += '<p><strong>Por produto:</strong></p>';
    output += '<pre>' + JSON.stringify(porProduto, null, 2) + '</pre>';
    
    showOutput('iterations-output', output);
}

// ==========================================
// DEMOS DO MÓDULO: ERRORS
// ==========================================

function demoTryCatch() {
    let output = '<h4>Demo: Try/Catch</h4>';
    
    output += '<p><strong>Teste 1: JSON válido</strong></p>';
    try {
        const obj = JSON.parse('{"nome": "João", "idade": 25}');
        output += `<p class="success-box">✅ Parse bem-sucedido: ${obj.nome}, ${obj.idade} anos</p>`;
    } catch (erro) {
        output += `<p class="danger-box">❌ Erro: ${erro.message}</p>`;
    }
    
    output += '<p><strong>Teste 2: JSON inválido</strong></p>';
    try {
        const obj = JSON.parse('{ nome: "João" }'); // Falta aspas nas chaves
        output += `<p class="success-box">✅ Parse bem-sucedido</p>`;
    } catch (erro) {
        output += `<p class="danger-box">❌ Erro capturado: ${erro.message}</p>`;
    }
    
    output += '<div class="info-box" style="margin-top: 15px;"><strong>💡 Observação:</strong> O bloco catch preveniu que o erro quebrasse a aplicação!</div>';
    
    showOutput('errors-output', output);
}

function demoCustomError() {
    let output = '<h4>Demo: Custom Errors</h4>';
    
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ValidationError';
        }
    }
    
    function validarIdade(idade) {
        if (idade < 0) {
            throw new ValidationError('Idade não pode ser negativa');
        }
        if (idade < 18) {
            throw new ValidationError('Deve ser maior de 18 anos');
        }
        return true;
    }
    
    const idades = [25, -5, 15, 30];
    
    output += '<p><strong>Validando idades:</strong></p>';
    
    idades.forEach(idade => {
        try {
            validarIdade(idade);
            output += `<p>✅ Idade ${idade}: válida</p>`;
        } catch (erro) {
            if (erro instanceof ValidationError) {
                output += `<p>❌ Idade ${idade}: <span style="color: #dc2626;">${erro.message}</span></p>`;
            }
        }
    });
    
    showOutput('errors-output', output);
}

function demoErrorTypes() {
    let output = '<h4>Demo: Tipos de Erros</h4>';
    
    const testes = [
        {
            nome: 'ReferenceError',
            codigo: () => console.log(variavelInexistente),
            descricao: 'Variável não definida'
        },
        {
            nome: 'TypeError',
            codigo: () => null.toString(),
            descricao: 'Método em null/undefined'
        },
        {
            nome: 'SyntaxError',
            codigo: () => eval('const x ='),
            descricao: 'Sintaxe inválida'
        },
        {
            nome: 'RangeError',
            codigo: () => new Array(-1),
            descricao: 'Valor fora do range'
        }
    ];
    
    testes.forEach(teste => {
        try {
            teste.codigo();
        } catch (erro) {
            output += `<div style="margin: 10px 0; padding: 10px; background: #fee; border-left: 4px solid #dc2626;">
                <strong>${teste.nome}:</strong> ${teste.descricao}<br>
                <span style="color: #666;">Mensagem: ${erro.message}</span>
            </div>`;
        }
    });
    
    showOutput('errors-output', output);
}

// ==========================================
// DEMOS DO MÓDULO: CLASSES
// ==========================================

function demoClasses() {
    let output = '<h4>Demo: Classes Básicas</h4>';
    
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
        
        apresentar() {
            return `Olá, sou ${this.nome} e tenho ${this.idade} anos`;
        }
        
        envelhecer() {
            this.idade++;
        }
    }
    
    const pessoa1 = new Pessoa('João', 25);
    const pessoa2 = new Pessoa('Maria', 30);
    
    output += `<p><strong>Pessoa 1:</strong> ${pessoa1.apresentar()}</p>`;
    output += `<p><strong>Pessoa 2:</strong> ${pessoa2.apresentar()}</p>`;
    
    pessoa1.envelhecer();
    output += `<p><strong>Após envelhecer:</strong> ${pessoa1.apresentar()}</p>`;
    
    showOutput('classes-output', output);
}

function demoHeranca() {
    let output = '<h4>Demo: Herança (extends)</h4>';
    
    class Animal {
        constructor(nome) {
            this.nome = nome;
        }
        
        fazerSom() {
            return 'Som genérico';
        }
    }
    
    class Cachorro extends Animal {
        constructor(nome, raca) {
            super(nome);
            this.raca = raca;
        }
        
        fazerSom() {
            return 'Au au!';
        }
        
        abanarRabo() {
            return `${this.nome} está feliz!`;
        }
    }
    
    class Gato extends Animal {
        fazerSom() {
            return 'Miau!';
        }
    }
    
    const rex = new Cachorro('Rex', 'Labrador');
    const felix = new Gato('Felix');
    
    output += `<p><strong>${rex.nome} (${rex.raca}):</strong> ${rex.fazerSom()}</p>`;
    output += `<p>${rex.abanarRabo()}</p>`;
    output += `<p><strong>${felix.nome}:</strong> ${felix.fazerSom()}</p>`;
    
    output += '<div class="info-box" style="margin-top: 15px;"><strong>💡 Herança:</strong> Cachorro e Gato herdam de Animal, mas cada um tem seu próprio comportamento</div>';
    
    showOutput('classes-output', output);
}

function demoPrivateFields() {
    let output = '<h4>Demo: Campos Privados (#)</h4>';
    
    class ContaBancaria {
        #saldo = 0;
        
        constructor(titular, saldoInicial) {
            this.titular = titular;
            this.#saldo = saldoInicial;
        }
        
        get saldo() {
            return this.#saldo;
        }
        
        depositar(valor) {
            this.#saldo += valor;
        }
        
        sacar(valor) {
            if (valor > this.#saldo) {
                throw new Error('Saldo insuficiente');
            }
            this.#saldo -= valor;
        }
    }
    
    const conta = new ContaBancaria('João', 1000);
    
    output += `<p><strong>Titular:</strong> ${conta.titular}</p>`;
    output += `<p><strong>Saldo inicial:</strong> R$ ${conta.saldo}</p>`;
    
    conta.depositar(500);
    output += `<p>Depositou R$ 500 → Saldo: R$ ${conta.saldo}</p>`;
    
    conta.sacar(300);
    output += `<p>Sacou R$ 300 → Saldo: R$ ${conta.saldo}</p>`;
    
    output += '<div class="warning-box" style="margin-top: 15px;"><strong>🔒 Campo privado:</strong> O saldo (#saldo) não pode ser acessado diretamente de fora da classe!</div>';
    
    showOutput('classes-output', output);
}

// ==========================================
// DEMOS DO MÓDULO: JSON
// ==========================================

function demoJSONParse() {
    let output = '<h4>Demo: JSON.parse()</h4>';
    
    const jsonString = '{"nome":"João","idade":25,"tags":["javascript","nodejs"],"ativo":true}';
    
    output += '<p><strong>String JSON:</strong></p>';
    output += `<pre>${jsonString}</pre>`;
    
    const objeto = JSON.parse(jsonString);
    
    output += '<p><strong>Após JSON.parse():</strong></p>';
    output += `<p>nome: ${objeto.nome}</p>`;
    output += `<p>idade: ${objeto.idade}</p>`;
    output += `<p>tags: [${objeto.tags.join(', ')}]</p>`;
    output += `<p>ativo: ${objeto.ativo}</p>`;
    
    showOutput('json-output', output);
}

function demoJSONStringify() {
    let output = '<h4>Demo: JSON.stringify()</h4>';
    
    const usuario = {
        nome: 'Maria',
        email: 'maria@email.com',
        idade: 28,
        ativo: true,
        tags: ['admin', 'premium']
    };
    
    output += '<p><strong>Objeto JavaScript:</strong></p>';
    output += `<pre>${JSON.stringify(usuario, null, 2)}</pre>`;
    
    const jsonString = JSON.stringify(usuario);
    
    output += '<p><strong>JSON String (sem formatação):</strong></p>';
    output += `<pre>${jsonString}</pre>`;
    
    const jsonFormatado = JSON.stringify(usuario, null, 2);
    
    output += '<p><strong>JSON formatado (indentado):</strong></p>';
    output += `<pre>${jsonFormatado}</pre>`;
    
    showOutput('json-output', output);
}

function demoDeepCopy() {
    let output = '<h4>Demo: Deep Copy com JSON</h4>';
    
    const original = {
        nome: 'João',
        endereco: {
            cidade: 'São Paulo',
            estado: 'SP'
        }
    };
    
    // Cópia rasa (errado para objetos aninhados)
    const copiaRasa = { ...original };
    copiaRasa.endereco.cidade = 'Rio de Janeiro';
    
    output += '<p><strong>❌ Problema com cópia rasa (spread):</strong></p>';
    output += `<p>Original.cidade: ${original.endereco.cidade} (foi modificado!)</p>`;
    
    // Reset
    original.endereco.cidade = 'São Paulo';
    
    // Deep copy com JSON
    const deepCopy = JSON.parse(JSON.stringify(original));
    deepCopy.endereco.cidade = 'Brasília';
    
    output += '<p><strong>✅ Deep copy com JSON:</strong></p>';
    output += `<p>Original.cidade: ${original.endereco.cidade} (não modificou)</p>`;
    output += `<p>Cópia.cidade: ${deepCopy.endereco.cidade}</p>`;
    
    showOutput('json-output', output);
}

// ==========================================
// DEMOS DO MÓDULO: WEB APIs
// ==========================================

function demoLocalStorage() {
    let output = '<h4>Demo: LocalStorage</h4>';
    
    const dados = {
        usuario: 'João Silva',
        tema: 'dark',
        ultimoAcesso: new Date().toISOString()
    };
    
    // Salvar
    localStorage.setItem('demo-dados', JSON.stringify(dados));
    
    output += '<p><strong>Dados salvos no localStorage:</strong></p>';
    output += `<pre>${JSON.stringify(dados, null, 2)}</pre>`;
    
    // Recuperar
    const recuperados = JSON.parse(localStorage.getItem('demo-dados'));
    
    output += '<p><strong>Dados recuperados:</strong></p>';
    output += `<p>Usuário: ${recuperados.usuario}</p>`;
    output += `<p>Tema: ${recuperados.tema}</p>`;
    output += `<p>Último acesso: ${new Date(recuperados.ultimoAcesso).toLocaleString()}</p>`;
    
    output += '<div class="info-box" style="margin-top: 15px;"><strong>💡 Persistente:</strong> Os dados permanecerão mesmo após fechar o navegador!</div>';
    
    showOutput('webapis-output', output);
}

async function demoFetchAPI() {
    let output = '<h4>Demo: Fetch API</h4>';
    output += '<p>Buscando dados da API...</p>';
    showOutput('webapis-output', output);
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const usuario = await response.json();
        
        output = '<h4>Demo: Fetch API</h4>';
        output += '<p><strong>✅ Dados recebidos da API:</strong></p>';
        output += `<pre>${JSON.stringify(usuario, null, 2)}</pre>`;
        
        output += '<div class="success-box" style="margin-top: 15px;"><strong>🎉 Sucesso!</strong> Dados buscados de uma API real (jsonplaceholder.typicode.com)</div>';
        
    } catch (erro) {
        output = '<h4>Demo: Fetch API</h4>';
        output += `<p class="danger-box">❌ Erro: ${erro.message}</p>`;
    }
    
    showOutput('webapis-output', output);
}

async function demoClipboard() {
    let output = '<h4>Demo: Clipboard API</h4>';
    
    const textoParaCopiar = 'Este texto foi copiado com JavaScript!';
    
    try {
        await navigator.clipboard.writeText(textoParaCopiar);
        
        output += '<p><strong>✅ Texto copiado com sucesso!</strong></p>';
        output += `<pre>${textoParaCopiar}</pre>`;
        output += '<p>Cole (Ctrl+V) em qualquer lugar para ver!</p>';
        
        output += '<div class="success-box" style="margin-top: 15px;"><strong>📋 Área de transferência:</strong> O texto está pronto para ser colado!</div>';
        
    } catch (erro) {
        output += `<p class="danger-box">❌ Erro ao copiar: ${erro.message}</p>`;
        output += '<p><small>Pode ser necessário permissão do navegador</small></p>';
    }
    
    showOutput('webapis-output', output);
}

console.log('✅ demos.js carregado com sucesso!');
