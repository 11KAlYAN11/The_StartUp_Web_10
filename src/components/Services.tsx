import type { OrgConfig } from "@/types/config";
import { Icon } from "./Icon";

export function Services({ config }: { config: OrgConfig }) {
  const { heading, subheading, items } = config.services;

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-zinc-600">{subheading}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Icon name={item.icon} className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
