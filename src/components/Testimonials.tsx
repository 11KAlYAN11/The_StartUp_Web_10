import type { OrgConfig } from "@/types/config";
import { Quote } from "lucide-react";

export function Testimonials({ config }: { config: OrgConfig }) {
  const { heading, items } = config.testimonials;

  return (
    <section id="testimonials" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.author}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-4 flex-1 text-sm text-zinc-700">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-zinc-900">
                  {item.author}
                </p>
                <p className="text-xs text-zinc-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
