# Deployment

## How It Works (You don't need to do anything for routine updates)

The site auto-deploys to GitHub Pages on every push to `main`. Workflow lives at `.github/workflows/deploy.yml`.

**Pipeline:**
1. Checkout code
2. Install dependencies (`npm ci`)
3. Run quality gates: `npm run lint:tone`, `npm run build`, `npm run check:links`
4. Upload `dist/` to GitHub Pages
5. Deploy

If any quality check fails, deploy is blocked. The site stays at the last known-good version.

## Current URLs

- **GitHub repo:** https://github.com/lindseyleplae/prison-info-project-2026
- **GitHub Pages URL (temporary):** https://lindseyleplae.github.io/prison-info-project-2026/
- **Custom domain (planned):** https://prisonvisitorguide.org

The github.io URL won't render assets correctly because the Astro `site` config points at `prisonvisitorguide.org`. Don't worry — that's by design. Once the custom domain is connected, everything works.

## Setting Up the Custom Domain (Lindsey's Steps)

This is the one part you need to do yourself, because it involves payment and your registrar account.

### Step 1: Buy the domain (~$15/year)

Go to one of these (any will work, but Cloudflare is cheapest):

- **Cloudflare:** https://www.cloudflare.com/products/registrar/ (~$10-12/year, no markup)
- **Namecheap:** https://www.namecheap.com (~$15/year)
- **Porkbun:** https://porkbun.com (~$11/year)

Search for `prisonvisitorguide.org`. Buy it. Use a real email and turn on WHOIS privacy protection (usually free).

### Step 2: Configure DNS

In your registrar's DNS settings panel, add these records:

**A records** (point root domain at GitHub Pages servers):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | Auto |
| A | @ | 185.199.109.153 | Auto |
| A | @ | 185.199.110.153 | Auto |
| A | @ | 185.199.111.153 | Auto |

**CNAME record** (point www subdomain to your GitHub Pages URL):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | lindseyleplae.github.io | Auto |

Save the DNS settings. DNS changes usually take 15 minutes - 2 hours to propagate, sometimes up to 48 hours in rare cases.

### Step 3: Connect the domain in GitHub Pages

Tell Claude Code "I bought the domain" and I'll run this command:

```bash
gh api -X PUT "repos/lindseyleplae/prison-info-project-2026/pages" -f cname=prisonvisitorguide.org -F https_enforced=true
```

I'll also create a `CNAME` file in the repo so the domain stays connected on every deploy. After that:

1. The site is live at https://prisonvisitorguide.org
2. https://www.prisonvisitorguide.org redirects to the bare domain
3. HTTPS auto-enabled (GitHub provisions a Let's Encrypt cert)

### Verifying It Works

Once DNS has propagated:
- Visit https://prisonvisitorguide.org — should show the site
- Visit https://www.prisonvisitorguide.org — should redirect to the bare domain
- Lock icon in browser bar — HTTPS is working

If something's wrong, GitHub Pages settings page will show a red error explaining what to fix:
https://github.com/lindseyleplae/prison-info-project-2026/settings/pages

## How to Update the Site (No Coding Needed)

Anyone with access to the repo can update content directly on GitHub:

1. Go to the file (e.g. https://github.com/lindseyleplae/prison-info-project-2026/blob/main/src/content/facilities/ca-san-quentin.md)
2. Click the pencil icon to edit
3. Make changes
4. Click "Commit changes" at the bottom
5. The site auto-deploys in 1-2 minutes

For bigger changes (adding a new state, multiple facilities), it's better to ask Claude Code — see PLAYBOOK.md for the standard process.

## If Something Goes Wrong

**Build failing?**
- Look at the failed workflow run: https://github.com/lindseyleplae/prison-info-project-2026/actions
- Common causes: typo in frontmatter, banned phrase in content, broken internal link
- Quality checks tell you exactly what's wrong

**Site looks broken?**
- Check https://www.githubstatus.com — GitHub Pages might be down
- Roll back: revert the last commit on `main` and the previous version redeploys

**Need to roll back fast?**
```bash
git revert HEAD
git push
```
This creates a new commit that undoes the last one and triggers a fresh deploy.
