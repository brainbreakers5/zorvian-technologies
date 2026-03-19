import { useNavigate } from "react-router-dom";
import {
  Heart, Home, Store, Cake, Baby, Scissors as ScissorsIcon, Ear,
  CalendarHeart, Users, Briefcase, Flower2,
  IndianRupee, Smartphone, Zap, Smile, Palette, HeadphonesIcon,
  ArrowLeft, PartyPopper, Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const events = [
  { icon: <Heart size={32} />, title: "Marriage Functions" },
  { icon: <Home size={32} />, title: "House Warming" },
  { icon: <Store size={32} />, title: "Shop Opening" },
  { icon: <Cake size={32} />, title: "Birthday Celebration" },
  { icon: <Baby size={32} />, title: "Seemantham" },
  { icon: <ScissorsIcon size={32} />, title: "Head Tonsure" },
  { icon: <Ear size={32} />, title: "Ear Piercing" },
  { icon: <CalendarHeart size={32} />, title: "Anniversary" },
  { icon: <Users size={32} />, title: "Family Events" },
  { icon: <Briefcase size={32} />, title: "Business Events" },
  { icon: <Flower2 size={32} />, title: "Memorial Functions" },
];

const features = [
  { icon: <IndianRupee size={32} />, title: "Very Affordable Prices", desc: "Premium quality at budget-friendly rates" },
  { icon: <Smartphone size={32} />, title: "Mobile + Desktop Compatible", desc: "Perfect on every screen size" },
  { icon: <Zap size={32} />, title: "Fast & Secure System", desc: "Lightning-fast with enterprise security" },
  { icon: <Smile size={32} />, title: "User Friendly Design", desc: "Intuitive interfaces for all users" },
  { icon: <Palette size={32} />, title: "Modern UI/UX Design", desc: "Stunning contemporary aesthetics" },
  { icon: <HeadphonesIcon size={32} />, title: "Full Support Available", desc: "Complete assistance at every step" },
];

const GLOW = "330 80% 55%";

const FunctionsEvents = () => {
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
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(330 80% 55% / 0.2) 0%, transparent 70%)" }}
        />
        <AnimatedSection>
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, hsl(330 80% 55% / 0.2), hsl(350 80% 55% / 0.2))",
                border: "1px solid hsl(330 80% 55% / 0.3)",
              }}
            >
              <PartyPopper size={36} style={{ color: "hsl(330 80% 65%)" }} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span
              style={{ backgroundImage: "linear-gradient(135deg, hsl(330 80% 65%), hsl(350 80% 60%), hsl(20 90% 60%))" }}
              className="bg-clip-text text-transparent"
            >
              Functions & Events
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Invitation Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            We develop websites for all your functions & events
          </p>
          <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "hsl(330 60% 65%)" }}>
            Your Function, Your Website, Our Technology
          </p>
        </AnimatedSection>
      </section>

      {/* Tagline banner */}
      <section className="container mx-auto px-4 pb-8">
        <AnimatedSection>
          <motion.div
            className="glass-card p-6 sm:p-8 text-center max-w-3xl mx-auto"
            style={{ border: "1px solid hsl(330 80% 55% / 0.3)" }}
            whileHover={{ boxShadow: "0 0 30px hsl(330 80% 55% / 0.2)" }}
          >
            <Globe size={28} className="mx-auto mb-3" style={{ color: "hsl(330 80% 65%)" }} />
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Turn Your Events Into Digital Experiences
            </h3>
            <p className="text-muted-foreground text-sm">
              Professional Websites for Every Celebration
            </p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* We Serve */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">We Serve</h2>
          <p className="text-muted-foreground">Beautiful invitation websites for every occasion.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {events.map((e, i) => (
            <AnimatedSection key={e.title} delay={i * 0.04}>
              <GlowCard icon={e.icon} title={e.title} glowColor={GLOW} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Features</h2>
          <p className="text-muted-foreground">What makes our event websites stand out.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.05}>
              <GlowCard icon={f.icon} title={f.title} description={f.desc} glowColor={GLOW} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FunctionsEvents;
