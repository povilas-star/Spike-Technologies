// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Form Submission
const demoForm = document.getElementById('demoForm');

demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(demoForm);
    const data = Object.fromEntries(formData);
    
    // In a real implementation, you would send this to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your request! We will contact you shortly.');
    demoForm.reset();
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate Elements on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all cards and features
document.querySelectorAll('.solution-card, .benefit-card, .feature-item').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .solution-card, .benefit-card, .feature-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .solution-card.animate-in,
    .benefit-card.animate-in,
    .feature-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Data Flow Animation
function animateDataFlow() {
    const dataSources = document.querySelectorAll('.data-source');
    const apiCenter = document.querySelector('.api-center');
    const aiAgents = document.querySelector('.ai-agents');
    
    let delay = 0;
    
    // Animate data sources
    dataSources.forEach((source, index) => {
        setTimeout(() => {
            source.style.transform = 'translateY(-10px)';
            source.style.boxShadow = '8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)';
            
            setTimeout(() => {
                source.style.transform = 'translateY(0)';
                source.style.boxShadow = '5px 5px 10px var(--shadow-dark), -5px -5px 10px var(--shadow-light)';
            }, 500);
        }, delay);
        
        delay += 300;
    });
    
    // Animate API center and AI agents
    setTimeout(() => {
        apiCenter.style.transform = 'translate(-120%, -50%) scale(1.1)';
        aiAgents.style.transform = 'translate(20%, -50%) scale(1.1)';
        
        setTimeout(() => {
            apiCenter.style.transform = 'translate(-120%, -50%) scale(1)';
            aiAgents.style.transform = 'translate(20%, -50%) scale(1)';
        }, 300);
    }, delay + 300);
}

// Start animation when page loads and repeat every 5 seconds
window.addEventListener('load', () => {
    animateDataFlow();
    setInterval(animateDataFlow, 5000);
});

// Google Cloud Service Tags Hover Effect
const serviceTags = document.querySelectorAll('.service-tag');
serviceTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.backgroundColor = 'var(--primary)';
        tag.style.color = 'white';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.backgroundColor = 'var(--bg-color)';
        tag.style.color = 'var(--text)';
    });
});

// Add active state to current section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize active state on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger scroll event to set initial active state
    window.dispatchEvent(new Event('scroll'));
});
