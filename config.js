// Portfolio Configuration Template
// Customize this file to personalize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Ashutosh Sonar",
        title: "DevOps | Cloud | Infra | Security",
        email: "ashusonar1998@gmail.com",
        phone: "+1 (234) 567-890",
        location: "Melbourne, Florida",
        website: "https://ashutoshsonar.dev",
        github: "https://github.com/hack-monk",
        linkedin: "https://linkedin.com/in/ashutosh-sonar",
        resume: "Ashutosh_Sonar_DevOps_Engineer_Resume.pdf" // Path to your resume file
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
                name: "Programming_Languages",
                items: [
                    { name: "Python", tip: "Primary Coding Language" },
                    { name: "Shell/Bash Scripting", tip: "Release/rollback scripts, health probes, log pipelines" },
                    { name: "SQL", tip: "MySQL queries & migrations; audit logs & reporting" },
                    { name: "Powershell", tip: "Windows hardening (CIS), IIS deploys, event log shipping" },
                    { name: "Go", tip: "Currently learning" }
                ]
            },
            {
                name: "DevOps_Tools",
                items: [
                    { name: "Git", tip: "Branching, PR reviews, signed commits, release tagging" },
                    { name: "Jenkins", tip: "Pipelines-as-code; blue/green deploys; parallel stages" },
                    { name: "ArgoCD", tip: "GitOps sync waves; health checks; RBAC; rollbacks" },
                    { name: "Docker", tip: "Multi-stage builds; minimal images; SBOM; signed images" },
                    { name: "Kubernetes", tip: "EKS; HPA; Ingress/ALB; canary & rollbacks" },
                    { name: "Ansible", tip: "Idempotent playbooks; CIS hardening; patching; Vault secrets" },
                    { name: "Terraform", tip: "Modules; workspaces; remote state; IAM least-privilege" }
                ]
            },
            {
                name: "Cloud_and_Infra",
                items: [
                    { name: "AWS(EC2, S3, IAM, RDS, Lambda, EKS, Cloudwatch)", tip: "AWS landing zone IaC; VPC/IAM least-privilege; EKS+ALB; KMS/CloudWatch/RDS backups" },
                    { name: "Linux (Ubuntu, CentOS, RedHat)", tip: "CIS hardening; systemd/networking; SELinux/AppArmor; patch & log automation" },
                    { name: "Windows", tip: "Windows Server ops; PowerShell DSC; Event Log forwarding" },
                    { name: "VMWare", tip: "vSphere/ESXi provisioning; templates & snapshots" },
                    { name: "KVM Hypervisor", tip: "KVM/QEMU + libvirt; cloud-init images; virtio; bridged/NAT networking" }
                ]
            },
            {
                name: "Monitoring_and_Logging",
                items: [
                    { name: "Prometheus", tip: "Exporters, recording rules, SLI/SLO alerting" },
                    { name: "ELK Stack", tip: "Logstash pipelines, JSON logs, fast correlation/search" },
                    { name: "Grafana", tip: "SLO dashboards, unified alerts, Prometheus/CloudWatch" }
                ]
            },
            {
                name: "Database_and_Messaging",
                items: [
                    { name: "MySQL", tip: "InnoDB, indexes, slow-query tuning" },
                    { name: "MongoDB", tip: "Schema design, replica sets, sharding" },
                    { name: "Cassandra", tip: "CQL, wide rows, tunable consistency" },
                    { name: "Couchbase", tip: "Buckets, N1QL, XDCR" },
                    { name: "Neo4j", tip: "Cypher, graph modeling, traversals" },
                    { name: "Redis", tip: "Caching, pub/sub, Lua scripts" },
                    { name: "Apache Kafka", tip: "Topics, partitions, consumer groups" }
                ]
            },
            {
                name: "Networking",
                items: [
                    { name: "TCP/IP", tip: "Network troubleshooting, TCP/IP protocols, routing" },
                    { name: "Load Balancing", tip: "Configured load balancers, handled 1M+ requests/day" },
                    { name: "Security", tip: "Security groups, WAF, SSL/TLS certificates" }
                ]
            },
            {
                name: "Concepts",
                items: [
                    { name: "IaC", tip: "Terraform modules, remote state, drift" },
                    { name: "Site Reliability Engineering", tip: "SLIs/SLOs, error budgets, runbooks" },
                    { name: "Zero-Downtime Deployment", tip: "Blue/green, canary, auto-rollback" },
                    { name: "Secure DevOps", tip: "Policy-gated CI/CD, SAST/SBOM" },
                    { name: "Threat Modeling", tip: "STRIDE/LINDDUN, CI-integrated" },
                    { name: "Virtualization", tip: "KVM/VMware, templates, snapshots" },
                    { name: "Agile", tip: "Scrum/Kanban, iterative delivery" },
                    { name: "Object Oriented Programming", tip: "SOLID, clean abstractions" }
                ]
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
            technologies: ["DevOps", "Cyber Security", "Database Management", "Advanced Software Engineering"]
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
            github: "Git Link: https://github.com/hack-monk/ThreatModelRecommeder.git",
            demo: "",
            metrics: { riskReduction: "≈65% fewer undetected risks in pilot assessments" }
          },
          {
            name: "encrypted-video-tamper-detection",
            title: "Encrypted Video Tampering & Localization (Cloud)",
            description:
              "AES + SHA-256 based integrity verification and tamper localization with serverless storage for low-cost scale.",
            technologies: ["AES", "SHA-256", "AWS Lambda", "S3"],
            github: "Git Link: https://github.com/hack-monk/encrypted-video-tampering-detection-and-localization-via-cloud.git",
            demo: "",
            metrics: { costReduction: "≈25% cloud cost reduction", latency: "near real-time verification" }
          },
          {
            name: "mysh",
            title: "Custom Python Shell (mysh)",
            description:
              "A feature-complete Python shell with pipelines, completion, and persistent history — built to understand shell internals and harden CLI tooling.",
            technologies: ["Python"],
            github: "Git Link: https://github.com/hack-monk/mysh.git",
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
                    "  cat intro.txt",
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
        title: "Ashutosh Sonar - DevOps | Cloud | Infra | Security",
        description: "Ashutosh Sonar - DevOps | Cloud | Infra | Security",
        keywords: "DevOps, Cloud, Security, CI/CD, Kubernetes, AWS, Terraform, Ansible, Prometheus, Grafana",
        author: "Ashutosh Sonar",
        url: "https://ashutoshsonar.dev"
    },

    // Social Media
    social: {
        github: "hack-monk",
        linkedin: "ashutosh-sonar",
        twitter: "",
        substack: "hackmonk"
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
