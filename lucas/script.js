// Fatores relativos à unidade base (1 m, 1 m², 1 m³ conforme contexto)
// Cada chave é uma unidade alvo; o fator multiplica a quantidade base (ex.m) para obter o valor na unidade alvo
const factors = {
    // Linear (1 m = x unit)
    km: 0.001,
    hm: 0.01,
    dm: 10,
    cm: 100,
    mm: 1000,

    // Área (1 m² = x unit)
    km2: 0.000001,    // 1 m² = 0.000001 km² (1 km² = 1e6 m²)
    cm2: 10000,       // 1 m² = 10.000 cm²
    mm2: 1000000,     // 1 m² = 1.000.000 mm²
    ha: 0.0001,       // 1 m² = 0.0001 hectare (1 ha = 10000 m²)

    // Volume (1 m³ = x unit)
    m3: 1,            // 1 m³ = 1 m³ (base)
    L: 1000,          // 1 m³ = 1000 L
    mL: 1000000,      // 1 m³ = 1.000.000 mL
    cm3: 1000000,     // 1 m³ = 1.000.000 cm³ (1 m³ = (100 cm)^3)
    mm3: 1000000000   // 1 m³ = 1.000.000.000 mm³
};

const unitNames = {
    // Linear
    km: 'quilômetros',
    hm: 'hectômetros',
    dm: 'decímetros',
    cm: 'centímetros',
    mm: 'milímetros',

    // Área
    km2: 'quilômetros²',
    cm2: 'centímetros²',
    mm2: 'milímetros²',
    ha: 'hectares',

    // Volume
    m3: 'metros³',
    L: 'litros',
    mL: 'mililitros',
    cm3: 'centímetros³',
    mm3: 'milímetros³'
};

// Exibição curta (símbolos) para inserir nas opções/textos
const unitSymbols = {
    km: 'km', hm: 'hm', dm: 'dm', cm: 'cm', mm: 'mm',
    km2: 'km²', cm2: 'cm²', mm2: 'mm²', ha: 'ha',
    m3: 'm³', L: 'L', mL: 'mL', cm3: 'cm³', mm3: 'mm³'
};

function formatNumber(n) {
    // Formata com até 6 casas sem notação científica
    return Number.parseFloat(n).toLocaleString('pt-BR', { maximumFractionDigits: 6 });
}

// Conversor interativo
const metersInput = document.getElementById('meters');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
const stepsDiv = document.getElementById('steps');
const explanation = document.getElementById('explanation');

// Novo: controle de alto contraste (toggle)
const contrastToggle = document.getElementById('contrastToggle');

function applyContrastMode(enabled) {
    if (enabled) {
        document.body.classList.add('select-high-contrast');
        toUnit.classList.add('select-high-contrast');
    } else {
        document.body.classList.remove('select-high-contrast');
        toUnit.classList.remove('select-high-contrast');
    }
}

// Novo: controle de tema (claro/escuro)
const themeToggle = document.getElementById('themeToggle');

function applyTheme(isLight) {
    if (isLight) {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
        // aplica fallback da seta
        toUnit.classList.add('select-arrow-light');
        toUnit.classList.remove('select-arrow-dark');
    } else {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
        toUnit.classList.add('select-arrow-dark');
        toUnit.classList.remove('select-arrow-light');
    }
}

// Inicializar preferências: tema e contraste
try {
    const savedTheme = localStorage.getItem('theme'); // 'light' | 'dark' | null
    const savedContrast = localStorage.getItem('highContrast');

    // Tema: se não houver preferência, adote prefers-color-scheme; default to dark if no match
    let isLight;
    if (savedTheme) {
        isLight = savedTheme === 'light';
    } else {
        isLight = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
    }

    if (themeToggle) themeToggle.checked = isLight;
    applyTheme(isLight);

    // Alto contraste: default OFF per request
    let isHigh;
    if (savedContrast === null) isHigh = false; // changed default to OFF
    else isHigh = savedContrast === '1' || savedContrast === 'true';
    if (contrastToggle) contrastToggle.checked = isHigh;
    applyContrastMode(isHigh);
} catch (e) {
    // ignore
}

// Handlers para os toggles
if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
        const light = !!e.target.checked;
        applyTheme(light);
        try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch (err) {}
    });
}

if (contrastToggle) {
    contrastToggle.addEventListener('change', (e) => {
        const on = !!e.target.checked;
        applyContrastMode(on);
        try { localStorage.setItem('highContrast', on ? '1' : '0'); } catch (err) {}
    });
}

// Ajusta fallback para a seta do select com base no tema (apenas classes de ajuda)
(function setSelectArrowFallback() {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
        toUnit.classList.add('select-arrow-light');
        toUnit.classList.remove('select-arrow-dark');
    } else {
        toUnit.classList.add('select-arrow-dark');
        toUnit.classList.remove('select-arrow-light');
    }
})();

// UI: select para tipo de conversão (linear / area / volume)
const unitType = document.getElementById('unitType');

function populateToUnit(type) {
    const lists = {
        linear: ['km','hm','dm','cm','mm'],
        area: ['km2','ha','cm2','mm2'],
        volume: ['m3','L','mL','cm3','mm3']
    };
    const opts = lists[type] || lists.linear;
    toUnit.innerHTML = opts.map(u => `<option value="${u}">${unitNames[u]} (${unitSymbols[u]})</option>`).join('');
}

if (unitType) {
    unitType.addEventListener('change', (e) => {
        populateToUnit(e.target.value);
    });
}

// inicializa as opções do select de destino
populateToUnit(unitType ? unitType.value : 'linear');

