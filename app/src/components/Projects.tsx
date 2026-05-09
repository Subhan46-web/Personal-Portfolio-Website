import { useState } from 'react';
import { projects } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProjectPreview({
  accent,
  title,
  href,
  image,
  imageAlt,
  imagePosition,
}: {
  accent: string;
  title: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  return (
    <div className="project-frame">
      <div className={`project-thumb bg-gradient-to-br ${accent}`}>
        {image ? (
          <>
            <img
              src={image}
              alt={imageAlt ?? title}
              className="absolute inset-0 h-full w-full object-contain p-3"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-white/10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%)]" />
            <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4">
              <div className="col-span-4 rounded-[18px] bg-white/86" />
              <div className="col-span-2 rounded-[18px] bg-white/42" />
              <div className="col-span-2 rounded-[18px] bg-black/28" />
              <div className="col-span-2 rounded-[18px] bg-white/56" />
              <div className="col-span-2 rounded-[18px] bg-black/22" />
              <div className="col-span-3 rounded-[18px] bg-white/76" />
              <div className="col-span-1 rounded-[18px] bg-[#ff8d2e]/78" />
              <div className="col-span-2 rounded-[18px] bg-white/66" />
              <div className="col-span-2 rounded-[18px] bg-white/82" />
              <div className="col-span-2 rounded-[18px] bg-black/24" />
              <div className="col-span-2 rounded-[18px] bg-white/52" />
            </div>
          </>
        )}
        <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/92">
          <span className="rounded-full bg-black/45 px-2.5 py-1">{title}</span>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="project-arrow h-11 w-11 text-lg"
          aria-label={`Open ${title} project`}
        >
          ↗
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);
  const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
  const primaryProjects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);
  const currentMobileProject = projects[mobileProjectIndex];

  const goToPreviousProject = () => {
    setMobileProjectIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const goToNextProject = () => {
    setMobileProjectIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="projects" className="px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <div ref={ref} className="surface-dark content-wrap py-10 sm:py-14 md:py-14">
        <div className="animate-on-scroll mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
            Portfolio
          </p>
          <h2 className="hidden font-['Plus_Jakarta_Sans'] text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl md:block">
            Featured <span className="text-[#ff8d2e]">projects.</span>
          </h2>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold tracking-[-0.05em] text-white md:hidden">
            Featured <span className="text-[#ff8d2e]">projects.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/62 md:hidden">
            A few selected builds with clean UI and responsive layouts.
          </p>
          <p className="mx-auto mt-5 hidden max-w-xl text-sm leading-7 text-white/62 md:block sm:text-base">
            Selected front-end work focused on clean layouts, polished interfaces, and responsive
            user experience.
          </p>
        </div>

        <div className="mt-10 md:hidden">
          <article className="project-card-dark">
            <ProjectPreview
              accent={currentMobileProject.accent}
              title={currentMobileProject.category}
              href={currentMobileProject.liveUrl}
              image={currentMobileProject.image}
              imageAlt={currentMobileProject.imageAlt}
              imagePosition={currentMobileProject.imagePosition}
            />
            <div className="mt-5">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/44">
                <span>{currentMobileProject.category}</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold tracking-[-0.04em] text-white md:text-2xl">
                {currentMobileProject.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60 md:leading-7">
                {currentMobileProject.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {currentMobileProject.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/76"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goToPreviousProject}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-[#ff8d2e]/60 hover:text-[#ff8d2e]"
              aria-label="Previous project"
            >
              ←
            </button>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {mobileProjectIndex + 1} / {projects.length}
            </div>
            <button
              type="button"
              onClick={goToNextProject}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-[#ff8d2e]/60 hover:text-[#ff8d2e]"
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-14 hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
          {primaryProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card-dark animate-on-scroll"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <ProjectPreview
                accent={project.accent}
                title={project.category}
                href={project.liveUrl}
                image={project.image}
                imageAlt={project.imageAlt}
                imagePosition={project.imagePosition}
              />
              <div className="mt-5">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/44">
                  <span>{project.category}</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold tracking-[-0.04em] text-white md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/76"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {remainingProjects.length > 0 && (
          <>
            <div
              className={`hidden overflow-hidden transition-all duration-500 ease-out md:grid ${
                showMore ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-100'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {remainingProjects.map((project, index) => (
                    <article
                      key={project.id}
                      className="project-card-dark animate-on-scroll"
                      style={{ transitionDelay: `${(index + 3) * 0.12}s` }}
                    >
                      <ProjectPreview
                        accent={project.accent}
                        title={project.category}
                        href={project.liveUrl}
                        image={project.image}
                        imageAlt={project.imageAlt}
                        imagePosition={project.imagePosition}
                      />
                      <div className="mt-5">
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/44">
                          <span>{project.category}</span>
                        </div>
                        <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-[-0.04em] text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/60">{project.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/76"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14 hidden text-center md:block">
            <button
              type="button"
              onClick={() => setShowMore((current) => !current)}
              className="btn-primary"
            >
              {showMore ? 'Show less' : 'See more'}
              <span aria-hidden="true">{showMore ? '↑' : '→'}</span>
            </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
