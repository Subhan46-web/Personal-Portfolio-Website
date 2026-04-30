import { aiFeatures } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AIWorkflow() {
  const ref = useScrollAnimation();

  return (
    <section id="ai-workflow" className="px-4 py-14 sm:px-6 md:py-14 lg:px-8">
      <div ref={ref} className="content-wrap light-card py-12 sm:py-14">
        <div className="animate-on-scroll grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="chip">Workflow</p>
            <h2 className="mt-6 hidden font-['Plus_Jakarta_Sans'] text-4xl font-extrabold tracking-[-0.05em] text-[#111111] sm:text-5xl md:block">
              I use AI to move faster, then polish everything by hand.
            </h2>
            <h2 className="mt-6 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold tracking-[-0.05em] text-[#111111] md:hidden">
              AI-assisted workflow
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#666666] md:hidden">
              Faster planning, debugging, and UI support with human review.
            </p>
            <p className="mt-6 hidden text-sm leading-8 text-[#666666] md:block sm:text-base">
              AI helps me plan structure, debug problems, and explore UI options quickly. The final
              review, cleanup, and quality decisions still come from careful manual work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aiFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="animate-on-scroll rounded-[24px] bg-[#f4f4f1] p-6"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff8d2e] font-['Plus_Jakarta_Sans'] text-sm font-bold text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-5 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-[-0.04em] text-[#111111]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
