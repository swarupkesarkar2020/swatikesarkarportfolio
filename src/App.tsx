import {
  ArrowRight,
  BookOpenText,
  Brain,
  Download,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Globe,
} from 'lucide-react'
import './App.css'
import { portfolio } from './content'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Swati Kesarkar home">
          <span className="brand-mark">SK</span>
          <span>{portfolio.name}</span>
        </a>

        <nav className="nav-links">
          {portfolio.nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{portfolio.application}</p>
            <h1 id="hero-title">{portfolio.name}</h1>
            <p className="hero-line">{portfolio.headline}</p>
            <p className="hero-intro">{portfolio.intro}</p>

            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button primary" href="#marathi">
                View language strengths
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a
                className="button secondary"
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download resume
                <Download aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <figure className="hero-visual">
            <img
              src="/assets/saffron-bloom-hero.png"
              alt="Still life of Marathi learning notes, chess pieces, books, pencils, flowers, and deep green fabric"
            />
            <figcaption>
              Marathi language, classroom warmth, and chess strategy in one
              quiet frame.
            </figcaption>
          </figure>
        </section>

        <section className="credibility-strip" aria-label="Profile summary">
          {portfolio.credibility.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="script-label">About</p>
            <h2>A calm educator with a language-aware lens.</h2>
          </div>
          <div className="about-copy">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section focus-grid" aria-label="Core strengths">
          <article className="focus-card" id="teaching">
            <GraduationCap aria-hidden="true" size={24} />
            <p>{portfolio.focusAreas[0].label}</p>
            <h3>{portfolio.focusAreas[0].title}</h3>
            <span>{portfolio.focusAreas[0].body}</span>
          </article>

          <article className="focus-card" id="chess">
            <Brain aria-hidden="true" size={24} />
            <p>{portfolio.focusAreas[1].label}</p>
            <h3>{portfolio.focusAreas[1].title}</h3>
            <span>{portfolio.focusAreas[1].body}</span>
          </article>

          <article className="focus-card" id="marathi">
            <Languages aria-hidden="true" size={24} />
            <p>{portfolio.focusAreas[2].label}</p>
            <h3>{portfolio.focusAreas[2].title}</h3>
            <span>{portfolio.focusAreas[2].body}</span>
          </article>
        </section>

        <section className="section timeline-section" id="education">
          <div className="section-heading compact">
            <p className="script-label">Education</p>
            <h2>Formal Marathi study with teaching preparation.</h2>
          </div>
          <div className="timeline-list">
            {portfolio.education.map((item) => (
              <article className="timeline-row" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <span>{item.years}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section" id="experience">
          <div className="section-heading compact">
            <p className="script-label">Experience</p>
            <h2>Classroom, coaching, and customer communication.</h2>
          </div>
          <div className="timeline-list">
            {portfolio.experience.map((item) => (
              <article className="timeline-row" key={`${item.title}-${item.role}`}>
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.body}</p>
                </div>
                <span>{item.years}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section values-section">
          <div className="section-heading compact">
            <p className="script-label">Teaching Values</p>
            <h2>Clear enough for children. Precise enough for review.</h2>
          </div>
          <div className="values-list">
            {portfolio.values.map((value) => (
              <article className="value-row" key={value.title}>
                <Sparkles aria-hidden="true" size={18} />
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section highlights-section">
          <div className="section-heading compact">
            <p className="script-label">Application Notes</p>
            <h2>Verified strengths for Marathi language work.</h2>
          </div>
          <div className="highlight-panel">
            <BookOpenText aria-hidden="true" size={24} />
            <ul>
              {portfolio.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="script-label">Contact</p>
            <h2>For resume links, references, and application follow-up.</h2>
          </div>

          <address className="contact-list">
            <a href={`mailto:${portfolio.contact.email}`}>
              <Mail aria-hidden="true" size={18} />
              {portfolio.contact.email}
            </a>
            <a href={`tel:${portfolio.contact.phone.replace(/[^+\d]/g, '')}`}>
              <Phone aria-hidden="true" size={18} />
              {portfolio.contact.phone}
            </a>
            <span>
              <MapPin aria-hidden="true" size={18} />
              {portfolio.location}
            </span>
            <span>
              <Globe aria-hidden="true" size={18} />
              {portfolio.contact.website}
            </span>
          </address>
        </section>
      </main>
    </div>
  )
}

export default App
