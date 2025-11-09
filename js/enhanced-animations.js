/**
 * KUMIRADI Infotech - Enhanced Animation System
 * Advanced Particle Effects, 3D Interactions, and Modern Animations
 */

// ===== DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', function() {
    initializeParticleSystem();
    initializeTypingEffect();
    initialize3DTilt();
    initializeMagneticCursor();
    initializeScrollProgress();
    initializeGlitchEffects();
    initializeMorphingIcons();
    initializeAdvancedScrollAnimations();
    initializeWaveAnimation();
    initializeNeonEffects();
    initializeSnowAnimation();
    initializeSmoothImageAnimations();
    initializeModernHeader();
    initializeModernInteractions();
    initializeAutoAnimations();
});

// ===== PARTICLE SYSTEM =====
function initializeParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    document.body.appendChild(particleContainer);

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        
        particleContainer.appendChild(particle);
    }
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ===== 3D TILT EFFECT =====
function initialize3DTilt() {
    const tiltElements = document.querySelectorAll('.service-card, .portfolio-item, .blog-post');
    
    tiltElements.forEach(element => {
        element.classList.add('tilt-card');
        const inner = document.createElement('div');
        inner.className = 'tilt-card-inner';
        inner.innerHTML = element.innerHTML;
        element.innerHTML = '';
        element.appendChild(inner);
        
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// ===== MAGNETIC CURSOR =====
function initializeMagneticCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magnetic-cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-outline, .service-card, .portfolio-item');
    
    magneticElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// ===== SCROLL PROGRESS INDICATOR =====
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ===== GLITCH EFFECTS =====
function initializeGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(element => {
        element.setAttribute('data-text', element.textContent);
        
        // Random glitch activation
        setInterval(() => {
            if (Math.random() > 0.8) {
                element.style.animation = 'none';
                element.offsetHeight; // Trigger reflow
                element.style.animation = null;
            }
        }, 3000);
    });
}

// ===== MORPHING ICONS =====
function initializeMorphingIcons() {
    const morphIcons = document.querySelectorAll('.service-icon, .feature-icon');
    
    morphIcons.forEach(icon => {
        icon.classList.add('morph-icon', 'pulse');
        
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotate(360deg) scale(1.3)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });
}

// ===== ADVANCED SCROLL ANIMATIONS =====
function initializeAdvancedScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add entrance animations based on element type
                if (element.classList.contains('service-card')) {
                    element.classList.add('bounce-in');
                } else if (element.classList.contains('portfolio-item')) {
                    element.classList.add('fade-in-scale');
                } else if (element.classList.contains('feature-item')) {
                    element.classList.add('slide-in-left');
                } else if (element.classList.contains('blog-post')) {
                    element.classList.add('slide-in-right');
                } else {
                    element.classList.add('fade-in-scale');
                }
                
                // Add stagger delay
                const delay = Array.from(element.parentNode.children).indexOf(element) * 100;
                element.style.animationDelay = delay + 'ms';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .feature-item, .blog-post, .client-item');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== WAVE ANIMATION =====
function initializeWaveAnimation() {
    const waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';
    waveContainer.innerHTML = '<div class="wave"></div>';
    
    // Add wave to footer or bottom sections
    const footer = document.querySelector('footer') || document.body;
    footer.appendChild(waveContainer);
}

// ===== NEON EFFECTS =====
function initializeNeonEffects() {
    const neonElements = document.querySelectorAll('.hero-title, .section-title');
    
    neonElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('neon-glow');
        });
        
        element.addEventListener('mouseleave', () => {
            element.classList.remove('neon-glow');
        });
    });
}

// ===== ADVANCED BUTTON EFFECTS =====
function initializeAdvancedButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            // Add shake animation
            this.classList.add('shake');
            setTimeout(() => this.classList.remove('shake'), 500);
        });
    });
}

// ===== PARALLAX EFFECTS ENHANCED =====
function initializeEnhancedParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero section
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // Parallax for decorative elements
        const decorativeElements = document.querySelectorAll('.decorative-blur');
        decorativeElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== INTERSECTION OBSERVER FOR ADVANCED ANIMATIONS =====
function initializeIntersectionAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add entrance animations
                if (!element.classList.contains('animated')) {
                    element.classList.add('animated');
                    
                    // Counter animation
                    if (element.classList.contains('counter')) {
                        const target = parseInt(element.dataset.target) || 100;
                        animateCounter(element, 0, target, 2000);
                    }
                    
                    // Progress bar animation
                    if (element.classList.contains('progress-bar')) {
                        const width = element.dataset.width || '100%';
                        setTimeout(() => {
                            element.style.width = width;
                        }, 500);
                    }
                }
            }
        });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.counter, .progress-bar, .skill-item');
    elements.forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + (element.dataset.suffix || '');
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ===== SNOW ANIMATION =====
function initializeSnowAnimation() {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '-1';
    document.body.appendChild(snowContainer);

    const snowflakes = ['❄', '❅', '❆'];
    const snowflakeCount = 50;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 2 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        
        snowContainer.appendChild(snowflake);

        // Remove snowflake after animation completes
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
        }, 5000);
    }

    // Create initial snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        setTimeout(() => createSnowflake(), i * 100);
    }

    // Continuously create new snowflakes
    setInterval(createSnowflake, 200);
}

// ===== SMOOTH IMAGE ANIMATIONS =====
function initializeSmoothImageAnimations() {
    // Add smooth loading animation to all images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.classList.add('image-load');
        
        // Add shimmer effect while loading
        if (!img.complete) {
            img.parentElement.classList.add('image-shimmer');
        }
        
        img.addEventListener('load', () => {
            img.parentElement.classList.remove('image-shimmer');
        });
    });
    
    // Add enhanced hover effects to image containers
    const imageContainers = document.querySelectorAll('.image-container, .hero-image, .about-image');
    
    imageContainers.forEach(container => {
        container.classList.add('image-glow');
        
        // Add parallax effect on mouse move
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        container.addEventListener('mouseleave', () => {
            container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
    
    // Add scroll-based zoom effect
    const zoomImages = document.querySelectorAll('.service-card img, .portfolio-item img, .blog-post img');
    
    const zoomObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoomed');
                setTimeout(() => {
                    entry.target.classList.remove('zoomed');
                }, 1000);
            }
        });
    }, { threshold: 0.5 });
    
    zoomImages.forEach(img => {
        img.classList.add('zoom-on-scroll');
        zoomObserver.observe(img);
    });
    
    // Add smooth rotation to circular images
    const circularImages = document.querySelectorAll('.testimonial-image img, .team-member img');
    
    circularImages.forEach(img => {
        img.classList.add('rotate-smooth');
    });
    
    // Enhanced portfolio item animations
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const img = item.querySelector('img');
            if (img) {
                img.style.filter = 'brightness(1.1) contrast(1.1)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const img = item.querySelector('img');
            if (img) {
                img.style.filter = 'none';
            }
        });
    });
    
    // Add subtle floating animation to hero and about images
    const floatingImages = document.querySelectorAll('.hero-image img, .about-image img');
    
    floatingImages.forEach(img => {
        img.style.animation = 'float 6s ease-in-out infinite';
    });
    
    // Create image reveal animation on scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, { threshold: 0.1 });
    
    const revealImages = document.querySelectorAll('.image-container img, .service-card img, .portfolio-item img, .blog-post img');
    
    revealImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(30px) scale(0.95)';
        img.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        revealObserver.observe(img);
    });
}

// ===== INITIALIZE ALL EFFECTS =====
setTimeout(() => {
    initializeAdvancedButtonEffects();
    initializeEnhancedParallax();
    initializeIntersectionAnimations();
}, 1000);

function initializeModernHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== AUTO-APPLY ANIMATIONS ON SCROLL =====
function initializeAutoAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                // Apply fade-in-up animation
                if (!entry.target.classList.contains('fade-in-up')) {
                    entry.target.classList.add('fade-in-up');
                }
                
                // Add stagger delay for grid items
                const parent = entry.target.parentElement;
                if (parent && (parent.classList.contains('services-grid') || 
                    parent.classList.contains('features-grid') || 
                    parent.classList.contains('portfolio-grid'))) {
                    const index = Array.from(parent.children).indexOf(entry.target);
                    entry.target.style.animationDelay = (index * 0.1) + 's';
                }
            }
        });
    }, observerOptions);
    
    // Observe all service cards, feature items, and other elements
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .feature-item, .portfolio-item, .blog-post, .testimonial-main, .client-item'
    );
    elementsToAnimate.forEach(el => observer.observe(el));
}

function initializeModernInteractions() {
    // Modern button interactions
    const buttons = document.querySelectorAll('.btn, .btn-outline, .btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Modern card hover effects
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .blog-post');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Modern form interactions
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}