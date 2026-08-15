# Hafis Sabeer — Portfolio

A static, dependency-free portfolio site. No build step required — open `index.html`
in a browser, or deploy the folder as-is to any static host (GitHub Pages, Netlify, Vercel, etc.).

## Structure

```
index.html          Page markup / section skeletons
assets/styles.css    All styling (design tokens live at the top of the file)
assets/data.js        ALL editable content — projects, skills, timeline, certs, links
assets/script.js       Renders the page from data.js + handles nav/scroll/form behavior
```

## Making updates

You should only ever need to edit **`assets/data.js`**. Everything on the page —
projects, skills, certifications, the timeline, contact links — is generated from
that file at load time.

Anything marked `"PLACEHOLDER — ..."` in `data.js` is a spot you should fill in
before sharing the site with recruiters:

- `profile.email`, `profile.github`, `profile.linkedin`, `profile.location`
- `education.institution`, `education.graduationYear`, `education.coursework`
- `certifications[].year`, `certifications[].link`
- `projects[].github` (and `.demo` if you have a live URL)
- `github.profileUrl` and `github.featuredRepos`
- `careerJourney` — add a real role by pushing a new object with the same shape,
  or delete the placeholder entry if you'd rather keep the page project-only

## Resume

Drop your resume PDF at `resume/Hafis-Sabeer-Resume.pdf` relative to the site root
(create the `resume/` folder). The path is configurable in `data.js` via
`profile.resumePath` if you want to rename it.

## Contact form

The contact form currently uses a placeholder handler (`initContactForm` in
`script.js`) that just confirms the message was captured — it does not send
anything anywhere, and no API keys are stored in the code. Before publishing,
wire it up to a form service such as Formspree or EmailJS, or your own backend
endpoint.

## Adding a project, certification, or repository

Open `assets/data.js` and push a new object into the relevant array
(`projects`, `certifications`, or `github.featuredRepos`) — the page picks it up
automatically, no HTML or CSS changes needed.
