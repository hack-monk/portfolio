// Advanced Terminal Portfolio JavaScript

// Global state
const terminalState = {};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    // Load configuration first
    loadConfiguration();
    
    // Initialize all features
    initNavigation();
    initAccessibility();
    initTooltips();
    initLazyLoading();
    initCopyButtons();
    initContactForm();
    initKeyboardShortcuts();
    initTerminalMessages();
    initTypingAnimations();
    
    // Load saved preferences
    loadPreferences();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Load configuration and update content
function loadConfiguration() {
    if (typeof PORTFOLIO_CONFIG === 'undefined') {
        console.error('PORTFOLIO_CONFIG not found. Please check config.js');
        return;
    }

    const config = PORTFOLIO_CONFIG;
    
    // Update page title and meta tags
    updatePageTitle(config);
    updateMetaTags(config);
    updateSEO(config);
    
    // Update content
    updateHeroSection(config);
    updateAboutSection(config);
    updateSkillsSection(config);
    updateExperienceSection(config);
    updateEducationSection(config);
    updateProjectsSection(config);
    updateContactSection(config);
    
    // Update terminal configuration
    updateTerminalConfig(config);
}

// Update page title and terminal title
function updatePageTitle(config) {
    document.getElementById('page-title').textContent = config.seo.title;
    document.getElementById('terminal-title').textContent = config.personal.name.toLowerCase();
    document.getElementById('nav-name').textContent = config.personal.name;
}

// Update meta tags
function updateMetaTags(config) {
    document.getElementById('meta-description').setAttribute('content', config.seo.description);
    document.getElementById('meta-keywords').setAttribute('content', config.seo.keywords);
    document.getElementById('meta-author').setAttribute('content', config.seo.author);
}

// Update SEO tags
function updateSEO(config) {
    // Open Graph
    document.getElementById('og-url').setAttribute('content', config.seo.url);
    document.getElementById('og-title').setAttribute('content', config.seo.title);
    document.getElementById('og-description').setAttribute('content', config.seo.description);
    document.getElementById('og-image').setAttribute('content', config.seo.image);
    
    // Twitter
    document.getElementById('twitter-url').setAttribute('content', config.seo.url);
    document.getElementById('twitter-title').setAttribute('content', config.seo.title);
    document.getElementById('twitter-description').setAttribute('content', config.seo.description);
    document.getElementById('twitter-image').setAttribute('content', config.seo.image);
    
    // JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": config.personal.name,
        "jobTitle": config.personal.title,
        "description": config.about.description,
        "url": config.seo.url,
        "sameAs": [
            config.personal.linkedin,
            config.personal.github
        ],
        "knowsAbout": config.skills.categories.flatMap(cat => cat.items),
        "alumniOf": config.about.education.university,
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "educationalLevel": "Master's"
        }
    };
    
    document.getElementById('json-ld').textContent = JSON.stringify(jsonLd);
}

// Update hero section
function updateHeroSection(config) {
    const prompt = config.terminal.prompt;
    document.getElementById('hero-prompt').textContent = prompt;
    document.getElementById('hero-prompt-2').textContent = prompt;
    document.getElementById('hero-name').textContent = config.personal.name;
    document.getElementById('hero-title').textContent = config.personal.title;
    document.getElementById('hero-description').textContent = config.about.description;
    document.getElementById('hero-tagline').textContent = "Ready to make an impact in the tech industry.";
}

// Update about section
function updateAboutSection(config) {
    // This will be handled by the existing content structure
    // The about section content is already in the HTML
}

// Update skills section
function updateSkillsSection(config) {
    // Skills are already structured in HTML
    // This could be enhanced to dynamically generate skills
}

// Update experience section
function updateExperienceSection(config) {
    // Experience content is already in HTML
    // This could be enhanced to dynamically generate experience
}

// Update education section
function updateEducationSection(config) {
    // Education content is already in HTML
    // This could be enhanced to dynamically generate education
}

// Update projects section
function updateProjectsSection(config) {
    // Projects are already structured in HTML
    // This could be enhanced to dynamically generate projects
}

