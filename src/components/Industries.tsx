import type { OrgConfig } from "@/types/config";

export function Industries({ config }: { config: OrgConfig }) {
  const { heading, items } = config.industries;

  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
        {heading}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl bg-zinc-50 p-6 transition-colors hover:bg-primary/5"
          >
            <h3 className="text-base font-semibold text-zinc-900">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
