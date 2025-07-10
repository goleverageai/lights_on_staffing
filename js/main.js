// Lights on Staffing - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    // Tab Functionality
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add("active");
            if (tabContents[index]) {
                tabContents[index].classList.add("active");
            }
        });
    });
    
    // Form Validation for both forms

document.addEventListener('DOMContentLoaded', function() {
    // Hero Form Validation
    const heroForm = document.querySelector('.hero-form form');
    if (heroForm) {
        heroForm.addEventListener('submit', function(e) {
            const fullName = heroForm.querySelector('input[name="fullname"]');
            const email = heroForm.querySelector('input[name="email"]');
            const phone = heroForm.querySelector('input[name="phone"]');
            
            let isValid = true;
            
            [fullName, email, phone].forEach(input => {
                if (input) input.style.borderColor = '#e0e0e0';
            });
            
            if (!fullName || fullName.value.trim() === '') {
                if (fullName) fullName.style.borderColor = '#ff4444';
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email.value)) {
                if (email) email.style.borderColor = '#ff4444';
                isValid = false;
            }
            
            if (!phone || phone.value.trim() === '') {
                if (phone) phone.style.borderColor = '#ff4444';
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all fields correctly.');
            } else {
                alert('Thank you for your interest! We will contact you soon.');
                // Let form submit normally to FormSubmit.co
            }
        });
    }
    
    // Contact Page Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const fullName = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');
            
            let isValid = true;
            
            [fullName, email, message].forEach(input => {
                if (input) input.style.borderColor = '#e0e0e0';
            });
            
            if (!fullName || fullName.value.trim() === '') {
                if (fullName) fullName.style.borderColor = '#ff4444';
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email.value)) {
                if (email) email.style.borderColor = '#ff4444';
                isValid = false;
            }
            
            if (!message || message.value.trim() === '') {
                if (message) message.style.borderColor = '#ff4444';
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields correctly.');
            } else {
                alert('Thank you for reaching out! We will get back to you soon.');
                // Let form submit normally to FormSubmit.co
            }
        });
    }
});


    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = '#ffffff';
                header.style.backdropFilter = 'none';
            }
        });
    }
    
    // Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and sections for animation
    const animatedElements = document.querySelectorAll('.card, .section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs .tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove 'active' from all tabs and tab contents
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(tc => tc.classList.remove("active"));

            // Activate the clicked tab
            this.classList.add("active");

            // Show corresponding tab content
            const target = this.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });
});
