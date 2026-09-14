/**
 * ============================================================
 *  SITE CONTENT / DATA
 * ------------------------------------------------------------
 *  This is the ONLY file you should need to edit to keep the
 *  portfolio up to date. Add, remove, or edit entries below —
 *  the page rebuilds itself from this data automatically.
 *
 *  Nothing here is fabricated. Fields with a "PLACEHOLDER —"
 *  value are meant to be filled in by Hafis before publishing.
 * ============================================================
 */

const SITE_DATA = {

  // ------------------------------------------------------------
  // IDENTITY
  // ------------------------------------------------------------
  profile: {
    name: "Hafis Sabeer",
    title: "Software Engineer",
    headline: "Building software, automating quality, and solving real-world problems.",
    intro: "I’m a software engineer with experience in application development, automation, APIs, and CI/CD. I build practical software solutions while using automation and quality engineering to make applications more reliable, maintainable, and scalable.",
    email: "hafis.sabeer3@gmail.com",
    github: "https://github.com/haafiiz",
    linkedin: "https://www.linkedin.com/in/hafis-sabeer/",
    resumePath: "resume/Hafis_Sabeer.pdf",
    location: "Kochi, India"
  },

  // ------------------------------------------------------------
  // ABOUT — summary card
  // ------------------------------------------------------------
  aboutSummary: [
    { label: "Role", value: "QA / Test Automation Engineer" },
    { label: "Focus", value: "UI & API Automation" },
    { label: "Languages", value: "Java, JavaScript/TypeScript, Python" },
    { label: "Automation", value: "Playwright, Selenium" },
    { label: "API", value: "REST Assured, Postman" },
    { label: "CI/CD", value: "Jenkins" },
    { label: "Version Control", value: "Git / GitHub" },
    { label: "Database", value: "SQL / MySQL" }
  ],

  aboutParagraphs: [
    "My approach to software engineering goes beyond simply making applications work — I focus on building reliable, maintainable, and well-tested software. I enjoy working across development, automation, APIs, and CI/CD to solve problems and create better engineering workflows.",

    "I have experience building applications and working with technologies such as Java, Python, JavaScript/TypeScript, SQL, and web frameworks. Alongside development, I use Playwright, Selenium, REST Assured, and Postman to automate UI and API testing, while integrating test suites with Jenkins for continuous validation.",

    "I see development and testing as two parts of the same engineering process. Whether I'm building a feature, developing an API, automating a workflow, or validating a release, my goal is to create software that is reliable, maintainable, and ready for real-world use."
  ],

  // ------------------------------------------------------------
  // SKILLS
  // ------------------------------------------------------------
  skillCategories: [
    {
      category: "Test Automation",
      icon: "automation",
      skills: ["Playwright", "Selenium", "JUnit", "TestNG"]
    },
    {
      category: "API Testing",
      icon: "api",
      skills: ["REST Assured", "Postman", "REST APIs"]
    },
    {
      category: "Programming",
      icon: "code",
      skills: ["Java", "JavaScript", "TypeScript", "Python"]
    },
    {
      category: "CI/CD & DevOps",
      icon: "pipeline",
      skills: ["Jenkins", "Git", "GitHub"]
    },
    {
      category: "Database",
      icon: "database",
      skills: ["SQL", "MySQL"]
    },
    {
      category: "Web Technologies",
      icon: "web",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ],

  // ------------------------------------------------------------
  // PROJECTS — add new projects by pushing another object here
  // ------------------------------------------------------------
  projects: [
    {
      title: "Playwright Test Automation Framework",
      description: "A UI test automation project built using Playwright and TypeScript to automate web application workflows and validate application behavior.",
      technologies: ["Playwright", "TypeScript", "Node.js", "Git", "Jenkins"],
      features: [
        "UI automation",
        "Assertions",
        "Test organization",
        "HTML test reporting",
        "Cross-browser testing",
        "Jenkins CI integration"
      ],
      github: "https://github.com/haafiiz/Playwright",
      demo: null,
      category: "automation"
    },
    {
      title: "API Test Automation Framework",
      description: "A REST API automation project focused on validating API requests, responses, status codes, response data, and business behavior.",
      technologies: ["Java", "REST Assured", "JUnit/TestNG", "Maven"],
      features: [
        "REST API testing",
        "Request validation",
        "Response validation",
        "JSON validation",
        "Negative testing",
        "Automated test execution"
      ],
      github: "PLACEHOLDER — repository URL",
      demo: null,
      category: "automation"
    },
    {
      title: "Fuel at Doorstep",
      description: "An e-commerce web application for fuel delivery management.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      features: [
        "Customer authentication",
        "Fuel selection and dynamic pricing",
        "Location/PIN-code validation",
        "Scheduled delivery",
        "Order tracking and status management",
        "Admin dashboard"
      ],
      github: "https://github.com/haafiiz/mini-project",
      demo: null,
      category: "web"
    },
    {
      title: "Job Application Tracker",
      description: "A responsive full-stack web application for managing job applications, tracking recruitment progress, setting follow-up reminders, and analyzing job-search activity.",
      technologies: ["HTML", "CSS", "JavaScript", "Progressive Web App (PWA)", "Node.js", "REST API", "SQLite"],
      features: [
        "Dashboard & analytics",
        "Job application CRUD",
        "Search & advanced filtering",
        "Follow-up reminders",
        "REST API",
        "SQLite database"
      ],
      github: "https://github.com/haafiiz/Job-Application-Tracker",
      demo: null,
      category: "Web"
    },
  ],

  // ------------------------------------------------------------
  // AUTOMATION SHOWCASE — "How I Automate"
  // ------------------------------------------------------------
  automationPipeline: [
    "Test Scenario", "Test Design", "Automation", "Assertions",
    "Test Execution", "Reporting", "CI/CD"
  ],

  automationCards: [
    { title: "UI Automation", detail: "End-to-end browser workflows with Playwright and Selenium." },
    { title: "API Automation", detail: "Request/response validation with REST Assured and Postman." },
    { title: "Regression Testing", detail: "Repeatable suites that catch breakage before release." },
    { title: "Functional Testing", detail: "Verifying behavior against expected requirements." },
    { title: "Cross-browser Testing", detail: "Consistent behavior across Chromium, Firefox, and WebKit." },
    { title: "Test Reporting", detail: "Readable HTML reports for fast triage of failures." },
    { title: "CI/CD Integration", detail: "Tests wired into Jenkins pipelines for continuous feedback." }
  ],

  // ------------------------------------------------------------
  // CAREER JOURNEY — vertical timeline
  // No formal employment history is being asserted here; this
  // section intentionally centers project-based experience.
  // Add a formal role by pushing an object with the same shape.
  // ------------------------------------------------------------
  careerJourney: [
    {
      organization: "Cognizant",
      role: "Programmer Analyst",
      duration: "Oct 2024 - Present",
      responsibilities: [
        "Designed and executed functional, integration, and regression test cases across web and API applications.",
        "Built UI automation suites using Selenium, Playwright, and Cucumber (BDD) with Page Object Model.",
        "Automated API testing with REST Assured and Postman, cutting manual regression time by 35–40%.",
        "Validated backend data via SQL and cross-checked API responses against database records.",
        "Owned defect lifecycle in JIRA (150+ defects) and integrated automation into Jenkins CI/CD pipelines.",
        "Led GenAI-assisted testing adoption, reducing test design time by 20%."
      ],
      technologies: ["Playwright", "Selenium", "REST Assured", "Postman", "ReadyAPI", "Java", "SQL", "TestNG", "Cucumber", "Jenkins", "JIRA", "Git"]
    },
    {
      organization: "Independent Projects",
      role: "QA & Automation Practice",
      duration: "Ongoing",
      responsibilities: [
        "Designed and built UI automation frameworks with Playwright and Selenium",
        "Built API test suites with REST Assured and Postman covering request, response, and negative-path validation",
        "Integrated test suites into Jenkins for continuous execution and HTML reporting"
      ],
      technologies: ["Playwright", "Selenium", "REST Assured", "Java", "TypeScript", "Jenkins"]
    }
  ],

  // ------------------------------------------------------------
  // EDUCATION
  // ------------------------------------------------------------
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "APJ Abdul Kalam Technological University - KTU",
    graduationYear: "2024",
    coursework: [
      "Software Engineering",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Operating Systems",
      "Cyber Security"
    ]
  },

  // ------------------------------------------------------------
  // CERTIFICATIONS — add more by pushing another object
  // ------------------------------------------------------------
  certifications: [
    {
      name: "Al Fluency Framework & Foundations",
      issuer: "Anthropic",
      year: "2026",
      link: "https://verify.skilljar.com/c/arkvfrg86kg6"
    },
    {
      name: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      year: "2026",
      link: "https://verify.skilljar.com/c/of9qjr5trfox"
    },
    {
      name: "Context Engineering Foundation",
      issuer: "Cognizant",
      year: "2026",
      link: "https://www.credly.com/badges/01d2ee1b-0ec2-4433-bd77-c9eda8354837/linked_in_profile"
    },
    {
      name: "Building with the Claude API",
      issuer: "Anthropic",
      year: "2026",
      link: "https://verify.skilljar.com/c/dpv2ok3mg4ie"
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic",
      year: "2026",
      link: "https://verify.skilljar.com/c/pteva4x5ofu6"
    },
    {
      name: "Programming, Data Structures and Algorithms using Python",
      issuer: "NPTEL",
      year: "2023",
      link: "https://drive.google.com/file/d/1HfKwkmtQB4iTOnRqbQpPfDQS575eZufq/view?usp=drive_link"
    }
  ],

  // ------------------------------------------------------------
  // GITHUB / OPEN SOURCE
  // No stats (stars, commits, contribution counts) are shown —
  // add repos here as they're published.
  // ------------------------------------------------------------
  github: {
    profileUrl: "https://github.com/haafiiz",
    featuredRepos: [
      {
        name: "Job Application Tracker",
        description: "A responsive full-stack web application for managing job applications, tracking recruitment progress, setting follow-up reminders, and analyzing job-search activity. The application provides a centralized way to record applications, monitor their current status, search and filter opportunities, and keep track of upcoming reminders.",
        technologies: [
          "HTML", "CSS", "JavaScript", "Progressive Web App (PWA)", "Node.js", "REST API", "SQLite"],
        link: "https://github.com/haafiiz/Job-Application-Tracker"
      }
    ]
  }
};
