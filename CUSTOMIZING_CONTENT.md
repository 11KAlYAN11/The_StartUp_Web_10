# Editing your website content (no coding needed)

This guide is for **you, the business owner** — not developers. Everything
on the website (your company name, colors, services, team quotes, contact
info) lives in **one plain text file**. You edit that file, save it, and the
website updates. That's it.

---

## 1. Where is the file?

```
config/default.yaml
```

Open it with any plain text editor — Notepad, VS Code, or even GitHub's
website editor (click the pencil icon on the file in your repo). Do **not**
open it with Microsoft Word — it must stay a plain `.yaml` text file.

---

## 2. The rules of this file (read this once)

YAML is just indented text. Three rules keep it from breaking:

1. **Indentation matters.** Keep the same spacing as the line above it. Don't
   use the Tab key — use spaces (your editor usually does this automatically).
2. **Keep the quotes** around text, e.g. `name: "Acme Inc"`. If your text
   itself contains a quote `"`, wrap the whole thing differently or remove
   the inner quote.
3. **Don't delete the field names** (the word before the colon, like `name:`
   or `title:`). Only change the text in quotes after it.

If something looks broken after you save, undo your last change and try
again — a single misplaced space is the most common cause.

---

## 3. Section-by-section guide

Open `config/default.yaml` and find each section below by its heading.

### Company identity — `org:`

```yaml
org:
  name: "Nimbus Works"              # Your full company name
  tagline: "Engineering ideas into products"   # Shown in browser tab / SEO
  logoText: "Nimbus Works"          # Text shown in the top-left logo spot
  primaryColor: "#4f46e5"           # Main brand color (buttons, links)
  accentColor: "#0ea5e9"            # Secondary brand color
```

- `primaryColor` / `accentColor` are hex color codes. Get yours from your
  brand guidelines, or pick one at [coolors.co](https://coolors.co) — copy
  the code starting with `#`.

### Contact details — `org.contact:`

```yaml
  contact:
    email: "hello@nimbusworks.io"
    phone: "+1 (555) 012-3456"
    address: "548 Market St, San Francisco, CA 94104"
    formEndpoint: ""   # see "Contact form" section below
```

These show up in the Contact section near the bottom of the site.

### Social links — `org.social:`

```yaml
  social:
    linkedin: "https://linkedin.com/company/nimbusworks"
    twitter: "https://twitter.com/nimbusworks"
    github: "https://github.com/nimbusworks"
```

Paste your real profile URLs. **Delete a whole line** (e.g. the `github:`
line) if you don't have that account — don't leave it blank.

### Top navigation menu — `nav:`

```yaml
nav:
  - label: "Services"
    href: "#services"
  - label: "Why Us"
    href: "#why-us"
```

Each menu item is a `label` (what visitors see) and an `href` (where it
jumps to — leave these `#section-name` values as-is unless you know what
you're doing, they're linked to specific parts of the page).

To **remove a menu item**, delete its two lines (`- label:` and `href:`
together). To **reorder**, cut and paste the two-line blocks in the order
you want.

### Hero banner (top of page, rotating) — `hero.rotating:`

```yaml
hero:
  rotating:
    - eyebrow: "AI & Product Engineering"          # small label above headline
      headline: "We build the software that powers fast-moving startups"
      subhead: "From zero-to-one MVPs to scaling production platforms..."
      ctaPrimary: "Start a project"                # main button text
      ctaSecondary: "See our work"                 # secondary button text
```

There are 3 of these blocks by default — they rotate automatically every 6
seconds. Add more by copying a whole block (from `- eyebrow:` to
`ctaSecondary:`), or delete blocks down to just 1 if you don't want
rotation.

### Services — `services:`

```yaml
services:
  heading: "What we do"
  subheading: "End-to-end product development for startups and scaleups"
  items:
    - title: "Product Strategy & Roadmap"
      description: "Validate your idea, define your MVP..."
      icon: "compass"
```

`icon` controls the small picture shown with each service. Available
options: `compass`, `code`, `sparkles`, `cloud`, `layout`, `shield`. Pick
whichever fits — if you need a different icon, see
[CUSTOMIZING_DESIGN.md](CUSTOMIZING_DESIGN.md).

To add a service, copy a whole `- title: ... icon: ...` block. To remove
one, delete its block.

### "Why choose us" — `whyUs:`

Same pattern as Services, but without icons — just `title` and
`description` pairs.

### Industries you serve — `industries:`

```yaml
industries:
  items:
    - name: "Fintech"
      description: "Payments, lending, and compliance-aware platforms."
```

### Customer testimonials — `testimonials:`

```yaml
testimonials:
  items:
    - quote: "They shipped our MVP in eight weeks..."
      author: "Priya Shah"
      role: "CEO, Fintech Startup"
```

Replace these with real client quotes as you collect them. Get permission
from the client before publishing their name/title.

### Blog/insights teasers — `insights:`

```yaml
insights:
  items:
    - title: "How to scope an MVP you can actually ship in 8 weeks"
      excerpt: "A practical framework for cutting scope without cutting value."
      href: "#"
```

If you have a real blog, change `href: "#"` to the actual blog post URL
(e.g. `href: "https://yourblog.com/post-slug"`).

### Footer — `footer:`

```yaml
footer:
  description: "We're a product engineering partner for founders..."
  legal:
    - label: "Privacy Policy"
      href: "#"
  copyright: "All rights reserved."
```

Update `href: "#"` under `legal` to point to your real Privacy Policy /
Terms pages once you have them.

---

## 4. Contact form — making it actually send you emails

By default the contact form just shows a "please email us directly" message
because no form service is connected. To make it send real emails:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form, copy the endpoint URL it gives you
   (looks like `https://formspree.io/f/abcd1234`).
3. Paste it into `config/default.yaml`:
   ```yaml
   formEndpoint: "https://formspree.io/f/abcd1234"
   ```
4. Save the file. Submissions will now arrive in your Formspree inbox (and
   can be forwarded to your email).

---

## 5. Seeing your changes before they go live

Ask your developer to run:

```bash
npm run dev
```

then open `http://localhost:3000` in a browser to preview your edits
locally before they're deployed.

---

## 6. Want to run this template for a *different* company?

See [MULTI_ORG_SETUP.md](MULTI_ORG_SETUP.md) — it explains how to spin up a
second, completely separate site from the same codebase.

## 7. Want to change colors, layout, or fonts beyond what's in this file?

See [CUSTOMIZING_DESIGN.md](CUSTOMIZING_DESIGN.md).