convertBtn.addEventListener('click', () => {
    const m = Number(metersInput.value);
    const unit = toUnit.value;
    const type = unitType ? unitType.value : 'linear';
    if (!isFinite(m)) return;
    const factor = factors[unit];
    const converted = m * factor;
    // label base (m / m² / m³)
    const baseLabel = type === 'area' ? 'm²' : (type === 'volume' ? 'm³' : 'm');
    resultDiv.textContent = `${formatNumber(m)} ${baseLabel} = ${formatNumber(converted)} ${unitSymbols[unit] || unit}`;
    // Monta explicação passo a passo adaptada
    const steps = [];
    if (type === 'linear') {
        if (unit === 'km') {
            steps.push(`Para converter metros em ${unitNames[unit]} multiplicamos por ${factor}.`);
            steps.push(`${formatNumber(m)} × ${factor} = ${formatNumber(converted)} ${unitSymbols[unit]}.`);
            steps.push('Alternativamente: divida por 1000, porque 1 km = 1000 m.');
        } else if (unit === 'cm' || unit === 'mm') {
            steps.push(`Sabendo que 1 m = ${factors[unit]} ${unitSymbols[unit]}, multiplicamos.`);
            steps.push(`${formatNumber(m)} × ${factors[unit]} = ${formatNumber(converted)} ${unitSymbols[unit]}.`);
        } else {
            steps.push(`Use o fator de conversão: 1 m = ${formatNumber(factors[unit])} ${unitSymbols[unit] || unit}.`);
            steps.push(`${formatNumber(m)} × ${formatNumber(factors[unit])} = ${formatNumber(converted)} ${unitSymbols[unit] || unit}.`);
        }
    } else if (type === 'area') {
        steps.push('Estamos convertendo áreas: 1 m² é usado como base.');
        steps.push(`Use o fator: 1 m² = ${formatNumber(factors[unit])} ${unitSymbols[unit] || unit}.`);
        steps.push(`${formatNumber(m)} × ${formatNumber(factors[unit])} = ${formatNumber(converted)} ${unitSymbols[unit] || unit}.`);
    } else { // volume
        steps.push('Estamos convertendo volumes: 1 m³ é usado como base.');
        steps.push(`Use o fator: 1 m³ = ${formatNumber(factors[unit])} ${unitSymbols[unit] || unit}.`);
        steps.push(`${formatNumber(m)} × ${formatNumber(factors[unit])} = ${formatNumber(converted)} ${unitSymbols[unit] || unit}.`);
    }
    stepsDiv.innerHTML = steps.map(s => `<div>• ${s}</div>`).join('');
    explanation.open = true;
});

// Exercícios
let exercises = [
    // Exemplos de área
    { m: 2, unit: 'cm2', type: 'area', options: ['20000 cm²','2000 cm²','20 cm²','200000 cm²'], correct: 0 },
    { m: 0.5, unit: 'km2', type: 'area', options: ['0.0000005 km²','0.0005 km²','0.00000005 km²','0.005 km²'], correct: 0 },
    // Exemplos de volume
    { m: 1, unit: 'L', type: 'volume', options: ['1000 L','100 L','1 L','10 L'], correct: 0 },
    { m: 0.002, unit: 'cm3', type: 'volume', options: ['2000 cm³','200 cm³','20 cm³','0.2 cm³'], correct: 0 },
    { m: 0.25, unit: 'mL', type: 'volume', options: ['250000 mL','25000 mL','2500 mL','250 mL'], correct: 0 },
    { m: 5, unit: 'km', options: ['0.005 km','0.05 km','0.5 km','5 km'], correct: 0 },
    { m: 250, unit: 'cm', options: ['25000 cm','2500 cm','25 cm','2.5 cm'], correct: 0 },
    { m: 0.75, unit: 'mm', options: ['750 mm','7.5 mm','75 mm','0.75 mm'], correct: 0 },
    { m: 1000, unit: 'km', options: ['1 km','0.001 km','1000 km','10 km'], correct: 0 },
    { m: 0.01, unit: 'cm', options: ['1 cm','0.1 cm','0.01 cm','10 cm'], correct: 0 },
    { m: 12, unit: 'mm', options: ['12000 mm','1200 mm','120 mm','12 mm'], correct: 0 },
    { m: 123.456, unit: 'mm', options: ['123456 mm','12345.6 mm','1234.56 mm','123.456 mm'], correct: 0 },
    { m: 7, unit: 'cm', options: ['700 cm','70 cm','7 cm','0.7 cm'], correct: 0 },
    { m: 0.5, unit: 'km', options: ['0.0005 km','0.05 km','0.5 km','5 km'], correct: 0 },
    { m: 1500, unit: 'km', options: ['1.5 km','1500 km','0.0015 km','15 km'], correct: 0 },
    { m: 0.333, unit: 'cm', options: ['33.3 cm','3.33 cm','333 cm','0.333 cm'], correct: 0 },
    { m: 0.0025, unit: 'mm', options: ['2.5 mm','0.25 mm','25 mm','2500 mm'], correct: 0 },
    { m: 6.35, unit: 'mm', options: ['6350 mm','635 mm','63.5 mm','6.35 mm'], correct: 0 },
    { m: 0.9144, unit: 'm', options: ['0.9144 m','0.09144 m','9.144 m','91.44 m'], correct: 0 },
    { m: 999.999, unit: 'cm', options: ['99999.9 cm','9999.99 cm','100000 cm','999.999 cm'], correct: 0 },
    { m: 0.0001, unit: 'mm', options: ['0.1 mm','0.01 mm','1 mm','0.001 mm'], correct: 0 },
    { m: 42, unit: 'km', options: ['0.042 km','4.2 km','42000 km','0.00042 km'], correct: 0 },
    { m: 1, unit: 'cm', options: ['100 cm','10 cm','1 cm','0.1 cm'], correct: 0 },
    { m: 2.54, unit: 'cm', options: ['254 cm','25.4 cm','2.54 cm','0.254 cm'], correct: 0 },
    { m: 0.01, unit: 'cm', options: ['1 cm','0.1 cm','0.01 cm','10 cm'], correct: 0 },
    { m: 16.5, unit: 'm', options: ['16.5 m','1.65 m','0.165 m','165 m'], correct: 0 },
    { m: 2500, unit: 'mm', options: ['2500000 mm','250000 mm','25000 mm','2500 mm'], correct: 0 },
    { m: 0.2, unit: 'cm', options: ['20 cm','2 cm','0.2 cm','200 cm'], correct: 0 },
    { m: 3.048, unit: 'cm', options: ['304.8 cm','30.48 cm','3.048 cm','30480 cm'], correct: 0 },
    { m: 0.127, unit: 'cm', options: ['12.7 cm','1.27 cm','0.127 cm','127 cm'], correct: 0 },
    { m: 555.555, unit: 'km', options: ['0.555555 km','0.0555555 km','5.55555 km','55.5555 km'], correct: 0 },
    { m: 0.009, unit: 'cm', options: ['0.9 cm','9 cm','0.09 cm','90 cm'], correct: 0 }
];

