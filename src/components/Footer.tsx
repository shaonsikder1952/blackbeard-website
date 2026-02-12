import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const Footer = () => {
  const links = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
    { label: "Docs", href: "/documentation" },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61585880293954", label: "Facebook" },
    { icon: XIcon, href: "https://x.com/bbrewrite_", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/bbrewrite/", label: "LinkedIn" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@bbrewrite", label: "TikTok" },
  ];

  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-12 bg-muted/30 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Blackbeard" className="w-9 h-9 rounded-lg object-cover" />
            <span className="text-xl font-bold text-foreground">Blackbeard</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-9 sm:h-9 rounded-lg bg-background border border-border flex items-center justify-center text-foreground-muted hover:text-brand-primary hover:border-brand-primary/50 transition-colors"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-muted">
            © 2026 Blackbeard. All rights reserved.
          </p>

          <a
            href="https://www.producthunt.com/products/blackbeard?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-blackbeard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1063496&theme=light&t=1768509910436"
              alt="Blackbeard on Product Hunt"
              width="200"
              height="43"
              className="h-[38px] sm:h-[43px] w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
