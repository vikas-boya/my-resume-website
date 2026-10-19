# Yellow Dark Resume — Next.js

A beginner-friendly personal portfolio inspired by the screenshot you shared: dark glass panels, yellow accents, a left profile card, and section navigation.

## 1. Install the basics
- Install Node.js LTS from https://nodejs.org/
- Install Visual Studio Code.
- Extract this ZIP and open the `yellow-dark-resume` folder in VS Code.

## 2. Run locally
Open **Terminal → New Terminal** in VS Code, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To stop the server, click the terminal and press `Ctrl + C`.

## 3. Personalize the site
Open `app/page.tsx` and replace:
- `Your Name`
- `your.email@example.com`
- `Your City, India`
- Education, certification, skills, and project details
- Social profile links

The avatar currently uses initials. You can add a profile image later in `public/` and update the avatar markup.

## 4. Important technology notes
- This starter uses **Next.js + React**.
- A database is not required for a first version because resume content is mostly static. PostgreSQL or MySQL can be added if you later need an admin dashboard or saved contact submissions.
- AWS is optional for this version. Vercel is the simplest place to deploy a Next.js app. A custom domain can be connected in Vercel's project settings and its DNS instructions followed at your domain provider.
- The contact form is currently a demo `mailto:` form, not a production backend. Add a secure API and spam protection before relying on it.

## 5. Build check
```bash
npm run build
```
