# Changing the design (layout, fonts, images, section order)

Most things — text, colors, services, testimonials — are edited in
`config/default.yaml` (see [CUSTOMIZING_CONTENT.md](CUSTOMIZING_CONTENT.md)).
**This guide is only for changes that file can't do**, like rearranging
sections, swapping fonts, or adding a real logo image. These require editing
code files, so a developer should make these changes — but here's exactly
which file to hand them for each request.

| What you want to change | File to edit |
|---|---|
| Replace text-only logo with an image | `src/components/Header.tsx` and `src/components/Footer.tsx` (swap the `{config.org.logoText}` text for an `<Image>` tag) |
| Reorder homepage sections (e.g. put Testimonials before Services) | `src/app/page.tsx` — reorder the component lines |
| Add a brand-new section | Create a new file in `src/components/`, then add it to `src/app/page.tsx` |
| Change fonts | `src/app/layout.tsx` (currently uses Geist from Google Fonts) |
| Change the page background / text colors globally | `src/app/globals.css` |
| Add a new icon option for Services | `src/components/Icon.tsx` — add an entry to the `ICONS` map (icons come from the [lucide-react](https://lucide.dev/icons) library) |
| Change button shapes, spacing, shadows | The component file for that section in `src/components/` (e.g. `Hero.tsx` for hero buttons) |
| Make it a multi-page site instead of single-page scroll | Bigger structural change — talk to your developer, this involves creating new routes under `src/app/` |

## How sections map to files

```
src/components/
  Header.tsx        → top navigation bar
  Hero.tsx           → rotating banner at the top
  Services.tsx        → "What we do" cards
  WhyUs.tsx           → "Why startups choose us" (dark section)
  Industries.tsx       → industries grid
  Testimonials.tsx     → client quotes
  Insights.tsx         → blog/article teaser cards
  Contact.tsx          → contact form + contact info
  Footer.tsx           → bottom footer
```

Each file is named after the section it controls and pulls its text from
`config/default.yaml` — so even after a design change, content edits still
just go through the YAML file.

## Brand colors — quick note

`primaryColor` and `accentColor` in `config/default.yaml` already control
the buttons, links, and highlight colors sitewide — most "make it match our
brand" requests are solved there without touching any code. Only ask a
developer to edit `globals.css` if you need to change background/text colors
that *aren't* tied to your brand color (e.g. pure white → off-white).

## Adding real images (logo, team photos, etc.)

1. Put image files in the `public/` folder (e.g. `public/logo.png`).
2. Reference them in code as `/logo.png` (no `public` in the path).
3. A developer should use Next.js's `<Image>` component for any photo
   content so it loads fast — plain `<img>` tags work too but are slower.

## Testing a design change before it goes live

Same as content changes:

```bash
npm run dev
```

then check `http://localhost:3000`, including on a phone-sized browser
window — most sections are responsive but a layout change should be
re-checked on mobile.
