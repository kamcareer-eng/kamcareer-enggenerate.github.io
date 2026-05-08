// =========================================
// NAVIGATION & SMOOTH SCROLLING
// =========================================

const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Smooth scroll navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Close mobile menu
        navMenu.classList.remove('active');
        
        // Get target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// =========================================
// UPDATE ACTIVE NAV LINK ON SCROLL
// =========================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =========================================
// FORM SUBMISSION
// =========================================

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const interest = form.querySelector('select').value;
    const message = form.querySelector('textarea').value;
    
    // Create email subject and body
    const emailTo = 'your-email@example.com'; // CUSTOMIZE THIS
    const subject = `Career Consulting Inquiry - ${interest}`;
    const body = `Name: ${name}\nEmail: ${email}\nArea of Interest: ${interest}\n\nMessage:\n${message}`;
    
    // Open email client
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form
    form.reset();
}

// =========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards and resource items
document.querySelectorAll('.service-card, .resource-item, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// =========================================
// SMOOTH SCROLL TO TOP
// =========================================

document.querySelectorAll('.scroll-top').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// =========================================
// INITIALIZE ON PAGE LOAD
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // Set first nav link as active
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // Fade in page content
    document.body.style.opacity = '1';
});
