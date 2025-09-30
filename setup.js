// Portfolio Setup Script
// Run this script to help set up your portfolio

console.log(`
🚀 Terminal Portfolio Template Setup
=====================================

Welcome! This script will help you set up your portfolio.

📋 Setup Checklist:
1. Edit config.js with your information
2. Replace resume.pdf with your resume
3. Update resume.html with your content
4. Add your project images to demos/ folder
5. Set up Formspree for contact form (optional)
6. Deploy to your hosting service

📁 Files to customize:
- config.js (main configuration)
- resume.pdf (your resume file)
- resume.html (resume page content)
- demos/ (project demo images)

🔧 Configuration Guide:
- Personal info: Update personal section in config.js
- Skills: Modify skills.categories array
- Experience: Update experience array
- Projects: Update projects array
- SEO: Update seo section for better search visibility

📞 Contact Form Setup:
1. Go to https://formspree.io
2. Create a new form
3. Copy your form ID
4. Update config.js contact.formspreeId

🚀 Deployment Options:
- GitHub Pages: Push to GitHub and enable Pages
- Netlify: Drag and drop your folder
- Vercel: Connect your GitHub repository
- Any web hosting service

Need help? Check the README.md file for detailed instructions.

Happy coding! 🎉
`);

// Check if config.js exists and has been customized
if (typeof PORTFOLIO_CONFIG !== 'undefined') {
    const config = PORTFOLIO_CONFIG;
    
    // Check if still using default values
    if (config.personal.name === "Your Name") {
        console.warn(`
⚠️  Configuration Not Updated
============================

You're still using the default configuration.
Please update config.js with your information.

Current status:
- Name: ${config.personal.name}
- Email: ${config.personal.email}
- Website: ${config.personal.website}

Please edit config.js to customize your portfolio.
        `);
    } else {
        console.log(`
✅ Configuration Updated
=======================

Great! Your configuration has been updated:
- Name: ${config.personal.name}
- Title: ${config.personal.title}
- Email: ${config.personal.email}
- Website: ${config.personal.website}

Your portfolio is ready to deploy! 🚀
        `);
    }
} else {
    console.error(`
❌ Configuration Not Found
=========================

PORTFOLIO_CONFIG not found. Please make sure:
1. config.js exists in the same directory
2. config.js is loaded before script.js
3. The configuration object is properly defined

Check your HTML file to ensure config.js is loaded first.
    `);
}
