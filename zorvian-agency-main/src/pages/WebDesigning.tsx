import { useNavigate } from "react-router-dom";
import {
  Globe, ShoppingCart, Receipt, Briefcase, GraduationCap, Users,
  PenTool, Share2, Calendar, HeartPulse, Landmark, Rocket,
  Newspaper, FileCode,
  Smile, Zap, Shield, Smartphone, Monitor, Palette, IndianRupee, ArrowLeft,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const services = [
  { icon: <Globe size={32} />, title: "Business Website" },
  { icon: <ShoppingCart size={32} />, title: "E-commerce Website" },
  { icon: <Receipt size={32} />, title: "Billing Website" },
  { icon: <Briefcase size={32} />, title: "Portfolio Website" },
  { icon: <GraduationCap size={32} />, title: "Educational Website" },
  { icon: <Users size={32} />, title: "Employee Management Website" },
  { icon: <PenTool size={32} />, title: "Blog Website" },
  { icon: <Share2 size={32} />, title: "Social Media Website" },
  { icon: <Calendar size={32} />, title: "Booking Website" },
  { icon: <HeartPulse size={32} />, title: "Medical Website" },
  { icon: <Landmark size={32} />, title: "Banking Website" },
  { icon: <Rocket size={32} />, title: "Landing Page" },
  { icon: <FileCode size={32} />, title: "SaaS Website" },
  { icon: <Newspaper size={32} />, title: "News Website" },
];

const features = [
  { icon: <Smile size={32} />, title: "User Friendly Design", desc: "Intuitive interfaces that delight users" },
  { icon: <Zap size={32} />, title: "Fast Loading Speed", desc: "Optimized performance for every page" },
  { icon: <Shield size={32} />, title: "Secure System", desc: "Enterprise-grade security built in" },
  { icon: <Smartphone size={32} />, title: "Responsive Design", desc: "Perfect on every screen size" },
  { icon: <Monitor size={32} />, title: "Mobile + Desktop Support", desc: "Seamless cross-device experience" },
  { icon: <Palette size={32} />, title: "Modern UI/UX", desc: "Stunning contemporary aesthetics" },
  { icon: <IndianRupee size={32} />, title: "Affordable Pricing", desc: "Premium quality at competitive rates" },
];

const WebDesigning = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen pt-20 sm:pt-28 relative z-10">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.2) 0%, transparent 70%)" }} />
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{ backgroundImage: "linear-gradient(135deg, hsl(280 80% 65%), hsl(320 80% 60%), hsl(280 60% 80%))" }} className="bg-clip-text text-transparent">
              Pro - Website & Web App
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            We craft stunning, high-performance websites tailored to your business needs.
          </p>
          <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "hsl(280 60% 70%)" }}>
            User Friendly • Fast • Secure
          </p>
        </AnimatedSection>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Our Services</h2>
          <p className="text-muted-foreground">Every type of website you need, we build it.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <GlowCard icon={s.icon} title={s.title} glowColor="280 80% 55%" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Features</h2>
          <p className="text-muted-foreground">What makes our websites stand out.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.05}>
              <GlowCard icon={f.icon} title={f.title} description={f.desc} glowColor="280 80% 55%" />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WebDesigning;
