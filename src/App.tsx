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
  Award,
  ShieldCheck
} from 'lucide-react';

// --- Components ---

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-dark/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <img
            src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69b878849379cf5764c3dc62.png"
            alt="Fiskarhagens El"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/80 hover:text-orange-accent transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:0736391730" 
            className="flex items-center gap-2 bg-orange-accent hover:bg-orange-hover text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            073-639 17 30
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-dark border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-orange-accent"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:0736391730" 
                className="flex items-center justify-center gap-2 bg-orange-accent text-white py-3 rounded-xl font-bold"
              >
                <Phone className="w-5 h-5" />
                Ring direkt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark">
      {/* Background Animation */}
      <div className="absolute inset-0 dark-circuit-pattern opacity-20" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%', y: `${20 + i * 15}%`, opacity: 0 }}
            animate={{ 
              x: '200%', 
              opacity: [0, 0.2, 0] 
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-accent to-transparent"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/10 border border-orange-accent/20 text-orange-accent text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Zap className="w-3 h-3" />
            Auktoriserad Elinstallatör
          </motion.div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl text-white leading-[1.1] md:leading-[0.9] mb-6 break-words">
            20 ÅRS ERFARENHET.<br className="hidden sm:block" />
            <span className="text-orange-accent"> INGENJÖRS-</span><br className="hidden sm:block" />
            KOMPETENS.
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            Efter två decennier i branschen och en elkraftsingenjörsexamen startade vi Fiskarhagens El — för att leverera elinstallationer med precision och passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#kontakt" 
              className="px-8 py-4 bg-orange-accent hover:bg-orange-hover text-white rounded-xl font-bold text-center transition-all shadow-lg shadow-orange-accent/20"
            >
              Kontakta oss
            </a>
            <a 
              href="tel:0736391730" 
              className="px-8 py-4 border border-orange-accent/30 text-white hover:bg-orange-accent/10 rounded-xl font-bold text-center transition-all"
            >
              Ring: 073-639 17 30
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-gradient-to-br from-navy-primary to-bg-dark p-12 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-accent/10 blur-[100px] -z-10" />
            <Zap className="w-64 h-64 text-orange-accent/10 absolute -bottom-10 -right-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-accent flex items-center justify-center">
                  <Award className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Kvalitetssäkrat</h3>
                  <p className="text-white/50 text-sm">Högsta standard i varje moment</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-accent flex items-center justify-center">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Trygghet</h3>
                  <p className="text-white/50 text-sm">Fullt försäkrad & auktoriserad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-accent flex items-center justify-center">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Tillgänglighet</h3>
                  <p className="text-white/50 text-sm">Jour 24/7 när du behöver oss</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Lightning Bolt */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-40 h-40 text-orange-accent/20"
          >
            <Zap className="w-full h-full fill-current" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Counter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = 2000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [hasStarted, value]);

  return (
    <motion.div 
      onViewportEnter={() => setHasStarted(true)}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-6xl text-navy-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-text-secondary font-medium uppercase tracking-widest text-xs">
        {label}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="om-oss" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full circuit-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block text-orange-accent font-bold tracking-widest uppercase text-sm">
              Vår Historia
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-navy-primary leading-tight">
              FRÅN PRAKTIK TILL<br className="hidden sm:block" />
              <span className="text-orange-accent"> INGENJÖRSKONST.</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
              <p>
                Fiskarhagens El AB grundades av Ninos med en tydlig vision: att förena hantverksskicklighet med djup teoretisk kunskap. Med över 20 år som anställd elektriker har Ninos sett allt i branschen.
              </p>
              <p>
                Genom att komplettera den praktiska erfarenheten med en elkraftsingenjörsexamen kan vi idag erbjuda lösningar som är både tekniskt avancerade och praktiskt genomförbara. Vi tror på att göra det rätt från början.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center gap-4 p-4 bg-bg-light rounded-2xl border border-navy-primary/5">
                <div className="w-12 h-12 rounded-full bg-navy-primary flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div>
                  <div className="font-bold text-navy-primary">Ninos</div>
                  <div className="text-sm text-text-secondary">Grundare & Elkraftsingenjör</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <Counter value="20" suffix="+" label="År i branschen" />
              <Counter value="100" suffix="%" label="Auktoriserad" />
            </div>
            <div className="space-y-8 pt-12">
              <Counter value="24" suffix="/7" label="Jour tillgänglig" />
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-orange-accent w-8 h-8" />
                </div>
                <div className="text-text-secondary font-medium uppercase tracking-widest text-xs">
                  Framtidssäkrat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Nyproduktion',
      desc: 'Kompletta elinstallationer i nybyggnationer med fokus på smarta lösningar.',
      icon: <Hammer className="w-8 h-8" />
    },
    {
      title: 'Service & underhåll',
      desc: 'Löpande service och optimering av befintliga elanläggningar för ökad livslängd.',
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: 'Felsökning',
      desc: 'Systematisk felsökning och snabb åtgärd av alla typer av elfel.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Laddboxar',
      desc: 'Installation av laddboxar för elbilar hemma eller på företaget.',
      icon: <Car className="w-8 h-8" />
    },
    {
      title: 'Smarta belysningsstyrningar',
      desc: 'Moderna, intelligenta styrningssystem för belysning som sparar energi.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Fiber & datanätverk',
      desc: 'Installation och dragning av fiber och nätverk för snabb uppkoppling.',
      icon: <Network className="w-8 h-8" />
    },
    {
      title: 'Jour & utryckning 24/7',
      desc: 'Akut elhjälp dygnet runt, alla dagar om året när det krisar.',
      icon: <Clock className="w-8 h-8" />,
      isUrgent: true
    }
  ];

  return (
    <section id="tjanster" className="py-24 bg-bg-dark relative">
      <div className="absolute inset-0 dark-circuit-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-accent font-bold tracking-widest uppercase text-sm mb-4"
          >
            Vad vi gör
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl text-white">VÅRA TJÄNSTER</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                service.isUrgent 
                  ? 'bg-orange-accent/5 border-orange-accent/30 animate-pulse-glow' 
                  : 'bg-navy-primary/40 border-white/10 hover:border-orange-accent/50 hover:bg-navy-primary/60'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                service.isUrgent ? 'bg-orange-accent text-white' : 'bg-orange-accent/10 text-orange-accent'
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {service.title}
                {service.isUrgent && (
                  <span className="text-[10px] bg-orange-accent text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Akut</span>
                )}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const usps = [
    {
      title: 'Elkraftsingenjör',
      desc: 'Teoretisk spetskompetens för komplexa projekt.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: '20+ års erfarenhet',
      desc: 'Gedigen praktisk kunskap från fältet.',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'Jour dygnet runt',
      desc: 'Vi finns där när du behöver oss som mest.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Auktoriserad',
      desc: 'Fullständig trygghet och garanterad kvalitet.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section id="varfor-oss" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-4xl text-navy-primary mb-4">VARFÖR FISKARHAGENS EL?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Vi kombinerar det lilla företagets personliga service med det stora företagets tekniska kompetens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-navy-primary/5 flex items-center justify-center text-orange-accent mb-6">
                {usp.icon}
              </div>
              <h3 className="font-bold text-navy-primary mb-2">{usp.title}</h3>
              <p className="text-sm text-text-secondary">{usp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-accent/5 skew-x-12 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-white mb-8">KONTAKTA OSS</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-orange-accent/10 border border-orange-accent/20 flex items-center justify-center text-orange-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white/50 text-sm uppercase tracking-widest mb-1">Telefon</div>
                  <a href="tel:0736391730" className="text-2xl font-bold text-white hover:text-orange-accent transition-colors">
                    073-639 17 30
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-orange-accent/10 border border-orange-accent/20 flex items-center justify-center text-orange-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-white/50 text-sm uppercase tracking-widest mb-1">Allmänt</div>
                    <a href="mailto:info@fiskarhagensel.se" className="text-lg font-bold text-white hover:text-orange-accent transition-colors">
                      info@fiskarhagensel.se
                    </a>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm uppercase tracking-widest mb-1">Ekonomi</div>
                    <a href="mailto:ekonomi@fiskarhagensel.se" className="text-lg font-bold text-white hover:text-orange-accent transition-colors">
                      ekonomi@fiskarhagensel.se
                    </a>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm uppercase tracking-widest mb-1">Ninos Direkt</div>
                    <a href="mailto:ninos@fiskarhagensel.se" className="text-lg font-bold text-white hover:text-orange-accent transition-colors">
                      ninos@fiskarhagensel.se
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-orange-accent/10 border border-orange-accent/20 flex items-center justify-center text-orange-accent shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white/50 text-sm uppercase tracking-widest mb-1">Instagram</div>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-orange-accent transition-colors">
                    @Fiskarhagens El
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-primary/40 p-8 md:p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Namn</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-accent outline-none transition-colors" placeholder="Ditt namn" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Telefon</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-accent outline-none transition-colors" placeholder="Ditt nummer" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">E-post</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-accent outline-none transition-colors" placeholder="din@epost.se" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Meddelande</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-accent outline-none transition-colors resize-none" placeholder="Hur kan vi hjälpa dig?"></textarea>
              </div>
              <button className="w-full py-4 bg-orange-accent hover:bg-orange-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-accent/20">
                Skicka meddelande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a1121] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center mb-6">
              <img
                src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69b878849379cf5764c3dc62.png"
                alt="Fiskarhagens El"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Professionella elinstallationer för både privatpersoner och företag. Med 20 års erfarenhet och ingenjörskompetens garanterar vi högsta kvalitet.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Snabblänkar</h4>
            <ul className="space-y-4">
              <li><a href="#om-oss" className="text-white/40 hover:text-orange-accent transition-colors">Om oss</a></li>
              <li><a href="#tjanster" className="text-white/40 hover:text-orange-accent transition-colors">Tjänster</a></li>
              <li><a href="#kontakt" className="text-white/40 hover:text-orange-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Följ oss</h4>
            <a href="#" className="inline-flex items-center gap-2 text-white/40 hover:text-orange-accent transition-colors">
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <div>© 2025 Fiskarhagens El AB — Alla rättigheter förbehållna</div>
          <div className="flex gap-8">
            <span>Org.nr: [ORG-NUMMER]</span>
            <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-orange-accent selection:text-white">
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
