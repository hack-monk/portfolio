<<<<<<< HEAD
# portfolio
=======
# Terminal Portfolio Template

A customizable, terminal-themed portfolio template that anyone can use to showcase their skills and experience.

## 🚀 Features

- **Terminal Aesthetic**: Clean, professional terminal-inspired design
- **Fully Customizable**: Easy configuration through `config.js`
- **Responsive Design**: Works on all devices
- **SEO Optimized**: Built-in SEO meta tags and structured data
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance**: Fast loading with lazy loading and optimizations
- **Contact Form**: Integrated with Formspree for easy form handling

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Configuration file (CUSTOMIZE THIS)
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

### 2. Customize Configuration
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

### 3. Update Content
- Replace `resume.pdf` with your actual resume
- Update `resume.html` with your resume content
- Add your project images to a `demos/` folder if needed

### 4. Set Up Contact Form (Optional)
1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `config.js` with your Formspree ID:
```javascript
contact: {
    formspreeId: "YOUR_FORMSPREE_ID"
}
```

### 5. Deploy
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
            deploymentTime: "5 minutes",
            costReduction: "40% savings"
        }
    }
    // Add more projects...
]
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
Modify the HTML structure in `index.html` to add/remove sections.

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

## 🚀 Performance

- Lazy loading for images
- Optimized CSS and JavaScript
- Fast loading times
- SEO optimized

## 📞 Support

If you need help customizing the template:

1. Check the configuration options in `config.js`
2. Review the HTML structure in `index.html`
3. Modify CSS in `styles.css` for styling changes
4. Update JavaScript in `script.js` for functionality changes

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy coding! 🚀**
>>>>>>> 71e7310 (code)
