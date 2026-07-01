import type { OrgConfig } from "@/types/config";
import { CheckCircle2 } from "lucide-react";

export function WhyUs({ config }: { config: OrgConfig }) {
  const { heading, headingHighlight, items } = config.whyUs;

  return (
    <section id="why-us" className="bg-zinc-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          {heading}
          {headingHighlight ? (
            <>
              {" "}
              <span className="text-primary">{headingHighlight}</span>
            </>
          ) : null}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
