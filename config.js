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
            thesis: "",
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
            name: "threat-model-recommender",
            title: "Threat Model Recommender",
            description:
              "CLI that recommends hybrid threat models for AI/ML systems; plugs into CI to guide secure architecture choices and PR checks.",
            technologies: ["Python", "CI/CD", "STRIDE", "LINDDUN", "AWS EC2"],
            github: "https://github.com/hack-monk/ThreatModelRecommeder.git",
            demo: "",
            metrics: { riskReduction: "≈65% fewer undetected risks in pilot assessments" }
          },
          {
            name: "encrypted-video-tamper-detection",
            title: "Encrypted Video Tampering & Localization (Cloud)",
            description:
              "AES + SHA-256 based integrity verification and tamper localization with serverless storage for low-cost scale.",
            technologies: ["AES", "SHA-256", "AWS Lambda", "S3"],
            github: "https://github.com/hack-monk/encrypted-video-tampering-detection-and-localization-via-cloud.git",
            demo: "",
            metrics: { costReduction: "≈25% cloud cost reduction", latency: "near real-time verification" }
          },
          {
            name: "mysh",
            title: "Custom Python Shell (mysh)",
            description:
              "A feature-complete Python shell with pipelines, completion, and persistent history — built to understand shell internals and harden CLI tooling.",
            technologies: ["Python"],
            github: "https://github.com/hack-monk/mysh.git",
            demo: "",
            metrics: { usability: "Improved developer workflow for repeatable ops" }
          },
          {
            name: "sdn-ids-ml",
            title: "IDS for Software-Defined Networks (ML)",
            description:
              "ML-powered intrusion detection for SDN. Simulated large-scale DDoS in Mininet/Ryu; achieved high detection accuracy.",
            technologies: ["Mininet", "Ryu", "ML"],
            github: "",
            demo: "",
            metrics: { accuracy: "≈95% accuracy; ~30% reliability improvement" }
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
        github: "hack-monk",
        linkedin: "ashutosh-sonar",
        twitter: "yourusername"
    },

    // Contact Form (Formspree)
    contact: {
        formspreeId: "xwprojje", // Get this from formspree.io
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
