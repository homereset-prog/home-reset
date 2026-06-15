const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeHkE6yR0ZedJcaKDQ-ejIFIIRQ44DYvTDqUCJdKFOLvZXXyg/viewform';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Request a Reset', href: FORM_URL, external: true },
  { label: 'Connect', href: '#connect' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <img
                src="18207.png"
                alt="Spectrum Home Reset logo"
                className="object-contain"
                style={{ height: '52px', maxWidth: '220px', filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p className="text-navy-100 text-sm md:text-base leading-relaxed max-w-sm">
              Home reset and detailed cleaning for real-life spaces.
            </p>
            <p className="mt-1 text-navy-100 text-sm md:text-base">
              Serving local Colorado households.
            </p>
            <p className="mt-4 font-serif italic text-coral-200 text-base">
              Because life happens.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-navy-200 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-navy-100 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-400 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-300 text-xs">
            &copy; {new Date().getFullYear()} Spectrum Home Reset. All rights reserved.
          </p>
          <p className="text-navy-300 text-xs">Colorado</p>
        </div>
      </div>
    </footer>
  );
}
