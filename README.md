# FED2 CSS Frameworks Course Assignment - Social App UI (Option 2 - Tailwind)

Responsive front-end UI for a simple social media application, built with **Tailwind CSS (installed via npm)**. This project focuses on layout, responsiveness, and structure. No real authentication or API logic is required.

## Pages

- **Authentication**: `/index.html`
  - Login/register form with HTML validation
  - `action="/profile"` as required
- **Feed**: `/feed/index.html`
  - Post list with thumbnails
  - Search input, sort select, and "Create post" form (layout only)
- **Profile**: `/profile/index.html`
  - Profile image, username, follow button
  - Followers/following area
  - List of user posts

## Tech Stack

- HTML
- Tailwind CSS (via npm)
- Minimal JavaScript (mobile menu toggle)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run Tailwind in watch mode (development):

   ```bash
   npm run dev
   ```

3. Build minified CSS (production):

   ```bash
   npm run build
   ```

## Notes

- Tailwind is installed via npm (no CDN).
- UI is responsive across mobile, tablet, and desktop.
- The mobile menu works across all pages using `js/menu.js`.

## Links

- GitHub Repo: https://github.com/hallsi90/FED2-CSS-Frameworks-CA
- Pull Request (css-frameworks -> main): https://github.com/hallsi90/FED2-CSS-Frameworks-CA/pull/1
