// ==========================================
// MODULES-INTEGRATION.JS
// Integra todos os módulos (app.js, modules-part2.js, modules-part3.js)
// ==========================================

// Combinar todos os módulos em um único objeto
const ALL_MODULES = {
    ...MODULES,           // app.js: intro, functions, objects, events
    ...MODULES_PART2,     // modules-part2.js: dom
    ...MODULES_PART3      // modules-part3.js: iterations, errors, classes, json, webapis
};

// Mapeamento de módulos para facilitar navegação
const MODULE_MAP = {
    'intro': { name: 'Introdução', icon: '🎯', level: 1 },
    'functions': { name: 'Funções', icon: '⚡', level: 1 },
    'objects': { name: 'Objetos', icon: '📦', level: 1 },
    'events': { name: 'Eventos', icon: '🎪', level: 1 },
    'dom': { name: 'DOM', icon: '🌳', level: 1 },
    'iterations': { name: 'Iterações', icon: '🔄', level: 2 },
    'errors': { name: 'Erros', icon: '🚨', level: 2 },
    'classes': { name: 'Classes', icon: '🏛️', level: 2 },
    'json': { name: 'JSON', icon: '📋', level: 2 },
    'webapis': { name: 'Web APIs', icon: '🌐', level: 2 }
};

// Função principal de carregamento de módulos
function loadModule(moduleId) {
    const contentCard = document.getElementById('content-card');
    const content = document.getElementById('content');
    
    // Usar content-card se existir, senão content
    const targetElement = contentCard || content;
    
    if (!targetElement) {
        console.error('Elemento de conteúdo não encontrado');
        return;
    }
    
    // Verificar se módulo existe
    if (!ALL_MODULES[moduleId]) {
        targetElement.innerHTML = `
            <div class="section">
                <h2>❌ Módulo não encontrado</h2>
                <p>O módulo "${moduleId}" não está disponível.</p>
                <p>Módulos disponíveis: ${Object.keys(ALL_MODULES).join(', ')}</p>
            </div>
        `;
        return;
    }
    
    // Carregar conteúdo do módulo
    try {
        targetElement.innerHTML = ALL_MODULES[moduleId].render();
        
        // Atualizar navegação ativa
        updateActiveNav(moduleId);
        
        // Scroll suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Salvar módulo atual no localStorage
        localStorage.setItem('currentModule', moduleId);
        
        console.log(`✅ Módulo "${moduleId}" carregado com sucesso`);
        
    } catch (erro) {
        console.error(`Erro ao carregar módulo "${moduleId}":`, erro);
        targetElement.innerHTML = `
            <div class="section">
                <h2>❌ Erro ao carregar módulo</h2>
                <p>Ocorreu um erro ao carregar o módulo "${moduleId}".</p>
                <p class="danger-box">${erro.message}</p>
            </div>
        `;
    }
}

// Atualizar item ativo na navegação
function updateActiveNav(moduleId) {
    // Remover 'active' de todos
    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Adicionar 'active' ao atual
    const activeItem = document.querySelector(`[data-module="${moduleId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Carregar módulo inicial
function loadInitialModule() {
    // Tentar carregar último módulo visitado
    const savedModule = localStorage.getItem('currentModule');
    
    if (savedModule && ALL_MODULES[savedModule]) {
        loadModule(savedModule);
    } else {
        // Carregar introdução por padrão
        loadModule('intro');
    }
}

// Adicionar event listeners aos itens de navegação
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

// Estatísticas de progresso
function getProgress() {
    const visitedModules = JSON.parse(localStorage.getItem('visitedModules') || '[]');
    const totalModules = Object.keys(ALL_MODULES).length;
    const visitedCount = visitedModules.length;
    const percentage = Math.round((visitedCount / totalModules) * 100);
    
    return {
        total: totalModules,
        visited: visitedCount,
        percentage: percentage,
        remaining: totalModules - visitedCount
    };
}

// Marcar módulo como visitado
function markModuleAsVisited(moduleId) {
    const visitedModules = JSON.parse(localStorage.getItem('visitedModules') || '[]');
    
    if (!visitedModules.includes(moduleId)) {
        visitedModules.push(moduleId);
        localStorage.setItem('visitedModules', JSON.stringify(visitedModules));
    }
}

// Resetar progresso
function resetProgress() {
    if (confirm('Deseja resetar todo o progresso? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('visitedModules');
        localStorage.removeItem('currentModule');
        console.log('✅ Progresso resetado');
        loadModule('intro');
    }
}

// Navegação por teclado
function setupKeyboardNavigation() {
    const moduleKeys = Object.keys(ALL_MODULES);
    
    document.addEventListener('keydown', (e) => {
        // Alt + Seta Direita = Próximo módulo
        if (e.altKey && e.key === 'ArrowRight') {
            e.preventDefault();
            const current = localStorage.getItem('currentModule') || 'intro';
            const currentIndex = moduleKeys.indexOf(current);
            const nextIndex = (currentIndex + 1) % moduleKeys.length;
            loadModule(moduleKeys[nextIndex]);
        }
        
        // Alt + Seta Esquerda = Módulo anterior
        if (e.altKey && e.key === 'ArrowLeft') {
            e.preventDefault();
            const current = localStorage.getItem('currentModule') || 'intro';
            const currentIndex = moduleKeys.indexOf(current);
            const prevIndex = currentIndex === 0 ? moduleKeys.length - 1 : currentIndex - 1;
            loadModule(moduleKeys[prevIndex]);
        }
        
        // Alt + H = Home (Introdução)
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            loadModule('intro');
        }
    });
    
    console.log('✅ Navegação por teclado ativada (Alt + ← →, Alt + H)');
}

// Busca de módulos
function searchModules(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        return Object.keys(ALL_MODULES);
    }
    
    return Object.keys(ALL_MODULES).filter(moduleId => {
        const module = MODULE_MAP[moduleId];
        return module && (
            module.name.toLowerCase().includes(query) ||
            moduleId.toLowerCase().includes(query)
        );
    });
}

// Exportar funções globais
window.loadModule = loadModule;
window.getProgress = getProgress;
window.resetProgress = resetProgress;
window.searchModules = searchModules;

// Inicialização quando DOM estiver pronto
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

console.log('✅ Módulos integrados:', Object.keys(ALL_MODULES).length);
console.log('📦 Módulos disponíveis:', Object.keys(ALL_MODULES).join(', '));
