# 🖥️ Terminal Portfolio — Ubuntu Desktop Theme

A fully interactive, single-file portfolio that looks and feels like an Ubuntu desktop — complete with a login screen, draggable windows, a working bash terminal, and a file-explorer UI for projects, experience, and education.

**[Live Demo →](https://ashutoshsonar.netlify.app/)**

---

## ✨ Features

- 🔐 Login screen with live clock
- 🖥️ Ubuntu GNOME-style desktop with dock and top bar
- 🪟 Draggable, closeable app windows for every section
- 📁 File explorer UI for Projects, Experience & Education
- 💻 Fully working bash terminal with 20+ commands
- 📰 About Me, Skills, Contact windows
- 🔌 Power Off / Log Out from the top bar
- ⚡ Zero dependencies — pure HTML, CSS, JavaScript

---

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/your-username/terminal-portfolio.git
cd terminal-portfolio
```

### 2. Edit your info — open `index.html` and find the CONFIG block
```
╔══════════════════════════════════════════════════════════════════╗
║                        PORTFOLIO CONFIG                         ║
║  ← This is the ONLY section you need to edit                    ║
╚══════════════════════════════════════════════════════════════════╝
```
It's near the top of the `<script>` tag — you can't miss it.

### 3. Add your resume
Drop your resume PDF in the same folder as `index.html` and update this line in CONFIG:
```js
resume: "Your_Name_Resume.pdf",
```

### 4. Open locally
Just open `index.html` in any browser. No build step, no server needed.

### 5. Deploy to Netlify
Drag and drop the folder at **[netlify.com/drop](https://app.netlify.com/drop)**  
Or connect your GitHub repo for auto-deploys on every push.

---

## ✏️ Customization Guide

Everything you need to change lives in the `CONFIG` object at the top of the `<script>` tag.

### Identity
```js
name:  "Jane Doe",
role:  "Full Stack Engineer · Open Source · Coffee Addict",
loc:   "San Francisco, CA",
email: "jane@example.com",
```

### Skills
Two formats supported:

**Progress bars** (use an array of `[name, percent]`):
```js
"Languages": [["JavaScript", 90], ["TypeScript", 85], ["Python", 70]],
```

**Chips** (use an array of strings):
```js
"Frameworks": ["React", "Next.js", "Node.js", "Express"],
```

### Projects
```js
{
  id:      "my-project",        // folder name in explorer (no spaces)
  title:   "My Cool Project",
  sub:     "React · TypeScript · Open Source",
  desc:    "One paragraph describing what it does.",
  bullets: [
    "Key highlight 1",
    "Key highlight 2",
  ],
  tech:    ["React", "TypeScript", "Tailwind"],
  gh:      "https://github.com/you/my-project",
},
```

### Experience
```js
{
  title:   "Senior Engineer",
  org:     "Acme Corp",
  loc:     "Remote",
  range:   "Jan 2022 – Present",
  bullets: [
    "Built X which resulted in Y",
    "Led a team of N engineers to deliver Z",
  ]
},
```

### Education
```js
{
  deg:     "B.S. Computer Science",
  org:     "MIT",
  year:    "2016 – 2020",
  note:    "GPA 3.9 · Dean's List · Thesis: Distributed Systems",
  courses: ["Algorithms", "OS", "Networks", "Machine Learning"],
},
```

### About / Hobbies
```js
about: {
  intro: [
    "First paragraph — who you are and what drives you.",
    "Second paragraph — your professional interests.",
  ],
  hobbies: [
    "Something you love outside of work.",
    "Another hobby or fun fact.",
  ],
  lookingFor: "Full Stack · Backend · DevOps",
},
```

### Social Links
```js
github:   "https://github.com/your-username",
linkedin: "https://linkedin.com/in/your-profile",
substack: "https://substack.com/@you",   // remove if not applicable
```
> To remove Substack, delete the `substack` line from CONFIG and remove the Substack dock button from the HTML.

---

## 📂 File Structure

```
portfolio/
├── index.html                  ← everything lives here
└── Your_Name_Resume.pdf        ← your resume (same folder)
```

---

## 🎨 Theming

The color palette is defined in CSS variables at the top of `<style>`:
```css
:root {
  --orange:   #E95420;   /* Ubuntu orange — primary accent */
  --purple:   #7764D8;   /* Ubuntu purple — avatar / highlights */
  --bg-dark:  #1A0F1E;   /* desktop background base */
}
```
Change `--orange` to your preferred accent color and it'll update across the whole UI.

---

## 💻 Terminal Commands

Users can type these in the terminal window:

| Command      | Description                  |
|--------------|------------------------------|
| `help`       | List all commands            |
| `whoami`     | Quick intro                  |
| `about`      | About & background           |
| `neofetch`   | System info card             |
| `skills`     | Tech skills & tools          |
| `projects`   | GitHub projects              |
| `experience` | Work experience              |
| `education`  | Education history            |
| `contact`    | Contact info                 |
| `social`     | Open social links            |
| `resume`     | Download resume              |
| `blog`       | Writing / blog posts         |
| `ls`         | List directory               |
| `cd`         | Change directory             |
| `cat`        | Read a file                  |
| `clear`      | Clear terminal               |
| `exit`       | Log out                      |

---

## 🙏 Credits

Built by [Ashutosh Sonar](https://github.com/hack-monk).  
Template free to use and adapt — just swap in your own info!
