"use client";

import { useState } from "react";
import type { OrgConfig } from "@/types/config";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact({ config }: { config: OrgConfig }) {
  const { contact } = config.org;
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!contact.formEndpoint) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Need help with your business?
          </h2>
          <p className="mt-4 max-w-md text-lg text-zinc-600">
            Tell us about your project and we&apos;ll get back to you within
            one business day.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-zinc-700">
              <Mail className="h-5 w-5 text-primary" />
              {contact.email}
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-700">
              <Phone className="h-5 w-5 text-primary" />
              {contact.phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-700">
              <MapPin className="h-5 w-5 text-primary" />
              {contact.address}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-200 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Full name"
              className="col-span-1 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-primary sm:col-span-2"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <input
              name="phone"
              placeholder="Mobile number"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <input
              name="designation"
              placeholder="Designation"
              className="col-span-1 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-primary sm:col-span-2"
            />
            <textarea
              required
              name="message"
              placeholder="Message"
              rows={4}
              className="col-span-1 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-primary sm:col-span-2"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm text-green-600">
              Thanks — we&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-600">
              {contact.formEndpoint
                ? "Something went wrong. Please try again or email us directly."
                : `Form is not yet configured — please email ${contact.email} directly.`}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
