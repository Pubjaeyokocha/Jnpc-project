import { useState } from 'react';
import { ArrowDown, ArrowRight, Brush, Building2, Layers, Mail, MapPin, Menu, Paintbrush, Palette, Phone, Sparkles, X } from 'lucide-react';
import { Route, Switch } from 'wouter';
import NotFound from '@/pages/not-found';

const phone = '+27 72 748 3518';
const waLink = 'https://wa.me/27727483518';
const email = 'info@jnpcprojects.co.za';
const address = '664 Phake Rankaila, Phake, Mpumalanga 0414';

const services = [
  { title: 'Interior Painting', description: 'Refresh interior walls with colour chosen for your space.', icon: Paintbrush },
  { title: 'Exterior Painting', description: 'Give exterior surfaces a clean, considered finish.', icon: Brush },
  { title: 'Gamazine', description: 'Add decorative texture and depth with Gamazine wall finishes.', icon: Layers },
  { title: 'Stucco / Textured Finishes', description: 'Explore tactile finishes that bring dimension to a wall.', icon: Layers },
  { title: 'Feature Walls', description: 'Create a focal point with a distinctive wall finish.', icon: Sparkles },
  { title: 'Commercial Work', description: 'Painting and finishing for offices, shops and business spaces.', icon: Building2 },
  { title: 'Colour Consultation', description: 'Talk through colours and finishes before choosing your look.', icon: Palette },
];

// Replace these public SVG files with real project photos when they are available.
const galleryItems = [
  { src: '/gallery/gamazine-01.svg', alt: 'Gamazine gallery photo placeholder one', label: 'Gamazine finish · 01' },
  { src: '/gallery/gamazine-02.svg', alt: 'Gamazine gallery photo placeholder two', label: 'Gamazine finish · 02' },
  { src: '/gallery/gamazine-03.svg', alt: 'Gamazine gallery photo placeholder three', label: 'Gamazine finish · 03' },
  { src: '/gallery/painting-01.svg', alt: 'Painting gallery photo placeholder one', label: 'Painting finish · 01' },
  { src: '/gallery/painting-02.svg', alt: 'Painting gallery photo placeholder two', label: 'Painting finish · 02' },
  { src: '/gallery/painting-03.svg', alt: 'Painting gallery photo placeholder three', label: 'Painting finish · 03' },
];

const testimonials = [
  { quote: '[Short quote about quality work]', name: '[Client Name]', location: '[Location]' },
  { quote: '[Short quote about attention to detail]', name: '[Client Name]', location: '[Location]' },
  { quote: '[Short quote about the finished space]', name: '[Client Name]', location: '[Location]' },
];

const serviceWhatsAppLink = (service: string) =>
  `${waLink}?text=${encodeURIComponent(`Hello, I would like to enquire about ${service}.`)}`;

