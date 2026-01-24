import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Our Menu", href: "/products" },
  { name: "Our Story", href: "/about" },
  { name: "Ingredients", href: "/about" },
  { name: "FAQs", href: "/faq" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "mailto:hello@shahiserve.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-royal-navy py-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img src={logo} alt="Shahi Serve" className="h-14 w-auto mb-3" />
            <p className="text-royal-cream/70 text-sm mb-4 max-w-xs">
              Reimagining Indian cuisine with heritage recipes, premium ingredients, and zero compromises. Every meal is crafted for royalty.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-royal-navy-light rounded-full flex items-center justify-center text-royal-cream/70 hover:bg-royal-gold hover:text-royal-navy transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-heading text-base font-semibold text-royal-cream-light mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-royal-cream/60 hover:text-royal-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Registered Office */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="font-heading text-base font-semibold text-royal-cream-light mb-3">
              Registered Office
            </h4>
            <div className="text-sm">
              <p className="text-royal-cream-light font-semibold mb-1">NAZARA FOOD COMPANY</p>
              <p className="text-royal-cream/60 leading-relaxed mb-3">
                Plot No-130, Industrial Area,<br />
                Phase-9, Mohali SAS Nagar,<br />
                Mohali, Punjab-160066
              </p>
              <p className="text-royal-cream/60">hello@shahiserve.com</p>
              <p className="text-royal-cream/60">+91 8755925645</p>
            </div>
          </motion.div>
        </div>

        {/* FSSAI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-royal-navy-light/50 rounded-lg border border-royal-cream/10">
            <div className="px-2 py-1 bg-white rounded text-xs font-bold text-royal-navy">
              fssai
            </div>
            <div>
              <p className="text-royal-cream-light font-semibold text-xs">FSSAI Licensed</p>
              <p className="text-royal-cream/60 text-xs">Lic. No: 12345678901234</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-cream/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-royal-cream/50 text-xs">
              © 2025 Shahi Serve. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                to="/privacy"
                className="text-royal-cream/50 hover:text-royal-gold transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-royal-cream/50 hover:text-royal-gold transition-colors text-xs"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
