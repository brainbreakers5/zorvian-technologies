import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/zorvian-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Pro - Website & Web App", path: "/website-designing" },
  { label: "Smart Billing System", path: "/smart-billing" },
  { label: "Functions & Events", path: "/functions-events" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/zorvian_agency?igsh=bWFycHZjZDRwbG5t", label: "Instagram", color: "#E1306C" },
  { icon: MessageCircle, href: "https://wa.me/919943812771", label: "WhatsApp", color: "#25D366" },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border/50 backdrop-blur-2xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={logo} alt="ZORVIAN Agency" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex-shrink-0" />
          <span className="text-sm sm:text-lg font-bold gradient-text tracking-wider truncate">ZORVIAN TECHNOLOGIES</span>
        </Link>


        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="icon-glow p-2 transition-all duration-300" style={{ color: s.color }}>
                <s.icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile social icons */}
          <div className="lg:hidden flex items-center gap-2">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="icon-glow p-1.5 transition-all duration-300" style={{ color: s.color }}>
                <s.icon size={16} />
              </a>
            ))}
          </div>

          {/* Menu button - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu - mobile only */}
      {menuOpen && (
        <div className="lg:hidden border-t border-glass-border/30 glass-card animate-fade-in">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:text-primary hover:bg-secondary/50 ${
                  location.pathname === link.path ? "text-primary bg-secondary/30" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