// Update contact section
function updateContactSection(config) {
    // Update contact form action
    if (config.contact.formspreeId) {
        const form = document.getElementById('contact-form');
        form.action = `https://formspree.io/f/${config.contact.formspreeId}`;
    }
    
    // Update contact information
    const contactLinks = document.querySelectorAll('a[href*="ashutosh@example.com"]');
    contactLinks.forEach(link => {
        link.href = `mailto:${config.personal.email}`;
        link.textContent = config.personal.email;
    });
}

// Update terminal configuration
function updateTerminalConfig(config) {
    // Update terminal prompts throughout the page
    const prompts = document.querySelectorAll('.prompt');
    prompts.forEach(prompt => {
        if (prompt.textContent.includes('ashutosh@portfolio:~$')) {
            prompt.textContent = config.terminal.prompt;
        }
    });
}








// Load saved preferences
function loadPreferences() {
    // No preferences to load
}

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

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

// Accessibility features
function initAccessibility() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Tooltips for skills
function initTooltips() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const tip = item.getAttribute('data-tip');
        if (tip) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tip;
            tooltip.setAttribute('role', 'tooltip');
            item.appendChild(tooltip);
            
            item.addEventListener('mouseenter', () => showTooltip(tooltip));
            item.addEventListener('focus', () => showTooltip(tooltip));
            item.addEventListener('mouseleave', () => hideTooltip(tooltip));
            item.addEventListener('blur', () => hideTooltip(tooltip));
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.tooltip').forEach(tooltip => {
                hideTooltip(tooltip);
            });
        }
    });
}

function showTooltip(tooltip) {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
}

function hideTooltip(tooltip) {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
}

// Lazy loading for images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
}

// Copy buttons functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const textToCopy = button.getAttribute('data-copy');
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                showTerminalMessage('Copied to clipboard!', 'success');
                
                button.textContent = '[ copied ]';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.textContent = '[ copy ]';
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                showTerminalMessage('Failed to copy', 'error');
                console.error('Failed to copy: ', err);
            }
        });
    });
}

// Contact form with Formspree
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const submitButton = form.querySelector('.terminal-submit');
            
            form.classList.add('loading');
            submitButton.textContent = 'Sending...';
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showTerminalMessage('Message sent successfully!', 'success');
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                showTerminalMessage('Failed to send message. Please try again.', 'error');
                console.error('Form submission error:', error);
            } finally {
                form.classList.remove('loading');
                submitButton.textContent = 'Submit';
            }
        });
    }
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        
        // 'm' to toggle metrics
        if (e.key === 'm' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            const metricsDashboard = document.getElementById('metrics-dashboard');
            if (metricsDashboard) {
                metricsDashboard.classList.toggle('active');
            }
        }
        
        
        // Escape to close modals
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            
            document.querySelectorAll('.active').forEach(element => {
                element.classList.remove('active');
            });
        }
    });
}

// Terminal messages
function initTerminalMessages() {
    if (!document.querySelector('.terminal-message')) {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'terminal-message';
        document.body.appendChild(messageContainer);
    }
}

function showTerminalMessage(text, type = 'info') {
    const message = document.querySelector('.terminal-message');
    if (message) {
        message.textContent = text;
        message.className = `terminal-message ${type}`;
        message.classList.add('show');
        
        setTimeout(() => {
            message.classList.remove('show');
        }, 3000);
    }
}

// Typing animations (respects prefers-reduced-motion)
function initTypingAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    const terminalOutputs = document.querySelectorAll('.terminal-output');
    
    terminalOutputs.forEach(output => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lines = entry.target.querySelectorAll('.command-line, .output-line');
                    lines.forEach((line, index) => {
                        setTimeout(() => {
                            line.style.opacity = '0';
                            line.style.transform = 'translateX(-20px)';
                            line.style.transition = 'all 0.3s ease';
                            
                            setTimeout(() => {
                                line.style.opacity = '1';
                                line.style.transform = 'translateX(0)';
                            }, 50);
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(output);
    });
}

// Terminal cursor blinking
function startCursorBlink() {
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    });
}

// Initialize cursor blinking
startCursorBlink();

// Console logging
console.log('%cashutosh@portfolio:~$ Welcome to the terminal portfolio!', 'color: #00ff00; font-family: monospace;');
console.log('%cPress "m" for metrics dashboard', 'color: #cccccc; font-family: monospace;');

// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
    showTerminalMessage('An error occurred. Please refresh the page.', 'error');
});
