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
    
    // Initialize hero easter egg
    initHeroEasterEgg();
    
    // Initialize section easter eggs
    initSectionEasterEggs();
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

// Get current timestamp in log format
function getCurrentTimestamp() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
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
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const terminalOutput = skillsSection.querySelector('.terminal-output');
    if (!terminalOutput) return;
    
    // Clear existing content
    terminalOutput.innerHTML = '';
    
    // Add ls command
    const lsCommand = document.createElement('div');
    lsCommand.className = 'command-line';
    lsCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">ls skills/</span>`;
    terminalOutput.appendChild(lsCommand);
    
    // Generate skills categories list
    const categoriesList = config.skills.categories.map(cat => `${cat.name}/`).join('  ');
    const categoriesLine = document.createElement('div');
    categoriesLine.className = 'output-line';
    categoriesLine.innerHTML = `<span class="output">${categoriesList}</span>`;
    terminalOutput.appendChild(categoriesLine);
    
    // Add find command for a more compact display
    const findCommand = document.createElement('div');
    findCommand.className = 'command-line';
    findCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">find skills/ -name "*.skill" -exec basename {} .skill \\;</span>`;
    terminalOutput.appendChild(findCommand);
    
    // Generate compact skills list
    config.skills.categories.forEach((category, categoryIndex) => {
        // Add category header
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'output-line';
        categoryHeader.innerHTML = `<span class="output"># ${category.name}</span>`;
        terminalOutput.appendChild(categoryHeader);
        
        // Add skills in category as a compact list
        const skillsList = category.items.map(skill => {
            if (typeof skill === 'string') {
                return `<span class="skill-item" data-tip="Click for more details">${skill}</span>`;
            } else {
                return `<span class="skill-item" data-tip="${skill.tip}">${skill.name}</span>`;
            }
        }).join(' • ');
        
        const skillsLine = document.createElement('div');
        skillsLine.className = 'output-line';
        skillsLine.innerHTML = `<span class="output">  ${skillsList}</span>`;
        terminalOutput.appendChild(skillsLine);
        
        // Add separator if not last category
        if (categoryIndex < config.skills.categories.length - 1) {
            const separator = document.createElement('div');
            separator.className = 'output-line';
            separator.innerHTML = '<span class="output"></span>';
            terminalOutput.appendChild(separator);
        }
    });
}