// javascript
// Gera e adiciona mais exercícios dinamicamente ao array `exercises`
// Chame este bloco imediatamente após a declaração original de `exercises`.
// Gera alguns exercícios adicionais (reduzido para amostra menor)
(function addMoreExercises(count = 3) {
    const units = ['km', 'hm', 'cm', 'dm', 'mm'];

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function makeOptions(correctNum, unit) {
        // Cria três distratores plausíveis diferentes do correto
        const candidates = [
            correctNum * 10,
            correctNum / 10,
            correctNum * 1.5,
            correctNum * 0.5,
            correctNum + (correctNum * 0.25),
            Math.max(correctNum - (correctNum * 0.3), 0.000001),
            correctNum * 100,
            correctNum / 100
        ];
        const opts = new Set();
        opts.add(`${formatNumber(correctNum)} ${unitSymbols[unit]}`); // correta como primeira
        let i = 0;
        while (opts.size < 4 && i < candidates.length * 2) {
            const cand = candidates[Math.floor(rand(0, candidates.length))];
            opts.add(`${formatNumber(cand)} ${unitSymbols[unit]}`);
            i++;
        }
        // Se ainda faltar, gere variações aleatórias
        while (opts.size < 4) {
            const factor = rand(0.01, 100);
            opts.add(`${formatNumber(correctNum * factor)} ${unitSymbols[unit]}`);
        }
        return Array.from(opts).slice(0, 4);
    }

    for (let i = 0; i < count; i++) {
        const unit = units[Math.floor(rand(0, units.length))];

        // Escolhe valores de metros em faixas apropriadas por unidade (apenas km/cm/mm)
        let m;
        switch (unit) {
            case 'km':
                m = parseFloat(rand(0.01, 10000).toFixed(6)); // vários tamanhos
                break;
            case 'cm':
                m = parseFloat(rand(0.001, 500).toFixed(6));
                break;
            case 'mm':
                m = parseFloat(rand(0.0001, 2000).toFixed(6));
                break;
            default:
                m = parseFloat(rand(0.01, 100).toFixed(6));
        }

        const correctValue = m * factors[unit];
        const options = makeOptions(correctValue, unit);

        exercises.push({ m: m, unit: unit, type: 'linear', options: options, correct: 0 });
    }

    // *Opcional:* atualizar interface se necessário (será usada depois no fluxo original)
    // Se o quiz já foi inicializado, atualize pontuação/questão atual:
    try {
        if (typeof updateScore === 'function') updateScore();
        if (typeof renderQuestion === 'function') {
            // se estiver no meio do quiz, mantém a questão atual
            renderQuestion(typeof current === 'number' ? current : 0);
        }
    } catch (e) {
        // ignorar se as funções ainda não existirem no momento da inserção
    }
})(12); // aumenta o número de exercícios adicionais gerados


// (segundo bloco de geração removido — usamos apenas o primeiro bloco acima)

// Consolidated and configurable generator único (substitui blocos duplicados anteriores)
function generateExercises({count = 200} = {}) {
    const units = ['km','hm','cm','dm','mm','km2','cm2','mm2','ha','m3','L','mL','cm3'];
    function rand(min, max) { return Math.random() * (max - min) + min; }

    function makeOptionsFor(correctNum, unit) {
        const candidates = [
            correctNum * 10,
            correctNum / 10,
            correctNum * 1.5,
            correctNum * 0.5,
            correctNum + (correctNum * 0.25),
            Math.max(correctNum - (correctNum * 0.3), 0.000001),
            correctNum * 100,
            correctNum / 100
        ];
        const opts = new Set();
        opts.add(`${formatNumber(correctNum)} ${unit}`);
        let i = 0;
        while (opts.size < 4 && i < candidates.length * 2) {
            const cand = candidates[Math.floor(rand(0, candidates.length))];
            opts.add(`${formatNumber(cand)} ${unit}`);
            i++;
        }
        while (opts.size < 4) {
            const factor = rand(0.01, 100);
            opts.add(`${formatNumber(correctNum * factor)} ${unit}`);
        }
        return Array.from(opts).slice(0, 4);
    }

    for (let i = 0; i < count; i++) {
        const unit = units[Math.floor(rand(0, units.length))];
        let m;
        let type = 'linear';
        switch (unit) {
            case 'km': m = parseFloat(rand(0.001, 10000).toFixed(6)); type = 'linear'; break;
            case 'cm': m = parseFloat(rand(0.0001, 2000).toFixed(6)); type = 'linear'; break;
            case 'mm': m = parseFloat(rand(0.00001, 5000).toFixed(6)); type = 'linear'; break;
            case 'km2': m = parseFloat(rand(0.000001, 1000000).toFixed(6)); type = 'area'; break; // m² values
            case 'cm2': m = parseFloat(rand(0.0001, 50000).toFixed(6)); type = 'area'; break;
            case 'mm2': m = parseFloat(rand(0.000001, 2000000).toFixed(6)); type = 'area'; break;
            case 'ha': m = parseFloat(rand(0.0001, 1000).toFixed(6)); type = 'area'; break;
            case 'm3': m = parseFloat(rand(0.0001, 1000).toFixed(6)); type = 'volume'; break;
            case 'L': m = parseFloat(rand(0.0001, 5000).toFixed(6)); type = 'volume'; break;
            case 'mL': m = parseFloat(rand(0.0001, 500000).toFixed(6)); type = 'volume'; break;
            case 'cm3': m = parseFloat(rand(0.0001, 500000).toFixed(6)); type = 'volume'; break;
            default: m = parseFloat(rand(0.01, 100).toFixed(6));
        }
        const correctValue = m * factors[unit];
        const options = makeOptionsFor(correctValue, unit);
        exercises.push({ m, unit, type, options, correct: 0 });
    }
}

