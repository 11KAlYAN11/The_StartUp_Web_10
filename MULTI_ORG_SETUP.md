# Reusing this template for another company

This codebase is built so **one set of code can power multiple company
websites** — each one just needs its own YAML config file. This is for you
(the agency/dev) when a new client wants a site from this template.

## Step by step

1. **Copy the sample config** and rename it for the new client:
   ```bash
   cp config/default.yaml config/acme.yaml
   ```
   Use a short, lowercase, no-spaces name as the slug (`acme`, `acme-corp`,
   not `Acme Corp`).

2. **Fill in `config/acme.yaml`** with that client's real content — follow
   [CUSTOMIZING_CONTENT.md](CUSTOMIZING_CONTENT.md) section by section.

3. **Preview it locally** before deploying:
   ```bash
   ORG_CONFIG=acme npm run dev
   ```
   (On Windows PowerShell: `$env:ORG_CONFIG="acme"; npm run dev`)

4. **Deploy it as its own Vercel project**:
   - In Vercel, click "Add New Project" and import this same GitHub repo
     again (Vercel lets you import one repo into multiple projects).
   - In that new project's Settings → Environment Variables, add:
     ```
     ORG_CONFIG = acme
     ```
   - Point the client's domain at this new Vercel project.
   - Deploy.

You now have two (or more) live websites, on two different domains, sharing
one codebase — and one bug fix or design improvement updates all of them
once you `git pull` the latest code into each.

## Where each client's config lives

```
config/
  default.yaml   ← original/demo content
  acme.yaml      ← Acme Corp's content
  beta.yaml      ← Beta Inc's content
  ...
```

Each file is independent — editing `acme.yaml` never affects `beta.yaml` or
any other org.

## Updating an existing client's site later

Just edit their YAML file (`config/acme.yaml`) and redeploy that Vercel
project. No code changes needed for content/branding updates — see
[CUSTOMIZING_CONTENT.md](CUSTOMIZING_CONTENT.md).
