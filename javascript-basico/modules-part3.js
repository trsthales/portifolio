// Módulos Parte 3 - Nível 2 Intermediário

const MODULES_PART3 = {
    
    // ==========================================
    // MÓDULO: ITERAÇÕES
    // ==========================================
    iterations: {
        render: () => `
            <div class="section">
                <h2>🔁 Iterações em JavaScript</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Iterações são fundamentais para processar <strong>coleções de dados</strong>.
                    JavaScript oferece métodos poderosos que transformam, filtram e agregam arrays
                    de forma elegante e funcional.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Loops tradicionais (for, while, do...while)<br>
                    ✓ for...of e for...in<br>
                    ✓ forEach() - iterar sobre arrays<br>
                    ✓ map() - transformar elementos<br>
                    ✓ filter() - filtrar elementos<br>
                    ✓ reduce() - agregar valores<br>
                    ✓ find(), findIndex(), some(), every()<br>
                    ✓ Method chaining (encadeamento)<br>
                    ✓ Performance e quando usar cada método
                </div>

                <h3>📖 1. Loops Tradicionais</h3>

                <pre><code>// ========================================
// FOR LOOP - clássico
// ========================================
const numeros = [1, 2, 3, 4, 5];

// Sintaxe: for (inicialização; condição; incremento)
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Iteração reversa
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]); // 5, 4, 3, 2, 1
}

// Pular elementos (incremento de 2)
for (let i = 0; i < numeros.length; i += 2) {
    console.log(numeros[i]); // 1, 3, 5
}

// ========================================
// WHILE LOOP
// ========================================
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// Exemplo prático: encontrar primeiro número > 10
let i = 0;
const arr = [2, 5, 8, 12, 15, 3];
while (i < arr.length && arr[i] <= 10) {
    i++;
}
console.log("Primeiro número > 10:", arr[i]); // 12

// ========================================
// DO...WHILE - executa pelo menos uma vez
// ========================================
let tentativas = 0;
do {
    console.log("Tentativa:", tentativas);
    tentativas++;
} while (tentativas < 3);

// ========================================
// BREAK e CONTINUE
// ========================================
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // Para o loop
    if (i % 2 === 0) continue; // Pula para próxima iteração
    console.log(i); // Só impares: 1, 3
}

// Exemplo prático: busca com break
const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Pedro" }
];

function buscarUsuario(id) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === id) {
            return usuarios[i]; // Encontrou, para a busca
        }
    }
    return null; // Não encontrou
}

console.log(buscarUsuario(2)); // { id: 2, nome: "Maria" }</code></pre>

                <h3>🔄 2. for...of e for...in</h3>

                <pre><code>// ========================================
// FOR...OF - itera sobre VALORES (arrays, strings, sets, maps)
// ========================================
const frutas = ["maçã", "banana", "laranja"];

for (const fruta of frutas) {
    console.log(fruta); // maçã, banana, laranja
}

// Com strings
for (const letra of "JavaScript") {
    console.log(letra); // J, a, v, a, s, c, r, i, p, t
}

// Com índice usando entries()
for (const [indice, fruta] of frutas.entries()) {
    console.log(\`\${indice}: \${fruta}\`);
}
// 0: maçã
// 1: banana
// 2: laranja

// ========================================
// FOR...IN - itera sobre CHAVES (objetos, índices de arrays)
// ========================================
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (const chave in pessoa) {
    console.log(\`\${chave}: \${pessoa[chave]}\`);
}
// nome: João
// idade: 30
// cidade: São Paulo

// Com arrays (NÃO RECOMENDADO - use for...of)
const arr = ["a", "b", "c"];
for (const indice in arr) {
    console.log(indice, arr[indice]);
}
// Problema: 'indice' é string, não número!</code></pre>

                <div class="warning-box">
                    <strong>⚠️ for...of vs for...in:</strong><br>
                    • <strong>for...of:</strong> Use com arrays, strings, Sets, Maps (valores)<br>
                    • <strong>for...in:</strong> Use com objetos (chaves)<br>
                    <br>
                    ❌ Evite usar <span class="inline-code">for...in</span> com arrays!
                </div>

                <h3>🔄 3. forEach() - Iterar sobre Arrays</h3>

                <pre><code>const numeros = [1, 2, 3, 4, 5];

// ========================================
// Sintaxe básica
// ========================================
numeros.forEach(function(numero) {
    console.log(numero);
});

// Com arrow function (mais comum)
numeros.forEach(numero => {
    console.log(numero * 2);
});

// ========================================
// forEach com todos os parâmetros
// ========================================
// forEach(elemento, índice, arrayCompleto)
numeros.forEach((num, index, array) => {
    console.log(\`Posição \${index}: \${num}\`);
    console.log(\`Array completo:\`, array);
});

// ========================================
// Exemplo prático: exibir lista de usuários
// ========================================
const usuarios = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 }
];

usuarios.forEach((usuario, i) => {
    console.log(\`\${i + 1}. \${usuario.nome} - \${usuario.idade} anos\`);
});
// 1. João - 25 anos
// 2. Maria - 30 anos
// 3. Pedro - 22 anos

// ========================================
// Modificar elementos (cuidado!)
// ========================================
const valores = [1, 2, 3];
valores.forEach((valor, i, arr) => {
    arr[i] = valor * 2; // Modifica o array original
});
console.log(valores); // [2, 4, 6]</code></pre>

                <div class="info-box">
                    <strong>💡 forEach vs for:</strong><br>
                    • forEach é mais legível e declarativo<br>
                    • for é mais flexível (break, continue)<br>
                    • forEach não retorna valor (só executa)<br>
                    • Use forEach quando não precisa de break/continue
                </div>

                <h3>🗺️ 4. map() - Transformar Elementos</h3>

                <pre><code>// ========================================
// map() cria um NOVO array transformando cada elemento
// ========================================
const numeros = [1, 2, 3, 4, 5];

// Dobrar cada número
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]
console.log(numeros);  // [1, 2, 3, 4, 5] (original não muda!)

// Elevar ao quadrado
const quadrados = numeros.map(num => num ** 2);
console.log(quadrados); // [1, 4, 9, 16, 25]

// ========================================
// Transformar objetos
// ========================================
const usuarios = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 }
];

// Extrair apenas os nomes
const nomes = usuarios.map(user => user.nome);
console.log(nomes); // ["João", "Maria", "Pedro"]

// Adicionar propriedade
const usuariosComId = usuarios.map((user, index) => ({
    id: index + 1,
    ...user
}));
console.log(usuariosComId);
// [
//   { id: 1, nome: "João", idade: 25 },
//   { id: 2, nome: "Maria", idade: 30 },
//   { id: 3, nome: "Pedro", idade: 22 }
// ]

// ========================================
// Exemplo prático: formatar preços
// ========================================
const precos = [10.5, 25.99, 5.0, 100];

const precosFormatados = precos.map(preco => 
    \`R$ \${preco.toFixed(2)}\`
);
console.log(precosFormatados);
// ["R$ 10.50", "R$ 25.99", "R$ 5.00", "R$ 100.00"]

// ========================================
// map com parseFloat/parseInt
// ========================================
const strings = ["10", "20", "30"];
const numeros = strings.map(str => parseInt(str));
console.log(numeros); // [10, 20, 30]

// Atalho (cuidado com radix!)
const nums = strings.map(Number);
console.log(nums); // [10, 20, 30]</code></pre>

                <h3>🔍 5. filter() - Filtrar Elementos</h3>

                <pre><code>// ========================================
// filter() cria NOVO array apenas com elementos que passam no teste
// ========================================
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Apenas números pares
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// Apenas números > 5
const maioresQue5 = numeros.filter(num => num > 5);
console.log(maioresQue5); // [6, 7, 8, 9, 10]

// ========================================
// Filtrar objetos
// ========================================
const produtos = [
    { nome: "Notebook", preco: 3000, emEstoque: true },
    { nome: "Mouse", preco: 50, emEstoque: false },
    { nome: "Teclado", preco: 200, emEstoque: true },
    { nome: "Monitor", preco: 1200, emEstoque: false }
];

// Produtos em estoque
const disponiveis = produtos.filter(p => p.emEstoque);
console.log(disponiveis);
// [
//   { nome: "Notebook", preco: 3000, emEstoque: true },
//   { nome: "Teclado", preco: 200, emEstoque: true }
// ]

// Produtos baratos (< 500)
const baratos = produtos.filter(p => p.preco < 500);
console.log(baratos.map(p => p.nome)); // ["Mouse", "Teclado"]

// Múltiplas condições
const baratosDisponiveis = produtos.filter(p => 
    p.preco < 500 && p.emEstoque
);
console.log(baratosDisponiveis); // [{ nome: "Teclado", ... }]

// ========================================
// Remover duplicatas
// ========================================
const numeros = [1, 2, 2, 3, 4, 4, 5];
const unicos = numeros.filter((num, index, arr) => 
    arr.indexOf(num) === index
);
console.log(unicos); // [1, 2, 3, 4, 5]

// Ou use Set (mais simples)
const unicosSet = [...new Set(numeros)];
console.log(unicosSet); // [1, 2, 3, 4, 5]

// ========================================
// Remover valores falsy
// ========================================
const arr = [0, 1, false, 2, "", 3, null, undefined, 4];
const verdadeiros = arr.filter(Boolean);
console.log(verdadeiros); // [1, 2, 3, 4]</code></pre>

                <h3>📊 6. reduce() - Agregar Valores</h3>

                <pre><code>// ========================================
// reduce() reduz array a um ÚNICO valor
// Sintaxe: reduce((acumulador, valorAtual) => { }, valorInicial)
// ========================================

const numeros = [1, 2, 3, 4, 5];

// ========================================
// Soma de todos os números
// ========================================
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // 15

// Passo a passo:
// acc = 0, num = 1 → retorna 1 → acc vira 1
// acc = 1, num = 2 → retorna 3 → acc vira 3
// acc = 3, num = 3 → retorna 6 → acc vira 6
// acc = 6, num = 4 → retorna 10 → acc vira 10
// acc = 10, num = 5 → retorna 15 → retorno final

// ========================================
// Produto (multiplicação)
// ========================================
const produto = numeros.reduce((acc, num) => acc * num, 1);
console.log(produto); // 120 (1*2*3*4*5)

// ========================================
// Encontrar maior valor
// ========================================
const maior = numeros.reduce((max, num) => 
    num > max ? num : max
, numeros[0]);
console.log(maior); // 5

// Ou use Math.max
const maiorSimples = Math.max(...numeros);
console.log(maiorSimples); // 5

// ========================================
// Contar ocorrências
// ========================================
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});

console.log(contagem);
// { maçã: 3, banana: 2, laranja: 1 }

// ========================================
// Agrupar por propriedade
// ========================================
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 25 },
    { nome: "Ana", idade: 30 }
];

const porIdade = pessoas.reduce((acc, pessoa) => {
    const idade = pessoa.idade;
    if (!acc[idade]) {
        acc[idade] = [];
    }
    acc[idade].push(pessoa);
    return acc;
}, {});

console.log(porIdade);
// {
//   25: [{ nome: "João", idade: 25 }, { nome: "Pedro", idade: 25 }],
//   30: [{ nome: "Maria", idade: 30 }, { nome: "Ana", idade: 30 }]
// }

// ========================================
// Flatten array (achatar)
// ========================================
const aninhado = [[1, 2], [3, 4], [5, 6]];
const achatado = aninhado.reduce((acc, arr) => acc.concat(arr), []);
console.log(achatado); // [1, 2, 3, 4, 5, 6]

// Ou use flat() (mais simples)
const achatadoSimples = aninhado.flat();
console.log(achatadoSimples); // [1, 2, 3, 4, 5, 6]

// ========================================
// Calcular total de compras
// ========================================
const carrinho = [
    { produto: "Notebook", preco: 3000, quantidade: 1 },
    { produto: "Mouse", preco: 50, quantidade: 2 },
    { produto: "Teclado", preco: 200, quantidade: 1 }
];

const total = carrinho.reduce((acc, item) => 
    acc + (item.preco * item.quantidade)
, 0);

console.log(\`Total: R$ \${total}\`); // Total: R$ 3300</code></pre>

                <div class="success-box">
                    <strong>✅ reduce() é PODEROSO!</strong><br>
                    Pode fazer qualquer operação que map/filter fazem, mas é mais complexo.
                    Use reduce quando precisar transformar array em valor único ou objeto.
                </div>

                <h3>🔍 7. find(), findIndex(), some(), every()</h3>

                <pre><code>const produtos = [
    { id: 1, nome: "Notebook", preco: 3000 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Teclado", preco: 200 }
];

// ========================================
// find() - retorna PRIMEIRO elemento que passa no teste
// ========================================
const produtoEncontrado = produtos.find(p => p.id === 2);
console.log(produtoEncontrado); // { id: 2, nome: "Mouse", preco: 50 }

const caro = produtos.find(p => p.preco > 1000);
console.log(caro); // { id: 1, nome: "Notebook", preco: 3000 }

const naoExiste = produtos.find(p => p.id === 99);
console.log(naoExiste); // undefined

// ========================================
// findIndex() - retorna ÍNDICE do primeiro elemento
// ========================================
const indice = produtos.findIndex(p => p.id === 2);
console.log(indice); // 1

const indiceNaoExiste = produtos.findIndex(p => p.id === 99);
console.log(indiceNaoExiste); // -1

// ========================================
// some() - verifica se PELO MENOS UM passa no teste
// ========================================
const temBarato = produtos.some(p => p.preco < 100);
console.log(temBarato); // true (Mouse é 50)

const temMuitoCaro = produtos.some(p => p.preco > 5000);
console.log(temMuitoCaro); // false

// Exemplo: verificar se há número negativo
const numeros = [1, 2, 3, 4, 5];
const temNegativo = numeros.some(n => n < 0);
console.log(temNegativo); // false

// ========================================
// every() - verifica se TODOS passam no teste
// ========================================
const todosCaros = produtos.every(p => p.preco > 1000);
console.log(todosCaros); // false

const todosPositivos = numeros.every(n => n > 0);
console.log(todosPositivos); // true

// Exemplo: validar formulário
const campos = [
    { nome: "email", preenchido: true },
    { nome: "senha", preenchido: true },
    { nome: "nome", preenchido: false }
];

const formularioValido = campos.every(c => c.preenchido);
console.log(formularioValido); // false</code></pre>

                <h3>🔗 8. Method Chaining - Encadeamento</h3>

                <pre><code>// ========================================
// Combinar múltiplos métodos
// ========================================
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pegar números pares, dobrar, e somar
const resultado = numeros
    .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]
    .map(n => n * 2)           // [4, 8, 12, 16, 20]
    .reduce((a, b) => a + b);  // 60

console.log(resultado); // 60

// ========================================
// Exemplo complexo: produtos
// ========================================
const produtos = [
    { nome: "Notebook", preco: 3000, categoria: "eletrônicos", emEstoque: true },
    { nome: "Mouse", preco: 50, categoria: "eletrônicos", emEstoque: true },
    { nome: "Livro JS", preco: 45, categoria: "livros", emEstoque: false },
    { nome: "Teclado", preco: 200, categoria: "eletrônicos", emEstoque: true },
    { nome: "Curso Online", preco: 150, categoria: "cursos", emEstoque: true }
];

// Buscar eletrônicos em estoque, mapear nomes, ordenar
const eletronicosDisponiveis = produtos
    .filter(p => p.categoria === "eletrônicos")
    .filter(p => p.emEstoque)
    .map(p => p.nome)
    .sort();

console.log(eletronicosDisponiveis);
// ["Mouse", "Notebook", "Teclado"]

// Calcular valor total de eletrônicos
const totalEletronicos = produtos
    .filter(p => p.categoria === "eletrônicos" && p.emEstoque)
    .reduce((total, p) => total + p.preco, 0);

console.log(\`Total: R$ \${totalEletronicos}\`); // Total: R$ 3250

// ========================================
// Pipeline de transformação
// ========================================
const usuarios = [
    { nome: "joão silva", idade: 25, ativo: true },
    { nome: "maria santos", idade: 17, ativo: false },
    { nome: "pedro costa", idade: 30, ativo: true }
];

const usuariosFormatados = usuarios
    .filter(u => u.ativo)               // Apenas ativos
    .filter(u => u.idade >= 18)         // Maiores de idade
    .map(u => ({                        // Formatar
        ...u,
        nome: u.nome
            .split(" ")
            .map(n => n[0].toUpperCase() + n.slice(1))
            .join(" ")
    }))
    .sort((a, b) => a.idade - b.idade); // Ordenar por idade

console.log(usuariosFormatados);
// [
//   { nome: "João Silva", idade: 25, ativo: true },
//   { nome: "Pedro Costa", idade: 30, ativo: true }
// ]</code></pre>

                <div class="info-box">
                    <strong>💡 Dicas de Method Chaining:</strong><br>
                    • Quebre em múltiplas linhas para legibilidade<br>
                    • filter antes de map (performance)<br>
                    • Use const para cada etapa se precisar debugar<br>
                    • Cuidado com performance em arrays grandes
                </div>

                <h3>⚡ 9. Performance - Quando Usar Cada Método</h3>

                <pre><code>// ========================================
// Performance: for vs forEach vs map
// ========================================

const arr = Array.from({ length: 1000000 }, (_, i) => i);

// FOR - Mais rápido
console.time("for");
let soma1 = 0;
for (let i = 0; i < arr.length; i++) {
    soma1 += arr[i];
}
console.timeEnd("for"); // ~2ms

// forEach - Médio
console.time("forEach");
let soma2 = 0;
arr.forEach(n => soma2 += n);
console.timeEnd("forEach"); // ~15ms

// reduce - Mais lento (mas mais expressivo)
console.time("reduce");
const soma3 = arr.reduce((a, b) => a + b, 0);
console.timeEnd("reduce"); // ~25ms</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Método</th>
                            <th>Quando Usar</th>
                            <th>Performance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>for</strong></td>
                            <td>Precisa break/continue, máxima performance</td>
                            <td>⚡⚡⚡</td>
                        </tr>
                        <tr>
                            <td><strong>forEach</strong></td>
                            <td>Iterar sem retorno, efeitos colaterais</td>
                            <td>⚡⚡</td>
                        </tr>
                        <tr>
                            <td><strong>map</strong></td>
                            <td>Transformar cada elemento</td>
                            <td>⚡⚡</td>
                        </tr>
                        <tr>
                            <td><strong>filter</strong></td>
                            <td>Selecionar elementos por critério</td>
                            <td>⚡⚡</td>
                        </tr>
                        <tr>
                            <td><strong>reduce</strong></td>
                            <td>Agregar em valor único/objeto</td>
                            <td>⚡</td>
                        </tr>
                        <tr>
                            <td><strong>find</strong></td>
                            <td>Buscar primeiro elemento</td>
                            <td>⚡⚡⚡</td>
                        </tr>
                        <tr>
                            <td><strong>some</strong></td>
                            <td>Verificar se existe pelo menos um</td>
                            <td>⚡⚡⚡</td>
                        </tr>
                        <tr>
                            <td><strong>every</strong></td>
                            <td>Verificar se todos passam</td>
                            <td>⚡⚡⚡</td>
                        </tr>
                    </tbody>
                </table>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoMap()">Demo: map()</button>
                <button class="demo-button" onclick="demoFilter()">Demo: filter()</button>
                <button class="demo-button" onclick="demoReduce()">Demo: reduce()</button>
                <button class="demo-button" onclick="demoChaining()">Demo: Chaining</button>
                
                <div id="iterations-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Excelente!</strong><br>
                    Você dominou os métodos de iteração! Esses são os métodos mais usados
                    no JavaScript moderno. Pratique combinando-os em diferentes cenários.
                    Próximo: <strong>Tratamento de Erros</strong>!
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: ERROS
    // ==========================================
    errors: {
        render: () => `
            <div class="section">
                <h2>🚨 Tratamento de Erros em JavaScript</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Erros são inevitáveis em programação. O importante é saber <strong>como lidar com eles</strong>
                    de forma elegante, informar o usuário adequadamente e facilitar o debugging.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Try/Catch/Finally - blocos de tratamento<br>
                    ✓ Throw - lançar erros personalizados<br>
                    ✓ Tipos de erros nativos<br>
                    ✓ Custom Errors - criar classes de erro<br>
                    ✓ Error handling em async/await<br>
                    ✓ Stack traces e debugging<br>
                    ✓ Boas práticas de error handling<br>
                    ✓ Validação e prevenção de erros
                </div>

                <h3>📖 1. Try/Catch/Finally</h3>

                <pre><code>// ========================================
// TRY/CATCH - estrutura básica
// ========================================
try {
    // Código que PODE gerar erro
    const resultado = operacaoArriscada();
    console.log(resultado);
} catch (erro) {
    // Código executado SE houver erro
    console.error("Erro capturado:", erro.message);
}

// Exemplo prático: JSON inválido
try {
    const jsonInvalido = '{ nome: "João" }'; // Falta aspas nas chaves
    const objeto = JSON.parse(jsonInvalido);
} catch (erro) {
    console.error("JSON inválido:", erro.message);
    // "Unexpected token n in JSON at position 2"
}

// ========================================
// FINALLY - sempre executa (com ou sem erro)
// ========================================
let arquivo;
try {
    arquivo = abrirArquivo("dados.txt");
    const dados = arquivo.ler();
    processar(dados);
} catch (erro) {
    console.error("Erro ao processar arquivo:", erro);
} finally {
    // Sempre fecha o arquivo, mesmo com erro
    if (arquivo) {
        arquivo.fechar();
    }
    console.log("Cleanup executado");
}

// ========================================
// Exemplo completo: requisição HTTP
// ========================================
function buscarUsuario(id) {
    try {
        if (!id) {
            throw new Error("ID é obrigatório");
        }
        
        const usuario = bancoDeDados.buscar(id);
        
        if (!usuario) {
            throw new Error(\`Usuário \${id} não encontrado\`);
        }
        
        return usuario;
        
    } catch (erro) {
        console.error("Erro:", erro.message);
        return null;
    } finally {
        console.log("Busca finalizada");
    }
}</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Cuidado com try/catch:</strong><br>
                    • Não use try/catch em todo lugar (afeta performance)<br>
                    • Use apenas onde erros são esperados<br>
                    • Prefira validação a capturar erros<br>
                    • Nunca deixe catch vazio!
                </div>

                <h3>🎯 2. Throw - Lançando Erros</h3>

                <pre><code>// ========================================
// THROW - lançar erro customizado
// ========================================

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não permitida!");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
} catch (erro) {
    console.error(erro.message); // "Divisão por zero não permitida!"
}

// ========================================
// Validação de parâmetros
// ========================================
function criarUsuario(nome, email, idade) {
    // Validar nome
    if (!nome || typeof nome !== 'string') {
        throw new Error("Nome inválido");
    }
    
    // Validar email
    if (!email || !email.includes('@')) {
        throw new Error("Email inválido");
    }
    
    // Validar idade
    if (idade < 0 || idade > 150) {
        throw new Error("Idade inválida");
    }
    
    return { nome, email, idade };
}

try {
    const usuario = criarUsuario("João", "joao@email.com", 25);
    console.log("Usuário criado:", usuario);
} catch (erro) {
    console.error("Erro ao criar usuário:", erro.message);
}

// ========================================
// Throw com diferentes tipos
// ========================================

// Throw com string (não recomendado)
throw "Erro simples"; // ❌ Evite

// Throw com objeto Error (recomendado)
throw new Error("Mensagem do erro"); // ✅ Melhor

// Throw com objeto customizado
throw { 
    codigo: 404, 
    mensagem: "Não encontrado" 
};

// ========================================
// Exemplo prático: validar formulário
// ========================================
function validarFormulario(dados) {
    const erros = [];
    
    if (!dados.nome) {
        erros.push("Nome é obrigatório");
    }
    
    if (!dados.email || !dados.email.includes('@')) {
        erros.push("Email inválido");
    }
    
    if (dados.senha && dados.senha.length < 6) {
        erros.push("Senha deve ter no mínimo 6 caracteres");
    }
    
    if (erros.length > 0) {
        throw new Error(erros.join(", "));
    }
    
    return true;
}

try {
    validarFormulario({ 
        nome: "", 
        email: "invalido", 
        senha: "123" 
    });
} catch (erro) {
    console.error("Validação falhou:", erro.message);
    // "Nome é obrigatório, Email inválido, Senha deve ter no mínimo 6 caracteres"
}</code></pre>

                <h3>🏷️ 3. Tipos de Erros Nativos</h3>

                <pre><code>// ========================================
// ERROR - erro genérico (base para todos)
// ========================================
throw new Error("Erro genérico");

// ========================================
// REFERENCEERROR - variável não definida
// ========================================
try {
    console.log(variavelInexistente);
} catch (erro) {
    console.log(erro.name); // "ReferenceError"
    console.log(erro.message); // "variavelInexistente is not defined"
}

// ========================================
// TYPEERROR - tipo incorreto
// ========================================
try {
    const numero = 42;
    numero.toUpperCase(); // Número não tem toUpperCase
} catch (erro) {
    console.log(erro.name); // "TypeError"
    console.log(erro.message); // "numero.toUpperCase is not a function"
}

// ========================================
// SYNTAXERROR - erro de sintaxe
// ========================================
try {
    eval("const x = ;"); // Sintaxe inválida
} catch (erro) {
    console.log(erro.name); // "SyntaxError"
}

// ========================================
// RANGEERROR - valor fora do range permitido
// ========================================
try {
    const arr = new Array(-1); // Tamanho negativo
} catch (erro) {
    console.log(erro.name); // "RangeError"
}

try {
    const num = (123).toFixed(200); // Decimais demais
} catch (erro) {
    console.log(erro.name); // "RangeError"
}

// ========================================
// URIERROR - erro ao codificar/decodificar URI
// ========================================
try {
    decodeURIComponent('%'); // % inválido
} catch (erro) {
    console.log(erro.name); // "URIError"
}

// ========================================
// Tabela de erros nativos
// ========================================</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Quando Ocorre</th>
                            <th>Exemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Error</strong></td>
                            <td>Erro genérico</td>
                            <td>throw new Error("msg")</td>
                        </tr>
                        <tr>
                            <td><strong>ReferenceError</strong></td>
                            <td>Variável não existe</td>
                            <td>console.log(x)</td>
                        </tr>
                        <tr>
                            <td><strong>TypeError</strong></td>
                            <td>Tipo incorreto</td>
                            <td>null.toString()</td>
                        </tr>
                        <tr>
                            <td><strong>SyntaxError</strong></td>
                            <td>Sintaxe inválida</td>
                            <td>JSON.parse("bad")</td>
                        </tr>
                        <tr>
                            <td><strong>RangeError</strong></td>
                            <td>Valor fora do range</td>
                            <td>new Array(-1)</td>
                        </tr>
                        <tr>
                            <td><strong>URIError</strong></td>
                            <td>URI malformada</td>
                            <td>decodeURI('%')</td>
                        </tr>
                    </tbody>
                </table>

                <h3>🎨 4. Custom Errors - Erros Personalizados</h3>

                <pre><code>// ========================================
// Criar classe de erro personalizada
// ========================================
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = "DatabaseError";
        this.query = query;
        this.timestamp = new Date();
    }
}

class NotFoundError extends Error {
    constructor(recurso, id) {
        super(\`\${recurso} com ID \${id} não encontrado\`);
        this.name = "NotFoundError";
        this.recurso = recurso;
        this.id = id;
        this.statusCode = 404;
    }
}

// ========================================
// Usando erros customizados
// ========================================
function buscarProduto(id) {
    if (!id) {
        throw new ValidationError("ID é obrigatório");
    }
    
    const produto = bancoDeDados.buscar(id);
    
    if (!produto) {
        throw new NotFoundError("Produto", id);
    }
    
    return produto;
}

try {
    const produto = buscarProduto(null);
} catch (erro) {
    if (erro instanceof ValidationError) {
        console.error("Erro de validação:", erro.message);
    } else if (erro instanceof NotFoundError) {
        console.error(\`[\${erro.statusCode}] \${erro.message}\`);
        console.log("Recurso:", erro.recurso);
        console.log("ID:", erro.id);
    } else {
        console.error("Erro desconhecido:", erro);
    }
}

// ========================================
// Hierarquia de erros
// ========================================
class ApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class UserError extends ApplicationError {
    constructor(message, userId) {
        super(message);
        this.userId = userId;
    }
}

class AuthenticationError extends UserError {
    constructor(userId) {
        super("Falha na autenticação", userId);
        this.statusCode = 401;
    }
}

class AuthorizationError extends UserError {
    constructor(userId, action) {
        super(\`Usuário não autorizado a \${action}\`, userId);
        this.statusCode = 403;
        this.action = action;
    }
}

// Uso
try {
    throw new AuthorizationError(123, "deletar post");
} catch (erro) {
    if (erro instanceof UserError) {
        console.log("Erro relacionado a usuário:", erro.userId);
    }
    console.error(\`[\${erro.statusCode}] \${erro.message}\`);
}</code></pre>

                <h3>⚡ 5. Error Handling em Async/Await</h3>

                <pre><code>// ========================================
// Try/Catch com async/await
// ========================================
async function buscarDados() {
    try {
        const response = await fetch('https://api.exemplo.com/dados');
        
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        
        const dados = await response.json();
        return dados;
        
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro.message);
        throw erro; // Re-lança o erro
    }
}

// Usando a função
async function main() {
    try {
        const dados = await buscarDados();
        console.log(dados);
    } catch (erro) {
        console.error("Erro na main:", erro);
    }
}

// ========================================
// Múltiplas operações assíncronas
// ========================================
async function processarUsuario(id) {
    try {
        const usuario = await buscarUsuario(id);
        const posts = await buscarPosts(usuario.id);
        const comentarios = await buscarComentarios(posts);
        
        return { usuario, posts, comentarios };
        
    } catch (erro) {
        if (erro instanceof NotFoundError) {
            console.error("Recurso não encontrado:", erro.message);
            return null;
        }
        
        if (erro.name === "NetworkError") {
            console.error("Erro de rede, tente novamente");
            return null;
        }
        
        // Erro desconhecido - relançar
        throw erro;
    }
}

// ========================================
// Promise.all com error handling
// ========================================
async function buscarTudo() {
    try {
        const [usuarios, produtos, pedidos] = await Promise.all([
            fetch('/api/usuarios').then(r => r.json()),
            fetch('/api/produtos').then(r => r.json()),
            fetch('/api/pedidos').then(r => r.json())
        ]);
        
        return { usuarios, produtos, pedidos };
        
    } catch (erro) {
        console.error("Erro em uma das requisições:", erro);
        throw erro;
    }
}

// Promise.allSettled para capturar todos os erros
async function buscarComFallback() {
    const resultados = await Promise.allSettled([
        fetch('/api/usuarios').then(r => r.json()),
        fetch('/api/produtos').then(r => r.json()),
        fetch('/api/pedidos').then(r => r.json())
    ]);
    
    const dados = {};
    
    resultados.forEach((resultado, i) => {
        const chave = ['usuarios', 'produtos', 'pedidos'][i];
        
        if (resultado.status === 'fulfilled') {
            dados[chave] = resultado.value;
        } else {
            console.error(\`Erro ao buscar \${chave}:\`, resultado.reason);
            dados[chave] = []; // Fallback
        }
    });
    
    return dados;
}</code></pre>

                <h3>🔍 6. Stack Trace e Debugging</h3>

                <pre><code>// ========================================
// Analisar stack trace
// ========================================
function funcaoA() {
    funcaoB();
}

function funcaoB() {
    funcaoC();
}

function funcaoC() {
    throw new Error("Algo deu errado!");
}

try {
    funcaoA();
} catch (erro) {
    console.error(erro.message); // "Algo deu errado!"
    console.error(erro.stack);
    /*
    Error: Algo deu errado!
        at funcaoC (arquivo.js:10)
        at funcaoB (arquivo.js:6)
        at funcaoA (arquivo.js:2)
    */
}

// ========================================
// Error.stackTraceLimit
// ========================================
Error.stackTraceLimit = 20; // Padrão é 10

// ========================================
// Capturar informações do erro
// ========================================
function logError(erro) {
    const info = {
        message: erro.message,
        name: erro.name,
        stack: erro.stack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
    };
    
    console.error("Erro detalhado:", JSON.stringify(info, null, 2));
    
    // Enviar para serviço de logging
    // enviarParaSentry(info);
}</code></pre>

                <h3>✅ 7. Boas Práticas</h3>

                <div class="key-points">
                    <h4>📋 Checklist de Error Handling:</h4>
                    <ul style="margin-left: 25px;">
                        <li><strong>✅ Seja específico:</strong> Use erros customizados para diferentes situações</li>
                        <li><strong>✅ Mensagens claras:</strong> Erro deve explicar O QUE e ONDE aconteceu</li>
                        <li><strong>✅ Não silencie erros:</strong> Nunca deixe catch vazio</li>
                        <li><strong>✅ Log adequado:</strong> Console.error para desenvolvimento, serviço para produção</li>
                        <li><strong>✅ Validação primeiro:</strong> Previna erros em vez de só capturá-los</li>
                        <li><strong>✅ Cleanup no finally:</strong> Libere recursos sempre</li>
                        <li><strong>✅ Re-lance quando necessário:</strong> throw erro se não puder tratar</li>
                        <li><strong>❌ Evite try/catch excessivo:</strong> Afeta performance</li>
                    </ul>
                </div>

                <pre><code>// ✅ BOM
function sacar(conta, valor) {
    // Validação preventiva
    if (valor <= 0) {
        throw new ValidationError("Valor deve ser positivo");
    }
    
    if (valor > conta.saldo) {
        throw new InsufficientFundsError(valor, conta.saldo);
    }
    
    conta.saldo -= valor;
    return conta.saldo;
}

// ❌ RUIM
function sacar(conta, valor) {
    try {
        conta.saldo -= valor;
        return conta.saldo;
    } catch (erro) {
        // Catch vazio - nunca faça isso!
    }
}</code></pre>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoTryCatch()">Demo: Try/Catch</button>
                <button class="demo-button" onclick="demoCustomError()">Demo: Custom Errors</button>
                <button class="demo-button" onclick="demoErrorTypes()">Demo: Tipos de Erros</button>
                
                <div id="errors-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Ótimo trabalho!</strong><br>
                    Você aprendeu a lidar com erros como um profissional! Error handling
                    adequado é o que separa código amador de código profissional.
                    Próximo: <strong>Classes e OOP</strong>!
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: CLASSES
    // ==========================================
    classes: {
        render: () => `
            <div class="section">
                <h2>🏛️ Classes e Programação Orientada a Objetos</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Classes são <strong>blueprints (moldes) para criar objetos</strong>. Introduzidas no ES6,
                    elas tornam a POO em JavaScript mais clara e similar a outras linguagens como Java e C#.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Sintaxe de classes ES6<br>
                    ✓ Constructor - inicialização de objetos<br>
                    ✓ Métodos de instância e estáticos<br>
                    ✓ Herança com extends e super<br>
                    ✓ Getters e Setters<br>
                    ✓ Campos privados (#)<br>
                    ✓ Classes abstratas e polimorfismo<br>
                    ✓ Padrões de design com classes
                </div>

                <h3>📖 1. Sintaxe Básica de Classes</h3>

                <pre><code>// ========================================
// ANTES DO ES6 - função construtora
// ========================================
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.apresentar = function() {
    return \`Olá, sou \${this.nome} e tenho \${this.idade} anos\`;
};

const pessoa1 = new Pessoa("João", 25);

// ========================================
// COM ES6 - sintaxe de classe (mais limpa)
// ========================================
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    apresentar() {
        return \`Olá, sou \${this.nome} e tenho \${this.idade} anos\`;
    }
    
    envelhecer() {
        this.idade++;
    }
}

const pessoa2 = new Pessoa("Maria", 30);
console.log(pessoa2.apresentar()); // "Olá, sou Maria e tenho 30 anos"
pessoa2.envelhecer();
console.log(pessoa2.idade); // 31

// ========================================
// Exemplo completo: Classe Produto
// ========================================
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    
    // Método de instância
    vender(quantidade) {
        if (quantidade > this.estoque) {
            throw new Error("Estoque insuficiente");
        }
        this.estoque -= quantidade;
        return this.calcularTotal(quantidade);
    }
    
    calcularTotal(quantidade) {
        return this.preco * quantidade;
    }
    
    reporEstoque(quantidade) {
        this.estoque += quantidade;
    }
    
    // toString customizado
    toString() {
        return \`\${this.nome} - R$ \${this.preco} (\${this.estoque} un.)\`;
    }
}

const notebook = new Produto("Notebook Dell", 3500, 10);
console.log(notebook.toString()); // "Notebook Dell - R$ 3500 (10 un.)"
const total = notebook.vender(2);
console.log(total); // 7000
console.log(notebook.estoque); // 8</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Importante:</strong><br>
                    • Classes NÃO sofrem hoisting - devem ser declaradas antes de usar<br>
                    • Sempre use 'new' para criar instâncias<br>
                    • Métodos não precisam da palavra 'function'<br>
                    • 'this' dentro de métodos refere-se à instância
                </div>

                <h3>🎯 2. Constructor - Inicialização</h3>

                <pre><code>// ========================================
// Constructor - método especial executado ao criar instância
// ========================================
class Usuario {
    constructor(nome, email) {
        // Validação no constructor
        if (!nome || !email) {
            throw new Error("Nome e email são obrigatórios");
        }
        
        // Inicializar propriedades
        this.nome = nome;
        this.email = email;
        this.dataCriacao = new Date();
        this.ativo = true;
        this.tentativasLogin = 0;
    }
    
    login(senha) {
        // Lógica de login...
        this.tentativasLogin++;
    }
}

const usuario = new Usuario("João", "joao@email.com");

// ========================================
// Constructor com valores padrão
// ========================================
class Configuracao {
    constructor(opcoes = {}) {
        this.tema = opcoes.tema || 'light';
        this.idioma = opcoes.idioma || 'pt-BR';
        this.notificacoes = opcoes.notificacoes ?? true; // Null coalescing
        this.volume = opcoes.volume || 50;
    }
}

const config1 = new Configuracao();
console.log(config1.tema); // "light"

const config2 = new Configuracao({ tema: 'dark', volume: 80 });
console.log(config2.tema); // "dark"
console.log(config2.volume); // 80

// ========================================
// Constructor com destructuring
// ========================================
class Endereco {
    constructor({ rua, numero, cidade, estado, cep }) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
    
    toString() {
        return \`\${this.rua}, \${this.numero} - \${this.cidade}/\${this.estado}\`;
    }
}

const endereco = new Endereco({
    rua: "Av. Paulista",
    numero: 1000,
    cidade: "São Paulo",
    estado: "SP",
    cep: "01310-100"
});

console.log(endereco.toString());</code></pre>

                <h3>⚡ 3. Métodos Estáticos vs Instância</h3>

                <pre><code>// ========================================
// MÉTODOS DE INSTÂNCIA - chamados na instância
// ========================================
class Calculadora {
    constructor() {
        this.historico = [];
    }
    
    // Método de instância
    somar(a, b) {
        const resultado = a + b;
        this.historico.push(\`\${a} + \${b} = \${resultado}\`);
        return resultado;
    }
}

const calc = new Calculadora();
calc.somar(5, 3); // Precisa de instância

// ========================================
// MÉTODOS ESTÁTICOS - chamados na classe
// ========================================
class Matematica {
    // Método estático - não precisa de instância
    static somar(a, b) {
        return a + b;
    }
    
    static multiplicar(a, b) {
        return a * b;
    }
    
    static fatorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * Matematica.fatorial(n - 1);
    }
    
    static PI = 3.14159; // Propriedade estática
}

// Uso direto na classe (sem 'new')
console.log(Matematica.somar(10, 5)); // 15
console.log(Matematica.fatorial(5)); // 120
console.log(Matematica.PI); // 3.14159

// ========================================
// Exemplo prático: Classe utilitária
// ========================================
class StringUtils {
    static capitalizar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
    static reverter(str) {
        return str.split('').reverse().join('');
    }
    
    static contarPalavras(str) {
        return str.trim().split(/\s+/).length;
    }
    
    static slugify(str) {
        return str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
    }
}

console.log(StringUtils.capitalizar("javascript")); // "Javascript"
console.log(StringUtils.slugify("Olá Mundo!")); // "ola-mundo"

// ========================================
// Exemplo: Factory pattern com static
// ========================================
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Factory method estático
    static criarAdulto(nome) {
        return new Pessoa(nome, 18);
    }
    
    static criarIdoso(nome) {
        return new Pessoa(nome, 65);
    }
    
    static fromJSON(json) {
        const dados = JSON.parse(json);
        return new Pessoa(dados.nome, dados.idade);
    }
}

const adulto = Pessoa.criarAdulto("Carlos");
const pessoa = Pessoa.fromJSON('{"nome":"Ana","idade":25}');</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Aspecto</th>
                            <th>Método de Instância</th>
                            <th>Método Estático</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Declaração</strong></td>
                            <td>metodo() { }</td>
                            <td>static metodo() { }</td>
                        </tr>
                        <tr>
                            <td><strong>Chamada</strong></td>
                            <td>obj.metodo()</td>
                            <td>Classe.metodo()</td>
                        </tr>
                        <tr>
                            <td><strong>Acesso ao 'this'</strong></td>
                            <td>Sim (instância)</td>
                            <td>Sim (classe)</td>
                        </tr>
                        <tr>
                            <td><strong>Precisa de 'new'</strong></td>
                            <td>Sim</td>
                            <td>Não</td>
                        </tr>
                        <tr>
                            <td><strong>Uso típico</strong></td>
                            <td>Ações do objeto</td>
                            <td>Utilitários, factories</td>
                        </tr>
                    </tbody>
                </table>

                <h3>🌳 4. Herança - Extends e Super</h3>

                <pre><code>// ========================================
// EXTENDS - herdar de outra classe
// ========================================
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    
    fazerSom() {
        return "Som genérico";
    }
    
    dormir() {
        return \`\${this.nome} está dormindo\`;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama constructor da classe pai
        this.raca = raca;
    }
    
    // Sobrescrever (override) método
    fazerSom() {
        return "Au au!";
    }
    
    // Método adicional
    abanarRabo() {
        return \`\${this.nome} está feliz!\`;
    }
}

const rex = new Cachorro("Rex", "Labrador");
console.log(rex.fazerSom()); // "Au au!"
console.log(rex.dormir()); // "Rex está dormindo" (herdado)
console.log(rex.abanarRabo()); // "Rex está feliz!"

// ========================================
// SUPER - acessar classe pai
// ========================================
class Gato extends Animal {
    constructor(nome, cor) {
        super(nome); // Obrigatório antes de usar 'this'
        this.cor = cor;
    }
    
    fazerSom() {
        const somPai = super.fazerSom(); // Chamar método do pai
        return "Miau!";
    }
    
    apresentar() {
        // Combinar com método do pai
        return \`\${this.nome} é um gato \${this.cor}. \${super.dormir()}\`;
    }
}

const felix = new Gato("Felix", "preto");
console.log(felix.apresentar());

// ========================================
// Exemplo prático: Sistema de usuários
// ========================================
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
        this.dataCriacao = new Date();
    }
    
    login() {
        return \`\${this.nome} fez login\`;
    }
    
    getPermissoes() {
        return ['ler'];
    }
}

class Admin extends Usuario {
    constructor(nome, email, nivel) {
        super(nome, email);
        this.nivel = nivel;
    }
    
    getPermissoes() {
        return [...super.getPermissoes(), 'escrever', 'deletar', 'admin'];
    }
    
    banirUsuario(usuario) {
        return \`Admin \${this.nome} baniu \${usuario.nome}\`;
    }
}

class Moderador extends Usuario {
    constructor(nome, email, area) {
        super(nome, email);
        this.area = area;
    }
    
    getPermissoes() {
        return [...super.getPermissoes(), 'escrever', 'moderar'];
    }
}

const admin = new Admin("João", "joao@admin.com", 3);
console.log(admin.getPermissoes()); 
// ['ler', 'escrever', 'deletar', 'admin']

// ========================================
// Verificar instanceof
// ========================================
console.log(admin instanceof Admin); // true
console.log(admin instanceof Usuario); // true (herança)
console.log(admin instanceof Object); // true (tudo herda de Object)</code></pre>

                <h3>🎨 5. Getters e Setters</h3>

                <pre><code>// ========================================
// GET - criar propriedade computada
// ========================================
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    // Getter - acessa como propriedade
    get nomeCompleto() {
        return \`\${this.nome} \${this.sobrenome}\`;
    }
    
    get iniciais() {
        return \`\${this.nome[0]}. \${this.sobrenome[0]}.\`;
    }
}

const pessoa = new Pessoa("João", "Silva");
console.log(pessoa.nomeCompleto); // "João Silva" (sem parênteses!)
console.log(pessoa.iniciais); // "J. S."

// ========================================
// SET - validar ao atribuir valor
// ========================================
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco; // Underscore indica "privado por convenção"
    }
    
    get preco() {
        return this._preco;
    }
    
    set preco(valor) {
        if (valor < 0) {
            throw new Error("Preço não pode ser negativo");
        }
        this._preco = valor;
    }
    
    get precoFormatado() {
        return \`R$ \${this._preco.toFixed(2)}\`;
    }
}

const prod = new Produto("Notebook", 3000);
console.log(prod.preco); // 3000
prod.preco = 3500; // Usa o setter
console.log(prod.precoFormatado); // "R$ 3500.00"

// prod.preco = -100; // ❌ Erro: "Preço não pode ser negativo"

// ========================================
// Exemplo completo: Conta Bancária
// ========================================
class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this._saldo = saldoInicial;
        this._transacoes = [];
    }
    
    // Getter - não permite alterar saldo diretamente
    get saldo() {
        return this._saldo;
    }
    
    get extrato() {
        return this._transacoes.join('\n');
    }
    
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("Valor deve ser positivo");
        }
        this._saldo += valor;
        this._transacoes.push(\`+ R$ \${valor}\`);
    }
    
    sacar(valor) {
        if (valor > this._saldo) {
            throw new Error("Saldo insuficiente");
        }
        this._saldo -= valor;
        this._transacoes.push(\`- R$ \${valor}\`);
    }
}

const conta = new ContaBancaria("Maria", 1000);
console.log(conta.saldo); // 1000 (getter)
// conta.saldo = 5000; // ❌ Não funciona! (sem setter)
conta.depositar(500); // ✅ Jeito correto
console.log(conta.saldo); // 1500</code></pre>

                <h3>🔒 6. Campos Privados (#)</h3>

                <pre><code>// ========================================
// # - campos verdadeiramente privados (ES2022)
// ========================================
class Usuario {
    // Campos privados (# antes do nome)
    #senha;
    #tentativasLogin = 0;
    
    constructor(nome, senha) {
        this.nome = nome; // Público
        this.#senha = senha; // Privado
    }
    
    // Método privado
    #validarSenha(senha) {
        return this.#senha === senha;
    }
    
    login(senha) {
        if (this.#validarSenha(senha)) {
            this.#tentativasLogin = 0;
            return "Login bem-sucedido!";
        } else {
            this.#tentativasLogin++;
            return \`Senha incorreta. Tentativas: \${this.#tentativasLogin}\`;
        }
    }
    
    alterarSenha(senhaAntiga, novaSenha) {
        if (!this.#validarSenha(senhaAntiga)) {
            throw new Error("Senha atual incorreta");
        }
        this.#senha = novaSenha;
    }
}

const user = new Usuario("João", "123456");
console.log(user.nome); // "João" ✅
// console.log(user.#senha); // ❌ SyntaxError: campo privado
console.log(user.login("123456")); // "Login bem-sucedido!"

// ========================================
// Exemplo: CartaoCredito com dados privados
// ========================================
class CartaoCredito {
    #numero;
    #cvv;
    #limite;
    
    constructor(numero, cvv, limite) {
        this.#numero = numero;
        this.#cvv = cvv;
        this.#limite = limite;
    }
    
    // Mostrar apenas últimos 4 dígitos
    get numeroMascarado() {
        const ultimos4 = this.#numero.slice(-4);
        return \`**** **** **** \${ultimos4}\`;
    }
    
    get limiteDisponivel() {
        return this.#limite;
    }
    
    #validarCVV(cvv) {
        return this.#cvv === cvv;
    }
    
    comprar(valor, cvv) {
        if (!this.#validarCVV(cvv)) {
            throw new Error("CVV incorreto");
        }
        
        if (valor > this.#limite) {
            throw new Error("Limite insuficiente");
        }
        
        this.#limite -= valor;
        return \`Compra de R$ \${valor} aprovada\`;
    }
}

const cartao = new CartaoCredito("1234567890123456", "123", 5000);
console.log(cartao.numeroMascarado); // "**** **** **** 3456"
// console.log(cartao.#numero); // ❌ Erro - campo privado</code></pre>

                <div class="key-points">
                    <h4>📋 Resumo: Public vs Private</h4>
                    <ul style="margin-left: 25px;">
                        <li><strong>Public (this.prop):</strong> Acessível de qualquer lugar</li>
                        <li><strong>Private (#prop):</strong> Apenas dentro da classe</li>
                        <li><strong>_prop (convenção):</strong> "Privado" por convenção, mas acessível</li>
                    </ul>
                </div>

                <h3>🎭 7. Polimorfismo e Classes Abstratas</h3>

                <pre><code>// ========================================
// POLIMORFISMO - mesma interface, comportamentos diferentes
// ========================================
class Forma {
    calcularArea() {
        throw new Error("Método deve ser implementado pela subclasse");
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    
    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}

// Polimorfismo em ação - mesma interface, comportamentos diferentes
const formas = [
    new Quadrado(5),
    new Circulo(3),
    new Quadrado(10)
];

formas.forEach(forma => {
    console.log(\`Área: \${forma.calcularArea()}\`);
});

// ========================================
// "Classe abstrata" simulada
// ========================================
class Veiculo {
    constructor(marca, modelo) {
        if (new.target === Veiculo) {
            throw new Error("Veiculo é abstrata - não pode ser instanciada");
        }
        this.marca = marca;
        this.modelo = modelo;
    }
    
    // Método abstrato (deve ser implementado)
    acelerar() {
        throw new Error("Método acelerar() deve ser implementado");
    }
    
    // Método concreto (pode ser usado)
    toString() {
        return \`\${this.marca} \${this.modelo}\`;
    }
}

class Carro extends Veiculo {
    acelerar() {
        return "Carro acelerando... vrum vrum!";
    }
}

class Moto extends Veiculo {
    acelerar() {
        return "Moto acelerando... vrummm!";
    }
}

const carro = new Carro("Toyota", "Corolla");
console.log(carro.acelerar());

// const veiculo = new Veiculo(); // ❌ Erro: não pode instanciar</code></pre>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoClasses()">Demo: Classes Básicas</button>
                <button class="demo-button" onclick="demoHeranca()">Demo: Herança</button>
                <button class="demo-button" onclick="demoPrivateFields()">Demo: Campos Privados</button>
                
                <div id="classes-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Parabéns!</strong><br>
                    Você dominou Classes e POO em JavaScript! Agora você pode criar
                    código mais organizado, reutilizável e fácil de manter.
                    Próximo: <strong>JSON - JavaScript Object Notation</strong>!
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: JSON
    // ==========================================
    json: {
        render: () => `
            <div class="section">
                <h2>📋 JSON - JavaScript Object Notation</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    JSON é o <strong>formato padrão para troca de dados</strong> na web. Leve, fácil de ler
                    e suportado por praticamente todas as linguagens de programação modernas.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ O que é JSON e para que serve<br>
                    ✓ JSON.parse() - converter string em objeto<br>
                    ✓ JSON.stringify() - converter objeto em string<br>
                    ✓ Trabalhar com APIs que retornam JSON<br>
                    ✓ Deep copy de objetos com JSON<br>
                    ✓ Limitações do JSON<br>
                    ✓ Validação e formatação<br>
                    ✓ Práticas com dados reais
                </div>

                <h3>📖 1. O que é JSON?</h3>

                <pre><code>// ========================================
// JSON - JavaScript Object Notation
// ========================================
// É um FORMATO DE TEXTO para representar dados estruturados
// Baseado na sintaxe de objetos JavaScript

// Exemplo de JSON válido (string):
const jsonString = '{
    "nome": "João Silva",
    "idade": 30,
    "ativo": true,
    "tags": ["javascript", "nodejs"],
    "endereco": {
        "cidade": "São Paulo",
        "estado": "SP"
    }
}';

// Características do JSON:
// ✓ Chaves SEMPRE entre aspas duplas
// ✓ Valores: string, number, boolean, null, array, object
// ✓ Sem funções, undefined, Date, RegExp
// ✓ Sem vírgula no último item
// ✓ Sem comentários

// ========================================
// Tipos de dados suportados
// ========================================</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Exemplo JSON</th>
                            <th>JavaScript</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>String</strong></td>
                            <td>"texto"</td>
                            <td>'texto' ou "texto"</td>
                        </tr>
                        <tr>
                            <td><strong>Number</strong></td>
                            <td>42, 3.14</td>
                            <td>42, 3.14</td>
                        </tr>
                        <tr>
                            <td><strong>Boolean</strong></td>
                            <td>true, false</td>
                            <td>true, false</td>
                        </tr>
                        <tr>
                            <td><strong>Null</strong></td>
                            <td>null</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td><strong>Array</strong></td>
                            <td>[1, 2, 3]</td>
                            <td>[1, 2, 3]</td>
                        </tr>
                        <tr>
                            <td><strong>Object</strong></td>
                            <td>{"a": 1}</td>
                            <td>{a: 1}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="warning-box">
                    <strong>⚠️ JSON NÃO suporta:</strong><br>
                    • Functions<br>
                    • undefined<br>
                    • Date (vira string)<br>
                    • RegExp<br>
                    • Comentários<br>
                    • Aspas simples (só duplas)
                </div>

                <h3>🔄 2. JSON.parse() - String para Objeto</h3>

                <pre><code>// ========================================
// JSON.parse() - converter JSON (string) em objeto JavaScript
// ========================================

// Exemplo básico
const jsonTexto = '{"nome": "Maria", "idade": 25}';
const objeto = JSON.parse(jsonTexto);

console.log(objeto.nome); // "Maria"
console.log(objeto.idade); // 25
console.log(typeof objeto); // "object"

// ========================================
// Parse de arrays
// ========================================
const jsonArray = '[1, 2, 3, 4, 5]';
const array = JSON.parse(jsonArray);
console.log(array[0]); // 1

// ========================================
// Parse de dados complexos
// ========================================
const jsonComplexo = '{
    "usuario": {
        "id": 1,
        "nome": "João",
        "emails": ["joao@email.com", "j.silva@empresa.com"],
        "ativo": true,
        "perfil": {
            "bio": "Desenvolvedor",
            "avatar": null
        }
    }
}';

const dados = JSON.parse(jsonComplexo);
console.log(dados.usuario.nome); // "João"
console.log(dados.usuario.emails[0]); // "joao@email.com"
console.log(dados.usuario.perfil.bio); // "Desenvolvedor"

// ========================================
// Tratamento de erros
// ========================================
try {
    // JSON inválido
    const invalido = JSON.parse('{ nome: "João" }'); // ❌ Falta aspas
} catch (erro) {
    console.error("JSON inválido:", erro.message);
    // "Unexpected token n in JSON at position 2"
}

// ========================================
// Parse com reviver function
// ========================================
const jsonComData = '{
    "nome": "Evento",
    "data": "2024-01-15T10:30:00.000Z"
}';

// Converter strings de data automaticamente
const evento = JSON.parse(jsonComData, (chave, valor) => {
    // Se parece com data ISO, converter para Date
    if (typeof valor === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(valor)) {
        return new Date(valor);
    }
    return valor;
});

console.log(evento.data instanceof Date); // true
console.log(evento.data.getFullYear()); // 2024

// ========================================
// Exemplo real: resposta de API
// ========================================
const respostaAPI = '{
    "status": "success",
    "data": {
        "usuarios": [
            {"id": 1, "nome": "João"},
            {"id": 2, "nome": "Maria"}
        ]
    },
    "total": 2
}';

const resposta = JSON.parse(respostaAPI);
resposta.data.usuarios.forEach(user => {
    console.log(\`#\${user.id}: \${user.nome}\`);
});</code></pre>

                <h3>📤 3. JSON.stringify() - Objeto para String</h3>

                <pre><code>// ========================================
// JSON.stringify() - converter objeto em JSON (string)
// ========================================

const usuario = {
    nome: "Carlos",
    idade: 28,
    ativo: true,
    tags: ["admin", "premium"]
};

const json = JSON.stringify(usuario);
console.log(json);
// '{"nome":"Carlos","idade":28,"ativo":true,"tags":["admin","premium"]}'

console.log(typeof json); // "string"

// ========================================
// Stringify com formatação (indentação)
// ========================================
const jsonFormatado = JSON.stringify(usuario, null, 2);
console.log(jsonFormatado);
/*
{
  "nome": "Carlos",
  "idade": 28,
  "ativo": true,
  "tags": [
    "admin",
    "premium"
  ]
}
*/

// Tabs em vez de espaços
const jsonComTabs = JSON.stringify(usuario, null, '\t');

// ========================================
// Stringify com replacer (filtrar propriedades)
// ========================================
const pessoaCompleta = {
    nome: "Ana",
    senha: "secreta123",
    email: "ana@email.com",
    saldo: 1000
};

// Filtrar apenas algumas propriedades (array)
const jsonFiltrado = JSON.stringify(pessoaCompleta, ['nome', 'email']);
console.log(jsonFiltrado);
// '{"nome":"Ana","email":"ana@email.com"}'

// Filtrar com função
const jsonSemSenha = JSON.stringify(pessoaCompleta, (chave, valor) => {
    // Omitir senha
    if (chave === 'senha') {
        return undefined; // Será removido
    }
    return valor;
});

// ========================================
// Comportamento com tipos especiais
// ========================================
const objeto = {
    string: "texto",
    number: 42,
    boolean: true,
    null: null,
    undefined: undefined, // ❌ Será removido
    funcao: () => {}, // ❌ Será removido
    data: new Date(), // ✅ Vira string ISO
    regex: /test/, // ❌ Vira {}
    symbol: Symbol('id') // ❌ Será removido
};

console.log(JSON.stringify(objeto, null, 2));
/*
{
  "string": "texto",
  "number": 42,
  "boolean": true,
  "null": null,
  "data": "2024-01-15T10:30:00.000Z",
  "regex": {}
}
*/

// ========================================
// toJSON() customizado
// ========================================
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        this.dataAtualizacao = new Date();
    }
    
    // Controlar como o objeto é convertido para JSON
    toJSON() {
        return {
            nome: this.nome,
            preco: this.preco,
            disponivel: this.estoque > 0,
            // Omitir estoque exato
        };
    }
}

const produto = new Produto("Mouse", 50, 10);
console.log(JSON.stringify(produto, null, 2));
/*
{
  "nome": "Mouse",
  "preco": 50,
  "disponivel": true
}
*/</code></pre>

                <h3>💾 4. Deep Copy com JSON</h3>

                <pre><code>// ========================================
// Deep copy (cópia profunda) com JSON
// ========================================

const original = {
    nome: "João",
    endereco: {
        cidade: "São Paulo",
        rua: "Av. Paulista"
    },
    tags: ["javascript", "nodejs"]
};

// ❌ Cópia rasa - não funciona
const copiaRasa = original;
copiaRasa.nome = "Maria";
console.log(original.nome); // "Maria" - modificou o original!

// ❌ Spread também é cópia rasa (apenas 1 nível)
const copiaSpread = { ...original };
copiaSpread.endereco.cidade = "Rio";
console.log(original.endereco.cidade); // "Rio" - modificou!

// ✅ Deep copy com JSON
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.endereco.cidade = "Brasília";
console.log(original.endereco.cidade); // "São Paulo" - não modificou!
console.log(deepCopy.endereco.cidade); // "Brasília"

// ========================================
// Limitações do deep copy com JSON
// ========================================
const objetoComplexo = {
    data: new Date(),
    funcao: () => console.log("oi"),
    regex: /test/,
    undefined: undefined,
    circular: null
};

// Referência circular
objetoComplexo.circular = objetoComplexo;

try {
    const copia = JSON.parse(JSON.stringify(objetoComplexo));
    // ❌ Erro: Converting circular structure to JSON
} catch (erro) {
    console.error(erro.message);
}

// Sem referência circular
delete objetoComplexo.circular;
const copia = JSON.parse(JSON.stringify(objetoComplexo));

console.log(copia);
// {
//   data: "2024-01-15T10:30:00.000Z" (virou string)
//   // funcao, regex, undefined foram removidos
// }</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Limitações do Deep Copy com JSON:</strong><br>
                    • Funções são perdidas<br>
                    • Dates viram strings<br>
                    • undefined é removido<br>
                    • Referências circulares causam erro<br>
                    • RegExp vira objeto vazio<br>
                    <br>
                    <strong>Alternativa:</strong> structuredClone() (mais recente)
                </div>

                <h3>🌐 5. JSON em APIs</h3>

                <pre><code>// ========================================
// Fetch API - buscar JSON de API
// ========================================
async function buscarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Verificar se requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}\`);
        }
        
        // Parse automático do JSON
        const usuarios = await response.json();
        
        console.log(usuarios.length); // 10
        usuarios.forEach(user => {
            console.log(\`\${user.id}: \${user.name} - \${user.email}\`);
        });
        
        return usuarios;
        
    } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
        return [];
    }
}

// ========================================
// POST com JSON
// ========================================
async function criarUsuario(dados) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Importante!
            },
            body: JSON.stringify(dados) // Converter objeto para JSON
        });
        
        const novoUsuario = await response.json();
        console.log("Usuário criado:", novoUsuario);
        return novoUsuario;
        
    } catch (erro) {
        console.error("Erro ao criar usuário:", erro);
    }
}

// Uso
criarUsuario({
    name: "João Silva",
    email: "joao@email.com",
    phone: "11999999999"
});

// ========================================
// LocalStorage com JSON
// ========================================
// Salvar objeto no localStorage
const configuracoes = {
    tema: 'dark',
    idioma: 'pt-BR',
    notificacoes: true
};

localStorage.setItem('config', JSON.stringify(configuracoes));

// Recuperar do localStorage
const configSalva = localStorage.getItem('config');
if (configSalva) {
    const config = JSON.parse(configSalva);
    console.log(config.tema); // "dark"
}

// ========================================
// Exemplo: carrinho de compras
// ========================================
class CarrinhoCompras {
    constructor() {
        this.carregar();
    }
    
    adicionar(produto) {
        this.itens.push(produto);
        this.salvar();
    }
    
    remover(id) {
        this.itens = this.itens.filter(item => item.id !== id);
        this.salvar();
    }
    
    salvar() {
        localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }
    
    carregar() {
        const dados = localStorage.getItem('carrinho');
        this.itens = dados ? JSON.parse(dados) : [];
    }
    
    limpar() {
        this.itens = [];
        localStorage.removeItem('carrinho');
    }
}

const carrinho = new CarrinhoCompras();
carrinho.adicionar({ id: 1, nome: "Mouse", preco: 50 });</code></pre>

                <h3>✅ 6. Validação de JSON</h3>

                <pre><code>// ========================================
// Validar se string é JSON válido
// ========================================
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
}

console.log(isValidJSON('{"nome": "João"}')); // true
console.log(isValidJSON('{ nome: "João" }')); // false (sem aspas)
console.log(isValidJSON('texto comum')); // false

// ========================================
// Validar estrutura do objeto
// ========================================
function validarUsuario(obj) {
    const camposObrigatorios = ['nome', 'email', 'idade'];
    
    for (const campo of camposObrigatorios) {
        if (!(campo in obj)) {
            throw new Error(\`Campo obrigatório faltando: \${campo}\`);
        }
    }
    
    if (typeof obj.email !== 'string' || !obj.email.includes('@')) {
        throw new Error("Email inválido");
    }
    
    if (typeof obj.idade !== 'number' || obj.idade < 0) {
        throw new Error("Idade inválida");
    }
    
    return true;
}

// Uso
const usuario = {
    nome: "João",
    email: "joao@email.com",
    idade: 25
};

try {
    validarUsuario(usuario);
    console.log("Usuário válido!");
} catch (erro) {
    console.error(erro.message);
}</code></pre>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoJSONParse()">Demo: JSON.parse()</button>
                <button class="demo-button" onclick="demoJSONStringify()">Demo: JSON.stringify()</button>
                <button class="demo-button" onclick="demoDeepCopy()">Demo: Deep Copy</button>
                
                <div id="json-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Excelente!</strong><br>
                    Você dominou JSON! Agora pode trabalhar com APIs, armazenar dados
                    localmente e trocar informações entre sistemas.
                    Próximo: <strong>Web APIs - LocalStorage, Fetch e mais</strong>!
                </div>
            </div>
        `
    },

    // ==========================================
    // MÓDULO: WEB APIs
    // ==========================================
    webapis: {
        render: () => `
            <div class="section">
                <h2>🌐 Web APIs do Navegador</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    Os navegadores modernos oferecem <strong>dezenas de APIs poderosas</strong> para criar
                    aplicações web ricas e interativas. Vamos explorar as mais importantes!
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ LocalStorage e SessionStorage<br>
                    ✓ Fetch API - requisições HTTP<br>
                    ✓ Geolocation API - localização<br>
                    ✓ Clipboard API - copiar/colar<br>
                    ✓ Notification API - notificações<br>
                    ✓ IntersectionObserver - lazy loading<br>
                    ✓ Error handling em APIs<br>
                    ✓ Exemplos práticos do mundo real
                </div>

                <h3>💾 1. LocalStorage e SessionStorage</h3>

                <pre><code>// ========================================
// LOCALSTORAGE - armazenamento persistente
// ========================================
// Dados permanecem mesmo após fechar o navegador

// Salvar item
localStorage.setItem('nome', 'João');
localStorage.setItem('idade', '25');

// Recuperar item
const nome = localStorage.getItem('nome');
console.log(nome); // "João"

// Remover item específico
localStorage.removeItem('idade');

// Limpar tudo
localStorage.clear();

// Verificar quantidade de itens
console.log(localStorage.length);

// ========================================
// Salvar objetos (precisa de JSON)
// ========================================
const usuario = {
    nome: "Maria",
    email: "maria@email.com",
    preferencias: {
        tema: "dark",
        idioma: "pt-BR"
    }
};

// ❌ Errado - vira "[object Object]"
localStorage.setItem('usuario', usuario);

// ✅ Correto - converter para JSON
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar
const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioSalvo.nome); // "Maria"

// ========================================
// SESSIONSTORAGE - temporário (só durante a sessão)
// ========================================
// Dados são limpos ao fechar a aba/navegador

sessionStorage.setItem('token', 'abc123');
sessionStorage.setItem('carrinho', JSON.stringify([1, 2, 3]));

// Mesmo API do localStorage
const token = sessionStorage.getItem('token');
sessionStorage.removeItem('token');
sessionStorage.clear();

// ========================================
// Exemplo prático: sistema de preferências
// ========================================
class Preferencias {
    constructor() {
        this.chave = 'app_preferencias';
        this.carregar();
    }
    
    carregar() {
        const dados = localStorage.getItem(this.chave);
        this.config = dados ? JSON.parse(dados) : this.padroes();
    }
    
    padroes() {
        return {
            tema: 'light',
            idioma: 'pt-BR',
            notificacoes: true,
            volume: 50
        };
    }
    
    get(chave) {
        return this.config[chave];
    }
    
    set(chave, valor) {
        this.config[chave] = valor;
        this.salvar();
    }
    
    salvar() {
        localStorage.setItem(this.chave, JSON.stringify(this.config));
    }
    
    resetar() {
        this.config = this.padroes();
        this.salvar();
    }
}

const prefs = new Preferencias();
console.log(prefs.get('tema')); // "light"
prefs.set('tema', 'dark');

// ========================================
// Storage Event - detectar mudanças (em outras abas)
// ========================================
window.addEventListener('storage', (e) => {
    console.log('Chave modificada:', e.key);
    console.log('Valor antigo:', e.oldValue);
    console.log('Valor novo:', e.newValue);
    console.log('URL:', e.url);
});</code></pre>

                <table>
                    <thead>
                        <tr>
                            <th>Aspecto</th>
                            <th>LocalStorage</th>
                            <th>SessionStorage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Persistência</strong></td>
                            <td>Permanente</td>
                            <td>Sessão (aba)</td>
                        </tr>
                        <tr>
                            <td><strong>Compartilhado</strong></td>
                            <td>Entre todas as abas</td>
                            <td>Apenas na aba atual</td>
                        </tr>
                        <tr>
                            <td><strong>Tamanho</strong></td>
                            <td>~5-10 MB</td>
                            <td>~5-10 MB</td>
                        </tr>
                        <tr>
                            <td><strong>Uso típico</strong></td>
                            <td>Preferências, cache</td>
                            <td>Dados temporários, forms</td>
                        </tr>
                    </tbody>
                </table>

                <h3>🌐 2. Fetch API - Requisições HTTP</h3>

                <pre><code>// ========================================
// FETCH - buscar dados de APIs
// ========================================

// GET simples
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(erro => console.error(erro));

// ========================================
// Com async/await (mais limpo)
// ========================================
async function buscarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Verificar status
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        
        const usuarios = await response.json();
        return usuarios;
        
    } catch (erro) {
        console.error("Erro:", erro.message);
        return [];
    }
}

// ========================================
// POST - enviar dados
// ========================================
async function criarPost(dados) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        
        const novoPost = await response.json();
        return novoPost;
        
    } catch (erro) {
        console.error("Erro ao criar post:", erro);
    }
}

// Uso
criarPost({
    title: 'Meu Post',
    body: 'Conteúdo do post...',
    userId: 1
});

// ========================================
// PUT - atualizar
// ========================================
async function atualizarPost(id, dados) {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });
    return response.json();
}

// ========================================
// DELETE - deletar
// ========================================
async function deletarPost(id) {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
        method: 'DELETE'
    });
    return response.ok;
}

// ========================================
// Headers customizados (autenticação)
// ========================================
async function buscarComAuth(token) {
    const response = await fetch('https://api.exemplo.com/dados', {
        headers: {
            'Authorization': \`Bearer \${token}\`,
            'Content-Type': 'application/json',
            'X-Custom-Header': 'valor'
        }
    });
    return response.json();
}

// ========================================
// Timeout (abortController)
// ========================================
async function fetchComTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response.json();
    } catch (erro) {
        if (erro.name === 'AbortError') {
            console.error('Requisição cancelada por timeout');
        }
        throw erro;
    }
}

// ========================================
// Exemplo completo: API wrapper
// ========================================
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    
    async request(endpoint, options = {}) {
        const url = \`\${this.baseURL}\${endpoint}\`;
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }
            
            return await response.json();
        } catch (erro) {
            console.error(\`Erro em \${endpoint}:\`, erro);
            throw erro;
        }
    }
    
    get(endpoint) {
        return this.request(endpoint);
    }
    
    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Uso
const api = new APIClient('https://jsonplaceholder.typicode.com');
const users = await api.get('/users');
const newPost = await api.post('/posts', { title: 'Teste', body: 'Conteúdo' });</code></pre>

                <h3>📍 3. Geolocation API</h3>

                <pre><code>// ========================================
// GEOLOCATION - obter localização do usuário
// ========================================

// Pegar posição atual (uma vez)
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
        // Sucesso
        (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            
            console.log(\`Lat: \${latitude}\`);
            console.log(\`Lng: \${longitude}\`);
            console.log(\`Precisão: \${accuracy} metros\`);
            
            // Usar coordenadas (ex: mostrar no mapa)
            mostrarNoMapa(latitude, longitude);
        },
        // Erro
        (erro) => {
            console.error("Erro ao obter localização:", erro.message);
            /*
            Possíveis erros:
            - PERMISSION_DENIED (usuário negou)
            - POSITION_UNAVAILABLE (não conseguiu obter)
            - TIMEOUT (demorou demais)
            */
        },
        // Opções
        {
            enableHighAccuracy: true, // GPS (mais preciso, mais bateria)
            timeout: 10000, // 10 segundos
            maximumAge: 0 // Não usar cache
        }
    );
} else {
    console.error("Geolocalização não suportada");
}

// ========================================
// Monitorar posição (tempo real - útil para navegação)
// ========================================
let watchId = null;

function iniciarMonitoramento() {
    watchId = navigator.geolocation.watchPosition(
        (position) => {
            console.log("Nova posição:", position.coords);
            atualizarMapa(position.coords);
        },
        (erro) => console.error(erro),
        { enableHighAccuracy: true }
    );
}

function pararMonitoramento() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
}

// ========================================
// Exemplo: calcular distância entre dois pontos
// ========================================
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distancia = R * c;
    
    return distancia;
}

// Exemplo de uso
navigator.geolocation.getCurrentPosition((pos) => {
    const minhaLat = pos.coords.latitude;
    const minhaLng = pos.coords.longitude;
    
    // Distância até a Av. Paulista, SP
    const distancia = calcularDistancia(
        minhaLat, minhaLng,
        -23.561414, -46.656139
    );
    
    console.log(\`Você está a \${distancia.toFixed(2)} km da Av. Paulista\`);
});</code></pre>

                <h3>📋 4. Clipboard API</h3>

                <pre><code>// ========================================
// CLIPBOARD - copiar/colar
// ========================================

// Copiar texto
async function copiarTexto(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        console.log("Texto copiado!");
    } catch (erro) {
        console.error("Erro ao copiar:", erro);
        // Fallback para método antigo
        copiarTextoFallback(texto);
    }
}

// Ler da área de transferência
async function colarTexto() {
    try {
        const texto = await navigator.clipboard.readText();
        console.log("Texto colado:", texto);
        return texto;
    } catch (erro) {
        console.error("Erro ao colar:", erro);
    }
}

// Fallback para navegadores antigos
function copiarTextoFallback(texto) {
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Exemplo: botão de copiar
document.getElementById('btnCopiar')?.addEventListener('click', () => {
    const codigo = document.getElementById('codigo').textContent;
    copiarTexto(codigo);
});</code></pre>

                <h3>🔔 5. Notification API</h3>

                <pre><code>// ========================================
// NOTIFICATIONS - notificações do sistema
// ========================================

// Verificar se é suportado
if ('Notification' in window) {
    // Pedir permissão
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log("Permissão concedida!");
        }
    });
}

// Criar notificação simples
function mostrarNotificacao(titulo, mensagem) {
    if (Notification.permission === 'granted') {
        new Notification(titulo, {
            body: mensagem,
            icon: '/icon.png'
        });
    }
}

// Notificação com opções
function notificacaoCompleta() {
    const opcoes = {
        body: 'Você tem uma nova mensagem!',
        icon: '/icon.png',
        badge: '/badge.png',
        tag: 'mensagem-nova', // Agrupar notificações
        requireInteraction: false, // Fechar automaticamente
        actions: [
            { action: 'ver', title: 'Ver' },
            { action: 'ignorar', title: 'Ignorar' }
        ]
    };
    
    const notification = new Notification('Nova Mensagem', opcoes);
    
    notification.onclick = () => {
        window.focus();
        notification.close();
    };
}

// Wrapper completo
class NotificationManager {
    static async pedir Permissao() {
        if (!('Notification' in window)) {
            console.error("Notificações não suportadas");
            return false;
        }
        
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }
    
    static mostrar(titulo, opcoes = {}) {
        if (Notification.permission !== 'granted') {
            console.log("Sem permissão");
            return;
        }
        
        return new Notification(titulo, {
            icon: '/icon.png',
            ...opcoes
        });
    }
}</code></pre>

                <h3>👁️ 6. IntersectionObserver - Lazy Loading</h3>

                <pre><code>// ========================================
// INTERSECTIONOBSERVER - detectar quando elemento aparece na tela
// ========================================

// Criar observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Elemento visível:", entry.target);
                // Fazer algo quando elemento aparece
                entry.target.classList.add('visible');
                
                // Parar de observar (se não precisar mais)
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5, // 50% visível
        rootMargin: '0px 0px -100px 0px' // Offset
    }
);

// Observar elementos
const elementos = document.querySelectorAll('.animate-on-scroll');
elementos.forEach(el => observer.observe(el));

// ========================================
// Exemplo: Lazy loading de imagens
// ========================================
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Trocar data-src por src
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

// Observar todas as imagens com data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// HTML: <img data-src="imagem-grande.jpg" src="placeholder.jpg"></code></pre>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <button class="demo-button" onclick="demoLocalStorage()">Demo: LocalStorage</button>
                <button class="demo-button" onclick="demoFetchAPI()">Demo: Fetch API</button>
                <button class="demo-button" onclick="demoClipboard()">Demo: Clipboard</button>
                
                <div id="webapis-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Parabéns! Você completou o Nível Intermediário!</strong><br>
                    Dominou todos os fundamentos e conceitos intermediários do JavaScript!
                    Você está pronto para criar aplicações web completas e interativas.
                    <br><br>
                    <strong>🚀 Próximo passo:</strong> Avance para o <strong>Curso Avançado/Expert</strong>
                    para aprender Programação Assíncrona, Design Patterns, Performance e muito mais!
                </div>
            </div>
        `
    }
};

// Exportar para integração com app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULES_PART3;
}