// Chamadas configuráveis: ajuste o número total de exercícios gerados aqui
generateExercises({ count: 30 });

let current = 0;
let score = 0;

const questionArea = document.getElementById('questionArea');
const optionsForm = document.getElementById('optionsForm');
const submitAnswer = document.getElementById('submitAnswer');
const nextQuestion = document.getElementById('nextQuestion');
const feedback = document.getElementById('feedback');
const scoreDiv = document.getElementById('score');
const viewFullSteps = document.getElementById('viewFullSteps');
const viewHistory = document.getElementById('viewHistory');

// Modal elements
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Estado de revisão específica (apenas questões erradas)
let reviewMode = false;
let reviewIndices = [];

function activeLength() {
    return reviewMode ? reviewIndices.length : exercises.length;
}

function realIndexFromActive(indexInActive) {
    return reviewMode ? reviewIndices[indexInActive] : indexInActive;
}

// Gera ainda mais exercícios variados (apenas km/cm/mm)
// Gera um pequeno conjunto extra de exercícios variados (reduzido)
(function generateExtraExercises(count = 5) {
    const units = ['km','hm','cm','dm','mm','km2','cm2','mm2','ha','m3','L','mL','cm3'];
    function rand(min, max) { return Math.random() * (max - min) + min; }

    for (let i = 0; i < count; i++) {
        const unit = units[Math.floor(rand(0, units.length))];
        let m;
        let type = 'linear';
        switch (unit) {
            case 'km': m = parseFloat(rand(0.001, 10000).toFixed(6)); type = 'linear'; break;
            case 'cm': m = parseFloat(rand(0.0001, 2000).toFixed(6)); type = 'linear'; break;
            case 'mm': m = parseFloat(rand(0.00001, 5000).toFixed(6)); type = 'linear'; break;
            case 'km2': m = parseFloat(rand(0.000001, 1000000).toFixed(6)); type = 'area'; break;
            case 'cm2': m = parseFloat(rand(0.0001, 50000).toFixed(6)); type = 'area'; break;
            case 'mm2': m = parseFloat(rand(0.000001, 2000000).toFixed(6)); type = 'area'; break;
            case 'ha': m = parseFloat(rand(0.0001, 1000).toFixed(6)); type = 'area'; break;
            case 'm3': m = parseFloat(rand(0.0001, 1000).toFixed(6)); type = 'volume'; break;
            case 'L': m = parseFloat(rand(0.0001, 5000).toFixed(6)); type = 'volume'; break;
            case 'mL': m = parseFloat(rand(0.0001, 500000).toFixed(6)); type = 'volume'; break;
            case 'cm3': m = parseFloat(rand(0.0001, 500000).toFixed(6)); type = 'volume'; break;
            default: m = parseFloat(rand(0.01, 100).toFixed(6));
        }
        const correctValue = m * factors[unit];
        // opções: correta + 3 distratores com variações plausíveis
        const opts = new Set();
        opts.add(`${formatNumber(correctValue)} ${unit}`);
        // distratores: variações de casas, arredondamentos e inversões
        const variations = [10,0.1,100,0.01,1.5,0.5, (correctValue + (correctValue*0.25)), Math.max(correctValue - (correctValue*0.33), 0.000001)];
        let j = 0;
        while (opts.size < 4 && j < variations.length) {
            opts.add(`${formatNumber( correctValue * variations[j] )} ${unit}`);
            j++;
        }
        // preencha se faltar
        while (opts.size < 4) opts.add(`${formatNumber(correctValue * (Math.random()*100 + 0.01))} ${unit}`);

        exercises.push({ m, unit, type, options: Array.from(opts), correct: 0 });
    }
})(40);

// Helper: embaralha mantendo referência do índice original
function shuffleOptionsForExercise(ex) {
    const arr = ex.options.map((opt, idx) => ({ opt, idx }));
    // Fisher-Yates
    for (let i = arr.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[r]] = [arr[r], arr[i]];
    }
    const shuffled = arr.map(a => a.opt);
    const newCorrect = arr.findIndex(a => a.idx === ex.correct);
    return { shuffled, newCorrect, map: arr.map(a => a.idx) };
}

// Estado temporário da questão atual (shuffled)
let currentShuffled = null;
let currentFullSteps = ''; // HTML para modal

