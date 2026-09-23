This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

- **Node.js 24+** is required. If you use `n`, run `n 24` or use the included `.nvmrc`.
- `npm install` uses the lockfile generated for Node 24 (`package-lock.json`).

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Testing

Unit tests are written with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react). Component coverage is enforced at 90% for branches, functions, lines and statements.

```bash
# Run tests in watch mode
npm run test:watch

# Run tests once with coverage
npm run test:coverage

# Run the production build
npm run build

# Run ESLint
npm run lint
```

## Accessibility and usability improvements

This project applies the following accessibility (a11y) and usability best practices:

- Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`).
- A single `<h1>` heading per page and a logical heading hierarchy.
- A skip link to jump directly to the main content.
- Keyboard-accessible navigation, including a hamburger menu controllable with `Enter`/`Space` and `Escape` to close.
- Proper `aria-label`, `aria-expanded`, `aria-controls`, and `aria-labelledby` attributes on interactive components.
- `rel="noopener noreferrer"` on all external links.
- Correct `mailto:` link formatting.
- `prefers-reduced-motion` media query support for users who disable animations.
- Improved color contrast across text and interactive elements.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
