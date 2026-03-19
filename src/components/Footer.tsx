import { Instagram, MessageCircle, Mail, Linkedin } from "lucide-react";

const links = [
  { icon: Instagram, href: "https://www.instagram.com/zorvian_agency?igsh=bWFycHZjZDRwbG5t", label: "Instagram", color: "#E1306C" },
  { icon: MessageCircle, href: "https://wa.me/919943812771", label: "WhatsApp", color: "#25D366" },
  { icon: Mail, href: "mailto:zorviantechnologies@gmail.com", label: "Email", color: "#EA4335" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/zorvian-strategy-design-growth-1678133b6", label: "LinkedIn", color: "#0A66C2" },
];

const Footer = () => (
  <footer className="border-t border-glass-border relative z-10">
    <div className="container mx-auto px-4 py-8 sm:py-12 text-center">
      <h2 className="text-2xl font-bold gradient-text mb-1">ZORVIAN Technologies</h2>
      <p className="text-sm mb-2" style={{ color: "hsl(220, 80%, 40%)" }}>Powered by Brain Breakers</p>
      <p className="text-sm font-semibold text-foreground mb-1">Contact Us</p>
      <p className="text-xs text-muted-foreground mb-6">Get in touch with us for your next project</p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-outline px-5 py-2 text-sm flex items-center gap-2"
          >
            <l.icon size={16} style={{ color: l.color }} />
            {l.label}
          </a>
        ))}
      </div>
    </div>

    <div className="border-t border-glass-border py-6 text-center">
      <p className="text-sm text-muted-foreground">© 2026 Zorvian Technologies. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
