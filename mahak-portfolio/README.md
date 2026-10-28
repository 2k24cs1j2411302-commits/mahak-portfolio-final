# Mahak Gupta | Portfolio

A React + Vite portfolio with Tailwind CSS, lucide-react icons and EmailJS for the contact form.

## Install and run

1. Install Node.js LTS from https://nodejs.org (check with `node -v`).
2. Open a terminal in this folder.
3. Run:

```
npm install
npm run dev
```

4. Open the address it prints (usually http://localhost:5173).
5. To build for production: `npm run build` (output goes to `dist/`).

## Project structure

```
mahak-portfolio/
  index.html            SEO meta tags, theme script
  public/               favicon.svg, robots.txt, resume.pdf (add your own)
  src/
    main.jsx            app entry
    App.jsx             page layout
    index.css           Tailwind + custom component classes
    data/portfolio.js   ALL your text, links, skills, projects (edit this)
    hooks/useTheme.js   dark/light mode, saved in localStorage
    components/         reusable pieces (Navbar, ContactForm, Reveal, ...)
    sections/           Hero, About, Skills, Projects, CodingProfiles, Education, CertificationsAchievements, Contact, Footer
  .env.example          EmailJS variable names (copy to .env.local)
```

## Things you need to add yourself

1. Resume: put your PDF at `public/resume.pdf` (replace the placeholder file name if you use another).
2. Projects: edit the `projects` array in `src/data/portfolio.js`. The example card is marked EXAMPLE, delete it when you add a real project. Leave the array empty to show an empty-state message.
3. Certifications and achievements: add entries to the `certifications` array only when you actually hold them.
4. Update the `your-domain.vercel.app` URLs in `index.html` after you deploy.

## EmailJS setup (contact form)

1. Go to https://dashboard.emailjs.com and sign up or log in.
2. Email Services: click "Add New Service", choose Gmail, connect 2K24.cs1j.2411302@gmail.com, and copy the Service ID (looks like service_xxxxx).
3. Email Templates: click "Create New Template". Use these variables in the template body and subject: {{from_name}}, {{from_email}}, {{subject}}, {{message}}. Set "To Email" to your own email. Save and copy the Template ID (template_xxxxx).
4. Account (or Integration) page: copy your Public Key.
5. Copy `.env.example` to `.env.local` and fill in the three values:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart `npm run dev`. Vite only reads env values at startup.
7. For Vercel, add the same three variables under Project Settings, Environment Variables, then redeploy.

Never commit `.env.local`. It is already in `.gitignore`.

## Push to GitHub

```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/2k24cs1j2411302-commits/mahak-portfolio.git
git push -u origin main
```

Create the empty repo `mahak-portfolio` on GitHub first (New repository, no README). If the remote URL differs, use your own repo URL.

## Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click "Add New" then "Project", and import the `mahak-portfolio` repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add the three VITE_EMAILJS_* environment variables.
5. Click Deploy. Vercel gives you a live URL.
6. Put that URL in `index.html` (canonical and og tags) and push again.
