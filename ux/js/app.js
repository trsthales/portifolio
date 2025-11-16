/**
 * ========================================
 * ✅ BOAS PRÁTICAS DE JAVASCRIPT E UX
 * ========================================
 * Este arquivo contém a lógica principal do e-commerce
 * com exemplos de boas práticas de UX implementadas.
 */

// ===== DADOS MOCKADOS =====

/**
 * ✅ BOA PRÁTICA: Dados estruturados e tipados
 * Facilita manutenção e entendimento do código
 */
const PRODUCTS = [
    {
        id: 1,
        name: "Smartphone Premium",
        price: 2499.90,
        description: "Celular de última geração com câmera profissional",
        image: "📱",
        category: "Eletrônicos",
        stock: 15
    },
    {
        id: 2,
        name: "Notebook Gamer",
        price: 4999.90,
        description: "Notebook potente para jogos e trabalho",
        image: "💻",
        category: "Eletrônicos",
        stock: 8
    },
    {
        id: 3,
        name: "Fone Bluetooth",
        price: 299.90,
        description: "Fone sem fio com cancelamento de ruído",
        image: "🎧",
        category: "Acessórios",
        stock: 30
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 899.90,
        description: "Relógio inteligente com monitor cardíaco",
        image: "⌚",
        category: "Acessórios",
        stock: 20
    },
    {
        id: 5,
        name: "Tablet Pro",
        price: 1899.90,
        description: "Tablet profissional com caneta stylus",
        image: "📲",
        category: "Eletrônicos",
        stock: 12
    },
    {
        id: 6,
        name: "Câmera DSLR",
        price: 3499.90,
        description: "Câmera profissional para fotografia",
        image: "📷",
        category: "Fotografia",
        stock: 5
    }
];

// ===== GESTÃO DE ESTADO =====

/**
 * ✅ BOA PRÁTICA: Estado centralizado
 * Facilita debug e manutenção
 */
class AppState {
    constructor() {
        this.cart = this.loadCart();
        this.user = this.loadUser();
        this.updateCartBadge();
    }

    /**
     * ✅ BOA PRÁTICA: Persistência com localStorage
     * Mantém dados entre sessões
     */
    loadCart() {
        try {
            const saved = localStorage.getItem('uxshop_cart');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Erro ao carregar carrinho:', error);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('uxshop_cart', JSON.stringify(this.cart));
            this.updateCartBadge();
        } catch (error) {
            console.error('Erro ao salvar carrinho:', error);
            this.showNotification('Erro ao salvar carrinho', 'error');
        }
    }

    loadUser() {
        try {
            const saved = localStorage.getItem('uxshop_user');
            return saved ? JSON.parse(saved) : null;
        } catch (error) {
            console.error('Erro ao carregar usuário:', error);
            return null;
        }
    }

    saveUser(user) {
        try {
            localStorage.setItem('uxshop_user', JSON.stringify(user));
            this.user = user;
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
        }
    }