function renderQuestion(i) {
    const total = activeLength();
    if (i < 0 || i >= total) return;
    const realIdx = realIndexFromActive(i);
    const ex = exercises[realIdx];
    // determina rótulo da unidade base (m, m², m³)
    const baseLabel = ex.type === 'area' ? 'm²' : (ex.type === 'volume' ? 'm³' : 'm');
    questionArea.innerHTML = `<strong>Questão ${i + 1} de ${total}:</strong> Converta ${formatNumber(ex.m)} ${baseLabel} para ${unitNames[ex.unit]}.`;

    // embaralha opções no momento da renderização
    currentShuffled = shuffleOptionsForExercise(ex);

    optionsForm.innerHTML = currentShuffled.shuffled.map((opt, idx) =>
        `<label class="option"><input type="radio" name="opt" value="${idx}" /> <span class="label-text">${opt}</span></label>`
    ).join('');

    // limpa feedback e botões
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    nextQuestion.hidden = true;
    submitAnswer.hidden = false;
    viewFullSteps.hidden = true; // só aparece depois de responder
    updateScore();

    // precompute full steps HTML para a modal (ajustado por tipo)
    const correctValueNum = ex.m * factors[ex.unit];
    const steps = [];
    steps.push(`<h3>Passo a passo - Conversão de ${formatNumber(ex.m)} ${baseLabel} para ${unitNames[ex.unit]}</h3>`);
    steps.push(`<ol>`);
    if (ex.type === 'linear') {
        if (ex.unit === 'km') {
            steps.push(`<li>Identifique o fator: 1 km = 1000 m → 1 m = 0.001 km.</li>`);
            steps.push(`<li>Multiplique: ${formatNumber(ex.m)} × 0.001 = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</li>`);
        } else if (ex.unit === 'cm' || ex.unit === 'mm') {
            steps.push(`<li>Identifique o fator: 1 m = ${formatNumber(factors[ex.unit])} ${unitSymbols[ex.unit]}.</li>`);
            steps.push(`<li>Multiplique: ${formatNumber(ex.m)} × ${formatNumber(factors[ex.unit])} = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</li>`);
        } else {
            steps.push(`<li>Use o fator: 1 m = ${formatNumber(factors[ex.unit])} ${unitSymbols[ex.unit]}.</li>`);
            steps.push(`<li>Multiplique: ${formatNumber(ex.m)} × ${formatNumber(factors[ex.unit])} = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</li>`);
        }
    } else if (ex.type === 'area') {
        // Área: fatores correspondem a 1 m²
        steps.push(`<li>Identifique o tipo: estamos convertendo áreas (m²).</li>`);
        steps.push(`<li>Use o fator: 1 m² = ${formatNumber(factors[ex.unit])} ${unitSymbols[ex.unit]}.</li>`);
        steps.push(`<li>Multiplique: ${formatNumber(ex.m)} × ${formatNumber(factors[ex.unit])} = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</li>`);
    } else if (ex.type === 'volume') {
        // Volume: fatores correspondem a 1 m³
        steps.push(`<li>Identifique o tipo: estamos convertendo volumes (m³).</li>`);
        steps.push(`<li>Use o fator: 1 m³ = ${formatNumber(factors[ex.unit])} ${unitSymbols[ex.unit]}.</li>`);
        steps.push(`<li>Multiplique: ${formatNumber(ex.m)} × ${formatNumber(factors[ex.unit])} = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</li>`);
    } else {
        steps.push(`<li>Multiplique: ${formatNumber(ex.m)} × ${formatNumber(factors[ex.unit])} = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</li>`);
    }
    steps.push(`</ol>`);
    steps.push(`<p>Dica: reveja operações com casas decimais e sempre confirme a unidade final (${unitSymbols[ex.unit]}).</p>`);

    currentFullSteps = steps.join('');
}

function updateScore() {
    scoreDiv.textContent = `Pontuação: ${score} / ${exercises.length}`;
}

// util para parsear número de opção (igual ao anterior)
function parseOptionValue(optStr, ex) {
    const parts = optStr.trim().split(/\s+/);
    let numStr = parts[0];
    if (numStr.indexOf(',') !== -1) {
        numStr = numStr.replace(/\./g, '');
        numStr = numStr.replace(/,/g, '.');
    } else {
        numStr = numStr.replace(/,/g, '');
    }
    const value = Number(numStr);
    let unitPart = parts[1] || ex.unit;
    // Normaliza unidade exibida (ex: 'km²') para a chave interna ('km2') quando possível
    const symbolToKey = Object.keys(unitSymbols).reduce((acc, k) => { acc[unitSymbols[k]] = k; return acc; }, {});
    const unitKey = symbolToKey[unitPart] || unitPart;
    return { value: value, unit: unitKey };
}

