# Terminal Portfolio Template

A customizable, terminal-themed portfolio template that anyone can use to showcase their skills and experience with dynamic content generation and real-time features.

## 🚀 Features

- **Terminal Aesthetic**: Clean, professional terminal-inspired design with VS Code dark theme
- **Dynamic Content**: All content generated from `config.js` - no HTML editing required
- **Real-time Timestamps**: Live timestamps for file listings and experience entries
- **Fully Customizable**: Easy configuration through `config.js`
- **Responsive Design**: Works on all devices
- **SEO Optimized**: Built-in SEO meta tags and structured data
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance**: Fast loading with lazy loading and optimizations
- **Contact Form**: Integrated with Formspree for easy form handling
- **Interactive Elements**: Copy buttons, tooltips, and keyboard shortcuts
- **Metrics Tables**: Professional ASCII-style tables with dynamic alignment

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with VS Code dark theme
├── script.js           # JavaScript functionality with dynamic content
├── config.js           # Configuration file (CUSTOMIZE THIS)
├── setup.js            # Setup validation helper
├── setup.html          # Interactive setup guide
├── resume.html         # Resume page template
├── resume.pdf          # Your resume file
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Clone or Download
```bash
git clone <repository-url>
cd portfolio
```

### 2. Quick Setup (Recommended)
Open `setup.html` in your browser for an interactive setup guide that will help you configure everything.

### 3. Manual Configuration
Edit the `config.js` file with your information:

```javascript
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
        resume: "resume.pdf"
    },
    
    // ... rest of configuration
};
```

### 4. Update Content
- Replace `resume.pdf` with your actual resume
- Update `resume.html` with your resume content
- Add your project images to a `demos/` folder if needed

### 5. Set Up Contact Form (Optional)
1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `config.js` with your Formspree ID:
```javascript
contact: {
    formspreeId: "YOUR_FORMSPREE_ID"
}
```

### 6. Deploy
Upload all files to your web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## ⚙️ Configuration Options

### Personal Information
```javascript
personal: {
    name: "Your Name",
    title: "Your Job Title",
    email: "your.email@example.com",
    phone: "+1 (234) 567-890",
    location: "Your City, State",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    resume: "resume.pdf"
}
```

### About Section
```javascript
about: {
    description: "Your professional description and background",
    education: {
        degree: "Your Degree",
        university: "Your University",
        year: "2023 - 2025",
        gpa: "3.8/4.0",
        focus: "Your Focus Areas"
    }
}
```

### Skills
```javascript
skills: {
    categories: [
        {
            name: "Programming",
            items: ["Python", "JavaScript", "Go", "Bash"]
        },
        {
            name: "Cloud",
            items: ["AWS", "Azure", "GCP"]
        }
        // Add more categories...
    ]
}
```

### Experience
```javascript
experience: [
    {
        title: "Your Job Title",
        company: "Company Name",
        duration: "2023 - Present",
        location: "City, State",
        achievements: [
            "Achievement 1 - Quantify your impact",
            "Achievement 2 - Show measurable results"
        ],
        technologies: ["Technology 1", "Technology 2"]
    }
    // Add more experience...
]
```

### Education
```javascript
education: [
    {
        degree: "Master's Degree - Computer Science",
        university: "Your University",
        duration: "2023 - 2025",
        gpa: "3.8/4.0",
        focus: "Your Focus Areas",
        thesis: "Your Thesis Title",
        coursework: ["Course 1", "Course 2"],
        achievements: ["Achievement 1", "Achievement 2"]
    }
    // Add more education...
]
```

### Projects
```javascript
projects: [
    {
        name: "project-name",
        title: "Project Title",
        description: "Brief description of your project",
        technologies: ["Technology 1", "Technology 2"],
        github: "https://github.com/yourusername/project-name",
        demo: "https://demo.yourwebsite.com/project-name",
        metrics: {
            riskReduction: "≈65% fewer undetected risks",
            costReduction: "≈25% cloud cost reduction",
            latency: "near real-time verification",
            accuracy: "≈95% accuracy",
            usability: "Improved developer workflow"
        }
    }
    // Add more projects...
]
```

