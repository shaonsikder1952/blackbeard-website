const Footer = () => {
  const links = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-lg font-semibold">Blackbeard</span>
          </div>

          <nav className="flex items-center space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-foreground-muted hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-foreground-subtle text-sm">
            © 2024 Blackbeard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;