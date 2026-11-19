const projects = [
  {
    index: "01",
    category: "Full-Stack · Microservices",
    title: "Salon Management System",
    description: "A complete business management platform for salon operations and bookings, built with an independently deployable Java microservices architecture.",
    tags: ["Java", "Spring Boot", "React", "MongoDB", "Oracle DB"],
    link: "https://github.com/navodj/saloon-services",
  },
  {
    index: "02",
    category: "Mobile · Travel Tech",
    title: "CeylonTraveler",
    description: "An intelligent route generator for Sri Lanka with dynamic daily planning, real-time persistence, and complex routing powered by OpenRouteService.",
    tags: ["React Native", "Expo", "Python", "FastAPI", "Supabase"],
    link: "https://github.com/navodj/ceylon-traveler",
  },
  {
    index: "03",
    category: "IoT · Smart Systems",
    title: "SmartLetterBox",
    description: "A low-cost ESP32 package security system using sensors, automated locking, Firebase, and real-time mobile notifications.",
    tags: ["ESP32", "Firebase", "IoT", "Sensors"],
    link: "https://github.com/navodj/smart-mailbox-dashboard",
  },
  {
    index: "04",
    category: "Mobile · Education",
    title: "Tuition Management",
    description: "A native Android platform for tuition operations with real-time Firestore data and QR-based attendance using ZXing.",
    tags: ["Android", "Java", "Firebase", "QR"],
    link: "https://github.com/navodj/tuition-managment-app",
  },
];

const skills = [
  "Java", "Spring Boot", "Python", "FastAPI", "React", "React Native",
  "JavaScript", "HTML", "CSS", "PHP", "C", "C#", "MySQL", "MongoDB",
  "Oracle DB", "Supabase", "Firebase", "REST API", "Git", "GitHub",
  "Android SDK", "Microservices", "IoT", "Figma", "Postman",
];

const education = [
  {
    period: "NOV 2023 — NOV 2025",
    degree: "BSc (Hons) Computer Science",
    detail: "Applied Artificial Intelligence · Coventry University UK",
  },
  {
    period: "NOV 2024 — NOV 2025",
    degree: "Higher National Diploma",
    detail: "Software Engineering · NIBM, Colombo 07",
  },
  {
    period: "NOV 2023 — NOV 2024",
    degree: "Diploma in Software Engineering",
    detail: "NIBM, Colombo 07",
  },
];

const certifications = [
  "Java Foundation & Fundamentals — Oracle Academy",
  "Database Foundations, Design & SQL — Oracle Academy",
  "Artificial Intelligence with Machine Learning in Java — Oracle Academy",
  "Python for Beginners — University of Moratuwa",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Navod Jayawardhana, home">
          <span>NJ</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </div>
        <a className="nav-cta" href="mailto:jayawardananavodlk@gmail.com">Let&apos;s talk <ArrowIcon /></a>
      </nav>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Available for opportunities</p>
            <h1>Navod<br /><em>Jayawardhana</em></h1>
            <p className="hero-role">Software Developer <span>— Intern</span></p>
            <p className="hero-summary">
              I build scalable web and mobile experiences with a strong focus on clean architecture,
              reliable systems, and practical problem-solving.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">Explore my work <ArrowIcon /></a>
              <a className="text-button" href="/my-cv.pdf" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>
            </div>
          </div>

          <div className="hero-card" aria-label="Profile summary">
            <div className="orb"><span>NJ</span></div>
            <div className="coordinate">6.9271° N · 79.8612° E</div>
          </div>
        </section>

        <section className="marquee" aria-label="Areas of expertise">
          <div>
            <span>FULL-STACK DEVELOPMENT</span><b>✦</b><span>MOBILE APPLICATIONS</span><b>✦</b>
            <span>MICROSERVICES</span><b>✦</b><span>IOT SOLUTIONS</span><b>✦</b>
            <span>ARTIFICIAL INTELLIGENCE</span><b>✦</b>
          </div>
        </section>

        <section className="section-shell content-section" id="projects">
          <header className="section-heading">
            <div><p className="section-number">01 / Selected work</p><h2>Projects</h2></div>
            <p>Built with purpose.<br />Designed to scale.</p>
          </header>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>{project.index}</span>
                  <p>{project.category}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowIcon /></a>
                </div>
                <div className="project-visual">
                  <div className={`mockup mockup-${project.index}`}>
                    <span className="mockup-dots">• • •</span>
                    <div className="mockup-window">
                      <b>{project.title}</b>
                      <i /><i /><i />
                    </div>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="skills">
          <header className="section-heading">
            <div><p className="section-number">02 / Capabilities</p><h2>Technical skills</h2></div>
            <p>Tools that turn<br />ideas into systems.</p>
          </header>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill" key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</div>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="education">
          <header className="section-heading">
            <div><p className="section-number">03 / Journey</p><h2>Education</h2></div>
            <p>Learning by building.<br />Growing with purpose.</p>
          </header>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.degree}>
                <p>{item.period}</p>
                <div><h3>{item.degree}</h3><span>{item.detail}</span></div>
                <b>↗</b>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section certifications-section">
          <header className="section-heading">
            <div><p className="section-number">04 / Continuous learning</p><h2>Certifications</h2></div>
          </header>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <article key={cert}><span>{String(index + 1).padStart(2, "0")}</span><p>{cert}</p><b>✓</b></article>
            ))}
          </div>
        </section>

        <section className="contact section-shell">
          <p className="section-number">05 / Get in touch</p>
          <h2>Have a project<br />in <em>mind?</em></h2>
          <a href="mailto:jayawardananavodlk@gmail.com">jayawardananavodlk@gmail.com <ArrowIcon /></a>
        </section>
      </main>

      <footer>
        <p>© 2026 Navod Jayawardhana</p>
        <div>
          <a href="https://github.com/navodj" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jayawardana/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:jayawardananavodlk@gmail.com">Email</a>
        </div>
      </footer>
    </>
  );
}