### Terminal Configuration
```javascript
terminal: {
    prompt: "yourname@portfolio:~$",
    welcomeMessage: [
        "Welcome to the Interactive Portfolio Terminal!",
        "Type 'help' to see available commands.",
        "Type 'exit' to close the terminal."
    ]
}
```

### SEO Configuration
```javascript
seo: {
    title: "Your Name - Your Title",
    description: "Your Name - Your Title | Brief description",
    keywords: "Your, Keywords, Here",
    author: "Your Name",
    url: "https://yourwebsite.com",
    image: "https://yourwebsite.com/og.png"
}
```

### Customization Options
```javascript
customization: {
    theme: {
        primaryColor: "#eab308",    // Main accent color
        backgroundColor: "#000000", // Main background
        textColor: "#cccccc",      // Main text color
        linkColor: "#eab308",       // Link color
        borderColor: "#333333"      // Border color
    },
    animations: {
        typingEffect: true,         // Enable typing animations
        cursorBlink: true,          // Enable cursor blinking
        reducedMotion: true         // Respect prefers-reduced-motion
    },
    features: {
        copyButtons: true,          // Enable copy buttons
        tooltips: true,             // Enable skill tooltips
        lazyLoading: true,         // Enable lazy loading
        keyboardShortcuts: true    // Enable keyboard shortcuts
    }
}
```

## 🎨 Customization

### Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #eab308;
    --background-color: #000000;
    --text-color: #cccccc;
    --link-color: #eab308;
    --border-color: #333333;
}
```

### Fonts
Change the font family in `styles.css`:
```css
body {
    font-family: 'Your Font', 'Fira Code', 'Courier New', monospace;
}
```

### Layout
The template uses dynamic content generation, so you only need to modify `config.js` to update content. The HTML structure is automatically populated.

## 🔧 Dynamic Content Features

### Real-time Timestamps
- File listings show current timestamps
- Experience entries have realistic timestamps
- Education entries display proper time formatting

### Metrics Tables
- Professional ASCII-style tables
- Dynamic column width calculation
- Proper alignment for all content lengths
- Support for various metric types

### Interactive Elements
- Copy buttons for GitHub links and demo URLs
- Skill tooltips with detailed information
- Keyboard shortcuts (when not in input fields)
- Terminal-style command interface

## 📱 Responsive Design

The template is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Reduced motion support
- Skip links for main content

## 🚀 Performance

- Lazy loading for images
- Optimized CSS and JavaScript
- Fast loading times
- SEO optimized
- Dynamic content generation
- Efficient DOM manipulation

## ⌨️ Keyboard Shortcuts

- `m` - Toggle metrics dashboard (when not in input fields)
- `Escape` - Close modals and tooltips
- `Tab` - Navigate with keyboard
- All shortcuts respect input field focus

## 🐛 Troubleshooting

### Common Issues

1. **Content not updating**: Make sure you're editing `config.js` and refreshing the page
2. **Input fields not working**: Check that keyboard shortcuts aren't interfering
3. **Metrics tables misaligned**: The template automatically adjusts column widths
4. **Contact form not working**: Verify your Formspree ID is correct

### Debug Mode
Open browser developer tools to see any JavaScript errors or configuration issues.

## 📞 Support

If you need help customizing the template:

1. Check the configuration options in `config.js`
2. Use the interactive setup guide in `setup.html`
3. Review the HTML structure in `index.html`
4. Modify CSS in `styles.css` for styling changes
5. Update JavaScript in `script.js` for functionality changes

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 🎯 Recent Updates

- ✅ Dynamic content generation from `config.js`
- ✅ Real-time timestamps for all sections
- ✅ Professional metrics tables with dynamic alignment
- ✅ VS Code dark theme implementation
- ✅ Interactive setup guide
- ✅ Fixed keyboard input issues
- ✅ Enhanced accessibility features
- ✅ Improved responsive design

---

