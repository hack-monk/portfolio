// Portfolio Configuration Template
// Customize this file to personalize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Ashutosh Sonar",
        title: "DevOps | Infra | Security",
        email: "ashusonar1998@gmail.com",
        phone: "+1 (234) 567-890",
        location: "Melbourne, Florida",
        website: "https://yourwebsite.com",
        github: "https://github.com/hack-monk",
        linkedin: "https://linkedin.com/in/ashutosh-sonar",
        resume: "resume.pdf" // Path to your resume file
    },

    // About Section
    about: {
        description: " I harden CI/CD and cloud platforms so teams can ship fast, safely. My focus is secure-by-design DevOps: threat modeling in the pipeline, least-privilege IAM, signed/container-scanned releases, and observable, self-healing Kubernetes on AWS.",
        education: {
            degree: "Master's Degree - Computer Science",
            university: "Florida Institute of Technology",
            year: "2023 - 2025",
            gpa: "3.25/4.0",
            focus: "DevOps, Cloud Computing, Distributed Systems, Security"
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
            title: "Graduate Research Assistant and Grader",
            company: "Florida Institute of Technology",
            duration: "Aug 2023 - May2025",
            location: "Melbourne, Florida, USA",
            achievements: [
                "Embedded threat-modeling gates in CI/CD, improving early vuln detection by ~40%.",
                "Explored secure deployment patterns for AI/ML (STRIDE, LINDDUN) and pipeline policy checks.",
                "Graded 100+ advanced SWE/DB projects with security and reliability criteria."
            ],
            technologies: ["Technology 1", "Technology 2", "Technology 3"]
        },
        {
            title: "Member of Technical Staff (DevOps Engineer)",
            company: "Coriolis Technology Pvt. Ltd.",
            duration: "Aug 2020 – Jul 2023",
            location: "Pune, MH India",
            achievements: [
              "Built Jenkins→ArgoCD pipelines; reduced manual release effort by ~50%.",
              "Ran self-healing K8s for microservices with measured 99.999% availability.",
              "Provisioned multi-env AWS with Terraform/Ansible; integrated security scans.",
              "Designed Prometheus/Grafana & CloudWatch dashboards; cut MTTR by ~40%."
            ],
            technologies: ["Kubernetes", "AWS", "Terraform", "Ansible", "Prometheus", "Grafana"]
          },
          {
            title: "Intern",
            company: "Hackedemist",
            duration: "Jul 2017 – Jun 2019",
            location: "Pune, India",
            achievements: [
              "Built AES-encrypted storage with sub-second integrity checks.",
              "Integrated MQTT on AWS for IoT; improved packet reliability by ~25%.",
              "Delivered 10+ sessions on secure coding & network defense to 200+ learners."
            ],
            technologies: ["AES", "SHA-256", "AWS", "MQTT"]
          }
    ],

    // Education Configuration
    education: [
        {
            degree: "Master's Degree - Computer Science",
            university: "Florida Institute of Technology",
            duration: "2023 - 2025",
            gpa: "3.25/4.0",
            focus: "DevOps, Cloud Computing, Distributed Systems",
            thesis: "Bridging the Gap: Enhancing DevOps Security Through Comprehensive Threat Modeling",
            coursework: [
                "Cybersecurity", 
                "Computer Networks", 
                "Advanced Software Engineering",
                "Cryptography"
            ]
        },
        {
            degree: "Bachelor's Degree - Computer Engineering",
            university: "University of Pune",
            duration: "2016 - 2020",
            gpa: "3.69/4.0",
            focus: "Software Engineering, Systems",
            thesis: "Blockchain : Concept and Application Domains",
            coursework: [
                "Data Structures", 
                "Cyber Security", 
                "Software Engineering"
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
        prompt: "ashutosh@portfolio:~$",
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
        title: "Ashutosh Sonar - DevOps | Infra | Security",
        description: "Ashutosh Sonar - DevOps | Infra | Security | Brief description of your expertise and skills",
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
