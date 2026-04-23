import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">LP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-foreground">Clínica Lá Paz</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Cuidando da sua saúde</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5511999999999" className="flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              (11) 99999-9999
            </a>
            <Button asChild>
              <Link to="/agendar">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+5511999999999" className="flex items-center gap-2 text-primary font-medium">
                  <Phone className="w-4 h-4" />
                  (11) 99999-9999
                </a>
                <Button asChild className="w-full">
                  <Link to="/agendar">Agendar Consulta</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
