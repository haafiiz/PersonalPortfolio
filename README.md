# Hafis Sabeer — Personal Portfolio

A responsive personal portfolio website showcasing my experience, skills, projects, certifications, and software engineering work across **development, QA, and test automation**.

The portfolio is designed as a lightweight static website with no build process or framework dependency, making it simple to maintain and deploy.

## ✨ Features

### 👨‍💻 Professional Profile

* Introduction and professional summary
* Development and QA-focused experience
* Technical skills and tools
* Career journey
* Education and certifications

### 🚀 Projects

Showcase of selected personal and technical projects, including:

* Job Application Tracker
* Fuel at Door Step
* Playwright automation projects
* Other software development and testing projects

Each project can include:

* Project description
* Technologies used
* GitHub repository
* Live demo

### 🧪 QA & Automation

The portfolio highlights experience across:

* Functional testing
* API testing
* UI automation
* Selenium
* Playwright
* REST Assured
* Postman
* TestNG
* Cucumber / BDD
* CI/CD with Jenkins

### 💻 Development

The portfolio also presents development-focused skills and projects using:

* Java
* JavaScript
* Python
* HTML
* CSS
* REST APIs
* SQL
* Git & GitHub

### 📜 Certifications & Education

Dedicated sections for:

* Academic background
* Professional certifications
* Relevant coursework
* Learning achievements

### 📬 Contact

A contact section allows visitors and recruiters to get in touch directly.

The form can be connected to a service such as Formspree or EmailJS, or to a custom backend.

### 📱 Responsive Design

The portfolio is designed to provide a consistent experience across:

* Desktop
* Tablet
* Mobile

## 🛠️ Tech Stack

| Category        | Technologies   |
| --------------- | -------------- |
| Structure       | HTML5          |
| Styling         | CSS3           |
| Functionality   | JavaScript     |
| Data            | JavaScript     |
| Deployment      | Static hosting |
| Version Control | Git / GitHub   |

## 📁 Project Structure

```text
PersonalPortfolio/
│
├── assets/
│   ├── data.js
│   ├── script.js
│   └── styles.css
│
├── index.html
├── README.md
└── resume/
    └── Hafis-Sabeer-Resume.pdf
```

### `index.html`

Contains the main page structure and portfolio sections.

### `assets/styles.css`

Contains the complete visual design, responsive styles, layouts, and design tokens.

### `assets/data.js`

Contains the portfolio content, including:

* Profile information
* Skills
* Projects
* Certifications
* Education
* Career timeline
* GitHub repositories
* Contact information

### `assets/script.js`

Handles:

* Dynamic content rendering
* Navigation
* Scrolling behavior
* Interactive elements
* Contact form behavior

## ⚙️ Updating the Portfolio

Most portfolio content can be updated from:

```text
assets/data.js
```

Projects, skills, certifications, career information, GitHub repositories, and profile information are maintained through the data configuration.

To add a new project, add an entry to the `projects` collection.

To add a certification, add an entry to the `certifications` collection.

To add a GitHub project, add it to the featured repositories collection.

No changes to the HTML structure are normally required.

## 📄 Resume

The portfolio can display a downloadable resume.

Place the resume at:

```text
resume/Hafis-Sabeer-Resume.pdf
```

The resume path can also be configured through the portfolio data.

## 📬 Contact Form

The portfolio includes a contact form for visitors to send messages.

The frontend currently handles the form interaction. For production use, the form can be connected to:

* Formspree
* EmailJS
* A custom backend API

No sensitive API credentials should be stored directly in the frontend.

## 🚀 Running Locally

This is a static website and does not require a build step.

### Option 1 — Open directly

Clone the repository:

```bash
git clone https://github.com/haafiiz/PersonalPortfolio.git
```

Navigate into the project:

```bash
cd PersonalPortfolio
```

Open:

```text
index.html
```

in a browser.

### Option 2 — Local development server

Using Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 🌐 Deployment

Because the project is a static website, it can be deployed to platforms such as:

* GitHub Pages
* Netlify
* Vercel
* Any static web hosting service

No backend server or build pipeline is required for the current version.

## 🎯 Purpose

This portfolio was built to provide a central place to showcase my:

* Professional experience
* Software development projects
* QA and test automation experience
* Technical skills
* Certifications
* GitHub work
* Resume and contact information

The goal is to present a broader software engineering profile covering both **building software and ensuring software quality**.

## 🔮 Future Improvements

Potential improvements include:

* Enhanced project case studies
* Blog / technical articles
* Project filtering
* GitHub activity integration
* Improved contact form backend
* Accessibility improvements
* Performance and SEO enhancements

## 👤 Author

**Hafis Sabeer**

Software Engineer | QA Automation | Software Development

GitHub: https://github.com/haafiiz

## 📌 Repository

[View the source code on GitHub](https://github.com/haafiiz/PersonalPortfolio)
