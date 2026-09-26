'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Menu,
  X,
  Download,
  Sparkles,
  Network,
} from 'lucide-react';

const experience = [
  {
    role: 'Student Software Engineer',
    company: 'Develop for Good',
    date: 'May - Aug 2026',
    text: 'Built a multi-vendor marketplace with Next.js and PostgreSQL, helping community vendors support elderly care programs.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Lillup',
    date: 'Jan - Apr 2026',
    text: 'Integrated speech-generation components and data conversion between model stages to enable audio generation. Parallelized Python benchmarks to reduce experiment turnaround by approximately 15%, and automated precision comparisons to reduce manual validation by approximately 20%.',
  },
  {
    role: 'Machine Learning Research Assistant',
    company: 'Simon Fraser University',
    date: 'Jan - Apr 2026',
    text: 'Built a Python pipeline using YOLOv8, OpenCV camera calibration, and pinhole geometry to estimate object distance from monocular images. Benchmarked estimates against physical measurements, analyzed error sources, and served structured results through FastAPI for reproducible experiments.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Deepiri',
    date: 'Sep - Dec 2025',
    text: 'Improved backend performance with Redis caching and connection pooling, reducing repeated database queries by approximately 30%.',
  },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <a className="wordmark" href="#" aria-label="Kenny, home">
          kenny<span>✦</span>
        </a>
        <nav
          className={menu ? 'navigation open' : 'navigation'}
          aria-label="Main navigation"
        >
          {[
            { label: 'Experience', href: '#experience' },
            { label: 'Projects', href: '#work' },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenu(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenu(false)}
          >
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menu ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div
            className="hero-art"
            role="img"
            aria-label="A blue-robed traveler overlooking a lake beneath a swirling blue and golden starry sky"
          />
          <div className="hero-wash" />
          <div className="hero-content">
            <p className="eyebrow">
              <span className="little-star">✦</span> SOFTWARE ENGINEER
            </p>
            <h1 id="hero-title">
              Hi, I’m Kenny
              <br />
              <em>Mustapha.</em>
            </h1>
            <p className="hero-description">
              Studying Computer Science at Simon Fraser University.
              <br />
              B.Sc. expected December 2027.
              <br />I like building useful applications.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="text-link"
                href="/kenny-mustapha-resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Résumé <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <div className="intro-strip">
          <span>BASED IN BURNABY, BC</span>
          <span className="strip-center">
            B.Sc. Computer Science · SFU · December 2027
          </span>
          <a href="mailto:kom2@sfu.ca">
            Get in touch <ArrowUpRight size={15} />
          </a>
        </div>
        <section id="experience" className="section experience-section">
          <div className="experience-intro reveal">
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="experience-item reveal" key={item.company}>
                <span className="timeline-dot" />
                <div className="experience-meta">
                  <span>{item.company}</span>
                  <time>{item.date}</time>
                </div>
                <h3>{item.role}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="work" className="section work-section">
          <div className="section-heading reveal">
            <h2>Projects</h2>
          </div>
          <div className="projects">
            <article className="project reveal">
              <div className="project-visual fly-visual" aria-hidden="true">
                <div className="visual-label">
                  <Network size={15} /> FLY FOUR
                </div>
                <div className="fly-board">
                  {Array.from({ length: 42 }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index >= 28 && [29, 31, 35, 37, 39].includes(index)
                          ? 'piece-gold'
                          : [23, 30, 36, 38, 40].includes(index)
                            ? 'piece-blue'
                            : ''
                      }
                    />
                  ))}
                </div>
                <div className="fly-caption">
                  166,700 neurons · one game board
                </div>
              </div>
              <div className="project-body">
                <span className="project-number">01 / APPLIED ML</span>
                <h3>Fly Four</h3>
                <p>
                  Connect Four against a trained model that reads activity from
                  a simulated fruit-fly connectome. Real neural wiring powers
                  the simulation, with a live visualization of neuron activity.
                </p>
                <div className="tags">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>React</span>
                  <span>Machine learning</span>
                </div>
                <a
                  className="project-link"
                  href="https://github.com/KennyMx/FlyFour"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Fly Four on GitHub"
                >
                  View on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
            <article className="project reveal">
              <div className="project-visual gateway-visual" aria-hidden="true">
                <div className="visual-label">
                  <Network size={15} /> RELAY
                </div>
                <div className="gateway-diagram">
                  <div className="gateway-node">Your app</div>
                  <span className="connector" />
                  <div className="gateway-core">
                    ✦<small>Relay</small>
                  </div>
                  <div className="provider-lines">
                    <span>OpenAI</span>
                    <span>Anthropic</span>
                    <span>Cohere</span>
                  </div>
                </div>
                <div className="gateway-footnote">
                  <span /> Intelligent routing <span /> Built-in resilience
                </div>
              </div>
              <div className="project-body">
                <span className="project-number">02 / INFRASTRUCTURE</span>
                <h3>Relay</h3>
                <p>
                  A Go toolkit for routing AI tasks and tracking actual token
                  usage. Includes a native Codex launcher and a self-hosted API
                  gateway with rate limits, cost tracking, and provider
                  fallback.
                </p>
                <div className="tags">
                  <span>Go</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                  <span>Docker</span>
                </div>
                <a
                  className="project-link"
                  href="https://github.com/KennyMx/Relay"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Relay on GitHub"
                >
                  View on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
            <article className="project reveal">
              <div className="project-visual intake-visual" aria-hidden="true">
                <div className="visual-label">
                  <Sparkles size={15} /> CLEARER INTAKE, LESS ADMIN
                </div>
                <div className="intake-card">
                  <span className="intake-mark">✦</span>
                  <div>
                    <small>Patient intake</small>
                    <strong>
                      Simple questions.
                      <br />
                      Useful summaries.
                    </strong>
                  </div>
                </div>
                <div className="intake-flow">
                  <span>Patient</span>
                  <i /> <span>IntakeIQ</span>
                  <i /> <span>Clinic</span>
                </div>
              </div>
              <div className="project-body">
                <span className="project-number">03 / HEALTHCARE</span>
                <h3>IntakeIQ</h3>
                <p>
                  An AI-powered patient intake and triage platform for clinics.
                  Built with TypeScript and Python on AWS, with asynchronous
                  processing and Redis caching that reduced processing latency
                  by 40%.
                </p>
                <div className="tags">
                  <span>TypeScript</span>
                  <span>Python</span>
                  <span>AWS</span>
                  <span>Redis</span>
                  <span>Kubernetes</span>
                </div>
                <a
                  className="project-link"
                  href="https://intake-iq.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit IntakeIQ"
                >
                  Visit IntakeIQ <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
            <article className="project reveal">
              <div
                className="project-visual midpoint-visual"
                aria-hidden="true"
              >
                <div className="visual-label">
                  <Network size={15} /> MEET IN THE MIDDLE
                </div>
                <div className="map-card">
                  <span className="route route-one" />
                  <span className="route route-two" />
                  <i className="friend-pin pin-one">A</i>
                  <i className="friend-pin pin-two">B</i>
                  <span className="midpoint-pin">
                    ✦<small>Midpoint</small>
                  </span>
                </div>
                <div className="gateway-footnote">
                  <span /> Fair travel time <span /> Better places to meet
                </div>
              </div>
              <div className="project-body">
                <span className="project-number">04 / GEOSPATIAL</span>
                <h3>Midpoint</h3>
                <p>
                  A geospatial application that helps friends find an optimal
                  place to meet based on where everyone is starting from.
                </p>
                <div className="tags">
                  <span>Geospatial</span>
                  <span>Location search</span>
                  <span>Meetups</span>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="contact" className="contact-section reveal">
          <span className="contact-star">✦</span>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>
            Let’s build something
            <br />
            <em>meaningful.</em>
          </h2>
          <p>
            An opportunity, an idea, or just a hello.
            <br />
            I’d love to hear from you.
          </p>
          <a className="button primary" href="mailto:kom2@sfu.ca">
            Say hello <ArrowUpRight size={18} />
          </a>
          <a className="email-link" href="mailto:kom2@sfu.ca">
            kom2@sfu.ca
          </a>
        </section>
      </main>
      <footer>
        <a className="wordmark" href="#">
          kenny<span>✦</span>
        </a>
        <p>© {new Date().getFullYear()} Kenny Mustapha</p>
        <div>
          <a
            href="https://github.com/kennyMx"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span className="social-label">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kenny-mustapha-4692112a2/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="social-label">LinkedIn</span>
          </a>
          <a href="mailto:kom2@sfu.ca" aria-label="Email Kenny">
            <Mail size={19} />
          </a>
          <a
            href="/kenny-mustapha-resume.pdf"
            download
            aria-label="Download résumé"
          >
            <Download size={19} />
          </a>
        </div>
      </footer>
    </>
  );
}
