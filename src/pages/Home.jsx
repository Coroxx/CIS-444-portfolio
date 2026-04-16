import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile, projects, skills, timeline } from '../data.js';

function Home() {
  const [selectedSkill, setSelectedSkill] = useState('All');

  const visibleProjects =
    selectedSkill === 'All'
      ? projects
      : projects.filter((project) => project.stack.includes(selectedSkill));

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">React portfolio for CIS 444</p>
          <h1>{profile.name}</h1>
          <p className="hero-subtitle">{profile.title}</p>
          <p className="hero-copy">{profile.intro}</p>

          <div className="hero-actions" aria-label="Profile actions">
            <a className="button primary" href="#projects">
              View projects
            </a>
            <a className="button secondary" href="#contact">
              Contact me
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Profile highlights">
          <div>
            <span className="metric-label">Current role</span>
            <span className="metric">Founder at Homii</span>
          </div>
          <div>
            <span className="metric-label">Education</span>
            <span className="metric">EPITECH + CSUSM</span>
          </div>
          <div>
            <span className="metric-label">Focus</span>
            <span className="metric">React, Node.js, Laravel</span>
          </div>
        </aside>
      </section>

      <section id="about" className="section split-section">
        <SectionHeading eyebrow="About" title="Developer with a product mindset">
          I combine engineering, entrepreneurship, and international study experience to build
          software that is useful, clear, and ready for real users.
        </SectionHeading>

        <div className="about-card">
          <p>
            I am currently studying computer science at EPITECH and spending an exchange year
            at California State University San Marcos. My work spans full-stack web development,
            API design, e-commerce, and automation.
          </p>
          <p>
            Through Homii, RG System, and Anchor Paris, I have learned to connect technical
            decisions with business needs: clean interfaces, reliable backend logic, and workflows
            that save time.
          </p>
        </div>
      </section>

      <section className="section skills-section" aria-label="Skills">
        <button
          className={selectedSkill === 'All' ? 'skill active' : 'skill'}
          type="button"
          onClick={() => setSelectedSkill('All')}
        >
          All
        </button>
        {skills.map((skill) => (
          <button
            className={selectedSkill === skill ? 'skill active' : 'skill'}
            key={skill}
            type="button"
            onClick={() => setSelectedSkill(skill)}
          >
            {skill}
          </button>
        ))}
      </section>

      <section id="projects" className="section">
        <SectionHeading eyebrow="Projects" title="Selected work">
          Filter the project cards by skill to see how each experience connects to my technical
          and product background.
        </SectionHeading>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <SectionHeading eyebrow="Experience" title="Current path" />
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.organization}`}>
              <p className="eyebrow">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="organization">{item.organization}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <SectionHeading eyebrow="Contact" title="Let us build something useful" />
        <div className="contact-grid">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <span>{profile.location}</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
