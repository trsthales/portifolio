// Scroll suave para o topo ao clicar na foto do header
document.querySelectorAll('.nav-brand a, .nav-brand .profile-photo').forEach(el => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        const duration = 1200;
        const startPosition = window.pageYOffset;
        const distance = -startPosition;
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percent = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * percent);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    function openSidebar() {
        sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.style.display = 'block';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.style.display = 'none';
    }

    sidebarToggle.addEventListener('click', function () {
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
});
// Smooth Scroll and Active Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active navigation link on scroll
function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Skill bars animation with Intersection Observer
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            const progressBar = entry.target.querySelector('.skill-progress');
            const progress = progressBar.getAttribute('data-progress');
            progressBar.style.setProperty('--progress-width', `${progress}%`);
            progressBar.style.width = `${progress}%`;
        }
    });
}, { threshold: 0.5 });

skillCards.forEach(card => {
    skillObserver.observe(card);
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat-item');
animateElements.forEach(el => {
    fadeObserver.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');




contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validações
    if (!name) {
        showNotification('Por favor, informe seu nome.', 'error');
        return;
    }
    if (!email) {
        showNotification('Por favor, informe seu email.', 'error');
        return;
    }
    // Regex simples para email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        showNotification('Email inválido.', 'error');
        return;
    }
    if (!subject) {
        showNotification('Por favor, informe o assunto.', 'error');
        return;
    }
    if (!message || message.length < 10) {
        showNotification('A mensagem deve ter pelo menos 10 caracteres.', 'error');
        return;
    }

    try {
        console.log('Enviando email...');
        const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
        const API_BASE = isLocal ? 'http://localhost:4001' : '';
        const response = await fetch('https://localhost:4001/api/mail/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
        });
        if (response.ok) {
            showNotification('Mensagem enviada com sucesso!', 'success');
            contactForm.reset();
        } else {
            showNotification('Erro ao enviar mensagem.', 'error');
        }
    } catch (err) {
        showNotification('Erro ao conectar ao servidor.', 'error');
    }
});

// Notification function
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add CSS animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize active link
    updateActiveLink();
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.offsetTop - offset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1200; // ms (mais lento)
                let start = null;
                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percent = Math.min(progress / duration, 1);
                    window.scrollTo(0, startPosition + distance * percent);
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }
                }
                window.requestAnimationFrame(step);
            }
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Mouse trail effect (optional - can be removed for better performance)
let mouseTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        mouseTrail.push({ x: e.clientX, y: e.clientY });
        
        if (mouseTrail.length > maxTrailLength) {
            mouseTrail.shift();
        }
    }
});

// Add easter egg - Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        showNotification('🎮 Konami Code ativado! Você é um verdadeiro dev!', 'success');
        document.body.style.animation = 'rainbow 2s infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console message for curious developers
console.log('%c👋 Olá, desenvolvedor curioso!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cSe você está lendo isso, provavelmente entende de código. Vamos conversar!', 'font-size: 14px; color: #8b5cf6;');
console.log('%c📧 Entre em contato através do formulário no site!', 'font-size: 14px; color: #ec4899;');
