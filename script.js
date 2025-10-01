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
    
    // Initialize real-time timestamps
    initRealTimeTimestamps();
}

// Initialize real-time timestamps for file listings
function initRealTimeTimestamps() {
    const timestampElements = document.querySelectorAll('.timestamp');
    
    // Generate realistic timestamps for each file/directory
    const now = new Date();
    const baseTime = now.getTime();
    
    // Different timestamps for different files (simulating when they were last modified)
    const timestampOffsets = {
        'about': -2 * 60 * 60 * 1000,      // 2 hours ago
        'skills': -4 * 60 * 60 * 1000,     // 4 hours ago
        'education': -6 * 60 * 60 * 1000,   // 6 hours ago
        'experience': -8 * 60 * 60 * 1000,  // 8 hours ago
        'projects': -1 * 60 * 60 * 1000,   // 1 hour ago
        'resume': -12 * 60 * 60 * 1000,    // 12 hours ago
        'contact': -30 * 60 * 1000          // 30 minutes ago
    };
    
    timestampElements.forEach(element => {
        const timestampType = element.getAttribute('data-timestamp');
        const offset = timestampOffsets[timestampType] || 0;
        const fileTime = new Date(baseTime + offset);
        
        // Format as "MMM DD HH:MM" (e.g., "Jan 15 10:30")
        const formattedTime = formatTimestamp(fileTime);
        element.textContent = formattedTime;
    });
}

// Format timestamp in Linux ls -la style
function formatTimestamp(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${month} ${day} ${hours}:${minutes}`;
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
    const experienceSection = document.getElementById('experience');
    if (!experienceSection) return;
    
    const terminalOutput = experienceSection.querySelector('.terminal-output');
    if (!terminalOutput) return;
    
    // Clear existing content
    terminalOutput.innerHTML = '';
    
    // Add command line
    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    commandLine.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">cat experience.log</span>`;
    terminalOutput.appendChild(commandLine);
    
    // Generate experience entries with realistic timestamps
    const now = new Date();
    const baseTime = now.getTime();
    
    // Different timestamps for different experiences (simulating when they were logged)
    const experienceOffsets = [
        -1 * 60 * 60 * 1000,      // 1 hour ago (most recent)
        -3 * 60 * 60 * 1000,      // 3 hours ago
        -6 * 60 * 60 * 1000       // 6 hours ago
    ];
    
    config.experience.forEach((exp, index) => {
        const offset = experienceOffsets[index] || -1 * 60 * 60 * 1000;
        const experienceTime = new Date(baseTime + offset);
        const timestamp = experienceTime.toISOString().replace('T', ' ').substring(0, 19);
        
        // Add timestamp and title
        const titleLine = document.createElement('div');
        titleLine.className = 'output-line';
        titleLine.innerHTML = `<span class="output">[${timestamp}] [INFO] ${exp.title}</span>`;
        terminalOutput.appendChild(titleLine);
        
        // Add company
        const companyLine = document.createElement('div');
        companyLine.className = 'output-line';
        companyLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Company: ${exp.company}</span>`;
        terminalOutput.appendChild(companyLine);
        
        // Add duration
        const durationLine = document.createElement('div');
        durationLine.className = 'output-line';
        durationLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Duration: ${exp.duration}</span>`;
        terminalOutput.appendChild(durationLine);
        
        // Add location
        const locationLine = document.createElement('div');
        locationLine.className = 'output-line';
        locationLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Location: ${exp.location}</span>`;
        terminalOutput.appendChild(locationLine);
        
        // Add achievements
        exp.achievements.forEach(achievement => {
            const achievementLine = document.createElement('div');
            achievementLine.className = 'output-line';
            achievementLine.innerHTML = `<span class="output">[${timestamp}] [INFO] ${achievement}</span>`;
            terminalOutput.appendChild(achievementLine);
        });
        
        // Add technologies
        if (exp.technologies && exp.technologies.length > 0) {
            const techLine = document.createElement('div');
            techLine.className = 'output-line';
            techLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Technologies: ${exp.technologies.join(', ')}</span>`;
            terminalOutput.appendChild(techLine);
        }
        
        // Add empty line between experiences
        const emptyLine = document.createElement('div');
        emptyLine.className = 'output-line';
        emptyLine.innerHTML = '<span class="output"></span>';
        terminalOutput.appendChild(emptyLine);
    });
}

