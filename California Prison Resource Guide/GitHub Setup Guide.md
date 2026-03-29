# How to Put Your Website on GitHub Pages

This guide walks you through publishing your Prison Family Resource Guide website using GitHub Pages. No coding experience needed — just follow along step by step.

## What You'll Need

- An email address
- About 15-20 minutes
- Your `_Website` folder (the one with all the HTML files)

## Part 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **Sign up** (top right)
3. Enter your email, create a password, and pick a username
   - Your username will be part of your temporary URL (e.g., `yourusername.github.io`), so pick something reasonable — but this won't matter once you connect your custom domain
4. Complete the verification and confirm your email

## Part 2: Create a Repository

A "repository" (or "repo") is just GitHub's word for a project folder. Think of it as a folder in the cloud that holds all your website files.

1. Once logged in, click the **+** button in the top right corner
2. Click **New repository**
3. Fill in the settings:
   - **Repository name**: `prison-family-guide` (or whatever you'd like)
   - **Description**: "Resource guide for families of incarcerated people in California" (optional but helpful)
   - **Public**: Make sure "Public" is selected (required for free GitHub Pages hosting)
   - **Add a README file**: Check this box
4. Click **Create repository**

## Part 3: Upload Your Website Files

1. You should now be on your repository's page
2. Click the **Add file** button (near the top of the file list)
3. Click **Upload files**
4. Open your `_Website` folder on your computer
5. **Select ALL files and folders inside `_Website`** and drag them into the upload area
   - This includes: `index.html`, the `css` folder, the `california` folder, `about.html`, `quick-reference.html`, and the `images` folder
   - **Important**: Drag the *contents* of `_Website`, not the `_Website` folder itself. Your `index.html` needs to be at the top level of the repository.
6. At the bottom of the page, you'll see "Commit changes" — just click the green **Commit changes** button

**Note:** If the upload doesn't work well for folders, you can also upload one folder at a time by navigating into each folder and uploading the files there. But the drag-and-drop usually works.

## Part 4: Turn On GitHub Pages

This is the step that actually makes your files into a live website.

1. Go to your repository page (click the repository name at the top)
2. Click **Settings** (the gear icon tab, far right in the tab row)
3. In the left sidebar, scroll down and click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main**, and leave the folder as **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes, then refresh the page
7. You should see a message at the top: **"Your site is live at https://yourusername.github.io/prison-family-guide/"**

Click that link — your website is now live on the internet!

## Part 5: Connect a Custom Domain (Optional)

Once you've bought a domain (e.g., `prisonfamilyguide.org`), you can connect it to your GitHub Pages site.

### Step A: Tell GitHub about your domain

1. Go to your repository's **Settings** → **Pages**
2. Under **Custom domain**, type your domain (e.g., `prisonfamilyguide.org`)
3. Click **Save**
4. Check the **Enforce HTTPS** box (this makes your site secure — the little lock icon in the browser)

### Step B: Configure your domain registrar

Where you bought your domain (Namecheap, Google Domains, etc.), you need to update the DNS settings. This tells the internet "when someone types this domain, show them my GitHub Pages site."

Add these DNS records:

**A Records** (point to GitHub's servers):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

Every domain registrar has a slightly different interface for this, but they all have a "DNS" or "DNS Settings" section. If you get stuck, search "[your registrar name] github pages DNS setup" and there will be a guide.

DNS changes can take up to 24-48 hours to take effect, but it's usually much faster (often under an hour).

## Part 6: Updating Your Site Later

Whenever you need to update a page:

1. Go to your repository on GitHub
2. Navigate to the file you want to change
3. Click the **pencil icon** (Edit this file) in the top right
4. Make your changes
5. Click **Commit changes** at the bottom
6. Your site will automatically update in about 1 minute

For uploading new or replacement files, use the same **Add file → Upload files** process from Part 3.

## Troubleshooting

**"404 - Page not found"**: Make sure your `index.html` file is at the root level of your repository (not inside a subfolder).

**Site looks broken (no styling)**: Make sure your `css` folder uploaded correctly and is at the root level alongside `index.html`.

**Custom domain not working**: DNS changes can take time. Wait a few hours and try again. Make sure you entered the records exactly as shown above.

**Still stuck?** GitHub has excellent documentation at [docs.github.com/pages](https://docs.github.com/en/pages).
