import { useState } from 'react';
import { ArrowDown, ArrowRight, Brush, Layers, Mail, MapPin, Menu, Paintbrush, Phone, Sparkles, X } from 'lucide-react';
import brandImage from './assets/jnpc-brand-reference.jpg';
import { Route, Switch } from 'wouter';
import NotFound from '@/pages/not-found';

const phone = '+27 72 748 3518';
const waLink = 'https://wa.me/27727483518';
const email = 'lorainechauke730@gmail.com';
const address = '664 Phake Rankaila, Phake, Mpumalanga 0414';

function ContactLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'flex flex-wrap gap-3' : 'flex flex-col gap-3'}>
      <a data-testid="link-phone" href="tel:+27727483518" className="contact-row"><Phone size={17} /><span>{phone}</span></a>
      <a data-testid="link-whatsapp" href={waLink} target="_blank" rel="noreferrer" className="contact-row"><MessageIcon /><span>Chat on WhatsApp</span></a>
      <a data-testid="link-email" href={`mailto:${email}`} className="contact-row"><Mail size={17} /><span>{email}</span></a>
    </div>
  );
}

function MessageIcon() {
  return <span aria-hidden="true" className="wa-mark">WA</span>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="min-h-[100dvh] bg-[#f5f1e8] text-[#201d18]">
      <div className="topline">
        <a href="tel:+27727483518" className="topline-link"><Phone size={13} /> <span>{phone}</span></a>
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
            <img src={brandImage} alt="JNPC Enterprise brand artwork with decorative finishes, paint and contact details" />
            <div className="image-index"><span>01</span><i /> FINISHING TOUCHES</div>
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
          <article className="service-item">
            <div className="service-number">01</div><div className="service-icon"><Paintbrush size={23} strokeWidth={1.5} /></div>
            <div className="service-copy"><h3>Painting</h3><p>Interior and exterior painting for residential and commercial spaces. A new colour can shift the whole mood of a room.</p></div>
            <a href={`${waLink}?text=${encodeURIComponent('Hello JNPC Enterprise, I would like to enquire about painting.')}`} className="service-arrow" target="_blank" rel="noreferrer" aria-label="Enquire about painting"><ArrowRight size={19} /></a>
          </article>
          <article className="service-item">
            <div className="service-number">02</div><div className="service-icon"><Layers size={23} strokeWidth={1.5} /></div>
            <div className="service-copy"><h3>Decorative & textured finishes</h3><p>Gamazine and decorative wall treatments that bring depth, detail and an expressive finish to your walls.</p></div>
            <a href={`${waLink}?text=${encodeURIComponent('Hello JNPC Enterprise, I would like to enquire about decorative and textured wall finishes.')}`} className="service-arrow" target="_blank" rel="noreferrer" aria-label="Enquire about decorative finishes"><ArrowRight size={19} /></a>
          </article>
          <article className="service-item">
            <div className="service-number">03</div><div className="service-icon"><Brush size={23} strokeWidth={1.5} /></div>
            <div className="service-copy"><h3>Residential & commercial</h3><p>Work for the everyday places that matter—your home, workplace, shop or business interior.</p></div>
            <a href={`${waLink}?text=${encodeURIComponent('Hello JNPC Enterprise, I would like to discuss a residential or commercial project.')}`} className="service-arrow" target="_blank" rel="noreferrer" aria-label="Enquire about residential and commercial work"><ArrowRight size={19} /></a>
          </article>
        </div>
      </section>

      <section id="approach" className="approach-section">
        <div className="approach-image">
          <img src={brandImage} alt="JNPC paint, tools and finished interiors" />
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

      <section id="contact" className="contact-section">
        <div className="contact-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE</p>
          <h2 className="serif">Let’s talk<br /><em>about your walls.</em></h2>
          <p>Have a room in mind, a colour question, or a textured finish you’ve been thinking about? We’d love to hear from you.</p>
          <a href={waLink} target="_blank" rel="noreferrer" className="button button-gold">Message us on WhatsApp <ArrowRight size={16} /></a>
        </div>
        <div className="contact-details">
          <span className="section-number">GET IN TOUCH</span>
          <div className="contact-divider" />
          <ContactLinks />
          <div className="address-block"><MapPin size={18} /><div><small>FIND US</small><address>{address}</address></div></div>
          <a className="map-link" href="https://maps.google.com/?q=664+Phake+Rankaila,+Phake,+Mpumalanga+0414" target="_blank" rel="noreferrer">Open address in Maps <ArrowRight size={14} /></a>
        </div>
      </section>

      <section className="brand-banner">
        <span>JNPC ENTERPRISE</span><i /><span>GAMAZINE, GLAMOUR & PAINT</span><i /><span>MPUMALANGA</span>
      </section>
      <footer className="footer">
        <a href="#home" className="brand-lockup footer-brand" aria-label="Back to top"><span className="brand-monogram">J<span>N</span>PC</span><span className="brand-caption">ENTERPRISE <i /></span></a>
        <p>Bringing glamour to every surface.</p>
        <div className="footer-links"><a href={`tel:+27727483518`}>Call JNPC</a><a href={`mailto:${email}`}>Email</a><a href={waLink} target="_blank" rel="noreferrer">WhatsApp</a></div>
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
