import { Button } from "@/components/ui/button";
import { Chrome, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img 
              src={logo} 
              alt="Blackbeard" 
              className="h-8 w-8"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            />
            <span className="text-lg font-semibold text-foreground">Blackbeard</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Pricing", id: "pricing" },
              { label: "Blog", id: "blog" }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                whileHover="hover"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-primary origin-left"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: { scaleX: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button variant="brand" size="sm" className="h-9 px-4 shadow-[0_2px_10px_hsl(245,75%,60%,0.25)]">
                  <Chrome className="w-4 h-4 mr-2" />
                  Install Free
                </Button>
              </motion.div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 -mr-2 text-foreground-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-border/50 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-3">
                {[
                  { label: "Pricing", id: "pricing" },
                  { label: "Blog", id: "blog" }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors py-2 text-left"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a 
                  href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button variant="brand" size="sm" className="w-full">
                    <Chrome className="w-4 h-4 mr-2" />
                    Install Free
                  </Button>
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
