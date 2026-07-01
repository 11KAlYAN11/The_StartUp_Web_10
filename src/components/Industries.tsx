import type { OrgConfig } from "@/types/config";

export function Industries({ config }: { config: OrgConfig }) {
  const { heading, items } = config.industries;

  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
        {heading}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) =>
          item.image ? (
            <div
              key={item.name}
              className="group relative h-56 overflow-hidden rounded-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-200">
                  {item.description}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={item.name}
              className="rounded-2xl bg-zinc-50 p-6 transition-colors hover:bg-primary/5 dark:bg-zinc-900"
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
