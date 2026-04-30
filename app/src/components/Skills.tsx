import { skillCategories } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="surface-dark mx-4 mt-2 py-10 sm:mx-6 md:mt-3 md:py-14 lg:mx-8">
      <div ref={ref} className="content-wrap">
        <div className="animate-on-scroll text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/55">
            Services
          </p>
          <h2 className="hidden font-['Plus_Jakarta_Sans'] text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:block">
            What can I do for you
          </h2>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold tracking-[-0.04em] text-white md:hidden">
            What I do
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          {skillCategories.map((category) => (
            <article key={category.category} className="light-card p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e8e8e8] font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#6f6f6f]">
                {category.icon}
              </div>
              <h3 className="mt-4 font-['Plus_Jakarta_Sans'] text-xl font-extrabold tracking-[-0.04em] text-[#121212]">
                {category.category}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#666666]">{category.description}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full bg-[#f4f4f4] px-3 py-1 text-xs font-semibold text-[#555555]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 hidden gap-5 md:grid md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <article
              key={category.category}
              className="animate-on-scroll light-card p-8 text-center"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e8e8] font-['Plus_Jakarta_Sans'] text-base font-bold text-[#6f6f6f]">
                {category.icon}
              </div>
              <h3 className="mt-6 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-[-0.04em] text-[#121212]">
                {category.category}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#666666] md:leading-7">{category.description}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full bg-[#f4f4f4] px-3 py-1 text-xs font-semibold text-[#555555]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