// Update education section
function updateEducationSection(config) {
    const educationSection = document.getElementById('education');
    if (!educationSection) return;
    
    const terminalOutput = educationSection.querySelector('.terminal-output');
    if (!terminalOutput) return;
    
    // Clear existing content
    terminalOutput.innerHTML = '';
    
    // Add command line
    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    commandLine.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">cat education.log</span>`;
    terminalOutput.appendChild(commandLine);
    
    // Generate education entries with realistic timestamps
    const now = new Date();
    const baseTime = now.getTime();
    
    // Different timestamps for different education entries
    const educationOffsets = [
        -2 * 60 * 60 * 1000,      // 2 hours ago (most recent)
        -4 * 60 * 60 * 1000       // 4 hours ago
    ];
    
    config.education.forEach((edu, index) => {
        const offset = educationOffsets[index] || -2 * 60 * 60 * 1000;
        const educationTime = new Date(baseTime + offset);
        const timestamp = educationTime.toISOString().replace('T', ' ').substring(0, 19);
        
        // Add degree
        const degreeLine = document.createElement('div');
        degreeLine.className = 'output-line';
        degreeLine.innerHTML = `<span class="output">[${timestamp}] [INFO] ${edu.degree}</span>`;
        terminalOutput.appendChild(degreeLine);
        
        // Add university
        const universityLine = document.createElement('div');
        universityLine.className = 'output-line';
        universityLine.innerHTML = `<span class="output">[${timestamp}] [INFO] University: ${edu.university}</span>`;
        terminalOutput.appendChild(universityLine);
        
        // Add duration
        const durationLine = document.createElement('div');
        durationLine.className = 'output-line';
        durationLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Duration: ${edu.duration}</span>`;
        terminalOutput.appendChild(durationLine);
        
        // Add GPA
        const gpaLine = document.createElement('div');
        gpaLine.className = 'output-line';
        gpaLine.innerHTML = `<span class="output">[${timestamp}] [INFO] GPA: ${edu.gpa}</span>`;
        terminalOutput.appendChild(gpaLine);
        
        // Add focus areas
        const focusLine = document.createElement('div');
        focusLine.className = 'output-line';
        focusLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Focus Areas: ${edu.focus}</span>`;
        terminalOutput.appendChild(focusLine);
        
        // Add thesis if exists
        if (edu.thesis) {
            const thesisLine = document.createElement('div');
            thesisLine.className = 'output-line';
            thesisLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Thesis: "${edu.thesis}"</span>`;
            terminalOutput.appendChild(thesisLine);
        }
        
        // Add coursework if exists
        if (edu.coursework && edu.coursework.length > 0) {
            const courseworkHeaderLine = document.createElement('div');
            courseworkHeaderLine.className = 'output-line';
            courseworkHeaderLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Relevant Coursework:</span>`;
            terminalOutput.appendChild(courseworkHeaderLine);
            
            edu.coursework.forEach(course => {
                const courseLine = document.createElement('div');
                courseLine.className = 'output-line';
                courseLine.innerHTML = `<span class="output">[${timestamp}] [INFO] - ${course}</span>`;
                terminalOutput.appendChild(courseLine);
            });
        }
        
        // Add achievements if exists
        if (edu.achievements && edu.achievements.length > 0) {
            const achievementsHeaderLine = document.createElement('div');
            achievementsHeaderLine.className = 'output-line';
            achievementsHeaderLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Achievements:</span>`;
            terminalOutput.appendChild(achievementsHeaderLine);
            
            edu.achievements.forEach(achievement => {
                const achievementLine = document.createElement('div');
                achievementLine.className = 'output-line';
                achievementLine.innerHTML = `<span class="output">[${timestamp}] [INFO] - ${achievement}</span>`;
                terminalOutput.appendChild(achievementLine);
            });
        }
        
        // Add completion status
        const completionLine = document.createElement('div');
        completionLine.className = 'output-line';
        completionLine.innerHTML = `<span class="output">[${timestamp}] [DONE] ${edu.degree.toLowerCase()} completed successfully</span>`;
        terminalOutput.appendChild(completionLine);
        
        // Add empty line between education entries
        const emptyLine = document.createElement('div');
        emptyLine.className = 'output-line';
        emptyLine.innerHTML = '<span class="output"></span>';
        terminalOutput.appendChild(emptyLine);
    });
}

// Update projects section
function updateProjectsSection(config) {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    
    const terminalOutput = projectsSection.querySelector('.terminal-output');
    if (!terminalOutput) return;
    
    // Clear existing content
    terminalOutput.innerHTML = '';
    
    // Add ls command
    const lsCommand = document.createElement('div');
    lsCommand.className = 'command-line';
    lsCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">ls -la projects/</span>`;
    terminalOutput.appendChild(lsCommand);
    
    // Add total line
    const totalLine = document.createElement('div');
    totalLine.className = 'output-line';
    totalLine.innerHTML = '<span class="output">total 12</span>';
    terminalOutput.appendChild(totalLine);
    
    // Generate project entries
    config.projects.forEach(project => {
        const projectLine = document.createElement('div');
        projectLine.className = 'output-line';
        projectLine.innerHTML = `<span class="output">drwxr-xr-x 3 ashutosh ashutosh 4096 Jan 15 10:30 <a href="#${project.name}" class="link">${project.name}/</a></span>`;
        terminalOutput.appendChild(projectLine);
    });
    
    // Add project details
    config.projects.forEach(project => {
        // Add cat command for each project
        const catCommand = document.createElement('div');
        catCommand.className = 'command-line';
        catCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">cat projects/${project.name}/README.md</span>`;
        terminalOutput.appendChild(catCommand);
        
        // Add project title
        const titleLine = document.createElement('div');
        titleLine.className = 'output-line';
        titleLine.innerHTML = `<span class="output"># ${project.title}</span>`;
        terminalOutput.appendChild(titleLine);
        
        // Add project description
        const descLine = document.createElement('div');
        descLine.className = 'output-line';
        descLine.innerHTML = `<span class="output">${project.description}</span>`;
        terminalOutput.appendChild(descLine);
        
        // Add technologies
        const techLine = document.createElement('div');
        techLine.className = 'output-line';
        techLine.innerHTML = `<span class="output">Tech Stack: ${project.technologies.join(', ')}</span>`;
        terminalOutput.appendChild(techLine);
        
        // Add metrics if available
        if (project.metrics) {
            const metricsCommand = document.createElement('div');
            metricsCommand.className = 'command-line';
            metricsCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">metrics</span>`;
            terminalOutput.appendChild(metricsCommand);
            
            // Collect all metrics data
            const metricsData = [];
            if (project.metrics.riskReduction) {
                metricsData.push({ metric: 'Risk Reduction', value: project.metrics.riskReduction });
            }
            if (project.metrics.costReduction) {
                metricsData.push({ metric: 'Cost Reduction', value: project.metrics.costReduction });
            }
            if (project.metrics.latency) {
                metricsData.push({ metric: 'Latency', value: project.metrics.latency });
            }
            if (project.metrics.accuracy) {
                metricsData.push({ metric: 'Accuracy', value: project.metrics.accuracy });
            }
            if (project.metrics.usability) {
                metricsData.push({ metric: 'Usability', value: project.metrics.usability });
            }
            
            if (metricsData.length > 0) {
                // Calculate column widths based on content
                const maxMetricLength = Math.max(...metricsData.map(m => m.metric.length));
                const maxValueLength = Math.max(...metricsData.map(m => m.value.length));
                
                // Ensure minimum widths and add padding
                const metricWidth = Math.max(maxMetricLength + 4, 16);
                const valueWidth = Math.max(maxValueLength + 4, 30);
                
                // Create top border
                const topBorder = document.createElement('div');
                topBorder.className = 'output-line';
                topBorder.innerHTML = `<span class="output">┌${'─'.repeat(metricWidth)}┬${'─'.repeat(valueWidth)}┐</span>`;
                terminalOutput.appendChild(topBorder);
                
                // Add header row
                const headerRow = document.createElement('div');
                headerRow.className = 'output-line';
                headerRow.innerHTML = `<span class="output">│ ${'Metric'.padEnd(metricWidth - 2)} │ ${'Value'.padEnd(valueWidth - 2)} │</span>`;
                terminalOutput.appendChild(headerRow);
                
                // Add separator
                const separator = document.createElement('div');
                separator.className = 'output-line';
                separator.innerHTML = `<span class="output">├${'─'.repeat(metricWidth)}┼${'─'.repeat(valueWidth)}┤</span>`;
                terminalOutput.appendChild(separator);
                
                // Add data rows
                metricsData.forEach(data => {
                    const dataRow = document.createElement('div');
                    dataRow.className = 'output-line';
                    dataRow.innerHTML = `<span class="output">│ ${data.metric.padEnd(metricWidth - 2)} │ ${data.value.padEnd(valueWidth - 2)} │</span>`;
                    terminalOutput.appendChild(dataRow);
                });
                
                // Add closing border
                const closing = document.createElement('div');
                closing.className = 'output-line';
                closing.innerHTML = `<span class="output">└${'─'.repeat(metricWidth)}┴${'─'.repeat(valueWidth)}┘</span>`;
                terminalOutput.appendChild(closing);
            }
        }
        
        // Add GitHub link if available
        if (project.github) {
            const gitLine = document.createElement('div');
            gitLine.className = 'output-line';
            gitLine.innerHTML = `<span class="output">> <a href="${project.github}" class="link" target="_blank">git clone ${project.github}</a> <button class="copy-btn" aria-label="Copy git clone command" data-copy="git clone ${project.github}">[ copy ]</button></span>`;
            terminalOutput.appendChild(gitLine);
        }
        
        // Add demo link if available
        if (project.demo) {
            const demoLine = document.createElement('div');
            demoLine.className = 'output-line';
            demoLine.innerHTML = `<span class="output">> <a href="${project.demo}" class="link" target="_blank">open ${project.demo}</a> <button class="copy-btn" aria-label="Copy demo URL" data-copy="${project.demo}">[ copy ]</button></span>`;
            terminalOutput.appendChild(demoLine);
        }
        
        // Add empty line between projects
        const emptyLine = document.createElement('div');
        emptyLine.className = 'output-line';
        emptyLine.innerHTML = '<span class="output"></span>';
        terminalOutput.appendChild(emptyLine);
    });
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
        // Handle Ctrl+Enter in textarea
        const textarea = form.querySelector('.terminal-textarea');
        if (textarea) {
            textarea.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                    e.preventDefault();
                    form.dispatchEvent(new Event('submit'));
                }
            });
        }
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            form.classList.add('loading');
            
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
        // Don't trigger shortcuts when typing in input fields or any focusable element
        const isInputField = e.target.tagName === 'INPUT' || 
                            e.target.tagName === 'TEXTAREA' || 
                            e.target.contentEditable === 'true' ||
                            e.target.classList.contains('terminal-input') ||
                            e.target.classList.contains('terminal-textarea') ||
                            e.target.isContentEditable ||
                            e.target.getAttribute('contenteditable') === 'true';
        
        // Only trigger shortcuts when not in any input field
        if (!isInputField) {
            // 'm' to toggle metrics
            if (e.key === 'm' && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                const metricsDashboard = document.getElementById('metrics-dashboard');
                if (metricsDashboard) {
                    metricsDashboard.classList.toggle('active');
                }
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
