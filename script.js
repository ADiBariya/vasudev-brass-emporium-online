
// Enhanced animations and interactions for Vasudev Brass website

// Create floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
        particle.style.animationDuration = Math.random() * 3 + 3 + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }, 300);
}

// Smooth scrolling for navigation links with easing
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

// Enhanced header scroll effect with blur
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 4px 30px rgba(240, 165, 0, 0.3)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.05)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
    }
});

// Animate numbers in stats section with enhanced effects
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 150; // Slower animation
        let current = 0;
        
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current);
                stat.style.transform = `scale(${1 + Math.sin(current / 10) * 0.1})`;
                setTimeout(updateNumber, 30);
            } else {
                stat.textContent = target;
                stat.style.transform = 'scale(1)';
            }
        };
        
        updateNumber();
    });
}

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Add random delay for staggered animation
            setTimeout(() => {
                element.style.animationPlayState = 'running';
                element.classList.add('animate');
            }, Math.random() * 300);
            
            // Trigger number animation for stats
            if (entry.target.closest('.about-stats')) {
                setTimeout(() => {
                    animateNumbers();
                }, 500);
            }
        }
    });
}, observerOptions);

// Mouse parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const productCards = document.querySelectorAll('.product-card');
    
    if (hero) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        productCards.forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            card.style.transform = `translate(${x}px, ${y}px) translateY(-10px)`;
        });
    }
});

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
    // Create loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 1000);
        }, 1500);
    });
    
    // Start particle effect
    createParticles();
    
    const animatedElements = document.querySelectorAll('[class*="fade-in"], [class*="slide-"], [class*="scale-up"], .animate-on-scroll');
    
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Add smooth entrance animations
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
});

// Enhanced contact form handling with validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const phoneInput = this.querySelector('input[type="tel"]');
    const categorySelect = this.querySelector('select');
    const messageTextarea = this.querySelector('textarea');
    const submitBtn = this.querySelector('button[type="submit"]');
    
    // Enhanced validation with visual feedback
    let isValid = true;
    const inputs = [nameInput, emailInput, phoneInput, categorySelect, messageTextarea];
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            input.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.3)';
            isValid = false;
            
            // Reset border color after 3 seconds
            setTimeout(() => {
                input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                input.style.boxShadow = 'none';
            }, 3000);
        } else {
            input.style.borderColor = 'var(--primary-color)';
            input.style.boxShadow = '0 0 20px rgba(240, 165, 0, 0.3)';
        }
    });
    
    if (!isValid) {
        // Shake animation for form
        this.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
        return;
    }
    
    // Enhanced submit animation
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    // Simulate form submission with enhanced feedback
    setTimeout(() => {
        // Success animation
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Create success notification
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(16, 185, 129, 0.9);
                backdrop-filter: blur(20px);
                color: white;
                padding: 30px 40px;
                border-radius: 20px;
                box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
                z-index: 10000;
                text-align: center;
                animation: scaleUp 0.5s ease-out;
            ">
                <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                <h3 style="margin: 0 0 10px 0;">Thank you!</h3>
                <p style="margin: 0;">We'll get back to you soon.</p>
            </div>
        `;
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.5s ease-out forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 3000);
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'var(--brass-gradient)';
        }, 3000);
    }, 2000);
});

// Mobile menu toggle with animation
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    const isVisible = nav.style.display === 'block';
    
    if (isVisible) {
        nav.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
            nav.style.display = 'none';
        }, 300);
    } else {
        nav.style.display = 'block';
        nav.style.animation = 'fadeIn 0.3s ease-out forwards';
    }
});

// Enhanced parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const hero = document.querySelector('.hero');
    
    if (heroBackground) {
        heroBackground.style.transform = `skewX(-15deg) translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0002})`;
        heroBackground.style.opacity = 1 - scrolled * 0.001;
    }
    
    // Parallax for hero content
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    }
});

// Add enhanced hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.filter = 'brightness(1.1)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.filter = 'brightness(1)';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '3px solid var(--primary-color)';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor after typing
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    type();
}

// Initialize enhanced effects on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment for typing effect
        // setTimeout(() => {
        //     typeWriter(heroTitle, originalText, 60);
        // }, 2000);
    }
    
    // Add random floating animation delays to product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Enhanced scroll-triggered animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.8); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Performance optimization
let ticking = false;

function updateAnimations() {
    // Batch DOM operations
    requestAnimationFrame(() => {
        // Update any ongoing animations
        ticking = false;
    });
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        ticking = true;
        updateAnimations();
    }
});

// Add intersection observer for performance
const performanceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections for performance optimization
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        performanceObserver.observe(section);
    });
});
