import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// Custom icons for platforms not in lucide
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const Footer = () => {
  const links = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
    { label: "Documentation", href: "/documentation" },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61585880293954", label: "Facebook" },
    { icon: XIcon, href: "https://x.com/bbrewrite_", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/bbrewrite/", label: "LinkedIn" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@bbrewrite", label: "TikTok" },
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
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href} // ✅ HashRouter automatically handles the #
                  className="text-sm sm:text-base text-foreground-muted hover:text-brand-primary transition-colors duration-200 inline-flex items-center group"
                >
                  {link.label}
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                </Link>
              ))}
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
