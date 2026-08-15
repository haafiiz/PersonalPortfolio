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
    title: "QA / Test Automation Engineer",
    headline: "Building reliable software through automation and quality engineering.",
    intro: "I work at the intersection of software testing and engineering — designing UI automation suites, validating APIs, and wiring test frameworks into CI/CD pipelines so teams can ship with confidence.",
    email: "PLACEHOLDER — your email address",
    github: "PLACEHOLDER — https://github.com/your-username",
    linkedin: "PLACEHOLDER — https://linkedin.com/in/your-profile",
    resumePath: "/resume/Hafis-Sabeer-Resume.pdf",
    location: "PLACEHOLDER — City, Country"
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
    "My focus is quality engineering — making sure software behaves the way it's supposed to before it reaches a user. That means designing automation that catches regressions early, writing UI test suites that mirror real user journeys, and validating APIs at the request/response level.",
    "I build with Playwright and Selenium for UI automation, REST Assured and Postman for API testing, and wire test suites into Jenkins so verification happens continuously, not as an afterthought. Java, JavaScript/TypeScript, and Python are my working languages, backed by SQL for data validation.",
    "I treat testing as an engineering discipline in its own right — one that's improving constantly. I'm continually sharpening my grasp of test architecture, CI/CD practices, and automation frameworks."
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
      github: "PLACEHOLDER — repository URL",
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
      title: "SKU Pricing Prediction System",
      description: "A machine learning project that analyzes product pricing, discount, and bestseller ranking data to support pricing decisions.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Django", "MySQL"],
      features: [],
      github: "PLACEHOLDER — repository URL",
      demo: null,
      category: "ml"
    },
    {
      title: "Respiratory Sound Analysis",
      description: "A machine learning project focused on respiratory sound analysis and disease detection using audio features.",
      technologies: ["Python", "Django", "Machine Learning", "MFCC", "Random Forest", "MySQL"],
      features: [],
      github: "PLACEHOLDER — repository URL",
      demo: null,
      category: "ml"
    },
    {
      title: "Fuel at Doorstep",
      description: "An e-commerce web application for fuel delivery management.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      features: [],
      github: "PLACEHOLDER — repository URL",
      demo: null,
      category: "web"
    }
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
      organization: "PLACEHOLDER — organization / employer name",
      role: "PLACEHOLDER — role / job title",
      duration: "PLACEHOLDER — e.g. Jan 2025 – Present",
      responsibilities: [
        "PLACEHOLDER — key responsibility",
        "PLACEHOLDER — key responsibility"
      ],
      technologies: ["PLACEHOLDER"]
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
    institution: "PLACEHOLDER — institution name",
    graduationYear: "PLACEHOLDER — graduation year",
    coursework: [
      "PLACEHOLDER — relevant coursework",
      "PLACEHOLDER — relevant coursework",
      "PLACEHOLDER — relevant coursework"
    ]
  },

  // ------------------------------------------------------------
  // CERTIFICATIONS — add more by pushing another object
  // ------------------------------------------------------------
  certifications: [
    {
      name: "Programming, Data Structures and Algorithms using Python",
      issuer: "NPTEL",
      year: "PLACEHOLDER — year",
      link: "PLACEHOLDER — certificate URL"
    }
  ],

  // ------------------------------------------------------------
  // GITHUB / OPEN SOURCE
  // No stats (stars, commits, contribution counts) are shown —
  // add repos here as they're published.
  // ------------------------------------------------------------
  github: {
    profileUrl: "PLACEHOLDER — https://github.com/your-username",
    featuredRepos: [
      {
        name: "PLACEHOLDER — repository name",
        description: "PLACEHOLDER — short description of the repository",
        technologies: ["PLACEHOLDER"],
        link: "PLACEHOLDER — repository URL"
      }
    ]
  }
};
