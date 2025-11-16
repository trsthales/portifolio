// ==========================================
// MODULES-INTEGRATION-ADVANCED.JS
// Integra todos os módulos avançados
// ==========================================

// Combinar todos os módulos (parte 1, 2 e 3)
const ALL_MODULES_ADV = {
    ...MODULES_ADVANCED,          // app-advanced.js: intro, callbacks
    ...MODULES_ADVANCED_PART2,    // modules-advanced-part2.js: async
    ...(typeof MODULES_ADVANCED_PART3 !== 'undefined' ? MODULES_ADVANCED_PART3 : {}) // parte 3 (ajax, modules, patterns, bestpractices, performance, versions)
};

// Mapeamento de módulos
const MODULE_MAP_ADV = {
    intro: { name: 'Introdução', icon: '🚀', level: 3 },
    callbacks: { name: 'Callbacks & Promises', icon: '⏳', level: 3 },
    async: { name: 'Async/Await', icon: '⚡', level: 3 },
    ajax: { name: 'AJAX & HTTP', icon: '🌐', level: 3 },
    modules: { name: 'Modules ES6', icon: '📦', level: 3 },
    patterns: { name: 'Design Patterns', icon: '🎨', level: 4 },
    bestpractices: { name: 'Best Practices', icon: '✨', level: 4 },
    performance: { name: 'Performance', icon: '⚡', level: 4 },
    versions: { name: 'ES6-ES2024', icon: '📅', level: 4 }
};

// Função principal de carregamento
function loadModule(moduleId) {
    const contentCard = document.getElementById('content-card');
    const content = document.getElementById('content');
    const targetElement = contentCard || content;
    
    if (!targetElement) {
        console.error('Elemento de conteúdo não encontrado');
        return;
    }
    
    // Verificar se módulo existe
    if (!ALL_MODULES_ADV[moduleId]) {
        targetElement.innerHTML = `
            <div class="section">
                <h2>❌ Módulo não encontrado</h2>
                <p>O módulo "${moduleId}" não está disponível ainda.</p>
                <p><strong>Módulos disponíveis:</strong> ${Object.keys(ALL_MODULES_ADV).join(', ')}</p>
                <div class="warning-box" style="margin-top: 20px;">
                    <strong>🚧 Em desenvolvimento:</strong><br>
                    Alguns módulos ainda estão sendo criados. 
                    Por enquanto, aproveite os módulos disponíveis!
                </div>
            </div>
        `;
        return;
    }
    
    // Carregar conteúdo do módulo
    try {
        targetElement.innerHTML = ALL_MODULES_ADV[moduleId].render();
        
        // Atualizar navegação ativa
        updateActiveNav(moduleId);
        
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Salvar módulo atual
        localStorage.setItem('currentModuleAdvanced', moduleId);

        // Registrar módulo visitado
        const visited = JSON.parse(localStorage.getItem('visitedModulesAdvanced') || '[]');
        if (!visited.includes(moduleId)) {
            visited.push(moduleId);
            localStorage.setItem('visitedModulesAdvanced', JSON.stringify(visited));
        }
        
        console.log(`✅ Módulo "${moduleId}" carregado com sucesso`);
        
    } catch (erro) {
        console.error(`Erro ao carregar módulo "${moduleId}":`, erro);
        targetElement.innerHTML = `
            <div class="section">
                <h2>❌ Erro ao carregar módulo</h2>
                <p>Ocorreu um erro ao carregar o módulo "${moduleId}".</p>
                <p class="danger-box">${erro.message}</p>
                <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow: auto;">
${erro.stack}
                </pre>
            </div>
        `;
    }
}

// Atualizar item ativo na navegação
function updateActiveNav(moduleId) {
    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`[data-module="${moduleId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Carregar módulo inicial
function loadInitialModule() {
    const savedModule = localStorage.getItem('currentModuleAdvanced');
    
    if (savedModule && ALL_MODULES_ADV[savedModule]) {
        loadModule(savedModule);
    } else {
        loadModule('intro');
    }
}

// Configurar navegação
function setupNavigation() {
    document.querySelectorAll('.module-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleId = item.dataset.module;
            
            if (moduleId) {
                loadModule(moduleId);
            }
        });
    });
    
    console.log('✅ Navegação configurada');
}

// Navegação por teclado
function setupKeyboardNavigation() {
    const moduleKeys = Object.keys(ALL_MODULES_ADV);
    
    document.addEventListener('keydown', (e) => {
        // Alt + Seta Direita = Próximo
        if (e.altKey && e.key === 'ArrowRight') {
            e.preventDefault();
            const current = localStorage.getItem('currentModuleAdvanced') || 'intro';
            const currentIndex = moduleKeys.indexOf(current);
            const nextIndex = (currentIndex + 1) % moduleKeys.length;
            loadModule(moduleKeys[nextIndex]);
        }
        
        // Alt + Seta Esquerda = Anterior
        if (e.altKey && e.key === 'ArrowLeft') {
            e.preventDefault();
            const current = localStorage.getItem('currentModuleAdvanced') || 'intro';
            const currentIndex = moduleKeys.indexOf(current);
            const prevIndex = currentIndex === 0 ? moduleKeys.length - 1 : currentIndex - 1;
            loadModule(moduleKeys[prevIndex]);
        }
        
        // Alt + H = Home
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            loadModule('intro');
        }
    });
    
    console.log('✅ Navegação por teclado ativada (Alt + ← →, Alt + H)');
}

// Progresso
function getProgress() {
    const visitedModules = JSON.parse(localStorage.getItem('visitedModulesAdvanced') || '[]');
    const totalModules = Object.keys(ALL_MODULES_ADV).length;
    const visitedCount = visitedModules.length;
    const percentage = Math.round((visitedCount / totalModules) * 100);
    
    return {
        total: totalModules,
        visited: visitedCount,
        percentage: percentage,
        remaining: totalModules - visitedCount
    };
}

// Resetar progresso
function resetProgress() {
    if (confirm('Deseja resetar todo o progresso? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('visitedModulesAdvanced');
        localStorage.removeItem('currentModuleAdvanced');
        console.log('✅ Progresso resetado');
        loadModule('intro');
    }
}

// Exportar funções globais
window.loadModule = loadModule;
window.getProgress = getProgress;
window.resetProgress = resetProgress;

// Inicialização
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupNavigation();
        loadInitialModule();
        setupKeyboardNavigation();
    });
} else {
    setupNavigation();
    loadInitialModule();
    setupKeyboardNavigation();
}

console.log('✅ Módulos avançados integrados:', Object.keys(ALL_MODULES_ADV).length);
console.log('📦 Módulos disponíveis:', Object.keys(ALL_MODULES_ADV).join(', '));
console.log('🗺️ Mapa de módulos:', MODULE_MAP_ADV);
