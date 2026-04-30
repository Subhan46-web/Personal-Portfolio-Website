import { useState } from 'react';
import { experiences } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const ref = useScrollAnimation();
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setOpenCards((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <section id="experience" className="surface-dark mx-4 mt-2 py-10 sm:mx-6 md:mt-3 md:py-14 lg:mx-8">
      <div ref={ref} className="content-wrap">
        <div className="animate-on-scroll flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/55">
              Experience
            </p>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
              Internship experience and front-end growth
            </h2>
          </div>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {experiences.map((experience, index) => {
            const isOpen = openCards.includes(experience.id);

            return (
              <article
                key={experience.id}
                className="animate-on-scroll dark-card p-5"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    {experience.type}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleCard(experience.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-[#ff8d2e]/60 hover:text-[#ff8d2e]"
                    aria-label={isOpen ? 'Collapse experience details' : 'Expand experience details'}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? '−' : '+'}
                  </button>
                </div>

                <span className="mt-3 block text-sm text-white/55">{experience.period}</span>
                <h3 className="mt-4 break-words font-['Plus_Jakarta_Sans'] text-xl font-extrabold leading-tight tracking-[-0.04em] text-white">
                  {experience.title}
                </h3>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-7 text-white/68">{experience.description}</p>

                    <div className="mt-5 space-y-3">
                      {experience.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff8d2e]" />
                          <span className="text-sm leading-7 text-white/76">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 hidden gap-5 md:grid lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="animate-on-scroll dark-card p-8"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="flex flex-col items-start gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-4">
                <span className="rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 md:text-xs md:tracking-[0.2em]">
                  {experience.type}
                </span>
                <span className="text-sm text-white/55">{experience.period}</span>
              </div>

              <h3 className="mt-5 break-words font-['Plus_Jakarta_Sans'] text-xl font-extrabold leading-tight tracking-[-0.04em] text-white md:mt-6 md:text-3xl">
                {experience.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/68">{experience.description}</p>

              <div className="mt-6 space-y-3">
                {experience.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff8d2e]" />
                    <span className="text-sm leading-7 text-white/76">{highlight}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