function MessageIcon() {
  return <span aria-hidden="true" className="wa-mark">WA</span>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="min-h-[100dvh] bg-[#f5f1e8] text-[#201d18]">
      <div className="topline">
        <a data-testid="header-email" href={`mailto:${email}`} className="topline-link"><Mail size={13} /> <span>{email}</span></a>
        <span className="topline-note">Locally based in Phake, Mpumalanga</span>
        <a href={waLink} target="_blank" rel="noreferrer" className="topline-link">Talk to us on WhatsApp <ArrowRight size={13} /></a>
      </div>
      <header className="site-header">
        <a href="#home" className="brand-lockup" aria-label="JNPC Enterprise home" onClick={closeMenu}>
          <span className="brand-monogram">J<span>N</span>PC</span>
          <span className="brand-caption">ENTERPRISE <i /></span>
        </a>
        <button data-testid="button-menu" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Our services</a>
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#approach" onClick={closeMenu}>The JNPC touch</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href={waLink} target="_blank" rel="noreferrer" className="nav-cta" onClick={closeMenu}>Start a conversation <ArrowRight size={15} /></a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="eyebrow-line" /> FINISHES WITH A LITTLE MORE FEELING</div>
          <h1>Make your<br />walls <em>say more.</em></h1>
          <p className="hero-lede">From a fresh coat of colour to a beautifully textured feature wall, JNPC brings a considered finish to the places you call yours.</p>
          <div className="hero-actions">
            <a href={waLink} target="_blank" rel="noreferrer" className="button button-gold">Let’s talk about your space <ArrowRight size={16} /></a>
            <a href="#services" className="text-link">Explore our services <ArrowDown size={15} /></a>
          </div>
          <div className="hero-footnote"><span className="gold-dot" /> Residential & commercial painting and wall finishes</div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame">
            <img src="/jnpc-luxury-interior-wall.jpg" alt="Luxury living room with a warm textured feature wall" />
          </div>
          <div className="hero-stamp"><span>JNPC</span><small>GAMAZINE<br />GLAMOUR<br />& PAINT</small><i><Sparkles size={17} /></i></div>
          <div className="hero-side-note">A fresh perspective<br />for every surface</div>
        </div>
        <a className="scroll-cue" href="#intro"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a>
      </section>

      <section id="intro" className="intro-section">
        <div className="intro-aside"><span className="section-number">01 / WHAT WE DO</span><span className="vertical-rule" /></div>
        <div className="intro-main">
          <p className="eyebrow dark-eyebrow">GAMAZINE, GLAMOUR & PAINT</p>
          <h2 className="serif">The right finish<br />changes <em>everything.</em></h2>
          <div className="intro-bottom">
            <p>JNPC Enterprise is a local painting and decorative wall-finishing business serving homes and commercial spaces. We bring colour, texture and a thoughtful eye to walls that deserve to feel finished.</p>
            <a href="#contact" className="round-link" aria-label="Contact JNPC Enterprise"><ArrowRight size={21} /></a>
          </div>
        </div>
        <div className="intro-swatch"><span>COLOUR<br />MEETS<br />CHARACTER</span><i /></div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" /> MADE FOR YOUR SPACE</p><h2 className="serif">A finish for <em>every feeling.</em></h2></div>
          <p>Whether you’re refreshing a room or giving a wall a new dimension, we help bring your idea to life.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-item" key={service.title}>
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="service-icon"><Icon size={23} strokeWidth={1.5} /></div>
                <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
                <a data-testid={`service-enquire-${index + 1}`} href={serviceWhatsAppLink(service.title)} className="service-arrow" target="_blank" rel="noreferrer" aria-label={`Enquire about ${service.title} on WhatsApp`}><ArrowRight size={19} /></a>
              </article>
            );
          })}
        </div>
        <p className="service-pricing-note">Pricing from <strong>R___/m²</strong> — final quote depends on wall size and finish. <a href={`${waLink}?text=${encodeURIComponent('Hello, I would like a free quote for my wall finishing project.')}`} target="_blank" rel="noreferrer">Message us for a free quote.</a></p>
      </section>

      <section id="work" className="work-section">
        <div className="work-heading">
          <div><p className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> A CLOSER LOOK</p><h2 className="serif">Our <em>Work.</em></h2></div>
          <p>Project photographs will be added here as the gallery grows.</p>
        </div>
        <div className="work-grid">
          <h3 className="work-group-label">Before / After — Gamazine</h3>
          {galleryItems.slice(0, 3).map((item, index) => (
            <figure className="work-card" key={item.src}>
              <div className={`work-image work-image-${index + 1}`}>
                <img src={item.src} alt={item.alt} />
                <span className="placeholder-badge">PLACEHOLDER PHOTO</span>
              </div>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
          <h3 className="work-group-label">Before / After — Painting</h3>
          {galleryItems.slice(3).map((item, index) => (
            <figure className="work-card" key={item.src}>
              <div className={`work-image work-image-${index + 4}`}>
                <img src={item.src} alt={item.alt} />
                <span className="placeholder-badge">PLACEHOLDER PHOTO</span>
              </div>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="approach" className="approach-section">
        <div className="approach-image" aria-hidden="true">
          <span className="photo-label">DETAIL IS THE DIFFERENCE</span>
        </div>
        <div className="approach-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE JNPC TOUCH</p>
          <h2 className="serif">Considered colour.<br /><em>Characterful walls.</em></h2>
          <p>Good finishing is more than what goes on the wall. It’s the way colour, texture and light come together to make a space feel like itself.</p>
          <p>Tell us what you have in mind. We’ll talk through the space, the finish you’re after and the next steps for your project.</p>
          <a href={waLink} target="_blank" rel="noreferrer" className="text-link light-link">Share your idea <ArrowRight size={15} /></a>
          <span className="approach-ornament" aria-hidden="true">J</span>
        </div>
      </section>

      <section className="process-section">
        <div className="process-heading"><p className="eyebrow dark-eyebrow">SIMPLE FROM THE FIRST HELLO</p><h2 className="serif">A good place to <em>begin.</em></h2></div>
        <div className="process-steps">
          <article><span>01</span><h3>Tell us about it</h3><p>Send a message with a little about your space and the finish you’re considering.</p></article>
          <article><span>02</span><h3>Talk through the details</h3><p>We’ll connect to understand what you’re looking for and discuss your project.</p></article>
          <article><span>03</span><h3>Plan your next step</h3><p>Get in touch to talk through the work and arrange what comes next.</p></article>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-heading">
          <p className="eyebrow dark-eyebrow">KIND WORDS, TO COME</p>
          <h2 className="serif">What Our <em>Clients Say.</em></h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.quote}>
              <span className="testimonial-number">0{index + 1}</span>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <p className="testimonial-byline">{testimonial.name} <span>—</span> {testimonial.location}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE</p>
          <h2 className="serif">Let’s talk<br /><em>about your walls.</em></h2>
          <p>Have a room in mind, a colour question, or a textured finish you’ve been thinking about? We’d love to hear from you.</p>
          <a href={waLink} target="_blank" rel="noreferrer" className="button button-gold">Message us on WhatsApp <ArrowRight size={16} /></a>
        </div>
        <div className="contact-email">
          <span className="section-number">EMAIL JNPC</span>
          <a data-testid="contact-email" href={`mailto:${email}`}><Mail size={17} />{email}</a>
        </div>
      </section>

      <section className="brand-banner">
        <span>JNPC ENTERPRISE</span><i /><span>GAMAZINE, GLAMOUR & PAINT</span><i /><span>MPUMALANGA</span>
      </section>
      <footer className="footer">
        <a href="#home" className="brand-lockup footer-brand" aria-label="Back to top"><span className="brand-monogram">J<span>N</span>PC</span><span className="brand-caption">ENTERPRISE <i /></span></a>
        <p>Bringing glamour to every surface.</p>
        <div className="footer-contact">
          <a data-testid="footer-phone" href="tel:+27727483518"><Phone size={14} />{phone}</a>
          <a data-testid="footer-email" href={`mailto:${email}`}><Mail size={14} />{email}</a>
          <address><MapPin size={14} />{address}</address>
          <a data-testid="footer-whatsapp" href={waLink} target="_blank" rel="noreferrer">WhatsApp <ArrowRight size={13} /></a>
        </div>
        <span className="copyright">© JNPC Enterprise</span>
      </footer>
      <a href={waLink} target="_blank" rel="noreferrer" className="floating-contact" aria-label="Chat with JNPC Enterprise on WhatsApp"><MessageIcon /><span>Let’s talk</span></a>
    </main>
  );
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <Router />;
}

export default App;
