// ========================================
// JAVASCRIPT - INICIANTE AO INTERMEDIÁRIO
// Aplicação Educacional Completa
// ========================================

console.log('🚀 JavaScript Básico/Intermediário - Carregado!');

// MÓDULOS DE CONTEÚDO
const MODULES = {
    
    // ==========================================
    // MÓDULO: INTRODUÇÃO
    // ==========================================
    intro: {
        render: () => `
            <div class="section">
                <h2>🎯 Bem-vindo ao JavaScript Básico/Intermediário!</h2>
                
                <div class="success-box">
                    <strong>✅ Você está no caminho certo!</strong><br>
                    Este curso foi desenvolvido para levar você do zero até um nível intermediário sólido em JavaScript.
                    Cada conceito é explicado em detalhes, com múltiplos exemplos práticos.
                </div>

                <h3>📚 O que você vai aprender</h3>
                
                <p>Este curso está dividido em <strong>2 níveis progressivos</strong>, com <strong>10 módulos completos</strong>:</p>

                <div class="example-grid">
                    <div class="example-card">
                        <h5>🟢 Nível 1 - Iniciante</h5>
                        <p><strong>5 módulos fundamentais:</strong></p>
                        <ul style="margin: 10px 0 0 20px; font-size: 0.95em;">
                            <li>Funções (★★☆☆☆)</li>
                            <li>Objetos (★★☆☆☆)</li>
                            <li>Eventos (★★☆☆☆)</li>
                            <li>DOM (★★☆☆☆)</li>
                        </ul>
                    </div>

                    <div class="example-card">
                        <h5>🟡 Nível 2 - Intermediário</h5>
                        <p><strong>5 módulos avançados:</strong></p>
                        <ul style="margin: 10px 0 0 20px; font-size: 0.95em;">
                            <li>Iterações (★★★☆☆)</li>
                            <li>Erros (★★★☆☆)</li>
                            <li>Classes (★★★☆☆)</li>
                            <li>JSON (★★★☆☆)</li>
                            <li>Web APIs (★★★☆☆)</li>
                        </ul>
                    </div>
                </div>

                <h3>🎓 Metodologia de Ensino</h3>
                
                <p>Cada módulo segue uma estrutura pedagógica comprovada:</p>
                
                <ol>
                    <li><strong>Conceitos Fundamentais</strong> - Entenda a teoria por trás de cada recurso</li>
                    <li><strong>Sintaxe Detalhada</strong> - Aprenda a escrever código correto</li>
                    <li><strong>Exemplos Práticos</strong> - Veja o código em ação com casos reais</li>
                    <li><strong>Demonstrações Interativas</strong> - Teste você mesmo com botões de demo</li>
                    <li><strong>Boas Práticas</strong> - Aprenda desde o início a escrever código de qualidade</li>
                    <li><strong>Erros Comuns</strong> - Evite as armadilhas que todo iniciante enfrenta</li>
                </ol>

                <div class="info-box">
                    <strong>💡 Dica de Estudo:</strong><br>
                    Não tenha pressa! JavaScript é uma linguagem poderosa, mas requer prática.
                    Dedique tempo a cada módulo, faça os exemplos várias vezes, e só avance quando 
                    se sentir confortável com o conteúdo.
                </div>

                <h3>🛠️ O que você precisa saber</h3>
                
                <div class="key-points">
                    <h4>📋 Pré-requisitos Mínimos:</h4>
                    <ul style="margin-left: 25px;">
                        <li>Noções básicas de HTML (tags, estrutura de página)</li>
                        <li>CSS básico (seletores, propriedades simples)</li>
                        <li>Lógica de programação básica (if, else, loops simples)</li>
                        <li>Vontade de aprender! 🚀</li>
                    </ul>
                </div>

                <h3>💻 Ferramentas Necessárias</h3>
                
                <table>
                    <thead>
                        <tr>
                            <th>Ferramenta</th>
                            <th>Finalidade</th>
                            <th>Como Usar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Navegador Moderno</strong></td>
                            <td>Executar JavaScript</td>
                            <td>Chrome, Firefox, Edge, Safari</td>
                        </tr>
                        <tr>
                            <td><strong>DevTools (F12)</strong></td>
                            <td>Console e debugging</td>
                            <td>Pressione F12 no navegador</td>
                        </tr>
                        <tr>
                            <td><strong>Editor de Código</strong></td>
                            <td>Escrever código (opcional)</td>
                            <td>VS Code, Sublime Text, etc.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>🎯 Como Usar Este Curso</h3>
                
                <div class="example-grid">
                    <div class="example-card">
                        <h5>1️⃣ Navegação</h5>
                        <p>Use a sidebar à esquerda para navegar entre os módulos. Siga a ordem sugerida!</p>
                    </div>

                    <div class="example-card">
                        <h5>2️⃣ Leitura</h5>
                        <p>Leia cada seção com atenção. Os conceitos são construídos progressivamente.</p>
                    </div>

                    <div class="example-card">
                        <h5>3️⃣ Prática</h5>
                        <p>Clique nos botões de demonstração para ver o código funcionando na prática.</p>
                    </div>

                    <div class="example-card">
                        <h5>4️⃣ Console</h5>
                        <p>Abra o Console (F12) para ver logs detalhados e testar seus próprios códigos.</p>
                    </div>
                </div>

                <div class="warning-box">
                    <strong>⚠️ Importante:</strong><br>
                    Este é o <strong>Curso Básico/Intermediário</strong>. Após completar todos os módulos,
                    você estará pronto para o <strong>Curso Avançado/Expert</strong> que cobre tópicos como
                    Async/Await, AJAX, Módulos ES6, Performance e mais!
                </div>

                <h3>🚀 Pronto para Começar?</h3>
                
                <p style="font-size: 1.1em; margin: 25px 0;">
                    Clique em <strong class="inline-code">Funções</strong> na sidebar para começar sua jornada!
                    Vamos aprender JavaScript do jeito certo, com fundamentos sólidos e boas práticas desde o início.
                </p>

                <div class="success-box">
                    <strong>🎉 Boa sorte!</strong><br>
                    Você está prestes a dominar uma das linguagens de programação mais importantes e versáteis do mundo.
                    O JavaScript está em todo lugar: sites, apps, servidores, IoT, e muito mais!
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: FUNÇÕES
    // ==========================================
    functions: {
        render: () => `
            <div class="section">
                <h2>🔧 Funções em JavaScript</h2>
                
                <p class="intro-text" style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Funções são os <strong>blocos de construção fundamentais</strong> de qualquer aplicação JavaScript.
                    Elas permitem que você encapsule código reutilizável, organize sua lógica e crie programas mais eficientes.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender neste módulo:</strong><br>
                    ✓ Function declarations vs expressions<br>
                    ✓ Arrow functions (ES6+)<br>
                    ✓ Parâmetros e argumentos<br>
                    ✓ Return values<br>
                    ✓ Closures (escopo léxico)<br>
                    ✓ Higher-order functions<br>
                    ✓ Callback functions<br>
                    ✓ IIFE (Immediately Invoked Function Expression)
                </div>

                <h3>📖 1. O que são Funções?</h3>
                
                <p>
                    Uma função é um <strong>bloco de código reutilizável</strong> que executa uma tarefa específica.
                    Pense nela como uma "máquina" que recebe entradas (parâmetros), processa algo, e retorna um resultado.
                </p>

                <div class="key-points">
                    <h4>Por que usar funções?</h4>
                    <ul style="margin-left: 25px;">
                        <li><strong>Reutilização:</strong> Escreva uma vez, use várias vezes</li>
                        <li><strong>Organização:</strong> Código mais limpo e estruturado</li>
                        <li><strong>Manutenção:</strong> Mais fácil de encontrar e corrigir bugs</li>
                        <li><strong>Abstração:</strong> Esconda complexidade por trás de nomes descritivos</li>
                        <li><strong>Testabilidade:</strong> Funções isoladas são mais fáceis de testar</li>
                    </ul>
                </div>

                <h3>✍️ 2. Declarando Funções - Function Declaration</h3>
                
                <p>A forma mais tradicional de criar funções em JavaScript:</p>

                <pre><code>// Sintaxe básica
function nomeDaFuncao(parametro1, parametro2) {
    // Corpo da função - código a ser executado
    return resultado; // Valor retornado (opcional)
}

// Exemplo prático: função que soma dois números
function somar(a, b) {
    const resultado = a + b;
    return resultado;
}

// Usando a função
const total = somar(5, 3);
console.log(total); // 8

// Exemplo: função que sauda uma pessoa
function saudar(nome) {
    const mensagem = "Olá, " + nome + "!";
    return mensagem;
}

console.log(saudar("Maria")); // "Olá, Maria!"
console.log(saudar("João"));  // "Olá, João!"</code></pre>

                <div class="info-box">
                    <strong>💡 Hoisting:</strong><br>
                    Function declarations são "elevadas" (hoisted) ao topo do escopo.
                    Isso significa que você pode chamar a função antes mesmo de declará-la no código!
                    <pre style="margin-top: 10px; background: white; color: #333;"><code>// Isto funciona!
console.log(multiplicar(2, 3)); // 6

function multiplicar(x, y) {
    return x * y;
}</code></pre>
                </div>

                <h3>⚡ 3. Function Expression</h3>
                
                <p>Você pode atribuir uma função a uma variável. Isso é chamado de <strong>function expression</strong>:</p>

                <pre><code>// Função anônima atribuída a uma variável
const dividir = function(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
};

// Uso
console.log(dividir(10, 2));  // 5
console.log(dividir(10, 0));  // "Erro: divisão por zero!"

// Function expression nomeada (útil para recursão e debugging)
const fatorial = function calcularFatorial(n) {
    if (n <= 1) return 1;
    return n * calcularFatorial(n - 1);
};

console.log(fatorial(5)); // 120 (5 * 4 * 3 * 2 * 1)</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Diferença importante:</strong><br>
                    Function expressions <strong>NÃO</strong> sofrem hoisting. Você só pode usá-las
                    depois de declará-las no código:
                    <pre style="margin-top: 10px; background: white; color: #333;"><code>// ❌ ERRO! subtrair ainda não foi definida
console.log(subtrair(5, 3));

const subtrair = function(a, b) {
    return a - b;
};</code></pre>
                </div>

                <h3>🚀 4. Arrow Functions (ES6+)</h3>
                
                <p>
                    Arrow functions são uma sintaxe <strong>moderna e concisa</strong> para escrever funções.
                    Introduzidas no ES6 (2015), elas se tornaram extremamente populares.
                </p>

                <pre><code>// Sintaxe tradicional
const dobro1 = function(x) {
    return x * 2;
};

// Arrow function - versão completa
const dobro2 = (x) => {
    return x * 2;
};

// Arrow function - versão concisa (quando tem apenas 1 expressão)
const dobro3 = x => x * 2;

// Todas funcionam igual:
console.log(dobro1(5)); // 10
console.log(dobro2(5)); // 10
console.log(dobro3(5)); // 10

// =====================================
// Exemplos com diferentes quantidades de parâmetros
// =====================================

// Sem parâmetros
const saudarMundo = () => "Olá, Mundo!";
console.log(saudarMundo()); // "Olá, Mundo!"

// Um parâmetro (parênteses opcionais)
const quadrado = n => n * n;
console.log(quadrado(4)); // 16

// Múltiplos parâmetros (parênteses obrigatórios)
const somar = (a, b) => a + b;
console.log(somar(3, 7)); // 10

// Múltiplas linhas (precisa de chaves e return explícito)
const calcularDesconto = (preco, desconto) => {
    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;
    return precoFinal;
};

console.log(calcularDesconto(100, 20)); // 80

// Retornando objeto (precisa de parênteses)
const criarPessoa = (nome, idade) => ({ nome: nome, idade: idade });
// Versão concisa com ES6:
const criarPessoa2 = (nome, idade) => ({ nome, idade });

console.log(criarPessoa("Ana", 25)); // { nome: "Ana", idade: 25 }</code></pre>

                <div class="key-points">
                    <h4>🎯 Quando usar Arrow Functions?</h4>
                    <ul style="margin-left: 25px;">
                        <li><strong>✅ Funções curtas e simples:</strong> Callbacks, map, filter, reduce</li>
                        <li><strong>✅ Quando você quer manter o contexto 'this':</strong> Event handlers em classes</li>
                        <li><strong>✅ Funções inline:</strong> Passadas como argumentos</li>
                        <li><strong>❌ Métodos de objeto:</strong> Use function normal para ter acesso ao 'this'</li>
                        <li><strong>❌ Construtores:</strong> Arrow functions não podem ser usadas com 'new'</li>
                    </ul>
                </div>

                <h3>📦 5. Parâmetros e Argumentos</h3>
                
                <p><strong>Parâmetros</strong> são os nomes listados na definição da função. 
                <strong>Argumentos</strong> são os valores reais passados para a função.</p>

                <pre><code>// Parâmetros padrão (ES6+)
function saudar(nome = "Visitante", saudacao = "Olá") {
    return \`\${saudacao}, \${nome}!\`;
}

console.log(saudar());                      // "Olá, Visitante!"
console.log(saudar("Carlos"));              // "Olá, Carlos!"
console.log(saudar("Maria", "Bem-vinda")); // "Bem-vinda, Maria!"

// Rest parameters - aceita número variável de argumentos
function somarTodos(...numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}

console.log(somarTodos(1, 2, 3));          // 6
console.log(somarTodos(10, 20, 30, 40));   // 100
console.log(somarTodos(5));                 // 5

// Exemplo prático: função que formata nomes completos
function formatarNome(primeiro, ...outrosNomes) {
    const sobrenomes = outrosNomes.join(" ");
    return \`\${primeiro} \${sobrenomes}\`;
}

console.log(formatarNome("João", "da", "Silva")); // "João da Silva"
console.log(formatarNome("Maria", "Santos"));     // "Maria Santos"</code></pre>

                <h3>🔒 6. Closures - Escopo Léxico</h3>
                
                <p>
                    Um <strong>closure</strong> é uma função que "lembra" do ambiente onde foi criada,
                    mesmo depois que a função externa retornou. É um dos conceitos mais poderosos do JavaScript!
                </p>

                <pre><code>// Exemplo básico de closure
function criarContador() {
    let count = 0; // Variável privada
    
    return {
        incrementar: function() {
            count++;
            return count;
        },
        decrementar: function() {
            count--;
            return count;
        },
        obterValor: function() {
            return count;
        }
    };
}

const contador = criarContador();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.incrementar()); // 3
console.log(contador.decrementar()); // 2
console.log(contador.obterValor());  // 2

// A variável 'count' é privada - não pode ser acessada diretamente!
console.log(contador.count); // undefined

// Exemplo prático: criador de multiplicadores
function criarMultiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const multiplicarPor10 = criarMultiplicador(10);

console.log(dobrar(5));            // 10
console.log(triplicar(5));         // 15
console.log(multiplicarPor10(5));  // 50</code></pre>

                <div class="info-box">
                    <strong>💡 Por que Closures são importantes?</strong><br>
                    • <strong>Encapsulamento:</strong> Crie variáveis privadas<br>
                    • <strong>Fábrica de funções:</strong> Gere funções personalizadas<br>
                    • <strong>Callbacks:</strong> Mantenha estado em funções assíncronas<br>
                    • <strong>Módulos:</strong> Base para o padrão de módulo
                </div>

                <h3>🎯 7. Higher-Order Functions</h3>
                
                <p>
                    <strong>Higher-order functions</strong> são funções que:
                    (1) recebem outras funções como argumentos, OU
                    (2) retornam funções como resultado.
                </p>

                <pre><code>// Função que recebe outra função como argumento
function executar(operacao, a, b) {
    return operacao(a, b);
}

const somar = (x, y) => x + y;
const multiplicar = (x, y) => x * y;

console.log(executar(somar, 5, 3));       // 8
console.log(executar(multiplicar, 5, 3)); // 15

// Função que retorna outra função
function criarSaudacao(saudacao) {
    return function(nome) {
        return \`\${saudacao}, \${nome}!\`;
    };
}

const dizerOla = criarSaudacao("Olá");
const dizerOi = criarSaudacao("Oi");

console.log(dizerOla("João"));  // "Olá, João!"
console.log(dizerOi("Maria"));  // "Oi, Maria!"

// Exemplo prático: função de validação
function validar(valor, ...validadores) {
    for (let validador of validadores) {
        if (!validador(valor)) {
            return false;
        }
    }
    return true;
}

const naoVazio = str => str.length > 0;
const temNumero = str => /\d/.test(str);
const temLetraMaiuscula = str => /[A-Z]/.test(str);

console.log(validar("Abc123", naoVazio, temNumero)); // true
console.log(validar("abc", temNumero));               // false
console.log(validar("ABC", temLetraMaiuscula));       // true</code></pre>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <p>Clique nos botões abaixo para ver as funções em ação:</p>

                <button class="demo-button" onclick="demoFunctionBasics()">Demo: Funções Básicas</button>
                <button class="demo-button" onclick="demoArrowFunctions()">Demo: Arrow Functions</button>
                <button class="demo-button" onclick="demoClosures()">Demo: Closures</button>
                <button class="demo-button" onclick="demoHigherOrder()">Demo: Higher-Order</button>
                
                <div id="functions-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Parabéns!</strong><br>
                    Você aprendeu sobre funções em JavaScript! Este é um dos conceitos mais importantes.
                    Pratique criando suas próprias funções e experimente diferentes padrões.
                    No próximo módulo, vamos explorar <strong>Objetos</strong>!
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: OBJETOS
    // ==========================================
    objects: {
        render: () => `
            <div class="section">
                <h2>📦 Objetos em JavaScript</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Objetos são a <strong>estrutura de dados mais importante</strong> em JavaScript.
                    Praticamente tudo em JavaScript é um objeto: arrays, funções, datas, e muito mais!
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Object literals e propriedades<br>
                    ✓ Métodos de objetos<br>
                    ✓ Destructuring (desestruturação)<br>
                    ✓ Spread e Rest operators<br>
                    ✓ Object.keys(), Object.values(), Object.entries()<br>
                    ✓ Computed property names<br>
                    ✓ Getters e Setters<br>
                    ✓ Object.assign() e clonagem
                </div>

                <h3>📖 1. O que são Objetos?</h3>
                
                <p>
                    Um objeto é uma <strong>coleção de propriedades</strong>, onde cada propriedade é uma
                    associação entre uma chave (nome) e um valor. Pense em um objeto como uma "caixa" que
                    guarda informações relacionadas.
                </p>

                <pre><code>// Criando um objeto literal - a forma mais comum
const pessoa = {
    // Propriedades (pares chave: valor)
    nome: "Maria Silva",
    idade: 28,
    cidade: "São Paulo",
    profissao: "Desenvolvedora",
    
    // Métodos (funções dentro de objetos)
    apresentar: function() {
        return "Olá, meu nome é " + this.nome;
    },
    
    // Sintaxe moderna de método (ES6+)
    trabalhar() {
        return this.nome + " está programando...";
    }
};

// Acessando propriedades - notação de ponto
console.log(pessoa.nome);      // "Maria Silva"
console.log(pessoa.idade);     // 28

// Acessando propriedades - notação de colchetes
console.log(pessoa["cidade"]); // "São Paulo"

// Chamando métodos
console.log(pessoa.apresentar()); // "Olá, meu nome é Maria Silva"
console.log(pessoa.trabalhar());  // "Maria Silva está programando..."</code></pre>

                <div class="key-points">
                    <h4>🎯 Quando usar cada notação?</h4>
                    <ul style="margin-left: 25px;">
                        <li><strong>Ponto (.)</strong> - Use quando o nome da propriedade é conhecido e válido</li>
                        <li><strong>Colchetes ([]):</strong> Use quando:
                            <ul style="margin-top: 8px;">
                                <li>O nome da propriedade está em uma variável</li>
                                <li>O nome contém espaços ou caracteres especiais</li>
                                <li>O nome é um número</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h3>✍️ 2. Manipulando Objetos</h3>

                <pre><code>// Criando objeto vazio
const produto = {};

// Adicionando propriedades
produto.nome = "Notebook";
produto.preco = 3500;
produto.marca = "Dell";

console.log(produto); // { nome: "Notebook", preco: 3500, marca: "Dell" }

// Modificando propriedades
produto.preco = 3200;
console.log(produto.preco); // 3200

// Deletando propriedades
delete produto.marca;
console.log(produto); // { nome: "Notebook", preco: 3200 }

// Verificando se propriedade existe
console.log("nome" in produto);  // true
console.log("marca" in produto); // false (foi deletada)

// Verificando se objeto tem propriedade própria (não herdada)
console.log(produto.hasOwnProperty("nome")); // true</code></pre>

                <h3>🎨 3. Destructuring - Desestruturação</h3>
                
                <p>
                    Destructuring é uma sintaxe que permite <strong>extrair valores de objetos</strong>
                    de forma elegante e criar variáveis automaticamente.
                </p>

                <pre><code>const usuario = {
    nome: "João",
    idade: 30,
    email: "joao@email.com",
    cidade: "Rio de Janeiro",
    pais: "Brasil"
};

// ========================================
// Destructuring básico
// ========================================
const { nome, idade, email } = usuario;

console.log(nome);  // "João"
console.log(idade); // 30
console.log(email); // "joao@email.com"

// ========================================
// Renomeando variáveis
// ========================================
const { nome: nomeUsuario, idade: idadeUsuario } = usuario;

console.log(nomeUsuario);  // "João"
console.log(idadeUsuario); // 30

// ========================================
// Valores padrão (caso a propriedade não exista)
// ========================================
const { 
    cidade, 
    estado = "Não informado",
    profissao = "Não informada" 
} = usuario;

console.log(cidade);    // "Rio de Janeiro"
console.log(estado);    // "Não informado" (não existe no objeto)
console.log(profissao); // "Não informada" (não existe no objeto)

// ========================================
// Destructuring aninhado
// ========================================
const empresa = {
    nome: "Tech Corp",
    endereco: {
        rua: "Av. Paulista",
        numero: 1000,
        cidade: "São Paulo",
        estado: "SP"
    },
    contato: {
        email: "contato@tech.com",
        telefone: "(11) 1234-5678"
    }
};

const { 
    endereco: { cidade: cidadeEmpresa, estado: estadoEmpresa },
    contato: { email: emailContato }
} = empresa;

console.log(cidadeEmpresa);  // "São Paulo"
console.log(estadoEmpresa);  // "SP"
console.log(emailContato);   // "contato@tech.com"

// ========================================
// Destructuring em parâmetros de função
// ========================================
function exibirPessoa({ nome, idade, cidade = "Não informada" }) {
    return \`\${nome}, \${idade} anos, mora em \${cidade}\`;
}

console.log(exibirPessoa(usuario)); // "João, 30 anos, mora em Rio de Janeiro"

const novaPessoa = { nome: "Ana", idade: 25 };
console.log(exibirPessoa(novaPessoa)); // "Ana, 25 anos, mora em Não informada"</code></pre>

                <div class="success-box">
                    <strong>✅ Vantagem do Destructuring:</strong><br>
                    Código mais limpo e legível! Compare:
                    <pre style="margin-top: 10px; background: white; color: #333;"><code>// ❌ Sem destructuring (verboso)
const nome = usuario.nome;
const idade = usuario.idade;
const email = usuario.email;

// ✅ Com destructuring (conciso)
const { nome, idade, email } = usuario;</code></pre>
                </div>

                <h3>📤 4. Spread Operator (...)</h3>
                
                <p>
                    O <strong>spread operator</strong> permite "espalhar" as propriedades de um objeto
                    em outro objeto ou criar cópias.
                </p>

                <pre><code>// ========================================
// Copiando objetos
// ========================================
const original = { a: 1, b: 2, c: 3 };
const copia = { ...original };

console.log(copia); // { a: 1, b: 2, c: 3 }

// Modificar a cópia não afeta o original
copia.a = 100;
console.log(original.a); // 1 (não mudou)
console.log(copia.a);    // 100

// ========================================
// Mesclando objetos
// ========================================
const dadosBasicos = {
    nome: "Pedro",
    idade: 35
};

const dadosAdicionais = {
    profissao: "Engenheiro",
    cidade: "Curitiba"
};

const dadosCompletos = { ...dadosBasicos, ...dadosAdicionais };
console.log(dadosCompletos);
// { nome: "Pedro", idade: 35, profissao: "Engenheiro", cidade: "Curitiba" }

// ========================================
// Sobrescrevendo propriedades
// ========================================
const config = {
    tema: "escuro",
    idioma: "pt-BR",
    notificacoes: true
};

const novaConfig = {
    ...config,
    tema: "claro",          // Sobrescreve
    tamanhoDaFonte: 16      // Adiciona nova propriedade
};

console.log(novaConfig);
// { tema: "claro", idioma: "pt-BR", notificacoes: true, tamanhoDaFonte: 16 }

// ========================================
// Removendo propriedades com destructuring + spread
// ========================================
const usuario = { id: 1, nome: "Ana", senha: "123", email: "ana@email.com" };

// Remove senha, mantém o resto
const { senha, ...usuarioSemSenha } = usuario;

console.log(usuarioSemSenha);
// { id: 1, nome: "Ana", email: "ana@email.com" }</code></pre>

                <h3>🔑 5. Métodos Úteis de Object</h3>

                <pre><code>const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Belo Horizonte",
    profissao: "Designer"
};

// ========================================
// Object.keys() - retorna array com as chaves
// ========================================
const chaves = Object.keys(pessoa);
console.log(chaves); // ["nome", "idade", "cidade", "profissao"]

// ========================================
// Object.values() - retorna array com os valores
// ========================================
const valores = Object.values(pessoa);
console.log(valores); // ["Carlos", 28, "Belo Horizonte", "Designer"]

// ========================================
// Object.entries() - retorna array de arrays [chave, valor]
// ========================================
const entradas = Object.entries(pessoa);
console.log(entradas);
// [
//   ["nome", "Carlos"],
//   ["idade", 28],
//   ["cidade", "Belo Horizonte"],
//   ["profissao", "Designer"]
// ]

// Uso prático: iterar sobre objeto
for (const [chave, valor] of Object.entries(pessoa)) {
    console.log(\`\${chave}: \${valor}\`);
}
// nome: Carlos
// idade: 28
// cidade: Belo Horizonte
// profissao: Designer

// ========================================
// Object.assign() - mesclar objetos
// ========================================
const alvo = { a: 1, b: 2 };
const fonte = { b: 3, c: 4 };

Object.assign(alvo, fonte);
console.log(alvo); // { a: 1, b: 3, c: 4 } (b foi sobrescrito)

// ========================================
// Object.freeze() - tornar objeto imutável
// ========================================
const config = { modo: "producao", debug: false };
Object.freeze(config);

config.modo = "desenvolvimento"; // Não tem efeito
console.log(config.modo); // "producao" (não mudou)

// ========================================
// Object.seal() - prevenir adição/remoção de propriedades
// ========================================
const settings = { volume: 50 };
Object.seal(settings);

settings.volume = 80;      // ✅ Funciona
settings.brilho = 100;     // ❌ Não adiciona
delete settings.volume;    // ❌ Não remove

console.log(settings); // { volume: 80 }</code></pre>

                <h3>💎 6. Computed Property Names</h3>
                
                <p>Você pode usar expressões como nomes de propriedades usando colchetes:</p>

                <pre><code>// Nome de propriedade dinâmico
const campo = "email";
const valor = "user@email.com";

const usuario = {
    nome: "João",
    [campo]: valor  // Usa o valor da variável 'campo' como chave
};

console.log(usuario); // { nome: "João", email: "user@email.com" }

// Exemplo prático: construir objeto dinamicamente
function criarObjeto(chave1, valor1, chave2, valor2) {
    return {
        [chave1]: valor1,
        [chave2]: valor2
    };
}

const obj = criarObjeto("cor", "azul", "tamanho", "grande");
console.log(obj); // { cor: "azul", tamanho: "grande" }

// Com expressões
const prefixo = "user";
const dados = {
    [\`\${prefixo}Name\`]: "Maria",
    [\`\${prefixo}Age\`]: 25,
    [\`\${prefixo}City\`]: "SP"
};

console.log(dados); // { userName: "Maria", userAge: 25, userCity: "SP" }</code></pre>

                <h3>🎛️ 7. Getters e Setters</h3>

                <pre><code>const pessoa = {
    primeiroNome: "João",
    sobrenome: "Silva",
    anoNascimento: 1990,
    
    // Getter - propriedade computada
    get nomeCompleto() {
        return \`\${this.primeiroNome} \${this.sobrenome}\`;
    },
    
    // Setter - validação ao atribuir valor
    set nomeCompleto(nome) {
        const partes = nome.split(" ");
        this.primeiroNome = partes[0];
        this.sobrenome = partes[1] || "";
    },
    
    // Getter que calcula idade atual
    get idade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoNascimento;
    },
    
    // Setter com validação
    set idade(novaIdade) {
        if (novaIdade < 0 || novaIdade > 150) {
            console.log("Idade inválida!");
            return;
        }
        const anoAtual = new Date().getFullYear();
        this.anoNascimento = anoAtual - novaIdade;
    }
};

// Usando getters (sem parênteses - como propriedade)
console.log(pessoa.nomeCompleto); // "João Silva"
console.log(pessoa.idade);        // 35 (em 2025)

// Usando setters (sem parênteses - como atribuição)
pessoa.nomeCompleto = "Maria Santos";
console.log(pessoa.primeiroNome); // "Maria"
console.log(pessoa.sobrenome);    // "Santos"

pessoa.idade = 30;
console.log(pessoa.anoNascimento); // 1995 (calculado automaticamente)</code></pre>

                <div class="info-box">
                    <strong>💡 Por que usar Getters/Setters?</strong><br>
                    • <strong>Encapsulamento:</strong> Controle como propriedades são acessadas/modificadas<br>
                    • <strong>Validação:</strong> Valide valores antes de atribuir<br>
                    • <strong>Propriedades computadas:</strong> Calcule valores dinamicamente<br>
                    • <strong>Sintaxe limpa:</strong> Use como propriedades normais
                </div>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoObjectBasics()">Demo: Objetos Básicos</button>
                <button class="demo-button" onclick="demoDestructuring()">Demo: Destructuring</button>
                <button class="demo-button" onclick="demoSpreadOperator()">Demo: Spread Operator</button>
                <button class="demo-button" onclick="demoObjectMethods()">Demo: Object Methods</button>
                
                <div id="objects-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Excelente!</strong><br>
                    Você dominou objetos em JavaScript! Objetos são fundamentais para organizar dados
                    e criar aplicações complexas. Próximo: <strong>Eventos</strong>!
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: EVENTOS
    // ==========================================
    events: {
        render: () => `
            <div class="section">
                <h2>⚡ Eventos em JavaScript</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Eventos são <strong>ações que acontecem no navegador</strong>: cliques, digitação, 
                    movimentos do mouse, carregamento de página, e muito mais. JavaScript permite que você
                    "escute" esses eventos e responda a eles.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Tipos de eventos (click, input, submit, etc.)<br>
                    ✓ Event listeners (addEventListener)<br>
                    ✓ Event object e suas propriedades<br>
                    ✓ Event bubbling e capturing<br>
                    ✓ Event delegation<br>
                    ✓ preventDefault() e stopPropagation()<br>
                    ✓ Custom events<br>
                    ✓ Remover event listeners
                </div>

                <h3>📖 1. O que são Eventos?</h3>
                
                <p>
                    Eventos representam <strong>interações do usuário ou mudanças no estado da página</strong>.
                    Quando um evento ocorre, você pode executar código JavaScript em resposta.
                </p>

                <div class="key-points">
                    <h4>📋 Tipos Comuns de Eventos:</h4>
                    <table style="margin-top: 15px;">
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th>Eventos</th>
                                <th>Quando Ocorrem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Mouse</strong></td>
                                <td>click, dblclick, mouseover, mouseout, mousemove</td>
                                <td>Interações com mouse</td>
                            </tr>
                            <tr>
                                <td><strong>Teclado</strong></td>
                                <td>keydown, keyup, keypress</td>
                                <td>Teclas pressionadas</td>
                            </tr>
                            <tr>
                                <td><strong>Formulário</strong></td>
                                <td>submit, change, input, focus, blur</td>
                                <td>Interação com forms</td>
                            </tr>
                            <tr>
                                <td><strong>Página</strong></td>
                                <td>load, DOMContentLoaded, resize, scroll</td>
                                <td>Estados da página</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>✍️ 2. addEventListener - A Forma Moderna</h3>

                <pre><code>// ========================================
// Sintaxe básica
// ========================================
elemento.addEventListener(tipo, funcaoCallback, opcoes);

// Exemplo: detectar clique em botão
const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {
    console.log("Botão foi clicado!");
});

// Com arrow function (mais moderno)
botao.addEventListener("click", () => {
    console.log("Botão clicado!");
});

// ========================================
// Event object - informações sobre o evento
// ========================================
botao.addEventListener("click", (event) => {
    console.log("Tipo do evento:", event.type);        // "click"
    console.log("Elemento clicado:", event.target);    // <button>
    console.log("Coordenadas X:", event.clientX);      // Posição do mouse
    console.log("Coordenadas Y:", event.clientY);
    console.log("Tecla Ctrl pressionada?", event.ctrlKey); // true/false
});

// ========================================
// Múltiplos listeners no mesmo elemento
// ========================================
const input = document.querySelector("#emailInput");

// Listener 1: validar enquanto digita
input.addEventListener("input", (e) => {
    console.log("Digitando:", e.target.value);
});

// Listener 2: mudar cor quando focado
input.addEventListener("focus", () => {
    input.style.backgroundColor = "#e3f2fd";
});

// Listener 3: voltar cor quando perde foco
input.addEventListener("blur", () => {
    input.style.backgroundColor = "white";
});

// ========================================
// Eventos de formulário
// ========================================
const form = document.querySelector("#meuForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Previne envio padrão do form
    
    const formData = new FormData(e.target);
    const dados = Object.fromEntries(formData);
    
    console.log("Dados do formulário:", dados);
});

// ========================================
// Eventos de teclado
// ========================================
document.addEventListener("keydown", (e) => {
    console.log("Tecla pressionada:", e.key);
    
    // Detectar combinações
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault(); // Previne Ctrl+S do navegador
        console.log("Salvando...");
    }
    
    // Detectar teclas especiais
    if (e.key === "Enter") {
        console.log("Enter pressionado!");
    }
    if (e.key === "Escape") {
        console.log("ESC pressionado!");
    }
});</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Evite inline event handlers!</strong><br>
                    Em vez de usar HTML inline como <span class="inline-code">&lt;button onclick="func()"&gt;</span>,
                    use sempre <span class="inline-code">addEventListener()</span> no JavaScript.
                    É mais flexível, organizado e permite múltiplos listeners!
                </div>

                <h3>🔄 3. Event Bubbling e Capturing</h3>
                
                <p>
                    Quando um evento ocorre em um elemento, ele <strong>"sobe" pela árvore DOM</strong> (bubbling)
                    ou <strong>"desce"</strong> (capturing), ativando listeners nos elementos pais.
                </p>

                <pre><code>/* HTML:
<div id="pai">
    <div id="filho">
        <button id="botao">Clique aqui</button>
    </div>
</div>
*/

const pai = document.getElementById("pai");
const filho = document.getElementById("filho");
const botao = document.getElementById("botao");

// ========================================
// BUBBLING (padrão) - de dentro para fora
// ========================================
botao.addEventListener("click", () => {
    console.log("1. Botão clicado");
});

filho.addEventListener("click", () => {
    console.log("2. Filho clicado");
});

pai.addEventListener("click", () => {
    console.log("3. Pai clicado");
});

// Ao clicar no botão, a ordem será:
// 1. Botão clicado
// 2. Filho clicado  
// 3. Pai clicado

// ========================================
// CAPTURING - de fora para dentro
// ========================================
pai.addEventListener("click", () => {
    console.log("1. Pai (capturing)");
}, true); // true = capturing phase

filho.addEventListener("click", () => {
    console.log("2. Filho (capturing)");
}, true);

botao.addEventListener("click", () => {
    console.log("3. Botão (capturing)");
}, true);

// ========================================
// stopPropagation() - parar propagação
// ========================================
filho.addEventListener("click", (e) => {
    console.log("Filho clicado");
    e.stopPropagation(); // Não vai até o pai!
});</code></pre>

                <h3>🎯 4. Event Delegation - Padrão Importante!</h3>
                
                <p>
                    Em vez de adicionar listeners a cada elemento filho, adicione <strong>um listener no pai</strong>
                    e use <span class="inline-code">event.target</span> para identificar qual filho foi clicado.
                </p>

                <pre><code>/* HTML:
<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <!-- Mais itens podem ser adicionados dinamicamente -->
</ul>
*/

// ❌ RUIM - Listener em cada <li>
const itens = document.querySelectorAll("li");
itens.forEach(item => {
    item.addEventListener("click", () => {
        console.log("Clicou em:", item.textContent);
    });
}); // Problema: não funciona com itens adicionados depois!

// ✅ BOM - Event Delegation
const lista = document.getElementById("lista");

lista.addEventListener("click", (e) => {
    // Verifica se clicou em um <li>
    if (e.target.tagName === "LI") {
        console.log("Clicou em:", e.target.textContent);
        e.target.classList.toggle("ativo");
    }
});

// Funciona até para itens adicionados depois!
const novoItem = document.createElement("li");
novoItem.textContent = "Item 4 (novo)";
lista.appendChild(novoItem); // Listener já funciona!

// ========================================
// Exemplo prático: To-Do List
// ========================================
const todoList = document.getElementById("todos");

todoList.addEventListener("click", (e) => {
    // Se clicou no checkbox
    if (e.target.matches('input[type="checkbox"]')) {
        const li = e.target.closest("li");
        li.classList.toggle("completo");
    }
    
    // Se clicou no botão deletar
    if (e.target.matches(".btn-deletar")) {
        const li = e.target.closest("li");
        li.remove();
    }
});</code></pre>

                <div class="success-box">
                    <strong>✅ Vantagens do Event Delegation:</strong><br>
                    • <strong>Performance:</strong> Menos listeners = menos memória<br>
                    • <strong>Dinâmico:</strong> Funciona com elementos adicionados depois<br>
                    • <strong>Simples:</strong> Um único listener para múltiplos elementos
                </div>

                <h3>🚫 5. preventDefault() vs stopPropagation()</h3>

                <pre><code>// ========================================
// preventDefault() - previne ação padrão
// ========================================
const link = document.querySelector("a");

link.addEventListener("click", (e) => {
    e.preventDefault(); // Link não vai navegar
    console.log("Link clicado, mas não navegou!");
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Form não vai recarregar a página
    console.log("Form enviado via AJAX!");
});

// ========================================
// stopPropagation() - para propagação do evento
// ========================================
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

// Fechar popup ao clicar fora
overlay.addEventListener("click", () => {
    popup.style.display = "none";
});

// Não fechar se clicar dentro do popup
popup.addEventListener("click", (e) => {
    e.stopPropagation(); // Não chega ao overlay!
});

// ========================================
// stopImmediatePropagation() - para TODOS os listeners
// ========================================
botao.addEventListener("click", (e) => {
    console.log("Listener 1");
    e.stopImmediatePropagation(); // Para aqui!
});

botao.addEventListener("click", () => {
    console.log("Listener 2"); // Nunca executará
});</code></pre>

                <h3>✨ 6. Custom Events - Eventos Personalizados</h3>

                <pre><code>// ========================================
// Criando evento customizado
// ========================================
const evento = new CustomEvent("usuarioLogou", {
    detail: {
        nome: "João",
        email: "joao@email.com",
        timestamp: Date.now()
    }
});

// Escutando evento customizado
document.addEventListener("usuarioLogou", (e) => {
    console.log("Usuário logou:", e.detail.nome);
    console.log("Email:", e.detail.email);
    console.log("Horário:", new Date(e.detail.timestamp));
});

// Disparando evento
document.dispatchEvent(evento);

// ========================================
// Exemplo prático: Sistema de notificações
// ========================================
class NotificacaoService {
    static mostrar(mensagem, tipo = "info") {
        const evento = new CustomEvent("notificacao", {
            detail: { mensagem, tipo }
        });
        document.dispatchEvent(evento);
    }
}

// Listener
document.addEventListener("notificacao", (e) => {
    const { mensagem, tipo } = e.detail;
    console.log(\`[\${tipo.toUpperCase()}] \${mensagem}\`);
});

// Uso
NotificacaoService.mostrar("Bem-vindo!", "success");
NotificacaoService.mostrar("Erro ao salvar", "error");</code></pre>

                <h3>🗑️ 7. Removendo Event Listeners</h3>

                <pre><code>// ========================================
// Para remover, a função deve ter NOME
// ========================================

// ❌ NÃO FUNCIONA - função anônima
botao.addEventListener("click", () => {
    console.log("Clicou");
});
// Não dá para remover!

// ✅ FUNCIONA - função nomeada
function handleClick() {
    console.log("Clicou");
}

botao.addEventListener("click", handleClick);

// Remover depois
botao.removeEventListener("click", handleClick);

// ========================================
// Listener que se remove automaticamente
// ========================================
function clickUmaVez() {
    console.log("Clicado uma vez!");
    botao.removeEventListener("click", clickUmaVez);
}

botao.addEventListener("click", clickUmaVez);

// Ou use opção 'once' (ES6+)
botao.addEventListener("click", () => {
    console.log("Só executa uma vez!");
}, { once: true });</code></pre>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <div style="background: #f9fafb; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h4>Teste os Eventos:</h4>
                    <button class="demo-button" id="btn-demo-click">Clique Aqui</button>
                    <input type="text" id="input-demo-events" placeholder="Digite algo..." 
                           style="padding: 10px; margin: 10px; border: 2px solid #ddd; border-radius: 5px; font-size: 1em;">
                    <button class="demo-button" id="btn-demo-double">Duplo Clique</button>
                </div>

                <button class="demo-button" onclick="demoEventBasics()">Demo: Eventos Básicos</button>
                <button class="demo-button" onclick="demoEventDelegation()">Demo: Event Delegation</button>
                <button class="demo-button" onclick="demoCustomEvents()">Demo: Custom Events</button>
                
                <div id="events-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Perfeito!</strong><br>
                    Você aprendeu como fazer suas páginas interagirem com o usuário!
                    Eventos são essenciais para criar aplicações web interativas.
                    Próximo: <strong>DOM Manipulation</strong>!
                </div>
            </div>
        `
    }
};

// Continua...
