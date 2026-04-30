import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#projects' },
  { label: 'Service', href: '#skills' },
  { label: 'Resume', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((item) => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 160) {
          setActive(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 px-5 pt-4 sm:px-8 lg:px-12">
      <div
        className={`nav-pill mx-auto max-w-6xl px-5 transition-all duration-300 ${
          scrolled ? 'py-2.5 md:py-4' : 'py-4'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => scrollTo('#home')}
            className={`font-['Plus_Jakarta_Sans'] font-extrabold tracking-[-0.03em] text-white transition-all duration-300 ${
              scrolled ? 'text-sm md:text-base' : 'text-base'
            }`}
          >
            • Subhan Raza •
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 md:hidden ${
              scrolled ? 'h-9 w-9' : 'h-10 w-10'
            }`}
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{menuOpen ? '×' : '≡'}</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      active === id
                        ? 'bg-white text-[#111111] font-semibold'
                        : 'text-white/76 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {menuOpen && (
          <div className="mt-4 grid gap-2 md:hidden">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    active === id ? 'bg-white text-[#111111] font-semibold' : 'text-white/76'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
