import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Printer, Shield, Zap, BarChart3, Smartphone, Cloud, Palette, HeartHandshake, IndianRupee, ChevronDown, PartyPopper, Instagram, Store, ExternalLink, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const slides = [
  "Pro - Website & Web App",
  "Smart Billing System with Printer Integration",
  "Mobile + Desktop Responsive Design",
  "Cloud Data Storage",
  "Fast and Secure System",
  "Real-time Reports",
  "Affordable Pricing",
  "Modern UI/UX Design",
];

const highlights = [
  { icon: Shield, title: "Premium Quality", desc: "Industry-leading design standards" },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
  { icon: HeartHandshake, title: "24/7 Support", desc: "Round-the-clock assistance for your business" },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Competitive rates for top-tier services" },
  { icon: Palette, title: "Modern Technology", desc: "Built with the latest tech stack" },
  { icon: Cloud, title: "Secure & Reliable", desc: "Enterprise-grade security for your data" },
  { icon: Smartphone, title: "Cross Platform", desc: "Works on all devices seamlessly" },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Instant data insights at your fingertips" },
  { icon: Printer, title: "Printer Integration", desc: "Seamless hardware connectivity" },
];

const cardReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.6, type: "spring" as const, bounce: 0.3 }
  }),
};

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen pt-20 sm:pt-28 relative z-10">
      {/* Hero */}
      <section className="container mx-auto px-4 py-10 sm:py-16 lg:py-24 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(270 60% 40% / 0.15) 0%, transparent 70%)" }} />

        {/* Animated caption */}
        <AnimatedSection delay={0.2}>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-sm md:text-base tracking-[0.25em] uppercase mb-2 font-semibold" style={{ color: "#22C55E" } as React.CSSProperties}>
              User Friendly • Fast • Secure
            </p>
            <motion.p
              className="font-semibold text-base md:text-lg italic"
              style={{ color: "#EF4444" } as React.CSSProperties}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Your Vision — Our Innovation!
            </motion.p>
          </motion.div>
        </AnimatedSection>

        {/* Slider */}
        <div className="h-10 mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="font-semibold text-lg"
              style={{ color: "#FACC15" } as React.CSSProperties}
            >
              {slides[current]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Service cards */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-5xl mx-auto px-2 sm:px-0">
            {/* Website Designing Card */}
            <Link to="/website-designing" className="flex flex-col h-full">
              <motion.div
                className="glass-card p-6 text-center card-lift relative overflow-hidden cursor-pointer glow-hover h-full flex flex-col"
                style={{ border: "1px solid hsl(280 80% 55% / 0.3)" } as React.CSSProperties}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px hsl(280 80% 55% / 0.3), 0 0 50px hsl(280 80% 55% / 0.1)" }}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at center, hsl(280 80% 55% / 0.3), transparent 70%)" }} />
                {/* Click Me badge - yellow */}
                <div className="absolute top-3 right-3 z-20">
                  <motion.span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: "hsl(45 100% 50% / 0.25)", color: "#FACC15", border: "1px solid hsl(45 100% 50% / 0.5)" } as React.CSSProperties}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Click Me
                  </motion.span>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(280 80% 55% / 0.2), hsl(320 80% 55% / 0.2))", border: "1px solid hsl(280 80% 55% / 0.3)" }}>
                    <Globe size={28} style={{ color: "hsl(280 80% 65%)" }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Pro - Website & Web App</h3>
                  <p className="text-sm text-muted-foreground mt-auto">Stunning, responsive websites for every business</p>
                </div>
              </motion.div>
            </Link>

            {/* Smart Billing Card */}
            <Link to="/smart-billing" className="flex flex-col h-full">
              <motion.div
                className="glass-card p-6 text-center card-lift relative overflow-hidden cursor-pointer glow-hover h-full flex flex-col"
                style={{ border: "1px solid hsl(150 80% 45% / 0.3)" } as React.CSSProperties}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px hsl(150 80% 45% / 0.3), 0 0 50px hsl(150 80% 45% / 0.1)" }}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at center, hsl(150 80% 45% / 0.3), transparent 70%)" }} />
                {/* Click Me badge - yellow */}
                <div className="absolute top-3 right-3 z-20">
                  <motion.span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: "hsl(45 100% 50% / 0.25)", color: "#FACC15", border: "1px solid hsl(45 100% 50% / 0.5)" } as React.CSSProperties}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Click Me
                  </motion.span>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(150 80% 45% / 0.2), hsl(170 80% 45% / 0.2))", border: "1px solid hsl(150 80% 45% / 0.3)" }}>
                    <Printer size={28} style={{ color: "hsl(150 80% 55%)" }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Smart Billing System</h3>
                  <p className="text-sm text-muted-foreground mt-auto">Complete billing solutions with printer integration</p>
                </div>
              </motion.div>
            </Link>

            {/* Functions & Events Card */}
            <Link to="/functions-events" className="flex flex-col h-full">
              <motion.div
                className="glass-card p-6 text-center card-lift relative overflow-hidden cursor-pointer glow-hover h-full flex flex-col"
                style={{ border: "1px solid hsl(330 80% 55% / 0.3)" } as React.CSSProperties}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px hsl(330 80% 55% / 0.3), 0 0 50px hsl(330 80% 55% / 0.1)" }}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at center, hsl(330 80% 55% / 0.3), transparent 70%)" }} />
                {/* Click Me badge - yellow */}
                <div className="absolute top-3 right-3 z-20">
                  <motion.span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: "hsl(45 100% 50% / 0.25)", color: "#FACC15", border: "1px solid hsl(45 100% 50% / 0.5)" } as React.CSSProperties}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Click Me
                  </motion.span>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(330 80% 55% / 0.2), hsl(350 80% 55% / 0.2))", border: "1px solid hsl(330 80% 55% / 0.3)" }}>
                    <PartyPopper size={28} style={{ color: "hsl(330 80% 65%)" }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Functions & Events</h3>
                  <p className="text-sm text-muted-foreground mt-auto">Invitation websites for every celebration</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </AnimatedSection>

        {/* Customers Section */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-xl mx-auto px-4 mb-16 text-center">
            <span className="text-sm md:text-base font-semibold uppercase tracking-widest block mb-2" style={{ color: "#FACC15" } as React.CSSProperties}>
              Proud to Showcase
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-6">
              Our Successful <span className="gradient-text">Customer</span>
            </h3>
            
            <motion.div
              className="glass-card p-6 sm:p-8 relative overflow-hidden glow-hover flex flex-col h-full"
              style={{ border: "1px solid hsl(199 89% 48% / 0.3)" } as React.CSSProperties}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(199 89% 48% / 0.2)" }}
            >
              {/* Decorative radial gradient background */}
              <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at center, hsl(199 89% 48% / 0.4), transparent 70%)" }} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Store Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center border border-primary/20 bg-primary/5">
                      <img
                        src="/sri mutharamman store logo.jpeg"
                        alt="Sri Mutharamman Store Logo"
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-extrabold text-foreground text-lg sm:text-xl leading-tight">
                        Sri Mutharamman Store
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5 tracking-wider uppercase font-semibold">Coimbatore</p>
                    </div>
                  </div>
                </div>

                {/* Installed Systems */}
                <div className="border-t border-glass-border pt-5 mt-auto text-left">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                    Deployed Solutions
                  </p>
                  {/* Zorvian Smart Billing Card */}
                  <div className="relative flex flex-col justify-between bg-glass/40 border border-glass-border rounded-xl p-4 w-full">
                    {/* Active badge in top right corner */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] uppercase font-extrabold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20">
                        Active
                      </span>
                    </div>
                    
                    <div className="text-left pr-16 mb-4">
                      <span className="font-bold text-foreground text-sm sm:text-base block">
                        Zorvian Smart Billing-Software
                      </span>
                    </div>

                    {/* Icons and labels container */}
                    <div className="flex items-center gap-4 mt-auto">
                      <a
                        href="https://zorvian-pay.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 text-primary hover:text-white transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-all">
                          <Globe size={18} />
                        </div>
                        <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                          website
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/sri_mutharamman_store?igsh=MXBmYXEyMWkwM3pvbA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-[#E1306C]/10 group-hover:bg-[#E1306C]/20 border border-[#E1306C]/20 flex items-center justify-center group-hover:scale-105 transition-all" style={{ color: '#E1306C' }}>
                          <Instagram size={18} />
                        </div>
                        <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-[#E1306C] transition-colors">
                          instagram
                        </span>
                      </a>
                      <a
                        href="https://maps.app.goo.gl/fFJf6G6zeBaurqRu8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 text-emerald-400 hover:text-white transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-400/10 group-hover:bg-emerald-400/20 border border-emerald-400/20 flex items-center justify-center group-hover:scale-105 transition-all">
                          <MapPin size={18} />
                        </div>
                        <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-emerald-400 transition-colors">
                          direction
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Scroll down indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById("why-choose")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll Down</span>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="container mx-auto px-4 py-20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">ZORVIAN?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fast • Secure • Affordable
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <motion.div
                className="glass-card card-lift p-6 text-center relative overflow-hidden glow-hover"
                style={{ border: "1px solid rgba(255, 255, 255, 0.25)", boxShadow: "0 0 15px rgba(255, 255, 255, 0.05), inset 0 0 15px rgba(255, 255, 255, 0.02)" } as React.CSSProperties}
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255, 255, 255, 0.15), 0 0 50px rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.03)" }}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="absolute inset-0 opacity-5" style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)" }} />
                <div className="relative z-10">
                  <item.icon className="mx-auto mb-3 text-primary" size={28} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