// Update experience section
function updateExperienceSection(config) {
    const experienceSection = document.getElementById('experience');
    if (!experienceSection) return;
    
    const terminalOutput = experienceSection.querySelector('.terminal-output');
    if (!terminalOutput) return;
    
    // Clear existing content
    terminalOutput.innerHTML = '';
    
    // Add ls -la command to show available log files with details
    const lsCommand = document.createElement('div');
    lsCommand.className = 'command-line';
    lsCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">ls -la experience/</span>`;
    terminalOutput.appendChild(lsCommand);
    
    // Generate detailed ls -la output for log files
    config.experience.forEach((exp, index) => {
        const filename = `${exp.title}.log`;
        const timestamp = getCurrentTimestamp();
        const fileTime = new Date();
        const formattedTime = formatTimestamp(fileTime);
        
        // Calculate file size (simulate log file sizes)
        const fileSize = Math.floor(Math.random() * 2000) + 500; // 500-2500 bytes
        
        const fileLine = document.createElement('div');
        fileLine.className = 'output-line';
        fileLine.innerHTML = `<span class="output">-rw-r--r-- 1 ashutosh ashutosh ${fileSize} ${formattedTime} ${filename}</span>`;
        terminalOutput.appendChild(fileLine);
    });
    
    // Add separator
    const separator = document.createElement('div');
    separator.className = 'output-line';
    separator.innerHTML = '<span class="output"></span>';
    terminalOutput.appendChild(separator);
    
    // Generate each experience as a separate log file
    config.experience.forEach((exp, index) => {
        const timestamp = getCurrentTimestamp();
        const filename = `${exp.title}.log`;
        
        // Add cat command for this specific log file
        const catCommand = document.createElement('div');
        catCommand.className = 'command-line';
        catCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">cat experience/${filename}</span>`;
        terminalOutput.appendChild(catCommand);
        
        // Add log file header
        const logHeader = document.createElement('div');
        logHeader.className = 'output-line';
        logHeader.innerHTML = `<span class="output">=== ${exp.title} - ${exp.company} ===</span>`;
        terminalOutput.appendChild(logHeader);
        
        // Add basic info
        const infoLine = document.createElement('div');
        infoLine.className = 'output-line';
        infoLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Duration: ${exp.duration}</span>`;
        terminalOutput.appendChild(infoLine);
        
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
        
        // Add technologies if available
        if (exp.technologies && exp.technologies.length > 0) {
            const techLine = document.createElement('div');
            techLine.className = 'output-line';
            techLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Technologies: ${exp.technologies.join(', ')}</span>`;
            terminalOutput.appendChild(techLine);
        }
        
        // Add status completion
        const statusLine = document.createElement('div');
        statusLine.className = 'output-line';
        const completionText = exp.title.toLowerCase().includes('intern') ? 'Internship completed successfully' : `${exp.title} completed successfully`;
        statusLine.innerHTML = `<span class="output">[${timestamp}] [DONE] ${completionText}</span>`;
        terminalOutput.appendChild(statusLine);
        
        // Add separator if not last
        if (index < config.experience.length - 1) {
            const separator = document.createElement('div');
            separator.className = 'output-line';
            separator.innerHTML = '<span class="output"></span>';
            terminalOutput.appendChild(separator);
        }
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
    
    // Add ls -la command to show available education files with details
    const lsCommand = document.createElement('div');
    lsCommand.className = 'command-line';
    lsCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">ls -la education/</span>`;
    terminalOutput.appendChild(lsCommand);
    
    // Generate detailed ls -la output for education files
    config.education.forEach((edu, index) => {
        const filename = `${edu.degree}.log`;
        const timestamp = getCurrentTimestamp();
        const fileTime = new Date();
        const formattedTime = formatTimestamp(fileTime);
        
        // Calculate file size (simulate education file sizes)
        const fileSize = Math.floor(Math.random() * 1500) + 300; // 300-1800 bytes
        
        const fileLine = document.createElement('div');
        fileLine.className = 'output-line';
        fileLine.innerHTML = `<span class="output">-rw-r--r-- 1 ashutosh ashutosh ${fileSize} ${formattedTime} ${filename}</span>`;
        terminalOutput.appendChild(fileLine);
    });
    
    // Add separator
    const separator = document.createElement('div');
    separator.className = 'output-line';
    separator.innerHTML = '<span class="output"></span>';
    terminalOutput.appendChild(separator);
    
    // Generate each education as a separate log file
    config.education.forEach((edu, index) => {
        const timestamp = getCurrentTimestamp();
        const filename = `${edu.degree}.log`;
        
        // Add cat command for this specific log file
        const catCommand = document.createElement('div');
        catCommand.className = 'command-line';
        catCommand.innerHTML = `<span class="prompt">${config.terminal.prompt}</span> <span class="command">cat education/${filename}</span>`;
        terminalOutput.appendChild(catCommand);
        
        // Add log file header
        const logHeader = document.createElement('div');
        logHeader.className = 'output-line';
        logHeader.innerHTML = `<span class="output">=== ${edu.degree} - ${edu.university} ===</span>`;
        terminalOutput.appendChild(logHeader);
        
        // Add basic info
        const infoLine = document.createElement('div');
        infoLine.className = 'output-line';
        infoLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Duration: ${edu.duration}</span>`;
        terminalOutput.appendChild(infoLine);
        
        const gpaLine = document.createElement('div');
        gpaLine.className = 'output-line';
        gpaLine.innerHTML = `<span class="output">[${timestamp}] [INFO] GPA: ${edu.gpa}</span>`;
        terminalOutput.appendChild(gpaLine);
        
        const focusLine = document.createElement('div');
        focusLine.className = 'output-line';
        focusLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Focus: ${edu.focus}</span>`;
        terminalOutput.appendChild(focusLine);
        
        // Add thesis if available
        if (edu.thesis && edu.thesis.trim()) {
            const thesisLine = document.createElement('div');
            thesisLine.className = 'output-line';
            thesisLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Thesis: ${edu.thesis}</span>`;
            terminalOutput.appendChild(thesisLine);
        }
        
        // Add coursework if available
        if (edu.coursework && edu.coursework.length > 0) {
            const courseworkLine = document.createElement('div');
            courseworkLine.className = 'output-line';
            courseworkLine.innerHTML = `<span class="output">[${timestamp}] [INFO] Coursework: ${edu.coursework.join(', ')}</span>`;
            terminalOutput.appendChild(courseworkLine);
        }
        
        // Add status completion
        const statusLine = document.createElement('div');
        statusLine.className = 'output-line';
        statusLine.innerHTML = `<span class="output">[${timestamp}] [DONE] ${edu.degree} completed successfully</span>`;
        terminalOutput.appendChild(statusLine);
        
        // Add separator if not last
        if (index < config.education.length - 1) {
            const separator = document.createElement('div');
            separator.className = 'output-line';
            separator.innerHTML = '<span class="output"></span>';
            terminalOutput.appendChild(separator);
        }
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
                // Create metrics table container
                const metricsContainer = document.createElement('div');
                metricsContainer.className = 'metrics-table';
                
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
                metricsContainer.appendChild(topBorder);
                
                // Add header row
                const headerRow = document.createElement('div');
                headerRow.className = 'output-line';
                headerRow.innerHTML = `<span class="output">│ Metric${' '.repeat(metricWidth - 8)} │ Value${' '.repeat(valueWidth - 6)} │</span>`;
                metricsContainer.appendChild(headerRow);
                
                // Add separator
                const separator = document.createElement('div');
                separator.className = 'output-line';
                separator.innerHTML = `<span class="output">├${'─'.repeat(metricWidth)}┼${'─'.repeat(valueWidth)}┤</span>`;
                metricsContainer.appendChild(separator);
                
                // Add data rows
                metricsData.forEach(data => {
                    const dataRow = document.createElement('div');
                    dataRow.className = 'output-line';
                    const metricPadding = metricWidth - 2 - data.metric.length;
                    const valuePadding = valueWidth - 2 - data.value.length;
                    dataRow.innerHTML = `<span class="output">│ ${data.metric}${' '.repeat(metricPadding)} │ ${data.value}${' '.repeat(valuePadding)} │</span>`;
                    metricsContainer.appendChild(dataRow);
                });
                
                // Add closing border
                const closing = document.createElement('div');
                closing.className = 'output-line';
                closing.innerHTML = `<span class="output">└${'─'.repeat(metricWidth)}┴${'─'.repeat(valueWidth)}┘</span>`;
                metricsContainer.appendChild(closing);
                
                // Append the entire metrics container to terminal output
                terminalOutput.appendChild(metricsContainer);
            }
        }
        
        // Add GitHub link if available
        if (project.github) {
            const gitLine = document.createElement('div');
            gitLine.className = 'output-line';
            // Extract just the URL from "Git Link: https://..." format
            const githubUrl = project.github.replace('Git Link: ', '');
            gitLine.innerHTML = `<span class="output">> <span style="color: white;">Git Link: </span><a href="${githubUrl}" class="link" target="_blank">${githubUrl}</a> <button class="copy-btn" aria-label="Copy GitHub link" data-copy="${githubUrl}">[ copy ]</button></span>`;
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
        // Initially hide all lines
        const lines = output.querySelectorAll('.command-line, .output-line');
        lines.forEach(line => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(20px)';
            line.style.transition = 'all 0.5s ease';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    
                    const lines = entry.target.querySelectorAll('.command-line, .output-line');
                    lines.forEach((line, index) => {
                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateY(0)';
                        }, index * 200); // 200ms delay between lines
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

// Attach input listeners to a specific input element
function attachInputListeners(inputElement) {
    if (!inputElement) return;
    
    const terminalOutput = inputElement.closest('.terminal-output');
    if (!terminalOutput) return;
    
    // Create and position cursor
    const cursor = document.createElement('span');
    cursor.textContent = '_';
    cursor.style.position = 'absolute';
    cursor.style.left = '0ch';
    cursor.style.top = '0';
    cursor.style.color = '#eab308';
    cursor.style.animation = 'blink 1s infinite';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '1';
    inputElement.parentElement.style.position = 'relative';
    inputElement.parentElement.appendChild(cursor);
    
    // Handle input changes (cursor movement)
    inputElement.addEventListener('input', (e) => {
        cursor.style.left = inputElement.value.length + 'ch';
    });
    
    // Handle keydown events
    inputElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = inputElement.value.trim().toLowerCase();
            
            // Add the command to output (except for exit command)
            if (command !== 'exit') {
                const commandLine = document.createElement('div');
                commandLine.className = 'command-line';
                commandLine.innerHTML = `<span class="prompt">ashutosh@portfolio:~$</span> <span class="command">${command}</span>`;
                terminalOutput.appendChild(commandLine);
            }
            
            // Process command
            let output = '';
            switch (command) {
                case 'help':
                    output = `Available commands:
  about       - View about information
  skills      - View technical skills
  experience  - View work experience
  education   - View education background
  projects    - View projects portfolio
  contact     - Get in touch
  exit        - Close terminal`;
                    break;
                case 'about':
                    output = 'Redirecting to about section...';
                    setTimeout(() => {
                        window.location.hash = '#about';
                        // Also try scrollIntoView as backup
                        const section = document.getElementById('about');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500);
                    break;
                case 'skills':
                    output = 'Redirecting to skills section...';
                    setTimeout(() => {
                        window.location.hash = '#skills';
                        const section = document.getElementById('skills');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500);
                    break;
                case 'experience':
                    output = 'Redirecting to experience section...';
                    setTimeout(() => {
                        window.location.hash = '#experience';
                        const section = document.getElementById('experience');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500);
                    break;
                case 'education':
                    output = 'Redirecting to education section...';
                    setTimeout(() => {
                        window.location.hash = '#education';
                        const section = document.getElementById('education');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500);
                    break;
                case 'projects':
                    output = 'Redirecting to projects section...';
                    setTimeout(() => {
                        window.location.hash = '#projects';
                        const section = document.getElementById('projects');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500);
                    break;
                case 'contact':
                    output = 'Redirecting to contact section...';
                    setTimeout(() => {
                        window.location.hash = '#contact';
                        const section = document.getElementById('contact');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500);
                    break;
                case 'exit':
                    output = 'Connection closed. Thank you for visiting.';
                    // Clear the terminal after showing the message
                    setTimeout(() => {
                        // Hide all sections
                        const allSections = document.querySelectorAll('section');
                        allSections.forEach(section => {
                            section.style.display = 'none';
                        });
                        // Hide navigation
                        const nav = document.querySelector('nav');
                        if (nav) {
                            nav.style.display = 'none';
                        }
                        // Create a full-screen goodbye message
                        const body = document.body;
                        body.innerHTML = `
                            <div style="
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                height: 100vh;
                                background: #1e1e1e;
                                color: #cccccc;
                                font-family: 'Fira Code', 'Courier New', monospace;
                                text-align: center;
                            ">
                                <div style="font-size: 1.2rem; margin-bottom: 1rem;">Connection closed.</div>
                                <div style="font-size: 1rem;">Thank you for visiting.</div>
                            </div>
                        `;
                    }, 1500);
                    // Don't create new prompt for exit command
                    return;
                default:
                    if (command) {
                        output = `Command not found: ${command}. Type 'help' for available commands.`;
                    }
            }
            
            // Add output if any
            if (output) {
                const outputLines = output.split('\n');
                outputLines.forEach(line => {
                    const outputLine = document.createElement('div');
                    outputLine.className = 'output-line';
                    outputLine.innerHTML = `<span class="output">${line}</span>`;
                    terminalOutput.appendChild(outputLine);
                });
            }
            
            // Add new prompt
            const newPrompt = document.createElement('div');
            newPrompt.className = 'command-line interactive-prompt';
            newPrompt.innerHTML = `
                <span class="prompt">ashutosh@portfolio:~$</span> 
                <span class="command-input">
                    <input type="text" class="terminal-input" placeholder="" autocomplete="off">
                </span>
            `;
            terminalOutput.appendChild(newPrompt);
            
            // Remove old prompt and focus new input
            const oldPrompt = terminalOutput.querySelector('.interactive-prompt');
            if (oldPrompt && oldPrompt !== newPrompt) {
                oldPrompt.remove();
            }
            
            // Focus the new input and attach event listeners
            const newInput = newPrompt.querySelector('.terminal-input');
            newInput.focus();
            
            // Attach event listeners to the new input
            attachInputListeners(newInput);
        }
    });
}

// Initialize hero easter egg
function initHeroEasterEgg() {
    const heroInput = document.getElementById('hero-input');
    if (!heroInput) return;
    
    // Focus the input when hero section is visible
    const heroSection = document.getElementById('home');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => heroInput.focus(), 100);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(heroSection);
    
    // Attach listeners to the initial input
    attachInputListeners(heroInput);
}

// Initialize section easter eggs
function initSectionEasterEggs() {
    const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Add interactive terminal to each section
            addSectionTerminal(section, sectionId);
        }
    });
}

// Add interactive terminal to a section
function addSectionTerminal(section, sectionId) {
    const terminalOutput = section.querySelector('.terminal-output');
    if (!terminalOutput) return;
    
    // Check if there's already an interactive prompt to avoid duplicates
    const existingPrompt = terminalOutput.querySelector('.interactive-prompt');
    if (existingPrompt) {
        return; // Don't add another prompt if one already exists
    }
    
    // Add a separator and interactive prompt
    const separator = document.createElement('div');
    separator.className = 'output-line';
    separator.innerHTML = '<span class="output"></span>';
    terminalOutput.appendChild(separator);
    
    const interactivePrompt = document.createElement('div');
    interactivePrompt.className = 'command-line interactive-prompt';
    interactivePrompt.innerHTML = `
        <span class="prompt">ashutosh@portfolio:~$</span> 
        <span class="command-input">
            <input type="text" class="terminal-input section-input" placeholder="" autocomplete="off">
        </span>
    `;
    terminalOutput.appendChild(interactivePrompt);
    
    // Attach listeners to the section input
    const sectionInput = interactivePrompt.querySelector('.terminal-input');
    attachInputListeners(sectionInput);
}


// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
    showTerminalMessage('An error occurred. Please refresh the page.', 'error');
});
