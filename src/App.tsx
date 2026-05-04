import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Phone,
  Mail,
  Instagram,
  Menu,
  X,
  CheckCircle,
  Clock,
  Wrench,
  Lightbulb,
  Car,
  Network,
  Hammer,
  ArrowRight,
} from 'lucide-react';

// ── Shared motion variant ──────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ── Navbar ─────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Om oss', href: '#om-oss' },
    { name: 'Tjänster', href: '#tjanster' },
    { name: 'Varför oss', href: '#varfor-oss' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-white py-4 border-b border-line-light shadow-sm'
          : 'bg-white py-5 border-b border-line-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69b878849379cf5764c3dc62.png"
            alt="Fiskarhagens El"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-[13px] font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0736391730"
            className="flex items-center gap-2 border border-orange/70 text-orange hover:bg-orange hover:text-white px-5 py-2 text-[13px] font-bold tracking-wide transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            073-639 17 30
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-t border-line-light md:hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-navy/80 hover:text-navy transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0736391730"
                className="btn-primary justify-center mt-2"
              >
                <Phone className="w-4 h-4" />
                Ring direkt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ── Hero ───────────────────────────────────────────────────────────────────
const Hero = () => {
  const stats = [
    { value: '20+', label: 'År i branschen' },
    { value: '24/7', label: 'Jour tillgänglig' },
    { value: '100%', label: 'Auktoriserad' },
    { value: '2003', label: 'Grundat' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-0 overflow-hidden bg-surface-dark">
      {/* Static background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 65% 30%, rgba(232,97,26,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-6 h-[2px] bg-orange" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-orange">
              Auktoriserad Elinstallatör
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white leading-[0.92] tracking-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}
          >
            VI GER DIN<br />
            FASTIGHET<br />
            <span className="text-orange">STRÖM.</span>
          </h1>

          {/* Sub */}
          <p className="text-base md:text-lg text-white/55 max-w-lg mb-10 leading-relaxed">
            Elkraftsingenjörsexamen möter 20 år i fältet — vi levererar elinstallationer med precision och långsiktigt ansvar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="btn-primary">
              Kontakta oss
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:0736391730" className="btn-ghost">
              <Phone className="w-4 h-4" />
              Ring: 073-639 17 30
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 border-t border-line-dark grid grid-cols-2 md:grid-cols-4 gap-px bg-line-dark"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface-dark px-6 md:px-10 py-8">
              <span className="font-display text-3xl md:text-5xl text-white block leading-none">
                {stat.value}
              </span>
              <span className="block text-[11px] tracking-[0.12em] uppercase text-ink-muted mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ── About ──────────────────────────────────────────────────────────────────
const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <motion.span onViewportEnter={() => setHasStarted(true)}>
      {count}
      {suffix}
    </motion.span>
  );
};

const About = () => {
  const stats = [
    { value: 20, suffix: '+', label: 'År i branschen', sub: 'Sedan 2003' },
    { value: 24, suffix: '/7', label: 'Jour tillgänglig', sub: 'Akutjour dygnet runt' },
    { value: 100, suffix: '%', label: 'Auktoriserad', sub: 'Elsäkerhetsverket' },
  ];

  return (
    <section id="om-oss" className="py-28 bg-surface-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <motion.div {...fadeUp} className="space-y-6">
            <span className="section-rule" />
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange">
              Vår Historia
            </div>
            <h2
              className="font-display text-navy leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              FRÅN PRAKTIK TILL<br />
              <span className="text-orange">INGENJÖRSKONST.</span>
            </h2>
            <div className="space-y-4 text-ink-mid leading-relaxed">
              <p>
                Fiskarhagens El AB grundades av Ninos med en tydlig vision: att förena hantverksskicklighet
                med djup teoretisk kunskap. Med över 20 år som anställd elektriker har Ninos sett allt i branschen.
              </p>
              <p>
                Genom att komplettera den praktiska erfarenheten med en elkraftsingenjörsexamen kan vi idag
                erbjuda lösningar som är både tekniskt avancerade och praktiskt genomförbara.
                Vi tror på att göra det rätt från början.
              </p>
            </div>

            {/* Founder */}
            <div className="mt-8 border-l-2 border-orange pl-5 py-1">
              <div className="font-bold text-navy text-[15px]">Ninos</div>
              <div className="text-sm text-ink-muted">Grundare & Elkraftsingenjör</div>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="divide-y divide-line-light"
          >
            {stats.map((s) => (
              <div key={s.label} className="py-10 pl-8 border-l-4 border-orange">
                <div
                  className="font-display text-navy leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] tracking-[0.12em] uppercase text-ink-muted mt-2">
                  {s.label}
                </div>
                <div className="text-sm text-ink-mid mt-1">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ── Services ───────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    {
      title: 'Nyproduktion',
      desc: 'Kompletta elinstallationer i nybyggnationer med fokus på smarta lösningar.',
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: 'Service & underhåll',
      desc: 'Löpande service och optimering av befintliga elanläggningar för ökad livslängd.',
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: 'Felsökning',
      desc: 'Systematisk felsökning och snabb åtgärd av alla typer av elfel.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Laddboxar',
      desc: 'Installation av laddboxar för elbilar hemma eller på företaget.',
      icon: <Car className="w-6 h-6" />,
    },
    {
      title: 'Smarta belysningsstyrningar',
      desc: 'Moderna, intelligenta styrningssystem för belysning som sparar energi.',
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: 'Fiber & datanätverk',
      desc: 'Installation och dragning av fiber och nätverk för snabb uppkoppling.',
      icon: <Network className="w-6 h-6" />,
    },
  ];

  return (
    <section id="tjanster" className="py-28 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-16">
          <span className="section-rule" />
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange mb-4">
            Vad vi gör
          </div>
          <h2
            className="font-display text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            VÅRA TJÄNSTER
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line-dark"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={staggerChild}
              className="group relative bg-navy-mid hover:bg-navy-light border-0 transition-all duration-300 p-8 cursor-default"
            >
              <span className="text-[11px] font-bold tracking-[0.14em] text-ink-muted mb-5 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[17px] font-display text-white mb-3 group-hover:text-orange transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed pr-8">
                {service.desc}
              </p>
              <div className="absolute bottom-6 right-6 text-white/10 group-hover:text-orange/30 transition-colors duration-300">
                {service.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 24/7 accent band */}
        <motion.div
          {...fadeUp}
          className="mt-px flex flex-col md:flex-row items-center justify-between gap-6 bg-orange/[0.04] border border-orange/25 p-8 md:px-12"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center border border-orange/40 shrink-0">
              <Clock className="w-6 h-6 text-orange" />
            </div>
            <div>
              <h3 className="text-xl font-display text-white">Jour & utryckning 24/7</h3>
              <p className="text-sm text-ink-muted mt-1">
                Akut elhjälp dygnet runt, alla dagar om året när det krisar.
              </p>
            </div>
          </div>
          <a href="tel:0736391730" className="btn-primary shrink-0">
            <Phone className="w-4 h-4" />
            Ring jourhavande
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// ── WhyUs ──────────────────────────────────────────────────────────────────
const WhyUs = () => {
  const usps = [
    {
      title: 'Elkraftsingenjörsexamen',
      desc: 'Teoretisk spetskompetens för komplexa projekt och framtidssäkrade lösningar.',
    },
    {
      title: '20+ år i fältet',
      desc: 'Gedigen praktisk kunskap från varje typ av uppdrag — från villa till industri.',
    },
    {
      title: 'Jour dygnet runt',
      desc: 'Vi finns där när du behöver oss som mest — alla dagar, alla tider.',
    },
    {
      title: 'Fullt auktoriserad',
      desc: 'Godkänd av Elsäkerhetsverket. Fullständig trygghet och garanterad kvalitet.',
    },
  ];

  return (
    <section id="varfor-oss" className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — heading */}
          <motion.div {...fadeUp}>
            <span className="section-rule" />
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange mb-4">
              Varför oss
            </div>
            <h2
              className="font-display text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              KOMPETENS SOM<br />
              <span className="text-orange">GÖR SKILLNAD.</span>
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-sm">
              Vi kombinerar det lilla bolagets personliga service med det stora företagets
              tekniska spetskompetens. Varje uppdrag behandlas med ingenjörens precision.
            </p>
          </motion.div>

          {/* Right — feature list */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {usps.map((usp) => (
              <div
                key={usp.title}
                className="flex items-start gap-5 py-6 border-b border-line-dark last:border-0"
              >
                <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="font-sans font-bold text-white text-[15px] mb-1">
                    {usp.title}
                  </div>
                  <div className="text-sm text-ink-muted leading-relaxed">{usp.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ── Contact ────────────────────────────────────────────────────────────────
const Contact = () => {
  const emails = [
    { label: 'Allmänt', addr: 'info@fiskarhagensel.se' },
    { label: 'Ekonomi', addr: 'ekonomi@fiskarhagensel.se' },
    { label: 'Ninos', addr: 'ninos@fiskarhagensel.se' },
  ];

  return (
    <section id="kontakt" className="py-28 bg-surface-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — contact info */}
          <motion.div {...fadeUp}>
            <span className="section-rule" />
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange mb-4">
              Kontakt
            </div>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              KONTAKTA OSS
            </h2>

            {/* Phone */}
            <a
              href="tel:0736391730"
              className="block font-display text-white hover:text-orange transition-colors leading-tight mt-6 mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              073-639 17 30
            </a>

            {/* Email list */}
            <div className="space-y-3 mb-10">
              {emails.map((e) => (
                <div key={e.addr} className="flex items-baseline gap-4">
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-muted w-20 shrink-0">
                    {e.label}
                  </span>
                  <a
                    href={`mailto:${e.addr}`}
                    className="text-sm text-white/70 hover:text-orange transition-colors"
                  >
                    {e.addr}
                  </a>
                </div>
              ))}
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4 pt-6 border-t border-line-dark">
              <Instagram className="w-5 h-5 text-ink-muted" />
              <a
                href="https://instagram.com/fiskarhagens.el"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-orange transition-colors"
              >
                fiskarhagens.el
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-navy-mid border border-line-dark p-8 md:p-10"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink-muted block">
                    Namn
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Ditt namn"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink-muted block">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Ditt nummer"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink-muted block">
                  E-post
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="din@epost.se"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink-muted block">
                  Meddelande
                </label>
                <textarea
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Hur kan vi hjälpa dig?"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center mt-2">
                Skicka meddelande
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ── Footer ─────────────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-line-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo + desc */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center mb-5">
              <img
                src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69b878849379cf5764c3dc62.png"
                alt="Fiskarhagens El"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-ink-mid max-w-xs leading-relaxed">
              Professionella elinstallationer för privatpersoner och företag.
              20 års erfarenhet och ingenjörskompetens — vi garanterar högsta kvalitet.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase font-bold text-navy mb-5">
              Snabblänkar
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Om oss', href: '#om-oss' },
                { name: 'Tjänster', href: '#tjanster' },
                { name: 'Varför oss', href: '#varfor-oss' },
                { name: 'Kontakt', href: '#kontakt' },
              ].map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-mid hover:text-orange transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase font-bold text-navy mb-5">
              Tjänster
            </h4>
            <ul className="space-y-3">
              {[
                'Nyproduktion',
                'Service & underhåll',
                'Laddboxar',
                'Felsökning',
                'Jour 24/7',
              ].map((t) => (
                <li key={t}>
                  <a
                    href="#tjanster"
                    className="text-sm text-ink-mid hover:text-orange transition-colors"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-line-light flex flex-col sm:flex-row justify-between items-center gap-4 text-ink-muted text-sm">
          <div>© 2025 Fiskarhagens El AB — Alla rättigheter förbehållna</div>
          <div className="flex gap-6">
            <span>Org.nr: 559554-6010</span>
            <a href="#" className="hover:text-navy transition-colors">
              Integritetspolicy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
