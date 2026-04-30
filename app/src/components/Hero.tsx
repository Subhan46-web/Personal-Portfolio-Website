export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(184,189,229,0.8),_transparent_35%),linear-gradient(180deg,#f9f8f5_0%,#f5f3ef_100%)] pb-20 pt-10 sm:pb-24"
    >
      <div className="content-wrap">
        <div className="mx-auto max-w-4xl px-4 pb-10 pt-16 text-center sm:px-6">
          <p className="mb-6 text-sm font-semibold text-[#8e8a84] sm:text-base">
            Hello, I&apos;m Subhan Raza and I&apos;m a
          </p>

          <h1 className="section-heading mx-auto hidden max-w-4xl text-[#121212] md:block">
            Front-End Developer
            <br />
            building modern web experiences
          </h1>
          <h1 className="mx-auto max-w-xs font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#121212] md:hidden">
            Front-End
            <br />
            Developer
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#6f6b67] md:hidden">
            Building clean, responsive websites and dashboards.
          </p>
          <p className="mx-auto mt-8 hidden max-w-2xl text-base leading-8 text-[#6f6b67] md:block sm:text-lg">
            I design and build clean portfolio sites, dashboard interfaces, and business websites
            with a strong focus on usability, responsiveness, and polished presentation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => scrollTo('projects')} className="btn-primary">
              Check my projects
              <span aria-hidden="true">↗</span>
            </button>
            <button type="button" onClick={() => scrollTo('contact')} className="btn-secondary">
              Email me
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6f6b67]">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">React</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">TypeScript</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Tailwind CSS</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">WordPress</span>
          </div>
        </div>
      </div>
    </section>
  );
}
