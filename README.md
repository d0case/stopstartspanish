# Stop Start Spanish — Cloudflare Pages

This repository is ready to deploy as a static website through GitHub and Cloudflare Pages. No framework, package installation, or build process is required.

## 1. Add the site to GitHub

1. Unzip the delivery package on your computer.
2. Create a new empty GitHub repository, such as `stop-start-spanish`.
3. Upload **the contents of this folder** to the repository. `index.html` must appear at the top level of the repository—not inside another folder.
4. Commit the files to the `main` branch.

## 2. Connect GitHub to Cloudflare Pages

1. In Cloudflare, open **Workers & Pages**.
2. Choose **Create application**, then **Pages**, then **Connect to Git**.
3. Select the new GitHub repository.
4. Use these deployment settings:

   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `exit 0`
   - Build output directory: `.`
   - Root directory: leave blank

5. Deploy the project and confirm that the generated `pages.dev` address displays the website.

## 3. Connect stopstartspanish.com

1. In the new Pages project, open **Custom domains** and add `stopstartspanish.com`.
2. Allow Cloudflare to create or replace the root-domain DNS record.
3. When prompted, remove the two old root A records that point to:

   - `162.159.143.30`
   - `172.66.3.26`

4. The old `_openai-site-verification` and `_cf-custom-hostname` TXT records can be removed after the Pages domain is active.
5. Keep the existing proxied `www` CNAME and the **Redirect www to root** rule.

## Updating the website later

Edit or replace files in GitHub and commit the changes. Cloudflare Pages will automatically redeploy the site.

## Included

- Responsive static website
- Beginner, Intermediate, and Advanced reading-companion PDFs
- Book and lifestyle imagery
- Favicon
- Search metadata, structured data, `robots.txt`, and `sitemap.xml`
- Cloudflare security headers

