// Portfolio Configuration Template
// Customize this file to personalize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Your Title",
        email: "your.email@example.com",
        phone: "+1 (234) 567-890",
        location: "Your City, State",
        website: "https://yourwebsite.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        resume: "resume.pdf" // Path to your resume file
    },

    // About Section
    about: {
        description: "I'm a passionate developer with expertise in modern web technologies and cloud infrastructure. I love building scalable solutions and automating processes.",
        education: {
            degree: "Master's Degree - Computer Science",
            university: "Your University",
            year: "2022 - 2024",
            gpa: "3.8/4.0",
            focus: "DevOps, Cloud Computing, Distributed Systems"
        }
    },

    // Skills Configuration
    skills: {
        categories: [
            {
                name: "Programming",
                items: ["Python", "JavaScript", "Go", "Bash"]
            },
            {
                name: "Cloud",
                items: ["AWS", "Azure", "GCP"]
            },
            {
                name: "Containers",
                items: ["Docker", "Kubernetes", "Helm"]
            },
            {
                name: "IaC",
                items: ["Terraform", "Ansible", "CloudFormation"]
            },
            {
                name: "CI-CD",
                items: ["Jenkins", "GitLab CI", "GitHub Actions"]
            },
            {
                name: "Networking",
                items: ["TCP/IP", "Load Balancing", "Security"]
            }
        ]
    },

    // Experience Configuration
    experience: [
        {
            title: "Your Job Title",
            company: "Company Name",
            duration: "2023 - Present",
            location: "City, State",
            achievements: [
                "Achievement 1 - Quantify your impact",
                "Achievement 2 - Show measurable results",
                "Achievement 3 - Highlight technical skills"
            ],
            technologies: ["Technology 1", "Technology 2", "Technology 3"]
        }
    ],

    // Education Configuration
    education: [
        {
            degree: "Master's Degree - Computer Science",
            university: "Your University",
            duration: "2022 - 2024",
            gpa: "3.8/4.0",
            focus: "DevOps, Cloud Computing, Distributed Systems",
            thesis: "Your Thesis Title",
            coursework: [
                "Advanced Cloud Computing",
                "Distributed Systems Architecture",
                "DevOps and CI/CD Practices",
                "Network Security and Infrastructure"
            ],
            achievements: [
                "Dean's List: Fall 2022, Spring 2023",
                "Graduate Research Assistant (2022-2024)",
                "Published 2 papers in peer-reviewed journals"
            ]
        }
    ],

    // Projects Configuration
    projects: [
        {
            name: "project-name",
            title: "Project Title",
            description: "Brief description of your project and its impact",
            technologies: ["Technology 1", "Technology 2", "Technology 3"],
            github: "https://github.com/yourusername/project-name",
            demo: "https://demo.yourwebsite.com/project-name",
            metrics: {
                deploymentTime: "5 minutes",
                clusterSize: "3 master + 5 worker nodes",
                costReduction: "40% savings"
            }
        }
    ],

    // Terminal Configuration
    terminal: {
        prompt: "yourname@portfolio:~$",
        welcomeMessage: [
            "Welcome to the Interactive Portfolio Terminal!",
            "Type 'help' to see available commands.",
            "Type 'exit' to close the terminal."
        ],
        commands: {
            help: {
                output: [
                    "Available commands:",
                    "  whoami",
                    "  cat about.txt",
                    "  stats",
                    "  ls            | ls -la       | ls skills/",
                    "  tree skills/  | cat experience.log",
                    "  projects      | projects <name>",
                    "  clear         | exit"
                ]
            }
        }
    },

    // SEO Configuration
    seo: {
        title: "Your Name - Your Title",
        description: "Your Name - Your Title | Brief description of your expertise and skills",
        keywords: "Your, Keywords, Here, DevOps, Cloud, Technologies",
        author: "Your Name",
        url: "https://yourwebsite.com",
        image: "https://yourwebsite.com/og.png"
    },

    // Social Media
    social: {
        github: "yourusername",
        linkedin: "yourusername",
        twitter: "yourusername"
    },

    // Contact Form (Formspree)
    contact: {
        formspreeId: "YOUR_FORMSPREE_ID", // Get this from formspree.io
        honeypot: true // Enable honeypot for spam protection
    },

    // Analytics (Optional)
    analytics: {
        googleAnalytics: "GA_MEASUREMENT_ID", // Optional
        hotjar: "HOTJAR_SITE_ID" // Optional
    },

    // Customization Options
    customization: {
        theme: {
            primaryColor: "#eab308", // Main accent color
            backgroundColor: "#000000", // Main background
            textColor: "#cccccc", // Main text color
            linkColor: "#eab308", // Link color
            borderColor: "#333333" // Border color
        },
        animations: {
            typingEffect: true, // Enable typing animations
            cursorBlink: true, // Enable cursor blinking
            reducedMotion: true // Respect prefers-reduced-motion
        },
        features: {
            copyButtons: true, // Enable copy buttons for code
            tooltips: true, // Enable skill tooltips
            lazyLoading: true, // Enable lazy loading for images
            keyboardShortcuts: true // Enable keyboard shortcuts
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
