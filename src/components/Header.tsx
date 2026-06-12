import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Request a Reset', href: '#request' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-soft' : 'bg-cream-100/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 flex items-center"
            onClick={closeMenu}
            aria-label="Spectrum Home Reset — go to top"
          >
            <img
              src="18207.png"
              alt="Spectrum Home Reset logo"
              className="object-contain w-auto"
              style={{
                height: 'clamp(44px, 6vw, 64px)',
                maxWidth: 'min(70vw, 260px)',
              }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy-500 hover:text-sage-500 font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#request"
              className="ml-2 px-5 py-2.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Request a Reset
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-navy-500 hover:text-sage-500 hover:bg-sage-50 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 shadow-card">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-navy-500 hover:bg-cream-100 hover:text-sage-500 font-medium text-base transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
