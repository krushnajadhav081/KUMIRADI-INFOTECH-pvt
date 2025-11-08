/**
 * KUMIRADI Infotech - Enhanced Smooth Animations & Transitions
 * Complete JavaScript Animation System
 */

// ===== DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupScrollAnimations();
    setupHoverEffects();
    setupRippleEffects();
    setupParallaxEffects();
    setupSmoothScroll();
    setupHeaderEffects();
    setupFormAnimations();
    setupCounterAnimations();
    setupTypingEffect();
    setupTiltEffects();
});

// ===== INITIALIZE ANIMATIONS =====
function initializeAnimations() {
    // Add initial animation classes
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .blog-post, .feature-item, .client-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect to children
                const children = entry.target.querySelectorAll('.service-card, .portfolio-item, .feature-item, .client-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .service-card, .portfolio-item, .feature-item, .blog-post, .client-item');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== HOVER EFFECTS =====
function setupHoverEffects() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .blog-post');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// ===== RIPPLE EFFECTS =====
function setupRippleEffects() {
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .blog-post');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
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
        });
    });
}

// ===== PARALLAX EFFECTS =====
function setupParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image, .decorative-blur');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

// ===== HEADER EFFECTS =====
function setupHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ===== FORM ANIMATIONS =====
function setupFormAnimations() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
        });
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// ===== COUNTER ANIMATIONS =====
function setupCounterAnimations() {
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.dataset.count) || 100;
                animateValue(target, 0, endValue, 2000);
                statObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(stat => {
        statObserver.observe(stat);
    });
}

// ===== TYPING EFFECT =====
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

// ===== 3D TILT EFFECTS =====
function setupTiltEffects() {
    const tiltCards = document.querySelectorAll('.service-card, .portfolio-item');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ===== PAGE TRANSITION =====
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// ===== MOBILE MENU ANIMATIONS =====
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileNav.classList.contains('show')) {
        mobileNav.style.opacity = '0';
        mobileNav.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            mobileNav.classList.remove('show');
            mobileNav.style.display = 'none';
        }, 300);
        menuIcon.className = 'fas fa-bars';
    } else {
        mobileNav.classList.add('show');
        mobileNav.style.display = 'flex';
        setTimeout(() => {
            mobileNav.style.opacity = '1';
            mobileNav.style.transform = 'translateY(0)';
        }, 10);
        menuIcon.className = 'fas fa-times';
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menu-icon');
    
    mobileNav.style.opacity = '0';
    mobileNav.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        mobileNav.classList.remove('show');
        mobileNav.style.display = 'none';
    }, 300);
    menuIcon.className = 'fas fa-bars';
}

// ===== WHATSAPP WIDGET ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const whatsappMain = document.getElementById('whatsapp-main');
    const whatsappOptions = document.getElementById('whatsapp-options');
    const whatsappWidget = document.getElementById('whatsapp-widget');
    
    if (whatsappMain) {
        whatsappMain.addEventListener('click', () => {
            whatsappWidget.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!whatsappWidget.contains(e.target)) {
                whatsappWidget.classList.remove('active');
            }
        });
    }
});

// ===== TESTIMONIAL SLIDER WITH SMOOTH TRANSITIONS =====
const testimonials = [
    {
        name: "Rajesh Kumar",
        company: "TechVision Solutions",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        text: "My company, TechVision Solutions, collaborated with KUMIRADI Infotech for AI implementation services. I was highly impressed with their expertise and innovation."
    },
    {
        name: "Priya Sharma",
        company: "Digital Innovations Ltd",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
        text: "We have been associated with KUMIRADI Infotech for our digital transformation journey. Their cutting-edge solutions keep our business ahead of the competition."
    },
    {
        name: "Amit Patel",
        company: "Future Tech Academy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        text: "Today I have got clarity on what can be done with AI and Machine Learning. This expertise came from the quality training provided by KUMIRADI Infotech."
    }
];

let currentTestimonialIndex = 0;

function updateTestimonial(index) {
    const testimonial = testimonials[index];
    const testimonialMain = document.querySelector('.testimonial-main');
    
    // Fade out
    testimonialMain.style.opacity = '0';
    testimonialMain.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.getElementById('testimonialImg').src = testimonial.image;
        document.getElementById('testimonialImg').alt = testimonial.name;
        document.getElementById('testimonialText').textContent = `"${testimonial.text}"`;
        document.getElementById('testimonialName').textContent = testimonial.name;
        document.getElementById('testimonialCompany').textContent = testimonial.company;
        
        // Fade in
        testimonialMain.style.opacity = '1';
        testimonialMain.style.transform = 'translateY(0)';
    }, 300);

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
}

function currentTestimonial(index) {
    currentTestimonialIndex = index;
    updateTestimonial(currentTestimonialIndex);
}

// Auto-advance testimonials
setInterval(nextTestimonial, 5000);

// ===== PERFORMANCE OPTIMIZATION =====
// Use requestAnimationFrame for smooth animations
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Scroll-based animations here
            ticking = false;
        });
        ticking = true;
    }
});

console.log('✨ KUMIRADI Infotech - Smooth Animations Loaded Successfully!');
