import { useState, type FormEvent, type ReactElement } from "react";
import portrait from "../pic/Phala.png";
import logo from "../pic/logo.png";
import catPhoto from "../pic/catPhoto.jpg";
import cafePhoto from "../pic/coffeePhoto2.png";

type Page = "home" | "about" | "work" | "services" | "skills" | "contact";

const navigation: { label: string; href: string; page: Page }[] = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "About", href: "about.html", page: "about" },
  { label: "Skills", href: "skills.html", page: "skills" },
  { label: "My work", href: "myWork.html", page: "work" },
  { label: "Services", href: "quotes.html", page: "services" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

const pageTitles: Record<Page, string> = {
  home: "Home",
  about: "About",
  work: "My work",
  services: "Services",
  skills: "Skills",
  contact: "Contact",
};

function currentPage(): Page {
  const filename = window.location.pathname.split("/").pop()?.toLowerCase();
  switch (filename) {
    case "about.html":
      return "about";
    case "mywork.html":
      return "work";
    case "quotes.html":
      return "services";
    case "skills.html":
      return "skills";
    case "contact.html":
      return "contact";
    default:
      return "home";
  }
}

function Header({ page }: { page: Page }) {
  return (
    <header className="site-header">
      <a className="brand" href="index.html" aria-label="Busisa's Portfolio home">
        <img src={logo} alt="" />
        <span>Busisa<span className="brand-accent">.</span></span>
      </a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.page}
            href={item.href}
            aria-current={page === item.page ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <section className="hero page-width">
      <div className="hero-copy">
        <p className="eyebrow">Technical support · Network engineering</p>
        <h1>
          Hi, I’m <span>Jan.</span>
        </h1>
        <p className="hero-intro">
          I’m a technical support professional and qualified network engineer.
          I enjoy solving problems and helping people get the most from their
          technology.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="contact.html">Get in touch</a>
          <a className="text-link" href="about.html">More about me <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="portrait-frame">
        <img className="portrait" src={portrait} alt="Portrait of Jan" />
        <span className="portrait-note">Always learning, always building.</span>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page-width content-page">
      <p className="eyebrow">A little about me</p>
      <h1>Education &amp; experience</h1>
      <div className="content-grid">
        <article className="content-card">
          <h2>Education</h2>
          <ul className="detail-list">
            <li><strong>Tshwane University of Technology</strong></li>
            <li>NDIKF1: Communication Networks</li>
            <li>NQF Level 6</li>
            <li>2024</li>
          </ul>
        </article>
        <article className="content-card">
          <h2>What I’ve learned</h2>
          <p>During my time at Tshwane University of Technology, I developed knowledge in:</p>
          <ul className="tag-list">
            <li>C++</li>
            <li>Java</li>
            <li>Cisco Packet Tracer</li>
          </ul>
        </article>
        <article className="content-card content-card-wide">
          <h2>Additional experience</h2>
          <p>
            I’m a former intern at Adcock Ingram Pharmaceutical Company, where
            I trained as a Systems Engineer and supported day-to-day IT
            operations.
          </p>
          <ul className="tag-list">
            <li>Service desk operations</li>
            <li>End-user support</li>
            <li>Network infrastructure</li>
            <li>IT support</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Cat Photo Project",
    description: "A mini project demonstrating cat behaviours.",
    image: catPhoto,
    imageAlt: "Preview of the cat photo project",
    href: "https://busisamdali.github.io/catPhotoApp/",
  },
  {
    title: "Cafe Menu Project",
    description: "A mini project introducing a coffee shop menu.",
    image: cafePhoto,
    imageAlt: "Preview of the cafe menu project",
    href: "https://busisamdali.github.io/Cafe-Menu/",
  },
];

function WorkPage() {
  return (
    <section className="page-width content-page">
      <p className="eyebrow">Selected projects</p>
      <h1>My work</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.imageAlt} />
            <div className="project-copy">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                className="text-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                View project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const services = [
  "Setting up and maintaining networks",
  "Designing, implementing, and maintaining network systems",
  "Installing and configuring routers, switches, and servers",
  "Monitoring network performance and recommending improvements",
  "Providing technical support and troubleshooting network issues",
];

function ServicesPage() {
  return (
    <section className="page-width content-page">
      <p className="eyebrow">How I can help</p>
      <h1>Network &amp; IT services</h1>
      <p className="page-lead">
        Thanks for stopping by. Here are some of the services I offer:
      </p>
      <ul className="service-list">
        {services.map((service) => <li key={service}>{service}</li>)}
      </ul>
    </section>
  );
}

function SkillsPage() {
  return (
    <section className="page-width content-page">
      <p className="eyebrow">What I work with</p>
      <h1>Skills</h1>
      <ul className="skill-grid">
        <li><span>01</span><strong>C++</strong></li>
        <li><span>02</span><strong>Cisco Packet Tracer</strong></li>
        <li><span>03</span><strong>Java</strong></li>
        <li><span>04</span><strong>Technical support</strong></li>
        <li><span>05</span><strong>Network infrastructure</strong></li>
      </ul>
    </section>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="page-width content-page contact-page">
      <div>
        <p className="eyebrow">Let’s talk</p>
        <h1>Get in touch</h1>
        <p className="page-lead">
          Have a question or a project in mind? Send me a message.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
        <label htmlFor="surname">Surname</label>
        <input id="surname" name="surname" autoComplete="family-name" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
        <button className="button button-dark" type="submit">Send message</button>
        {submitted && (
          <p className="form-notice" role="status">
            Thanks for reaching out. This form is not connected to a message
            service yet, so your message has not been sent.
          </p>
        )}
      </form>
    </section>
  );
}

const pageComponents: Record<Page, () => ReactElement> = {
  home: HomePage,
  about: AboutPage,
  work: WorkPage,
  services: ServicesPage,
  skills: SkillsPage,
  contact: ContactPage,
};

export default function App() {
  const page = currentPage();
  const PageContent = pageComponents[page];
  document.title = `${pageTitles[page]} | Busisa's Portfolio`;

  return (
    <>
      <Header page={page} />
      <main>
        <PageContent />
      </main>
      <footer className="site-footer">
        <p>© Busisa's Portfolio · 2026</p>
      </footer>
    </>
  );
}
