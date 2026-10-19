# amsc.sa — Abdullah Al-Subaie Trading Company website

Bilingual (Arabic first, English at `/en/`) company website, built with [Astro](https://astro.build) as a static site and hosted on Hostinger.

- **Pages:** Home, About, Sectors, Companies & Brands (plus a page for each of Food Production, Khaliat Khalid and Kbagi Algharbia), Sustainability, Investment & Partnerships, Careers, News, Contact, Privacy, Terms, and a 404 page. Each exists in Arabic and English (29 pages in total).
- **Contact form:** [Web3Forms](https://web3forms.com) free plan (250 submissions a month), emailed to `info@amsc.sa`.
- **Hosting:** GitHub Actions builds the site into the `deploy` branch, and Hostinger's Git deployment pulls that branch into `public_html`.

Content that still needs the company's confirmation is listed in [CONTENT-TODO.md](CONTENT-TODO.md).

## Where things live

| What | File |
|---|---|
| Email, phone, map location, social links, Web3Forms key | `src/config.ts` |
| Page text (Arabic and English) | `src/data/content.ts` |
| Company and brand details | `src/data/companies.ts` |
| Menu, footer and form labels | `src/i18n/ui.ts` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Logos and photos | `public/images/` |
| Redirects from old WordPress URLs, HTTPS, caching | `public/.htaccess` |

## Working on the site locally

Requires Node.js 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the finished site to dist/
```

---

## One-time setup

Do these in order. Steps 1–2 take about five minutes; step 4 is the only one that touches the live site.

### 1. Turn on the contact form (Web3Forms)

1. Go to <https://web3forms.com>, enter `info@amsc.sa`, and click **Create Access Key**.
2. Open the email Web3Forms sends to `info@amsc.sa` and copy the access key.
3. In `src/config.ts`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with that key and commit.

Until the key is set, the form shows an error asking visitors to email you directly. The key is safe to keep in the code: it only lets people send messages to that one inbox.

### 2. Create the `main` branch

The publishing workflow runs whenever `main` changes.

- On GitHub, open **Pull requests → New pull request** and merge this work into `main`. If the repository has no `main` yet, go to **Code → branch dropdown**, type `main`, and create it from the current branch.
- Then open the **Actions** tab and check that **Build and publish** finished with a green tick. It creates a `deploy` branch that contains only the finished website files.

### 3. Back up the current WordPress site

Hostinger's Git deployment only installs into an **empty** folder, so WordPress has to move out of `public_html`.

1. hPanel → **Websites** → **Manage** next to amsc.sa.
2. **Files → Backups**: generate a backup, then download both the files and the database. Alternatively, in **Files → File Manager**, right-click `public_html`, choose **Compress**, and download the archive.
3. Keep the backup somewhere safe. You can restore it from the same Backups page if needed.

### 4. Connect Hostinger to GitHub

1. In File Manager, open `public_html` and delete everything inside it. Do this only after step 3.
2. hPanel → **Advanced → GIT**.
3. **If the GitHub repository is private** (the usual case): the GIT page shows an **SSH key**. Copy it. On GitHub, go to the repository → **Settings → Deploy keys → Add deploy key**, paste it, name it `Hostinger`, and leave "Allow write access" off.
4. Under **Create a new repository**, fill in:
   - **Repository:** `git@github.com:dev-of-amsfd/amsfd.git` (for a public repository, `https://github.com/dev-of-amsfd/amsfd.git` also works)
   - **Branch:** `deploy`
   - **Directory:** leave empty, so the files go straight into `public_html`
5. Click **Create**, then **Deploy**. Visit https://amsc.sa to confirm the new site is live.

### 5. Publish automatically on every update

1. On the same hPanel **GIT** page, find the repository under **Manage repositories** and click **Auto deployment**. Copy the **Webhook URL**.
2. On GitHub, go to **Settings → Webhooks → Add webhook**:
   - **Payload URL:** the URL you copied
   - **Content type:** `application/json`
   - **Which events:** "Just the push event"
3. Save. From now on, every change merged into `main` is built by GitHub Actions and pulled by Hostinger within a minute or two. To publish by hand, click **Deploy** in hPanel.

### 6. After launch

- Make sure SSL is active in hPanel (**Security → SSL**). `.htaccess` already redirects everything to `https://amsc.sa`.
- Old WordPress links (`/about-us/`, `/contact-us/`, `/our-services/` and so on) redirect to the new pages.
- Submit `https://amsc.sa/sitemap.xml` in Google Search Console.
- Send one test message through the contact form and confirm it reaches `info@amsc.sa`. Check the spam folder the first time.

## Updating content later

Edit the relevant file from the table above (GitHub's web editor works), commit to `main`, and the site updates itself. To add or change photos, put them in `public/images/photos/` and reference them as `/images/photos/name.jpg`.
