import { useNavigate } from "react-router-dom";
import {
  Store, ShoppingCart, UtensilsCrossed, HeartPulse, Wrench, GraduationCap,
  Fuel, Globe, Scissors, Dumbbell, Film, Plane, Package, HardHat, Truck,
  PartyPopper, CarFront,
  Printer, Smartphone, Cloud, Zap, BarChart3, IndianRupee, ArrowLeft,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const industries = [
  { icon: <Store size={32} />, title: "Retail" },
  { icon: <ShoppingCart size={32} />, title: "Supermarket" },
  { icon: <UtensilsCrossed size={32} />, title: "Restaurant" },
  { icon: <HeartPulse size={32} />, title: "Medical Shop" },
  { icon: <Wrench size={32} />, title: "Service Center" },
  { icon: <GraduationCap size={32} />, title: "College / School" },
  { icon: <Fuel size={32} />, title: "Petrol Bunk" },
  { icon: <Globe size={32} />, title: "E-commerce" },
  { icon: <Scissors size={32} />, title: "Salon" },
  { icon: <Dumbbell size={32} />, title: "Gym" },
  { icon: <Film size={32} />, title: "Cinema" },
  { icon: <Plane size={32} />, title: "Travel" },
  { icon: <Package size={32} />, title: "Wholesale" },
  { icon: <HardHat size={32} />, title: "Construction Shop" },
  { icon: <Truck size={32} />, title: "Courier" },
  { icon: <PartyPopper size={32} />, title: "Event Management" },
  { icon: <CarFront size={32} />, title: "Parking / Toll" },
];

const features = [
  { icon: <Printer size={32} />, title: "Printer Machine Support", desc: "Seamless thermal printer integration" },
  { icon: <Smartphone size={32} />, title: "Mobile + Desktop Access", desc: "Manage billing from any device" },
  { icon: <Cloud size={32} />, title: "Cloud Data Storage", desc: "Secure cloud backup for all data" },
  { icon: <Zap size={32} />, title: "Fast & Secure System", desc: "Lightning-fast transaction processing" },
  { icon: <BarChart3 size={32} />, title: "Real-time Reports", desc: "Instant analytics and insights" },
  { icon: <IndianRupee size={32} />, title: "Affordable Pricing", desc: "Plans that fit every budget" },
];

const SmartBilling = () => {
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
          style={{ background: "radial-gradient(circle, hsl(150 80% 45% / 0.2) 0%, transparent 70%)" }} />
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{ backgroundImage: "linear-gradient(135deg, hsl(150 80% 55%), hsl(170 80% 50%), hsl(150 60% 75%))" }} className="bg-clip-text text-transparent">
              Smart Billing System
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Complete billing solutions with printer integration for every industry.
          </p>
          <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "hsl(150 60% 60%)" }}>
            Fast • Secure • Affordable
          </p>
        </AnimatedSection>
      </section>

      {/* Industries */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Industries We Serve</h2>
          <p className="text-muted-foreground">Tailored billing solutions for every sector.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 0.04}>
              <GlowCard icon={ind.icon} title={ind.title} glowColor="150 80% 45%" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Features</h2>
          <p className="text-muted-foreground">Everything you need in a billing system.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.05}>
              <GlowCard icon={f.icon} title={f.title} description={f.desc} glowColor="150 80% 45%" />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SmartBilling;
