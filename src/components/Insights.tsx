import type { OrgConfig } from "@/types/config";
import { ArrowRight } from "lucide-react";

export function Insights({ config }: { config: OrgConfig }) {
  const { heading, subheading, items } = config.insights;

  return (
    <section id="insights" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {subheading}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg dark:border-zinc-800"
          >
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {item.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Read more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
