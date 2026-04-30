import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/subhanraza',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.06-.8-1.94-1.92-1.94S3.3 3.88 3.3 4.94c0 1.04.8 1.92 1.9 1.92h.02c1.14 0 1.94-.88 1.94-1.92ZM20.7 13.4c0-3.48-1.86-5.1-4.34-5.1-2 0-2.9 1.1-3.4 1.88V8.5H9.58c.04 1.12 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.28-.68.92-1.38 2-1.38 1.42 0 1.98 1.08 1.98 2.68V20h3.38v-6.6Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Subhan46-web',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.87 10.95.58.1.8-.25.8-.57 0-.28-.02-1.22-.02-2.2-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.26 3.34.96.1-.74.4-1.26.72-1.56-2.56-.28-5.24-1.28-5.24-5.72 0-1.26.46-2.3 1.18-3.12-.12-.3-.52-1.46.12-3.04 0 0 .98-.32 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.18-1.18 3.18-1.18.64 1.58.24 2.74.12 3.04.74.82 1.18 1.86 1.18 3.12 0 4.46-2.7 5.44-5.28 5.72.42.36.78 1.08.78 2.18 0 1.58-.02 2.86-.02 3.26 0 .32.2.68.8.56 4.56-1.54 7.84-5.84 7.84-10.94C23.5 5.66 18.35.5 12 .5Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="surface-dark mx-4 mt-3 py-14 sm:mx-6 md:py-14 lg:mx-8">
      <div ref={ref} className="content-wrap">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-on-scroll">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/55">
              Contact
            </p>
            <h2 className="hidden font-['Plus_Jakarta_Sans'] text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl md:block">
              Let&apos;s start
              <br />
              project together?
            </h2>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold tracking-[-0.05em] text-white md:hidden">
              Let&apos;s connect
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/68 md:hidden">
              Open to front-end roles, freelance work, and collaboration.
            </p>
            <p className="mt-6 hidden max-w-xl text-sm leading-8 text-white/68 md:block sm:text-base">
              Contact me for questions, collaboration, or front-end opportunities. I&apos;m happy
              to talk about websites, dashboards, redesigns, and ongoing client work.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-base font-semibold text-white sm:text-lg">
              <a href="mailto:subhan0964@gmail.com" className="underline underline-offset-4">
                subhan0964@gmail.com
              </a>
              <a href="tel:+971541961094" className="underline underline-offset-4">
                +971 54 196 1094
              </a>
            </div>
          </div>

          <div className="animate-on-scroll flex justify-center lg:justify-end">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(195,171,255,0.85)_42%,_rgba(96,122,255,0.55)_70%,_rgba(12,12,12,0)_72%)]">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#1b1b1b] text-center">
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white">
                    SR
                  </div>
                  <div className="mt-2 text-sm text-white/70">Front-End Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-8">
            <div className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white">
              • Subhan Raza •
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-start">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-base font-semibold text-white/82 transition hover:border-[#ff8d2e]/50 hover:text-white"
                >
                  <span className="text-white/90">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
