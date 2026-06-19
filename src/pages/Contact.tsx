import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Phone, Mail, ArrowLeft, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contacts = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/zorvian_agency?igsh=bWFycHZjZDRwbG5t", color: "#E1306C", text: "@zorvian_agency" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/zorvian-strategy-design-growth-1678133b6", color: "#0A66C2", text: "ZORVIAN Technologies" },
  { icon: Mail, label: "Email", href: "mailto:zorviantechnologies@gmail.com", color: "#EA4335", text: "zorviantechnologies@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919943812771", color: "#25D366", text: "+91 99438 12771" },
  { icon: Phone, label: "Call Us", href: "tel:+916385812770", color: "#00BFFF", text: "+91 63858 12770" },
];

const Contact = () => (
  <main className="min-h-screen pt-20 sm:pt-28 relative z-10">
    <div className="container mx-auto px-4 py-4 mb-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>

    <section className="container mx-auto px-4 py-16">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Contact <span className="gradient-text">Us</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Get in touch with us for your next project.</p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {contacts.map((item) => (
          <AnimatedSection key={item.label}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
              <motion.div
                className="glass-card p-6 text-center card-lift relative overflow-hidden cursor-pointer h-full flex flex-col items-center"
                style={{ border: `1px solid ${item.color}40`, boxShadow: `0 0 15px ${item.color}15` } as React.CSSProperties}
                whileHover={{ scale: 1.03, boxShadow: `0 0 25px ${item.color}30, 0 0 50px ${item.color}15` }}
              >
                <item.icon size={28} className="mb-3" style={{ color: item.color }} />
                <h3 className="text-sm font-bold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground break-all mt-auto">{item.text}</p>
              </motion.div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </main>
);

export default Contact;