submitAnswer.addEventListener('click', (e) => {
    e.preventDefault();
    const form = new FormData(optionsForm);
    const val = form.get('opt');
    if (val === null) {
        feedback.textContent = 'Selecione uma opção antes de responder.';
        feedback.className = 'feedback wrong';
        return;
    }
    const chosen = Number(val);
    const realIdx = realIndexFromActive(current);
    const ex = exercises[realIdx];

    // obter índice correto considerando embaralhamento
    const correctIdx = currentShuffled ? currentShuffled.newCorrect : ex.correct;

    // determinar strings e cálculos
    const correctValueNum = ex.m * factors[ex.unit];
    const correctValueStr = `${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}`;
    const chosenOptionStr = (currentShuffled ? currentShuffled.shuffled[chosen] : ex.options[chosen]);
    const chosenParsed = parseOptionValue(chosenOptionStr, ex);

    // Cria conteudo do feedback com ícone e content
    function setFeedback(type, htmlContent) {
        const icon = type === 'correct' ? '✓' : '✕';
        feedback.innerHTML = `<div class="icon">${icon}</div><div class="content">${htmlContent}</div>`;
        feedback.className = `feedback ${type}`;
    }

    // prepara full steps (já temos currentFullSteps) — incluir cálculo exemplificado
    const exampleCalc = `<div><strong>Cálculo:</strong> ${formatNumber(ex.m)} × ${formatNumber(factors[ex.unit])} = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</div>`;
    const fullStepsHTML = currentFullSteps + exampleCalc;

    if (chosen === correctIdx) {
        setFeedback('correct', `<div class="highlight">Correto!</div><div>${formatNumber(ex.m)} m = ${correctValueStr}.</div>${exampleCalc}`);
        score += 1;
    } else {
        const diff = (isFinite(chosenParsed.value) ? chosenParsed.value - correctValueNum : NaN);
        const absDiff = isFinite(diff) ? Math.abs(diff) : NaN;
        const pct = (isFinite(diff) && correctValueNum !== 0) ? (absDiff / Math.abs(correctValueNum)) * 100 : NaN;

        const justificativa = [];
        justificativa.push(`<div class="highlight">Resposta correta: ${(currentShuffled ? currentShuffled.shuffled[correctIdx] : ex.options[correctIdx])}</div>`);
        justificativa.push(`<div>${exampleCalc}</div>`);
        justificativa.push(`<div><strong>Você escolheu:</strong> ${chosenOptionStr} — valor numérico: ${isFinite(chosenParsed.value) ? formatNumber(chosenParsed.value) : 'não é um número'} ${unitSymbols[chosenParsed.unit] || chosenParsed.unit}.</div>`);
        if (isFinite(diff)) justificativa.push(`<div>Diferença: ${formatNumber(diff)} ${ex.unit} (${isFinite(pct) ? formatNumber(pct) + '%' : '—'}).</div>`);

        const diagnostics = [];
        if (isFinite(chosenParsed.value) && correctValueNum !== 0) {
            const ratio = chosenParsed.value / correctValueNum;
            function approxEqual(a,b,rel=0.06){ return Math.abs(a-b) <= Math.abs(b)*rel; }
            if (approxEqual(ratio,10,0.12)) diagnostics.push('Deslocamento de casas: multiplicou por 10 a mais (ou esqueceu de dividir).');
            if (approxEqual(ratio,0.1,0.12)) diagnostics.push('Deslocamento de casas: dividiu por 10 em vez de multiplicar.');
            if (approxEqual(ratio,100,0.15)) diagnostics.push('Possível duplicação de mudança de casas (×100).');
            if (approxEqual(ratio,0.01,0.15)) diagnostics.push('Possível divisão por 100 (duas casas).');
            if (approxEqual(ratio, 1 / factors[ex.unit], 0.08)) diagnostics.push('Possível inversão do fator: usou o fator inverso (dividiu quando devia multiplicar).');
            if (chosenParsed.unit && chosenParsed.unit !== ex.unit) diagnostics.push(`Confusão de unidades: a opção está em ${unitSymbols[chosenParsed.unit] || chosenParsed.unit} enquanto a conversão pede ${unitSymbols[ex.unit] || ex.unit}.`);
        } else {
            diagnostics.push('Não foi possível interpretar numericamente a opção escolhida — verifique o formato da opção.');
        }

        justificativa.push('<div class="diagnostics"><strong>Possíveis causas e dicas:</strong><ul>');
        diagnostics.forEach(d => justificativa.push(`<li>${d}</li>`));
        justificativa.push('</ul></div>');
        justificativa.push('<div class="checklist"><strong>Checklist:</strong><ul><li>Verifique o fator de conversão.</li><li>Verifique se deve multiplicar ou dividir.</li><li>Cheque casas decimais e separadores.</li></ul></div>');

        setFeedback('wrong', justificativa.join(''));

        // salvar no histórico de erros (armazena índice real da questão)
        try {
            const history = loadHistory();
            history.push({
                timestamp: Date.now(),
                questionIndex: realIdx,
                m: ex.m,
                unit: ex.unit,
                correctValue: correctValueNum,
                correctStr: (currentShuffled ? currentShuffled.shuffled[correctIdx] : ex.options[correctIdx]),
                chosenStr: chosenOptionStr,
                chosenValue: chosenParsed.value,
                diff: isFinite(diff) ? diff : null,
                diffPct: isFinite(pct) ? pct : null,
                fullSteps: fullStepsHTML
            });
            saveHistory(history);
        } catch (e) {
            // ignore
        }

        viewFullSteps.hidden = false;
        viewFullSteps.onclick = () => { openModal({ stepsHtml: fullStepsHTML, active: 'steps' }); };
    }

    submitAnswer.hidden = true;
    nextQuestion.hidden = false;
    updateScore();
});

nextQuestion.addEventListener('click', (e) => {
    e.preventDefault();
    current += 1;
    const total = activeLength();
    if (current >= total) {
        questionArea.innerHTML = `<strong>Fim do quiz.</strong> Pontuação final: ${score} / ${total}.`;
        optionsForm.innerHTML = '';
        submitAnswer.hidden = true;
        nextQuestion.hidden = true;
        feedback.innerHTML = '';
        viewFullSteps.hidden = true;
        // se estivermos em modo de revisão, encerra-o automaticamente
        if (reviewMode) exitReviewMode();
    } else {
        renderQuestion(current);
    }
});

// Modal helpers
function openModal(payload) {
    // payload pode ser string (compatibilidade) ou objeto { stepsHtml, historyHtml, active }
    let stepsHtml = '', historyHtml = '', active = 'steps';
    if (typeof payload === 'string') {
        stepsHtml = payload;
        active = 'steps';
    } else if (typeof payload === 'object' && payload !== null) {
        stepsHtml = payload.stepsHtml || '';
        historyHtml = payload.historyHtml || '';
        active = payload.active || (historyHtml ? 'history' : 'steps');
    }

    const tabMarkup = `
        <div class="modal-tabs">
            <button type="button" data-tab="steps" class="tab-btn"><span class="tab-icon">🔢</span> Passo a passo</button>
            <button type="button" data-tab="history" class="tab-btn"><span class="tab-icon">🕘</span> Histórico</button>
        </div>
    `;

    const contentMarkup = `
        <div class="modal-content-wrapper">
            <div id="tab-steps" class="tab-pane">${stepsHtml}</div>
            <div id="tab-history" class="tab-pane hidden">${historyHtml}</div>
        </div>
    `;

    modalBody.innerHTML = tabMarkup + contentMarkup + `<div style="margin-top:12px; text-align:right"><button id="modalCloseInner">Fechar</button></div>`;

    // event listeners para abas com animação suave
    const tabBtns = modalBody.querySelectorAll('.tab-btn');
    function setActiveTab(name) {
        modalBody.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
        const pane = modalBody.querySelector(`#tab-${name}`);
        if (pane) pane.classList.remove('hidden');
        tabBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === name));
    }
    tabBtns.forEach(b => b.addEventListener('click', () => setActiveTab(b.getAttribute('data-tab'))));

    // aciona a aba inicial
    setActiveTab(active);

    // adicionar handler para o botão limpar histórico e refazer
    const historyPane = modalBody.querySelector('#tab-history');
    if (historyPane) {
        // se não existir conteúdo, mostra mensagem padrão
        if (!historyHtml) historyPane.innerHTML = '<div>Sem histórico para exibir.</div>';
        // anexar botões úteis
        const controls = document.createElement('div');
        controls.style.marginTop = '8px';
        controls.innerHTML = `<button id="clearHistoryBtn">Limpar histórico</button> <button id="reviewWrongBtn">Refazer erros</button>`;
        historyPane.appendChild(controls);

        const clearBtn = historyPane.querySelector('#clearHistoryBtn');
        if (clearBtn) clearBtn.addEventListener('click', () => { saveHistory([]); historyPane.innerHTML = '<div>Histórico limpo.</div>'; });
        const reviewBtn = historyPane.querySelector('#reviewWrongBtn');
        if (reviewBtn) reviewBtn.addEventListener('click', () => { startReviewFromHistory(); closeModal(); });
    }

    // fechar modal interno
    const closeInner = modalBody.querySelector('#modalCloseInner');
    if (closeInner) closeInner.addEventListener('click', closeModal);

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
}

