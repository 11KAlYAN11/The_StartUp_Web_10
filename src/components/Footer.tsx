import type { OrgConfig } from "@/types/config";
import { LinkedinGlyph, TwitterGlyph, GithubGlyph } from "./SocialIcons";

export function Footer({ config }: { config: OrgConfig }) {
  const { org, footer } = config;

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-zinc-900">{org.logoText}</p>
            <p className="mt-3 max-w-xs text-sm text-zinc-600">
              {footer.description}
            </p>
            <div className="mt-4 flex gap-4">
              {org.social.linkedin && (
                <a href={org.social.linkedin} aria-label="LinkedIn">
                  <LinkedinGlyph className="h-5 w-5 text-zinc-500 hover:text-primary" />
                </a>
              )}
              {org.social.twitter && (
                <a href={org.social.twitter} aria-label="Twitter">
                  <TwitterGlyph className="h-5 w-5 text-zinc-500 hover:text-primary" />
                </a>
              )}
              {org.social.github && (
                <a href={org.social.github} aria-label="GitHub">
                  <GithubGlyph className="h-5 w-5 text-zinc-500 hover:text-primary" />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-900">Navigate</p>
            <ul className="mt-3 space-y-2">
              {config.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-900">Legal</p>
            <ul className="mt-3 space-y-2">
              {footer.legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} {org.name}. {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
