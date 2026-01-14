import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Car, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass-card py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
              <Car className="w-5 h-5 text-background" />
            </div>
            <span className="text-base sm:text-lg font-bold text-foreground">
              Concessionária <span className="gradient-text">Inteligente</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium outline-none">
                Legal
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="/termos-de-uso" className="cursor-pointer">
                    Termos de Uso
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/politica-de-privacidade" className="cursor-pointer">
                    Política de Privacidade
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/lgpd" className="cursor-pointer">
                    LGPD
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" asChild>
              <a href="#contato">Solicitar Demo</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in bg-background/95 backdrop-blur-lg rounded-lg px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border pt-4 mt-2">
                <p className="text-xs font-semibold text-muted-foreground mb-3">LEGAL</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="/termos-de-uso"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Termos de Uso
                  </a>
                  <a
                    href="/politica-de-privacidade"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Política de Privacidade
                  </a>
                  <a
                    href="/lgpd"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    LGPD
                  </a>
                </div>
              </div>
              <Button variant="hero" size="default" className="mt-2" asChild>
                <a href="#contato">Solicitar Demo</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