function closeModal() { modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); }
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if (e.target === modal || e.target.classList.contains('modal-backdrop')) closeModal(); });

// viewFullSteps deve abrir modal na aba steps
viewFullSteps.addEventListener('click', ()=>{
    if (currentFullSteps) openModal({ stepsHtml: currentFullSteps, active: 'steps' });
});

// Ver histórico — monta HTML do histórico e abre modal na aba history
viewHistory.addEventListener('click', ()=>{
    const history = loadHistory().slice().reverse();
    if (history.length === 0) {
        openModal({ historyHtml: '<div>Sem erros registrados ainda.</div>', active: 'history' });
        return;
    }
    const items = history.map(h => {
        const date = new Date(h.timestamp).toLocaleString();
        return `<div style="border-bottom:1px solid rgba(255,255,255,0.04); padding:10px 0"><div><strong>Questão #${h.questionIndex+1}</strong> — ${formatNumber(h.m)} m → ${h.unit} <small style=\"color:var(--muted)\">(${date})</small></div><div>Correto: ${h.correctStr}</div><div>Sua escolha: ${h.chosenStr} ${h.diff !== null ? `<div>Diferença: ${formatNumber(h.diff)} (${formatNumber(h.diffPct)}%)</div>` : ''}</div><div style="margin-top:8px">${h.fullSteps}</div></div>`;
    }).join('');
    openModal({ historyHtml: `<h3>Histórico de erros</h3>${items}`, active: 'history' });
});

// Inicia revisão apenas das questões erradas (usa o histórico)
function startReviewFromHistory() {
    const history = loadHistory();
    if (!history || history.length === 0) return alert('Nenhum erro registrado para revisar.');
    // extrai índices originais e remove duplicatas mantendo ordem (mais recentes primeiro)
    const idxs = [];
    for (let i = history.length - 1; i >= 0; i--) { // inverter para ordem cronológica original
        const q = history[i].questionIndex;
        if (!idxs.includes(q)) idxs.push(q);
    }
    if (idxs.length === 0) return alert('Nenhum erro válido para revisar.');
    reviewMode = true;
    reviewIndices = idxs;
    current = 0;
    score = 0; // reset opcional para a sessão de revisão
    renderQuestion(current);
    updateScore();
}

// Quando terminar a revisão, volta ao modo normal
function exitReviewMode() {
    reviewMode = false;
    reviewIndices = [];
    current = 0;
    renderQuestion(current);
    updateScore();
}

