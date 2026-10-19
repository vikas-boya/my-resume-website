"use client";

import { useState } from "react";
import {
  Mail, CalendarDays, MapPin, Linkedin, Github, Globe,
  FileText, Code2, Database, Cloud, Palette, BrainCircuit,
  ExternalLink, Menu, X, ArrowUpRight
} from "lucide-react";

const services = [
  { icon: Database, title: "Data & Databases", text: "Organizing information and turning data into useful insights." },
  { icon: BrainCircuit, title: "Cloud & AI", text: "Exploring cloud platforms and practical AI-powered solutions." },
  { icon: Palette, title: "Web Design", text: "Clean, thoughtful interfaces that are easy to use." },
  { icon: Code2, title: "Web Development", text: "Building responsive websites with modern web technologies." },
];

const skills = ["Next.js", "React", "JavaScript", "HTML & CSS", "SQL", "AWS", "Git & GitHub", "Figma"];

export default function Home() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["About", "Resume", "Projects", "Contact"];
  const goTo = (section: string) => {
    setActive(section);
    setMenuOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="site-shell">
      <aside className="profile-card">
        <div className="avatar-ring">
          <div className="avatar-placeholder">VB</div>
        </div>
        <h1>Vikas Boya</h1>
        <p className="role-pill">Web Developer • Cloud Enthusiast</p>
        <div className="side-divider" />
        <div className="contact-item">
          <span className="contact-icon"><Mail size={18} /></span>
          <div><small>EMAIL</small><a href="mailto:your.email@example.com">vikas.boya@gmail.com</a></div>
        </div>
        <div className="contact-item">
          <span className="contact-icon"><CalendarDays size={18} /></span>
          <div><small>DATE OF BIRTH</small><span>05-01-2005</span></div>
        </div>
        <div className="contact-item">
          <span className="contact-icon"><MapPin size={18} /></span>
          <div><small>LOCATION</small><span>Hyderabad,India</span></div>
        </div>
        <div className="side-divider" />
        <div className="socials">
          <a href="https://www.linkedin.com/in/vikas-boya-a4831434b/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a href="https://github.com/vikas-boya" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>

        </div>
        <a className="publication-link" href="#projects" onClick={() => setActive("Projects")}>Featured Projects</a>
      </aside>

      <section className="content-card">
        <header className="top-nav">
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {sections.map((section) => (
              <button key={section} className={active === section ? "nav-link active" : "nav-link"} onClick={() => goTo(section)}>
                {section}
              </button>
            ))}
          </nav>
        </header>

        <section id="about" className="page-section">
          <SectionTitle title="About Me" />
          <p className="intro">
            👋 Hi, I’m <strong>Vikas Boya</strong> — an aspiring technology professional interested in web development,
            databases, and cloud computing. I enjoy learning new tools and turning ideas into practical,
            easy-to-use digital experiences. I’m currently building my skills with React, Next.js, SQL,
            and AWS, and looking forward to contributing to meaningful projects. 🚀
          </p>
          <h2 className="subheading">What I’m Doing</h2>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="service-icon"><Icon size={30}/></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

       <section id="resume" className="page-section">
          <SectionTitle title="Resume" />
          <h2 className="subheading">Education</h2>
          <article className="timeline-card">
            <span className="timeline-dot" />
            <h3>BCA</h3>
            <p className="muted">Pragnya Degree College • 2023-2026</p> 
          </article>
          <h2 className="subheading">Skills</h2>
          <div className="skill-list">{skills.map(skill => <span key={skill} className="skill-chip">{skill}</span>)}</div>
          <h2 className="subheading">Certifications</h2>
          <article className="timeline-card">
            <span className="timeline-dot" />
            <h3>AWS Cloud Practitioner</h3>
            <p className="muted">Amazon Web Services • 2026</p>
          </article>
        </section>

       

        <section id="projects" className="page-section">
          <SectionTitle title="Projects" />
          <div className="project-grid">
            <article className="project-card">
              <div className="project-art"><Code2 size={34}/></div>
              <div className="project-body"><span className="eyebrow"></span><h3>Online interface providing potable supply information platform </h3><p>Developed a JAVA based desktop application that provides information about local water supply</p></div>
            </article>
          </div>
        </section>

        <section id="contact" className="page-section">
          <SectionTitle title="Contact" />

          <form className="contact-form" action="mailto:your.email@example.com" method="post" encType="text/plain">
            <label>Your name<input name="name" placeholder="Enter your name" required /></label>
            <label>Your email<input name="email" type="email" placeholder="Enter your email" required /></label>
            <label>Message<textarea name="message" placeholder="Write your message..." rows={4} required /></label>
            <button className="primary-button" type="submit">Send message <ExternalLink size={16}/></button>
            <p className="form-note"></p>
          </form>
        </section>
      </section>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <div className="section-title"><h2>{title}</h2><span /></div>;
}
