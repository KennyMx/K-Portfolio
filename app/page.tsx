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
  GitBranch,
  Network,
} from 'lucide-react';

const experience = [
  {
    role: 'Student Software Engineer',
    company: 'Develop for Good',
    date: 'May — Aug 2026',
    text: 'Built a multi-vendor marketplace with Next.js and PostgreSQL, helping community vendors support elderly care programs.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Lillup',
    date: 'Jan — Apr 2026',
    text: 'Made text-to-speech experiments 40% faster and reduced manual validation by 60% with parallel Python pipelines and precision-aware testing.',
  },
  {
    role: 'Machine Learning Research Assistant',
    company: 'Simon Fraser University',
    date: 'Jan — Apr 2026',
    text: 'Built computer vision pipelines with YOLO, MediaPipe, and OpenCV. Achieved 0.03 px reprojection error in camera calibration.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Deepiri',
    date: 'Sep — Dec 2025',
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
          {['Work', 'Experience', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenu(false)}
            >
              {item}
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
              <span className="little-star">✦</span> SOFTWARE ENGINEER & CURIOUS
              BUILDER
            </p>
            <h1 id="hero-title">
              Hi, I’m Kenny.
              <br />I build with
              <br />
              <em>purpose.</em>
            </h1>
            <p className="hero-description">
              Thoughtful software. Real-world impact.
              <br />
              Exploring the space between backend systems,
              <br className="desktop-break" /> intelligent tools, and the people
              who use them.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
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
          <div className="hero-caption">
            <span /> A little curiosity goes a long way.
          </div>
        </section>
        <div className="intro-strip">
          <span>BASED IN BURNABY, BC</span>
          <span className="strip-center">
            Computer Science @ Simon Fraser University
          </span>
          <a href="https://github.com/kennyMx" target="_blank" rel="noreferrer">
            Find me on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
        <section id="work" className="section work-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                From curiosity to <em>creation.</em>
              </h2>
            </div>
            <p>
              A few things I’ve built to make
              <br />
              complex problems a little simpler.
            </p>
          </div>
          <div className="projects">
            <article className="project reveal">
              <div className="project-visual blame-visual" aria-hidden="true">
                <div className="visual-label">
                  <GitBranch size={15} /> CONTEXT, BEYOND THE COMMIT
                </div>
                <div className="code-window">
                  <div className="window-dots">
                    <i />
                    <i />
                    <i />
                    <span>why this line?</span>
                  </div>
                  <div className="code-line">
                    <span>24</span> <b>const</b> context = <b>await</b>{' '}
                    retrieve(code);
                  </div>
                  <div className="context-answer">
                    <Sparkles size={17} />
                    <div>
                      Every line has a story.
                      <small>Code → commits → the reasoning behind it</small>
                    </div>
                  </div>
                  <div className="commit-line">
                    <span /> commit history <i /> engineering context
                  </div>
                </div>
                <span className="visual-orbit" />
              </div>
              <div className="project-body">
                <span className="project-number">01 / DEVELOPER TOOLS</span>
                <h3>Semantic Git Blame</h3>
                <p>
                  Find the “why” behind the code. Semantic search connects code
                  to commits, pull requests, and engineering discussions—with
                  sourced, LLM-generated explanations.
                </p>
                <div className="tags">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                  <span>pgvector</span>
                </div>
              </div>
            </article>
            <article className="project reveal">
              <div className="project-visual gateway-visual" aria-hidden="true">
                <div className="visual-label">
                  <Network size={15} /> ONE INTERFACE. MORE POSSIBILITIES.
                </div>
                <div className="gateway-diagram">
                  <div className="gateway-node">Your app</div>
                  <span className="connector" />
                  <div className="gateway-core">
                    ✦<small>LLM Gateway</small>
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
                <h3>LLM API Gateway</h3>
                <p>
                  One dependable interface for multiple AI providers. A
                  self-hosted gateway with model routing, per-key rate limits,
                  live cost tracking, and automatic provider fallback.
                </p>
                <div className="tags">
                  <span>Go</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                  <span>Docker</span>
                </div>
              </div>
            </article>
          </div>
          <a
            className="text-link work-link"
            href="https://github.com/kennyMx"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <ArrowUpRight size={17} />
          </a>
        </section>
        <section id="experience" className="section experience-section">
          <div className="experience-intro reveal">
            <p className="eyebrow">02 / ALONG THE WAY</p>
            <h2>
              Learning by
              <br />
              <em>building.</em>
            </h2>
            <p>
              Working with teams, asking better questions, and turning ideas
              into software that helps.
            </p>
            <a
              className="text-link"
              href="/kenny-mustapha-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View full résumé <ArrowUpRight size={17} />
            </a>
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
        <section id="about" className="section about-section">
          <div className="about-art reveal">
            <img
              src="/images/starry-landscape.webp"
              alt="Painterly blue mountains and golden light reflected across a quiet lake"
              loading="lazy"
            />
            <span>A curious mind. An open horizon.</span>
          </div>
          <div className="about-content reveal">
            <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
            <h2>
              Grounded in code.
              <br />
              <em>Driven by curiosity.</em>
            </h2>
            <p>
              I’m Kenny Mustapha, a Computer Science student at Simon Fraser
              University, graduating in May 2028.
            </p>
            <p>
              My work spans backend engineering, applied machine learning, and
              tools for developers. I enjoy understanding how things work—and
              finding ways to make them more useful, reliable, and accessible.
            </p>
            <div className="toolbox">
              <h3>Things I work with</h3>
              <div className="tags">
                <span>Python</span>
                <span>TypeScript</span>
                <span>Go</span>
                <span>React / Next.js</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
                <span>PyTorch</span>
                <span>Docker</span>
              </div>
            </div>
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
