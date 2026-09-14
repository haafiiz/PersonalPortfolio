(() => {
  "use strict";

  const d = SITE_DATA;

  /* ------------------------------------------------------------
     ICONS — small inline SVG set, keyed by name
  ------------------------------------------------------------ */
  const ICONS = {
    automation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4M15 17v4M3 9h4M17 15h4M6.5 6.5l2.8 2.8M17.5 6.5l-2.8 2.8M6.5 17.5l2.8-2.8M17.5 17.5l-2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg>',
    api: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4M16 12h4M8 12a4 4 0 0 1 4-4M12 16a4 4 0 0 0 4-4"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-5 6 5 6M16 6l5 6-5 6M13.5 4l-3 16"/></svg>',
    pipeline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M5 8v4a2 2 0 0 0 2 2h4M13 14h4a2 2 0 0 0 2-2v-2"/><circle cx="16" cy="8" r="2"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.66 3.13 3 7 3s7-1.34 7-3V5"/><path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.98 3.23 9.2 7.71 10.69.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.14.68-3.8-1.34-3.8-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.31-5.16 5.59.4.35.76 1.04.76 2.1 0 1.51-.01 2.73-.01 3.11 0 .3.2.65.78.54A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9 12 4 2 9l10 5 10-5Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-2 8 5.5-3 5.5 3-2-8"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    repo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"/><path d="M4 17a3 3 0 0 1 3-3h13"/></svg>'
  };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[c]));
  const isPlaceholder = (v) => typeof v === "string" && v.trim().startsWith("PLACEHOLDER");
  const safeHref = (v, fallback = "#") => (!v || isPlaceholder(v)) ? fallback : v;
  const displayOrPlaceholder = (v) => isPlaceholder(v) ? `<span class="mono" style="color:var(--amber)">${esc(v)}</span>` : esc(v);

  /* ------------------------------------------------------------
     HERO
  ------------------------------------------------------------ */
  function renderHero() {
    document.getElementById("heroName").textContent = d.profile.name;
    document.getElementById("heroTitle").textContent = `// ${d.profile.title}`;
    document.getElementById("heroHeadline").textContent = d.profile.headline;
    document.getElementById("heroIntro").textContent = d.profile.intro;

    document.title = `${d.profile.name} | QA & Test Automation Engineer`;

    const gh = safeHref(d.profile.github);
    const li = safeHref(d.profile.linkedin);
    document.getElementById("heroGithub").href = gh;
    document.getElementById("heroLinkedin").href = li;
    document.getElementById("navGithub").href = gh;
    document.getElementById("navLinkedin").href = li;

    const resumeBtn = document.getElementById("heroResumeBtn");
    resumeBtn.href = d.profile.resumePath;

    // Simulated terminal lines
    const lines = [
      `<span class="prompt">$</span> npx playwright test <span class="path">--project=chromium</span>`,
      `<span class="muted">Running 24 tests using 4 workers</span>`,
      `<span class="pass">✓</span> <span class="muted">login.spec.ts — user can sign in</span>`,
      `<span class="pass">✓</span> <span class="muted">checkout.spec.ts — cart totals match</span>`,
      `<span class="pass">✓</span> <span class="muted">api/orders.spec.ts — 200 on valid payload</span>`,
    ];
    const body = document.getElementById("terminalBody");
    lines.forEach((html, i) => {
      const el = document.createElement("div");
      el.className = "t-line";
      el.style.animationDelay = `${0.25 + i * 0.28}s`;
      el.innerHTML = html;
      body.appendChild(el);
    });
    const summary = document.createElement("div");
    summary.className = "terminal-summary t-line";
    summary.style.animationDelay = `${0.25 + lines.length * 0.28}s`;
    summary.innerHTML = `<span class="status">24 passed</span><span class="muted mono">1.8s<span class="cursor-blink"></span></span>`;
    body.appendChild(summary);
  }

  /* ------------------------------------------------------------
     ABOUT
  ------------------------------------------------------------ */
  function renderAbout() {
    const text = document.getElementById("aboutText");
    text.innerHTML = d.aboutParagraphs.map(p => `<p>${esc(p)}</p>`).join("");

    const card = document.getElementById("summaryCard");
    card.innerHTML = d.aboutSummary.map(row => `
      <div class="summary-row">
        <span class="k mono">${esc(row.label)}</span>
        <span class="v">${esc(row.value)}</span>
      </div>`).join("");
  }

  /* ------------------------------------------------------------
     SKILLS
  ------------------------------------------------------------ */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = d.skillCategories.map(cat => `
      <div class="skill-card">
        <div class="skill-card-head">
          <div class="skill-icon">${ICONS[cat.icon] || ICONS.code}</div>
          <h3>${esc(cat.category)}</h3>
        </div>
        <div class="badge-row">
          ${cat.skills.map(s => `<span class="badge">${esc(s)}</span>`).join("")}
        </div>
      </div>`).join("");
  }

  /* ------------------------------------------------------------
     PROJECTS
  ------------------------------------------------------------ */
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = d.projects.map(p => {
      const ghHref = safeHref(p.github, null);
      const demoHref = safeHref(p.demo, null);
      return `
      <article class="project-card">
        <div class="project-card-top">
          <h3>${esc(p.title)}</h3>
          <span class="project-tag">${esc(p.category || "project")}</span>
        </div>
        <p class="desc">${esc(p.description)}</p>
        ${p.features && p.features.length ? `
          <ul class="project-features">
            ${p.features.map(f => `<li>${esc(f)}</li>`).join("")}
          </ul>` : ""}
        <div class="tech-row">
          ${p.technologies.map(t => `<span class="tech-chip mono">${esc(t)}</span>`).join("")}
        </div>
        <div class="project-actions">
          ${ghHref
            ? `<a class="btn btn-secondary btn-sm" href="${esc(ghHref)}" target="_blank" rel="noopener">${ICONS.github} Code</a>`
            : `<span class="btn btn-secondary btn-sm" style="opacity:.5;cursor:default;" title="Repository link not yet added">${ICONS.github} Code</span>`}
          ${demoHref ? `<a class="btn btn-primary btn-sm" href="${esc(demoHref)}" target="_blank" rel="noopener">Live Demo</a>` : ""}
        </div>
      </article>`;
    }).join("");
  }

  /* ------------------------------------------------------------
     AUTOMATION SHOWCASE
  ------------------------------------------------------------ */
  function renderAutomation() {
    const pipeline = document.getElementById("pipeline");
    pipeline.innerHTML = d.automationPipeline.map((step, i) => `
      ${i > 0 ? `<span class="pipeline-arrow">&#8594;</span>` : ""}
      <span class="pipeline-step"><span class="num mono">0${i + 1}</span>${esc(step)}</span>
    `).join("");

    const grid = document.getElementById("automationGrid");
    grid.innerHTML = d.automationCards.map(c => `
      <div class="automation-card">
        <h4>${esc(c.title)}</h4>
        <p>${esc(c.detail)}</p>
      </div>`).join("");
  }

  /* ------------------------------------------------------------
     EXPERIENCE / TIMELINE
  ------------------------------------------------------------ */
  function renderTimeline() {
    const hasRealRole = d.careerJourney.some(item => !isPlaceholder(item.organization));
    document.getElementById("experienceEyebrow").textContent = hasRealRole ? "Experience" : "Career Journey";
    document.getElementById("experienceHeading").textContent = hasRealRole
      ? "Experience"
      : "Career Journey & Projects";

    const timeline = document.getElementById("timeline");
    timeline.innerHTML = d.careerJourney.map(item => `
      <div class="timeline-item">
        <div class="timeline-card">
          <div class="timeline-top">
            <div>
              <div class="timeline-role">${displayOrPlaceholder(item.role)}</div>
              <div class="timeline-org">${displayOrPlaceholder(item.organization)}</div>
            </div>
            <div class="timeline-duration mono">${displayOrPlaceholder(item.duration)}</div>
          </div>
          <ul class="timeline-resp">
            ${item.responsibilities.map(r => `<li>${displayOrPlaceholder(r)}</li>`).join("")}
          </ul>
          <div class="timeline-tech">
            ${item.technologies.map(t => `<span class="tech-chip mono">${esc(t)}</span>`).join("")}
          </div>
        </div>
      </div>`).join("");
  }

  /* ------------------------------------------------------------
     EDUCATION
  ------------------------------------------------------------ */
  function renderEducation() {
    const e = d.education;
    document.getElementById("educationCard").innerHTML = `
      <div class="education-icon">${ICONS.cap}</div>
      <div>
        <h3>${esc(e.degree)}</h3>
        <p class="education-meta"><strong>Institution:</strong> ${displayOrPlaceholder(e.institution)}</p>
        <p class="education-meta"><strong>Graduation year:</strong> ${displayOrPlaceholder(e.graduationYear)}</p>
        <div class="education-course-list">
          ${e.coursework.map(c => `<span class="badge">${displayOrPlaceholder(c)}</span>`).join("")}
        </div>
      </div>`;
  }

  /* ------------------------------------------------------------
     CERTIFICATIONS
  ------------------------------------------------------------ */
  function renderCertifications() {
    const grid = document.getElementById("certsGrid");
    grid.innerHTML = d.certifications.map(c => {
      const link = safeHref(c.link, null);
      return `
      <div class="cert-card">
        <div class="cert-icon">${ICONS.award}</div>
        <div>
          <h3>${esc(c.name)}</h3>
          <p class="cert-meta"><strong>${esc(c.issuer)}</strong> &middot; ${displayOrPlaceholder(c.year)}</p>
          ${link
            ? `<a class="cert-link" href="${esc(link)}" target="_blank" rel="noopener">${ICONS.link} View certificate</a>`
            : `<span class="cert-link mono" style="color:var(--amber)">Certificate link — PLACEHOLDER</span>`}
        </div>
      </div>`;
    }).join("");
  }

  /* ------------------------------------------------------------
     GITHUB
  ------------------------------------------------------------ */
  function renderGithub() {
    const profileHref = safeHref(d.github.profileUrl);
    document.getElementById("githubProfileBtn").href = profileHref;

    const grid = document.getElementById("repoGrid");
    grid.innerHTML = d.github.featuredRepos.map(r => {
      const link = safeHref(r.link, null);
      return `
      <div class="repo-card">
        <div class="repo-card-top">${ICONS.repo}<h3>${displayOrPlaceholder(r.name)}</h3></div>
        <p>${displayOrPlaceholder(r.description)}</p>
        <div class="tech-row" style="margin-bottom:14px;">
          ${r.technologies.map(t => `<span class="tech-chip mono">${displayOrPlaceholder(t)}</span>`).join("")}
        </div>
        ${link
          ? `<a class="btn btn-secondary btn-sm" href="${esc(link)}" target="_blank" rel="noopener">${ICONS.github} View repository</a>`
          : `<span class="btn btn-secondary btn-sm" style="opacity:.5;">Repository link — PLACEHOLDER</span>`}
      </div>`;
    }).join("");
  }

  /* ------------------------------------------------------------
     RESUME CTA
  ------------------------------------------------------------ */
  function renderResume() {
    document.getElementById("viewResumeBtn").href = d.profile.resumePath;
    document.getElementById("downloadResumeBtn").href = d.profile.resumePath;
  }

  /* ------------------------------------------------------------
     CONTACT + FOOTER
  ------------------------------------------------------------ */
  function renderContact() {
    const rows = [
      { icon: "mail", label: "Email", value: d.profile.email, href: isPlaceholder(d.profile.email) ? null : `mailto:${d.profile.email}` },
      { icon: "linkedin", label: "LinkedIn", value: d.profile.linkedin, href: safeHref(d.profile.linkedin, null) },
      { icon: "github", label: "GitHub", value: d.profile.github, href: safeHref(d.profile.github, null) },
    ];
    document.getElementById("contactList").innerHTML = rows.map(r => `
      <a class="contact-row" href="${r.href ? esc(r.href) : '#contact'}" ${r.href ? 'target="_blank" rel="noopener"' : ''}>
        <span class="ci">${ICONS[r.icon]}</span>
        <span>
          <span class="cl">${esc(r.label)}</span><br/>
          <span class="cv">${displayOrPlaceholder(r.value)}</span>
        </span>
      </a>`).join("");

    const footerLinks = document.getElementById("footerLinks");
    footerLinks.innerHTML = `
      <a href="${safeHref(d.profile.github)}" target="_blank" rel="noopener">GitHub</a>
      <a href="${safeHref(d.profile.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${isPlaceholder(d.profile.email) ? '#contact' : 'mailto:' + d.profile.email}">Email</a>
    `;
  }

  /* ------------------------------------------------------------
     CONTACT FORM — placeholder submission handler
     Wire this up to a real service (Formspree, EmailJS, your own
     backend, etc.) before publishing. No keys live in this file.
  ------------------------------------------------------------ */
  function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch("https://formspree.io/f/xkjnljyy", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.reset();
        status.textContent = "Thanks! Your message has been sent.";
        status.classList.add("success");
      } else {
        const data = await response.json().catch(() => ({}));
        status.textContent =
          data.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        status.classList.add("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      status.textContent =
        "Unable to send your message. Please try again.";
      status.classList.add("error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}

  /* ------------------------------------------------------------
     NAV: scroll state, mobile menu, active link, back-to-top
  ------------------------------------------------------------ */
  function initNav() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    const backToTop = document.getElementById("backToTop");

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));

    const sections = [...document.querySelectorAll("section[id]")];
    const navAnchors = [...links.querySelectorAll("a")];

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
      backToTop.classList.toggle("show", window.scrollY > 700);

      let current = sections[0]?.id;
      for (const s of sections) {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      }
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ------------------------------------------------------------
     SCROLL REVEALS
  ------------------------------------------------------------ */
  function initReveals() {
    const targets = document.querySelectorAll(".reveal, .automation-card");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("in-view"), (i % 4) * 70);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    targets.forEach(t => io.observe(t));
  }

  /* ------------------------------------------------------------
     INIT
  ------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderAutomation();
    renderTimeline();
    renderEducation();
    renderCertifications();
    renderGithub();
    renderResume();
    renderContact();
    initContactForm();
    initNav();
    initReveals();
  });
})();
