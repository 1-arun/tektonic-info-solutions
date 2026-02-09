import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import tektonicLogo from "@/assets/tektonic.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Software Development", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Data Analytics", href: "#services" },
  ],
  resources: [
    { name: "Blog", href: "#insights" },
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="section-container py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Address Card */}
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-2">Our Office</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No. 2774/2775, 21st Main Road
                <br />
                Opp existing RTO Building
                <br />
                HSR Layout, Sector-1
                <br />
                Bangalore – 560102
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-2">Email Us</h4>
              <a
                href="mailto:info@tektonicinfo.com"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                info@tektonicinfo.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-2">Call Us</h4>
              <a
                href="tel:+918049744072"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                +91 8049744072
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img
                src={tektonicLogo}
                alt="Tektonic Info Solutions Private Limited"
                className="h-16 w-16 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-foreground">
                Tektonic<span className="gradient-text"> Info Solutions</span>
              </span>
            </a>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Tektonic Info Solutions Private Limited delivers innovative IT
              services and digital solutions that empower businesses to achieve
              their full potential.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Tektonic Info Solutions Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