    /**
     * ✅ BOA PRÁTICA: Atualizar UI automaticamente
     * Feedback visual imediato
     */
    updateCartBadge() {
        const badge = document.getElementById('cart-count');
        if (badge) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.textContent = totalItems;
            
            // ✅ BOA PRÁTICA: Animação sutil para chamar atenção
            badge.style.animation = 'none';
            setTimeout(() => {
                badge.style.animation = 'pulse 0.3s ease-in-out';
            }, 10);
        }
    }

    /**
     * ✅ BOA PRÁTICA: Adicionar ao carrinho com validação
     */
    addToCart(productId, quantity = 1) {
        const product = PRODUCTS.find(p => p.id === productId);
        
        if (!product) {
            this.showNotification('Produto não encontrado', 'error');
            return false;
        }

        // Verificar estoque
        const existingItem = this.cart.find(item => item.productId === productId);
        const currentQuantity = existingItem ? existingItem.quantity : 0;
        
        if (currentQuantity + quantity > product.stock) {
            this.showNotification(
                `Estoque insuficiente. Disponível: ${product.stock}`,
                'warning'
            );
            return false;
        }

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                productId,
                quantity,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart();
        this.showNotification(`${product.name} adicionado ao carrinho!`, 'success');
        return true;
    }

    removeFromCart(productId) {
        const index = this.cart.findIndex(item => item.productId === productId);
        if (index > -1) {
            const product = PRODUCTS.find(p => p.id === productId);
            this.cart.splice(index, 1);
            this.saveCart();
            this.showNotification(`${product.name} removido do carrinho`, 'info');
        }
    }

    updateCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.productId === productId);
        const product = PRODUCTS.find(p => p.id === productId);
        
        if (!item || !product) return false;

        if (quantity <= 0) {
            this.removeFromCart(productId);
            return true;
        }

        if (quantity > product.stock) {
            this.showNotification(
                `Estoque insuficiente. Disponível: ${product.stock}`,
                'warning'
            );
            return false;
        }

        item.quantity = quantity;
        this.saveCart();
        return true;
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => {
            const product = PRODUCTS.find(p => p.id === item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    /**
     * ✅ BOA PRÁTICA: Sistema de notificações não-intrusivo
     * Toast messages que desaparecem automaticamente
     */
    showNotification(message, type = 'info') {
        // Criar container se não existir
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.className = 'notification-container';
            container.setAttribute('role', 'status');
            container.setAttribute('aria-live', 'polite');
            document.body.appendChild(container);
        }

        // Criar notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        // Ícones para cada tipo
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        
        notification.innerHTML = `
            <span class="notification-icon">${icons[type]}</span>
            <span class="notification-message">${message}</span>
        `;

        container.appendChild(notification);

        // ✅ BOA PRÁTICA: Animação de entrada
        setTimeout(() => notification.classList.add('notification-show'), 10);

        // ✅ BOA PRÁTICA: Remover automaticamente após 3s
        setTimeout(() => {
            notification.classList.remove('notification-show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Instância global do estado
const appState = new AppState();

// ===== HELPERS DE UI =====

/**
 * ✅ BOA PRÁTICA: Formatar moeda com Intl.NumberFormat
 * Internacionalização nativa do JavaScript
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

/**
 * ✅ BOA PRÁTICA: Debounce para otimizar performance
 * Evita chamadas excessivas em eventos frequentes
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * ✅ BOA PRÁTICA: Validação de email com regex
 */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * ✅ BOA PRÁTICA: Validação de CPF
 */
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(cpf.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

/**
 * ✅ BOA PRÁTICA: Máscara de input não-intrusiva
 * Formata enquanto o usuário digita
 */
function maskCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

function maskPhone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
}

function maskCreditCard(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})\d+?$/, '$1');
}

// ===== RENDERIZAÇÃO DE PRODUTOS =====

/**
 * ✅ BOA PRÁTICA: Render otimizado com DocumentFragment
 * Melhor performance ao adicionar múltiplos elementos
 */
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // ✅ BOA PRÁTICA: Loading state enquanto renderiza
    container.innerHTML = '<div class="loading">Carregando produtos...</div>';

    // Simular delay de rede (remover em produção)
    setTimeout(() => {
        container.innerHTML = '';
        
        const fragment = document.createDocumentFragment();
        
        products.forEach(product => {
            const card = createProductCard(product);
            fragment.appendChild(card);
        });
        
        container.appendChild(fragment);
    }, 500);
}

/**
 * ✅ BOA PRÁTICA: Criar card de produto acessível
 */
function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    card.innerHTML = `
        <div class="product-image">
            <span class="product-emoji" role="img" aria-label="${product.name}">
                ${product.image}
            </span>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">${formatCurrency(product.price)}</span>
                <span class="product-stock ${product.stock < 5 ? 'low-stock' : ''}">
                    ${product.stock < 5 ? '⚠️ ' : ''}${product.stock} disponíveis
                </span>
            </div>
            <button 
                class="btn btn-primary add-to-cart-btn" 
                data-product-id="${product.id}"
                aria-label="Adicionar ${product.name} ao carrinho"
                ${product.stock === 0 ? 'disabled' : ''}
            >
                ${product.stock === 0 ? 'Esgotado' : '🛒 Adicionar ao Carrinho'}
            </button>
        </div>
    `;
    
    return card;
}

