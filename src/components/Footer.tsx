import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  menu: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Refund Policy", href: "/refund" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-royal-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <img src={logo} alt="Shahi Serve" className="h-20 w-auto mb-4" />
            <p className="text-royal-cream/70 text-sm mb-6">
              The Feast You Truly Deserve. Premium ready-to-eat royal Indian cuisine 
              delivered to your doorstep.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-royal-navy-light rounded-full flex items-center justify-center text-royal-cream/70 hover:bg-royal-gold hover:text-royal-navy transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Menu Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold text-royal-cream-light mb-4">
              Menu
            </h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-royal-cream/60 hover:text-royal-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold text-royal-cream-light mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-royal-cream/60 hover:text-royal-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-semibold text-royal-cream-light mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-royal-cream/60 text-sm">
                <Mail size={18} className="mt-0.5 text-royal-gold" />
                <span>hello@shahiserve.com</span>
              </li>
              <li className="flex items-start gap-3 text-royal-cream/60 text-sm">
                <Phone size={18} className="mt-0.5 text-royal-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-royal-cream/60 text-sm">
                <MapPin size={18} className="mt-0.5 text-royal-gold flex-shrink-0" />
                <span>Nazara Food Company<br />Ghaziabad, Uttar Pradesh - 245304</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* FSSAI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-royal-navy-light pt-8 mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 p-4 bg-royal-navy-light/50 rounded-xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-royal-gold" />
              <div>
                <p className="text-royal-cream-light font-semibold text-sm">FSSAI Licensed</p>
                <p className="text-royal-gold font-mono text-lg tracking-wider">12345678901234</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-royal-cream/20" />
            <p className="text-royal-cream/60 text-xs text-center sm:text-left max-w-xs">
              Your safety is our priority. All our products are FSSAI certified for quality and hygiene.
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-navy-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-royal-cream/50 text-sm">
              © 2026 Shahi Serve. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-royal-cream/50 hover:text-royal-gold transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
