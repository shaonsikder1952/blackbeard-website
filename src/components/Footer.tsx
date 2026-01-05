import { Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { label: "Privacy", href: "/privacy.tsx" },
    { label: "Terms", href: "/terms.tsx" },
    { label: "Contact", href: "/contact.tsx" },
    { label: "Documentation", href: "/documentation.tsx" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="border-t border-border/50 py-12 sm:py-16 px-4 sm:px-6 bg-surface/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-brand">
                <span className="text-white font-bold text-base sm:text-lg">B</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-foreground">Blackbeard</span>
            </div>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed max-w-md">
              The AI Chrome extension that rewrites text to match your unique voice and style. 
              Trusted by thousands of professionals worldwide.
            </p>
          </div>

          {/* Links section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              {links.map((link, index) => {
                const isInternal = link.href && link.href.startsWith('/');
                const commonProps = {
                  className: "text-sm sm:text-base text-foreground-muted hover:text-brand-primary transition-colors duration-200 inline-flex items-center group",
                };

                return isInternal ? (
                  <Link key={index} to={link.href} {...commonProps}>
                    {link.label}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </Link>
                ) : (
                  <a key={index} href={link.href} {...commonProps}>
                    {link.label}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Social section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex items-center space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface hover:bg-surface-elevated border border-border/50 hover:border-brand-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-brand/20"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground-muted hover:text-brand-primary transition-colors duration-200" />
                </a>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-foreground-subtle">
              Follow us for updates and tips
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 sm:pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
          <p className="text-foreground-subtle text-xs sm:text-sm text-center md:text-left">
            © 2026 Blackbeard. All rights reserved. Made with ❤️ for better writing.
          </p>
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-foreground-subtle">
            <span>Built with</span>
            <div className="w-1 h-1 bg-brand-primary rounded-full animate-pulse"></div>
            <span>AI-powered precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
