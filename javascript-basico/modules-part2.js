// Continuação dos módulos - Parte 2

// Adicionar ao objeto MODULES...

const MODULES_PART2 = {
    
    // ==========================================
    // MÓDULO: DOM
    // ==========================================
    dom: {
        render: () => `
            <div class="section">
                <h2>🌳 DOM - Document Object Model</h2>
                
                <p style="font-size: 1.15em; color: #555; margin: 20px 0;">
                    O DOM é a <strong>representação da estrutura HTML como objetos JavaScript</strong>.
                    Permite que você manipule elementos, estilos, conteúdo e estrutura da página dinamicamente.
                </p>

                <div class="info-box">
                    <strong>🎯 O que você vai aprender:</strong><br>
                    ✓ Selecionar elementos (querySelector, getElementById)<br>
                    ✓ Criar e remover elementos<br>
                    ✓ Modificar conteúdo (textContent, innerHTML)<br>
                    ✓ Manipular atributos e classes<br>
                    ✓ Modificar estilos CSS<br>
                    ✓ Navegar pela árvore DOM<br>
                    ✓ Trabalhar com data attributes<br>
                    ✓ Performance e boas práticas
                </div>

                <h3>📖 1. O que é o DOM?</h3>
                
                <p>
                    Quando o navegador carrega uma página HTML, ele cria uma <strong>árvore de objetos</strong>
                    representando cada elemento. JavaScript pode acessar e modificar esses objetos.
                </p>

                <pre><code>/* HTML:
<!DOCTYPE html>
<html>
    <head>
        <title>Minha Página</title>
    </head>
    <body>
        <div id="container">
            <h1 class="titulo">Olá Mundo</h1>
            <p>Parágrafo</p>
        </div>
    </body>
</html>
*/

// O DOM vira esta estrutura:
// document
//   └─ html
//       ├─ head
//       │   └─ title
//       └─ body
//           └─ div#container
//               ├─ h1.titulo
//               └─ p</code></pre>

                <h3>🎯 2. Selecionando Elementos</h3>

                <pre><code>// ========================================
// querySelector - retorna PRIMEIRO elemento que corresponde
// ========================================
const titulo = document.querySelector("#titulo");
const botao = document.querySelector(".btn-primario");
const primeiro = document.querySelector("p"); // Primeiro <p>
const especifico = document.querySelector("div.container > p");

// ========================================
// querySelectorAll - retorna TODOS os elementos (NodeList)
// ========================================
const todosParagrafos = document.querySelectorAll("p");
const todosLinks = document.querySelectorAll("a");
const botoesAtivos = document.querySelectorAll("button.ativo");

// Iterar sobre NodeList
todosParagrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

// ========================================
// Métodos clássicos (mais específicos)
// ========================================
const elemento = document.getElementById("meuId");
const porClasse = document.getElementsByClassName("minhaClasse"); // HTMLCollection
const porTag = document.getElementsByTagName("div"); // HTMLCollection

// ========================================
// Seletores CSS avançados
// ========================================
// Atributo específico
const comHref = document.querySelectorAll('a[href^="https"]');

// Pseudo-classes
const primeiroLi = document.querySelector("li:first-child");
const ultimoLi = document.querySelector("li:last-child");
const impares = document.querySelectorAll("li:nth-child(odd)");

// Combinadores
const filhosDirectos = document.querySelectorAll("ul > li");
const proximoIrmao = document.querySelector("h1 + p");</code></pre>

                <div class="warning-box">
                    <strong>⚠️ querySelector vs getElement:</strong><br>
                    • <span class="inline-code">querySelector</span>: Retorna NodeList <strong>estática</strong> (não atualiza automaticamente)<br>
                    • <span class="inline-code">getElementsBy*</span>: Retorna HTMLCollection <strong>viva</strong> (atualiza se o DOM mudar)<br>
                    <br>
                    <strong>Recomendação:</strong> Use <span class="inline-code">querySelector</span> na maioria dos casos!
                </div>

                <h3>✍️ 3. Modificando Conteúdo</h3>

                <pre><code>const elemento = document.querySelector("#minhaDiv");

// ========================================
// textContent - texto puro (seguro)
// ========================================
elemento.textContent = "Novo texto";
console.log(elemento.textContent); // "Novo texto"

// textContent ignora HTML
elemento.textContent = "<strong>Negrito</strong>";
// Resultado: <strong>Negrito</strong> (texto literal, não HTML)

// ========================================
// innerHTML - pode incluir HTML (CUIDADO!)
// ========================================
elemento.innerHTML = "<strong>Negrito</strong>";
// Resultado: Negrito (texto em negrito)

elemento.innerHTML = \`
    <h2>Título</h2>
    <p>Parágrafo com <em>ênfase</em></p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
\`;

// ========================================
// innerText vs textContent
// ========================================
// innerText: considera CSS (ignora elementos ocultos)
// textContent: pega TODO o texto, mesmo se oculto

const div = document.createElement("div");
div.innerHTML = "<span style='display:none'>Oculto</span> Visível";

console.log(div.textContent); // "Oculto Visível"
console.log(div.innerText);   // "Visível"

// ========================================
// value - para inputs
// ========================================
const input = document.querySelector("#email");
input.value = "usuario@email.com";
console.log(input.value);</code></pre>

                <div class="danger-box">
                    <strong>🚨 Segurança - innerHTML:</strong><br>
                    NUNCA use <span class="inline-code">innerHTML</span> com dados do usuário sem sanitizar!
                    Pode causar <strong>XSS (Cross-Site Scripting)</strong>:
                    <pre style="margin-top: 10px; background: white; color: #333;"><code>// ❌ PERIGOSO
const nomeUsuario = getUserInput(); // Pode conter <script>
elemento.innerHTML = nomeUsuario;

// ✅ SEGURO
elemento.textContent = nomeUsuario;</code></pre>
                </div>

                <h3>🎨 4. Modificando Estilos</h3>

                <pre><code>const caixa = document.querySelector(".caixa");

// ========================================
// Style inline (propriedades individuais)
// ========================================
caixa.style.backgroundColor = "#3b82f6";
caixa.style.color = "white";
caixa.style.padding = "20px";
caixa.style.borderRadius = "10px";

// Propriedades CSS com hífen viram camelCase
caixa.style.fontSize = "18px";        // font-size
caixa.style.marginTop = "15px";       // margin-top
caixa.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; // box-shadow

// ========================================
// cssText - múltiplas propriedades de uma vez
// ========================================
caixa.style.cssText = \`
    background-color: #10b981;
    color: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
\`;

// ========================================
// getComputedStyle - ler estilos aplicados
// ========================================
const estilos = window.getComputedStyle(caixa);
console.log(estilos.backgroundColor); // "rgb(16, 185, 129)"
console.log(estilos.fontSize);        // "18px"
console.log(estilos.display);         // "block"

// ========================================
// Manipular classes (MELHOR PRÁTICA!)
// ========================================
// Adicionar classe
caixa.classList.add("ativa");
caixa.classList.add("destacada", "borda-grossa"); // Múltiplas

// Remover classe
caixa.classList.remove("ativa");

// Alternar classe (toggle)
caixa.classList.toggle("escondida"); // Adiciona se não tiver, remove se tiver

// Verificar se tem classe
if (caixa.classList.contains("ativa")) {
    console.log("Caixa está ativa!");
}

// Substituir classe
caixa.classList.replace("tema-claro", "tema-escuro");</code></pre>

                <div class="success-box">
                    <strong>✅ Melhor Prática:</strong><br>
                    Use <span class="inline-code">classList</span> em vez de <span class="inline-code">style</span> direto!
                    Separa estilo (CSS) de lógica (JS) e facilita manutenção.
                </div>

                <h3>🏗️ 5. Criar e Remover Elementos</h3>

                <pre><code>// ========================================
// Criar elemento
// ========================================
const div = document.createElement("div");
div.textContent = "Nova div criada!";
div.className = "caixa destacada";
div.id = "minhaNovaDiv";

// Adicionar ao DOM
document.body.appendChild(div); // No final do body

// Ou em local específico
const container = document.querySelector("#container");
container.appendChild(div);

// ========================================
// Inserir em posição específica
// ========================================
const lista = document.querySelector("ul");
const novoItem = document.createElement("li");
novoItem.textContent = "Novo item";

// No início da lista
lista.insertBefore(novoItem, lista.firstChild);

// Ou use insertAdjacentElement (mais flexível)
// beforebegin: antes do elemento
// afterbegin: dentro, no início
// beforeend: dentro, no final
// afterend: depois do elemento

container.insertAdjacentElement("beforebegin", div);

// ========================================
// insertAdjacentHTML - inserir HTML
// ========================================
container.insertAdjacentHTML("beforeend", \`
    <div class="card">
        <h3>Título</h3>
        <p>Conteúdo</p>
    </div>
\`);

// ========================================
// Remover elementos
// ========================================
const elemento = document.querySelector("#remover");

// Método moderno
elemento.remove();

// Método antigo (ainda funciona)
elemento.parentNode.removeChild(elemento);

// Remover todos os filhos
container.innerHTML = ""; // Rápido mas perde event listeners
// Ou
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// ========================================
// Exemplo prático: criar lista dinâmica
// ========================================
function criarLista(itens) {
    const ul = document.createElement("ul");
    ul.className = "lista-dinamica";
    
    itens.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => {
            li.classList.toggle("completo");
        });
        ul.appendChild(li);
    });
    
    return ul;
}

const minhaLista = criarLista(["Estudar JS", "Praticar", "Criar projeto"]);
document.body.appendChild(minhaLista);</code></pre>

                <h3>🏷️ 6. Atributos e Data Attributes</h3>

                <pre><code>const link = document.querySelector("a");
const imagem = document.querySelector("img");

// ========================================
// Manipular atributos
// ========================================
// Ler atributo
const href = link.getAttribute("href");
const alt = imagem.getAttribute("alt");

// Definir atributo
link.setAttribute("href", "https://novo-link.com");
link.setAttribute("target", "_blank");
imagem.setAttribute("src", "nova-imagem.jpg");

// Verificar se tem atributo
if (link.hasAttribute("target")) {
    console.log("Link abre em nova aba");
}

// Remover atributo
link.removeAttribute("target");

// ========================================
// Atributos como propriedades (atalhos)
// ========================================
link.href = "https://google.com";
link.target = "_blank";
imagem.src = "foto.jpg";
imagem.alt = "Descrição da foto";

const input = document.querySelector("#nome");
input.value = "João";
input.placeholder = "Digite seu nome";
input.disabled = true;

const checkbox = document.querySelector("#aceito");
checkbox.checked = true;

// ========================================
// Data attributes - armazenar dados personalizados
// ========================================
/* HTML:
<div id="usuario" 
     data-id="123" 
     data-nome="João Silva"
     data-role="admin">
</div>
*/

const usuario = document.querySelector("#usuario");

// Acessar via dataset
console.log(usuario.dataset.id);    // "123"
console.log(usuario.dataset.nome);  // "João Silva"
console.log(usuario.dataset.role);  // "admin"

// Definir data attribute
usuario.dataset.email = "joao@email.com";
usuario.dataset.ultimoAcesso = Date.now();

// Camel case no JS vira kebab-case no HTML
usuario.dataset.userName = "joao123";
// HTML: <div data-user-name="joao123">

// ========================================
// Exemplo prático: sistema de tabs
// ========================================
document.querySelectorAll("[data-tab]").forEach(botao => {
    botao.addEventListener("click", () => {
        const tabId = botao.dataset.tab;
        
        // Esconder todos os painéis
        document.querySelectorAll(".tab-painel").forEach(painel => {
            painel.style.display = "none";
        });
        
        // Mostrar painel específico
        document.querySelector(\`#\${tabId}\`).style.display = "block";
    });
});</code></pre>

                <h3>🌲 7. Navegando pela Árvore DOM</h3>

                <pre><code>const elemento = document.querySelector("#meio");

// ========================================
// Pais e ancestrais
// ========================================
const pai = elemento.parentElement;
const paiNode = elemento.parentNode; // Geralmente igual a parentElement

// Subir até encontrar elemento específico
const container = elemento.closest(".container");
const form = elemento.closest("form");

// ========================================
// Filhos
// ========================================
const primeiroFilho = elemento.firstElementChild;
const ultimoFilho = elemento.lastElementChild;
const todosFilhos = elemento.children; // HTMLCollection

// Iterar sobre filhos
Array.from(elemento.children).forEach(filho => {
    console.log(filho);
});

// ========================================
// Irmãos (siblings)
// ========================================
const proximo = elemento.nextElementSibling;
const anterior = elemento.previousElementSibling;

// Pegar todos os irmãos
function getSiblings(elem) {
    return Array.from(elem.parentElement.children)
                .filter(child => child !== elem);
}

// ========================================
// Exemplo prático: breadcrumb path
// ========================================
function getBreadcrumb(elemento) {
    const caminho = [];
    let atual = elemento;
    
    while (atual && atual !== document.body) {
        let seletor = atual.tagName.toLowerCase();
        if (atual.id) seletor += \`#\${atual.id}\`;
        if (atual.className) seletor += \`.\${atual.className.split(" ").join(".")}\`;
        
        caminho.unshift(seletor);
        atual = atual.parentElement;
    }
    
    return caminho.join(" > ");
}

console.log(getBreadcrumb(elemento));</code></pre>

                <h3>⚡ 8. Performance e Boas Práticas</h3>

                <pre><code>// ========================================
// ❌ RUIM - Múltiplas modificações no DOM
// ========================================
const lista = document.querySelector("ul");

for (let i = 0; i < 1000; i++) {
    const li = document.createElement("li");
    li.textContent = \`Item \${i}\`;
    lista.appendChild(li); // Reflow a cada iteração!
}

// ========================================
// ✅ BOM - DocumentFragment (batch update)
// ========================================
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const li = document.createElement("li");
    li.textContent = \`Item \${i}\`;
    fragment.appendChild(li); // Acontece fora do DOM
}

lista.appendChild(fragment); // Um único reflow!

// ========================================
// ✅ BOM - innerHTML em lote
// ========================================
const html = [];
for (let i = 0; i < 1000; i++) {
    html.push(\`<li>Item \${i}</li>\`);
}
lista.innerHTML = html.join(""); // Uma única operação

// ========================================
// Cache de seletores
// ========================================
// ❌ RUIM
for (let i = 0; i < 100; i++) {
    document.querySelector(".resultado").textContent = i;
}

// ✅ BOM
const resultado = document.querySelector(".resultado");
for (let i = 0; i < 100; i++) {
    resultado.textContent = i;
}

// ========================================
// Evitar layout thrashing
// ========================================
// ❌ RUIM - intercala leituras e escritas
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    const height = box.clientHeight; // Leitura (força layout)
    box.style.height = height + 10 + "px"; // Escrita
});

// ✅ BOM - separa leituras e escritas
const heights = [];
boxes.forEach(box => {
    heights.push(box.clientHeight); // Todas as leituras
});
boxes.forEach((box, i) => {
    box.style.height = heights[i] + 10 + "px"; // Todas as escritas
});</code></pre>

                <h3>🎬 Demonstrações Interativas</h3>
                
                <div id="demo-dom-area" style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <div id="demo-box" style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                        Elemento de demonstração
                    </div>
                </div>

                <button class="demo-button" onclick="demoDOMSelection()">Demo: Seleção</button>
                <button class="demo-button" onclick="demoDOMModify()">Demo: Modificar</button>
                <button class="demo-button" onclick="demoDOMCreate()">Demo: Criar Elementos</button>
                <button class="demo-button" onclick="demoDOMAttributes()">Demo: Atributos</button>
                
                <div id="dom-output" class="output-box" style="display:none;"></div>

                <div class="success-box">
                    <strong>🎉 Parabéns!</strong><br>
                    Você dominou a manipulação do DOM! Agora pode criar interfaces dinâmicas e interativas.
                    Próximo módulo: <strong>Iterações</strong> (map, filter, reduce)!
                </div>
            </div>
        `
    }
};

// Continua com os outros módulos...