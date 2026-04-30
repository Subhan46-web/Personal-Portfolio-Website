import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'UI Components & Web Projects' },
  { value: '5+', label: 'Business Websites' },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="mt-3 px-4 pb-4 pt-2 sm:px-6 md:mt-4 md:pb-6 md:pt-3 lg:px-8">
      <div ref={ref} className="content-wrap">
        <div className="md:hidden">
          <article className="animate-on-scroll light-card p-5">
            <p className="chip">About</p>
            <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold tracking-[-0.05em] text-[#111111]">
              Clean, modern front-end work.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#666666]">
              I build responsive websites and dashboards with a focus on clarity, usability, and
              polished presentation.
            </p>
          </article>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {stats.map((item, index) => (
              <article
                key={item.label}
                className="animate-on-scroll light-card flex min-h-[118px] flex-col justify-center p-3 text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-[-0.05em] text-[#111111]">
                  {item.value}
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.08em] text-[#8f8f8f]">
                  {item.label}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden gap-8 md:grid lg:grid-cols-[1.2fr_0.8fr]">
          <article className="animate-on-scroll light-card p-8 sm:p-10">
            <p className="chip">About</p>
            <h2 className="mt-6 hidden font-['Plus_Jakarta_Sans'] text-4xl font-extrabold tracking-[-0.05em] text-[#111111] sm:text-5xl md:block">
              Designing and building websites that feel modern, simple, and useful.
            </h2>
            <h2 className="mt-6 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold tracking-[-0.05em] text-[#111111] md:hidden">
              Clean, modern front-end work.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-8 text-[#666666] sm:text-base">
              <p className="md:hidden">
                I build responsive websites and dashboards with a focus on clarity and usability.
              </p>
              <p>
                I focus on front-end development for portfolios, business websites, and dashboard
                interfaces. My goal is to turn ideas into layouts that are clean, responsive, and
                comfortable to use.
              </p>
              <p className="hidden md:block">
                Alongside React and TypeScript work, I also build and customize WordPress websites,
                improve existing UIs, and use AI tools to speed up planning and debugging without
                losing quality.
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            {stats.map((item, index) => (
              <article
                key={item.label}
                className="animate-on-scroll light-card flex min-h-[140px] flex-col justify-center p-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="font-['Plus_Jakarta_Sans'] text-4xl font-extrabold tracking-[-0.05em] text-[#111111]">
                  {item.value}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8f8f8f] md:text-sm md:tracking-[0.18em]">
                  {item.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
