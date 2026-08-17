import { useEffect, useState } from "react";
import "./App.css";

const contactEmail = "techeclatsolutions@gmail.com";

const founders = ["Abyson Jose", "Abhijith M Nair", "Jojo Manuel P"];

const presence = [
  {
    label: "Email",
    href: `mailto:${contactEmail}`,
    value: contactEmail,
  },
];

const projects = [
  {
    client: "Holy Family Polymers",
    title: "ERP System",
    detail:
      "Enterprise resource planning for a leading rubber-based product manufacturer in Kerala—covering core operations across production, inventory, and reporting.",
    url: "https://hfp-erp-system.vercel.app",
  },
  {
    client: "Dharani Krishi PVT LTD",
    title: "Automated Crop Monitoring with Irrigation",
    detail:
      "Cloud and edge computing platform with AI assistance for crop monitoring and automated irrigation.",
  },
  {
    client: "Dharani Farm and Home Stay",
    title: "Booking Website",
    detail:
      "Online booking website for farm stay reservations and guest management near Badami, Karnataka.",
    url: "https://dharanifarmandhomestay.in/",
  },
  {
    client: "Yuvadeepti SMYM Kooroppada",
    title: "Youth Directory & Survey",
    detail:
      "Member directory and survey platform with searchable records, custom questions, filters, and administrative controls.",
    url: "https://youth-survey-delta.vercel.app",
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
        <div className="container nav__row">
          <a className="nav__logo" href="#top" onClick={closeMenu}>
            EclatTech
          </a>

          <button
            className={`nav__burger ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav className={`nav__menu ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
            <a href="#company" onClick={closeMenu}>
              Profile
            </a>
            <a href="#founders" onClick={closeMenu}>
              Founders
            </a>
            <a href="#work" onClick={closeMenu}>
              Portfolio
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2400&q=80"
              alt=""
            />
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="container hero__copy">
            <p className="hero__name">EclatTech Technologies</p>
            <h1 className="hero__line">
              Software systems for manufacturing, agriculture, and hospitality.
            </h1>
            <a className="text-link text-link--on-dark" href="#work">
              View portfolio
            </a>
          </div>
        </section>

        <section id="company" className="block company">
          <div className="container company__layout">
            <h2 className="block__title">Company profile</h2>
            <div className="company__text">
              <p>
                EclatTech Technologies is a software firm based in Kerala. We design and deliver
                operational systems—enterprise platforms, field monitoring solutions, and customer-facing
                web applications.
              </p>
              <p>
                Our work is built around the realities of the businesses we serve: factories that need
                reliable process software, farms that need connected monitoring, and properties that need
                straightforward booking.
              </p>
              <dl className="profile__facts">
                <div>
                  <dt>Company</dt>
                  <dd>EclatTech Technologies</dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>Kerala, India</dd>
                </div>
                <div>
                  <dt>Contact</dt>
                  <dd>
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="founders" className="block founders">
          <div className="container">
            <h2 className="block__title">Founders</h2>
            <ul className="founders__grid">
              {founders.map((name) => (
                <li key={name}>
                  <p className="founders__name">{name}</p>
                  <p className="founders__role">Co-Founder</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="block work">
          <div className="container">
            <h2 className="block__title">Portfolio / Previous work</h2>
            <ul className="work__list">
              {projects.map((project) => (
                <li key={project.client} className="work__item">
                  <div className="work__head">
                    <h3 className="work__client">{project.client}</h3>
                    <p className="work__title">{project.title}</p>
                    {project.url && (
                      <a
                        className="work__url"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {new URL(project.url).hostname.replace(/^www\./, "")}
                      </a>
                    )}
                  </div>
                  <p className="work__detail">{project.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="block contact">
          <div className="container contact__layout">
            <h2 className="block__title">Contact</h2>
            <div className="contact__body">
              <div>
                <h3 className="contact__heading">Contact details</h3>
                <p className="contact__text">
                  For project enquiries, reach the team by email.
                </p>
                <a className="text-link" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </div>
              <div>
                <h3 className="contact__heading">Website &amp; social</h3>
                <p className="contact__text">
                  This site is the public profile for ÉclatTech Technologies. The team can also be
                  reached by email.
                </p>
                <ul className="presence">
                  {presence.map((item) => (
                    <li key={item.label}>
                      <span>{item.label}</span>
                      <a href={item.href}>{item.value}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__row">
          <p>ÉclatTech Technologies</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