// Ajustes no submit/next para respeitar reviewMode
submitAnswer.addEventListener('click', (e) => {
    e.preventDefault();
    const form = new FormData(optionsForm);
    const val = form.get('opt');
    if (val === null) {
        feedback.textContent = 'Selecione uma opção antes de responder.';
        feedback.className = 'feedback wrong';
        return;
    }
    const chosen = Number(val);
    const realIdx = realIndexFromActive(current);
    const ex = exercises[realIdx];

    // obter índice correto considerando embaralhamento
    const correctIdx = currentShuffled ? currentShuffled.newCorrect : ex.correct;

    // determinar strings e cálculos
    const correctValueNum = ex.m * factors[ex.unit];
    const correctValueStr = `${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}`;
    const chosenOptionStr = (currentShuffled ? currentShuffled.shuffled[chosen] : ex.options[chosen]);
    const chosenParsed = parseOptionValue(chosenOptionStr, ex);

    // Cria conteudo do feedback com ícone e content
    function setFeedback(type, htmlContent) {
        const icon = type === 'correct' ? '✓' : '✕';
        feedback.innerHTML = `<div class="icon">${icon}</div><div class="content">${htmlContent}</div>`;
        feedback.className = `feedback ${type}`;
    }

    // prepara full steps (já temos currentFullSteps) — incluir cálculo exemplificado
    const exampleCalc = `<div><strong>Cálculo:</strong> ${formatNumber(ex.m)} × ${formatNumber(factors[ex.unit])} = ${formatNumber(correctValueNum)} ${unitSymbols[ex.unit]}.</div>`;
    const fullStepsHTML = currentFullSteps + exampleCalc;

    if (chosen === correctIdx) {
        setFeedback('correct', `<div class="highlight">Correto!</div><div>${formatNumber(ex.m)} m = ${correctValueStr}.</div>${exampleCalc}`);
        score += 1;
    } else {
        const diff = (isFinite(chosenParsed.value) ? chosenParsed.value - correctValueNum : NaN);
        const absDiff = isFinite(diff) ? Math.abs(diff) : NaN;
        const pct = (isFinite(diff) && correctValueNum !== 0) ? (absDiff / Math.abs(correctValueNum)) * 100 : NaN;

        const justificativa = [];
        justificativa.push(`<div class="highlight">Resposta correta: ${(currentShuffled ? currentShuffled.shuffled[correctIdx] : ex.options[correctIdx])}</div>`);
        justificativa.push(`<div>${exampleCalc}</div>`);
        justificativa.push(`<div><strong>Você escolheu:</strong> ${chosenOptionStr} — valor numérico: ${isFinite(chosenParsed.value) ? formatNumber(chosenParsed.value) : 'não é um número'} ${unitSymbols[chosenParsed.unit] || chosenParsed.unit}.</div>`);
        if (isFinite(diff)) justificativa.push(`<div>Diferença: ${formatNumber(diff)} ${ex.unit} (${isFinite(pct) ? formatNumber(pct) + '%' : '—'}).</div>`);

        const diagnostics = [];
        if (isFinite(chosenParsed.value) && correctValueNum !== 0) {
            const ratio = chosenParsed.value / correctValueNum;
            function approxEqual(a,b,rel=0.06){ return Math.abs(a-b) <= Math.abs(b)*rel; }
            if (approxEqual(ratio,10,0.12)) diagnostics.push('Deslocamento de casas: multiplicou por 10 a mais (ou esqueceu de dividir).');
            if (approxEqual(ratio,0.1,0.12)) diagnostics.push('Deslocamento de casas: dividiu por 10 em vez de multiplicar.');
            if (approxEqual(ratio,100,0.15)) diagnostics.push('Possível duplicação de mudança de casas (×100).');
            if (approxEqual(ratio,0.01,0.15)) diagnostics.push('Possível divisão por 100 (duas casas).');
            if (approxEqual(ratio, 1 / factors[ex.unit], 0.08)) diagnostics.push('Possível inversão do fator: usou o fator inverso (dividiu quando devia multiplicar).');
            if (chosenParsed.unit && chosenParsed.unit !== ex.unit) diagnostics.push(`Confusão de unidades: a opção está em ${unitSymbols[chosenParsed.unit] || chosenParsed.unit} enquanto a conversão pede ${unitSymbols[ex.unit] || ex.unit}.`);
        } else {
            diagnostics.push('Não foi possível interpretar numericamente a opção escolhida — verifique o formato da opção.');
        }

        justificativa.push('<div class="diagnostics"><strong>Possíveis causas e dicas:</strong><ul>');
        diagnostics.forEach(d => justificativa.push(`<li>${d}</li>`));
        justificativa.push('</ul></div>');
        justificativa.push('<div class="checklist"><strong>Checklist:</strong><ul><li>Verifique o fator de conversão.</li><li>Verifique se deve multiplicar ou dividir.</li><li>Cheque casas decimais e separadores.</li></ul></div>');

        setFeedback('wrong', justificativa.join(''));

        // salvar no histórico de erros (armazena índice real da questão)
        try {
            const history = loadHistory();
            history.push({
                timestamp: Date.now(),
                questionIndex: realIdx,
                m: ex.m,
                unit: ex.unit,
                correctValue: correctValueNum,
                correctStr: (currentShuffled ? currentShuffled.shuffled[correctIdx] : ex.options[correctIdx]),
                chosenStr: chosenOptionStr,
                chosenValue: chosenParsed.value,
                diff: isFinite(diff) ? diff : null,
                diffPct: isFinite(pct) ? pct : null,
                fullSteps: fullStepsHTML
            });
            saveHistory(history);
        } catch (e) {
            // ignore
        }

        viewFullSteps.hidden = false;
        viewFullSteps.onclick = () => { openModal({ stepsHtml: fullStepsHTML, active: 'steps' }); };
    }

    submitAnswer.hidden = true;
    nextQuestion.hidden = false;
    updateScore();
});

nextQuestion.addEventListener('click', (e) => {
    e.preventDefault();
    current += 1;
    const total = activeLength();
    if (current >= total) {
        questionArea.innerHTML = `<strong>Fim do quiz.</strong> Pontuação final: ${score} / ${total}.`;
        optionsForm.innerHTML = '';
        submitAnswer.hidden = true;
        nextQuestion.hidden = true;
        feedback.innerHTML = '';
        viewFullSteps.hidden = true;
        // se estivermos em modo de revisão, encerra-o automaticamente
        if (reviewMode) exitReviewMode();
    } else {
        renderQuestion(current);
    }
});

// Inicializa
renderQuestion(current);
updateScore();

// Popula a seção de lista de exercícios (agrupados por tipo)
function renderExercisesList() {
    const lists = { linear: document.getElementById('listLinear'), area: document.getElementById('listArea'), volume: document.getElementById('listVolume') };
    if (!lists.linear || !lists.area || !lists.volume) return;
    lists.linear.innerHTML = '';
    lists.area.innerHTML = '';
    lists.volume.innerHTML = '';

    exercises.forEach((ex, idx) => {
        const type = ex.type || 'linear';
        const li = document.createElement('li');
        // texto descritivo: Converta X m (ou m²/m³) para UNIT
        const baseLabel = type === 'area' ? 'm²' : (type === 'volume' ? 'm³' : 'm');
        const unitSym = unitSymbols[ex.unit] || ex.unit;
        // Apenas o enunciado (sem opções)
        li.innerHTML = `<strong>#${idx + 1}</strong> — Converta ${formatNumber(ex.m)} ${baseLabel} → ${unitNames[ex.unit] || ex.unit}`;

        // Torna clicável: ao clicar, carrega a questão correspondente no quiz
        li.style.cursor = 'pointer';
        li.setAttribute('data-ex-idx', String(idx));
        li.addEventListener('click', () => {
            // Sai de qualquer modo de revisão ativo e posiciona a questão real
            reviewMode = false;
            reviewIndices = [];
            current = idx;
            renderQuestion(current);
            updateScore();
            // remove seleção anterior e marca a atual
            document.querySelectorAll('#lista-exercicios li.selected').forEach(el => el.classList.remove('selected'));
            li.classList.add('selected');
            // rola suavemente para a área da pergunta
            const q = document.getElementById('questionArea');
            if (q && q.scrollIntoView) q.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        lists[type].appendChild(li);
    });
}

// chamar a renderização da lista agora (após gerar exercícios)
renderExercisesList();