// ===== EVENT LISTENERS =====

/**
 * ✅ BOA PRÁTICA: Event delegation para performance
 * Um listener no pai ao invés de vários nos filhos
 */
document.addEventListener('DOMContentLoaded', () => {
    // Carregar produtos em destaque na home
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        const featured = PRODUCTS.slice(0, 4);
        renderProducts(featured, 'featured-products');
    }

    // ✅ BOA PRÁTICA: Event delegation para botões de adicionar ao carrinho
    document.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.add-to-cart-btn');
        if (addBtn) {
            const productId = parseInt(addBtn.dataset.productId);
            appState.addToCart(productId);
        }
    });

    // Busca com debounce
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase().trim();
            console.log('Buscando:', query);
            // Implementar busca aqui
        }, 300));
    }
});

/**
 * ✅ BOA PRÁTICA: Validação de formulário em tempo real
 * Feedback imediato ao usuário
 */
function setupFormValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validação ao sair do campo (blur)
        input.addEventListener('blur', () => {
            validateField(input);
        });

        // Limpar erro ao começar a digitar
        input.addEventListener('input', () => {
            clearFieldError(input);
        });
    });

    // Prevenir submit se houver erros
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let hasErrors = false;
        inputs.forEach(input => {
            if (!validateField(input)) {
                hasErrors = true;
            }
        });

        if (!hasErrors) {
            handleFormSubmit(form);
        }
    });
}

/**
 * ✅ BOA PRÁTICA: Validação individual de campo
 */
function validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    const required = input.hasAttribute('required');
    
    // Campo obrigatório vazio
    if (required && !value) {
        showFieldError(input, 'Este campo é obrigatório');
        return false;
    }
    
    // Email
    if (type === 'email' && value && !isValidEmail(value)) {
        showFieldError(input, 'Email inválido. Use formato: nome@exemplo.com');
        return false;
    }
    
    // CPF
    if (input.name === 'cpf' && value && !isValidCPF(value)) {
        showFieldError(input, 'CPF inválido');
        return false;
    }
    
    // Senha
    if (type === 'password' && value && value.length < 6) {
        showFieldError(input, 'Senha deve ter no mínimo 6 caracteres');
        return false;
    }
    
    clearFieldError(input);
    return true;
}

/**
 * ✅ BOA PRÁTICA: Mostrar erro de forma acessível
 */
function showFieldError(input, message) {
    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    
    let errorDiv = input.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains('field-error')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.setAttribute('role', 'alert');
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    
    errorDiv.textContent = message;
}

/**
 * ✅ BOA PRÁTICA: Limpar erro ao corrigir
 */
function clearFieldError(input) {
    input.classList.remove('input-error');
    input.removeAttribute('aria-invalid');
    
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('field-error')) {
        errorDiv.remove();
    }
}

/**
 * ✅ BOA PRÁTICA: Loading state durante submit
 */
function handleFormSubmit(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Desabilitar botão e mostrar loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Processando...';
    
    // Simular requisição
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        appState.showNotification('Formulário enviado com sucesso!', 'success');
        form.reset();
    }, 2000);
}

// Exportar para uso global
window.appState = appState;
window.PRODUCTS = PRODUCTS;
window.formatCurrency = formatCurrency;
window.setupFormValidation = setupFormValidation;
window.renderProducts = renderProducts;
window.maskCPF = maskCPF;
window.maskPhone = maskPhone;
window.maskCreditCard = maskCreditCard;
