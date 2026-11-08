import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div id="home">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" className="shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">DevOps engineer · Tehran, Iran</p>
            <h1 id="hero-title">Mohammad<br />Sepehri Nia<span className="accent">.</span>
            </h1>
            <p className="hero-intro">Hands-on infrastructure.<br />Thoughtful automation.</p>
            <p className="hero-description">I work with Linux, containers, and deployment pipelines, grounded in practical experience with networks and servers.</p>
            <div className="hero-links">
              <a className="primary-link" href="mailto:ads.sepehr@gmail.com">Get in touch <span aria-hidden="true">↗</span></a><a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <figure className="profile-photo">
            <img src="/image/1.jpeg" alt="Mirror portrait of Mohammad wearing glasses and a dark shirt in an elevator" width="1024" height="1024" fetchPriority="high" />
            <figcaption>
              <span>Mohammad Sepehri Nia</span><span>Tehran, Iran</span>
            </figcaption>
          </figure>
        </section>
        <section id="about" className="section-row" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">01 / Background</p>
            <h2 id="about-title">Built on<br className="desktop-break" /> hands-on work.</h2>
          </div>
          <div className="section-body prose">
            <p>I started in Help Desk in 2018. After about two years supporting users and troubleshooting systems, I moved toward network administration and hands-on work with switches and servers.</p>
            <p>For about a year, my focus has been DevOps: working with Linux, Docker, CI/CD pipelines, monitoring, and automation. That operational background shapes how I approach reliable systems and deployment workflows.</p>
            <div className="tool-list" aria-label="Tools and areas of focus">
              <div>
                <h3>Systems &amp; networking</h3>
                <p>Linux · Switches &amp; servers · MikroTik · FortiGate</p>
              </div>
              <div>
                <h3>Containers &amp; delivery</h3>
                <p>Docker · Kubernetes · GitLab CI · GitHub Actions</p>
              </div>
              <div>
                <h3>Operations &amp; automation</h3>
                <p>Ansible · Monitoring · Backups · Proxmox</p>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="section-row" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">02 / Experience</p>
            <h2 id="experience-title">Recent roles.</h2>
          </div>
          <div className="section-body">
            <article className="experience-item">
              <p className="meta">Aug 2025 — Present</p>
              <h3>IT &amp; Infrastructure Engineer</h3>
              <p className="company">Zarrin Pal Group</p>
              <p className="muted">IT infrastructure, network operations, and system reliability.</p>
            </article>
            <article className="experience-item">
              <p className="meta">Jul 2024 — Jul 2025</p>
              <h3>Junior DevOps Engineer</h3>
              <p className="company">AMIR</p>
              <p className="muted">CI/CD pipelines, deployment workflows, and infrastructure operations.</p>
            </article>
            <a className="text-link" href="https://linkedin.com/in/mohammadsepehrinia" target="_blank" rel="noopener noreferrer">More on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section id="events" className="events-section" aria-labelledby="events-title">
          <div className="events-heading">
            <div>
              <p className="eyebrow">03 / Beyond the terminal</p>
              <h2 id="events-title">Speaking / Events</h2>
            </div>
            <p className="muted">A few moments from the room.</p>
          </div>
          <div className="event-grid">
            <figure>
              <img src="/image/2.jpeg" alt="Audience seated in an auditorium watching a speaker beside a projected slide" width="1363" height="768" loading="lazy" decoding="async" />
              <figcaption>
                <span>01</span> A view from the audience</figcaption>
            </figure>
            <figure>
              <img src="/image/3.jpeg" alt="View from behind a speaker facing a seated audience in an auditorium" width="1356" height="768" loading="lazy" decoding="async" />
              <figcaption>
                <span>02</span> A view from the stage</figcaption>
            </figure>
          </div>
        </section>
        <section id="contact" className="section-row contact-section" aria-labelledby="contact-title">
          <div className="section-heading">
            <p className="eyebrow">04 / Contact</p>
            <h2 id="contact-title">Let’s talk.</h2>
          </div>
          <div className="section-body">
            <p className="contact-intro">Have something in mind?<br />I’d be happy to hear from you.</p>
            <a className="email-link" href="mailto:ads.sepehr@gmail.com">ads.sepehr@gmail.com <span aria-hidden="true">↗</span></a>
            <div className="contact-links">
              <a href="https://linkedin.com/in/mohammadsepehrinia" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="tel:+989303042965">+98 930 304 2965</a><span>Tehran, Iran</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
