---
name: testing-portfolio-ui
description: How to run and browser-test the Next.js/next-intl portfolio app locally (Node 24, locale routes, mobile-width testing, Navbar a11y selectors, Swiper drag).
---

# Testing the web-portfolio Next.js app in a browser

## Running the app
- Node 24 is required and is not the system default. Prefix every node/npm command:
  `PATH=/home/ubuntu/.n/bin:$PATH npm run build` / `... npm run start` (port 3000) or `... npm run dev`.
- Fully static frontend: no credentials, no backend, no seed data.
- Routing is locale-prefixed via `next-intl`: `/` redirects to `/en`; Spanish is `/es`.
  next-intl config lives in `src/i18n/request.ts`.
- Unknown routes (e.g. `/en/does-not-exist`) render the `not-found` page. Note it renders
  **unstyled** (plain browser default serif) — that is current behaviour, not a test failure,
  but worth flagging.

## Useful selectors / copy for assertions
- Main landmark: `#main-content`. Section anchors: `#home-section`, `#about-section`,
  `#projects-section`, `#skills-section`, `#contact-section` (direct hash nav works, e.g.
  `/en#projects-section`).
- Skip link: `Skip to main content` / `Saltar al contenido principal`. It is positioned
  `top:-40px` and only visible on `:focus`, so it must be revealed with a real Tab press.
- Hamburger `<button>`: `aria-label` `Open menu`/`Close menu` (`Abrir menú`/`Cerrar menú`),
  with `aria-expanded` and `aria-controls="mobile-navigation"`.
- Language `<select>`: `aria-label="Select language"` / `"Seleccionar idioma"`.

## Mobile-width testing (hamburger only renders at ≤500px CSS width)
The window manager is KDE/Plasma with `wmctrl` available. Reliable sequence:
```
wmctrl -r :ACTIVE: -b remove,maximized_vert,maximized_horz
wmctrl -r :ACTIVE: -e 0,50,50,500,900     # outer ~532px -> CSS width 500
# then reload the page (F5) so the layout settles
```
To go back to desktop: `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`.
Do not use `xdotool key super+Up` (tiles to half screen).

## Known behaviours / likely bugs to re-check
- Resizing mobile → desktop **while the mobile menu is open** can leave the mobile nav mounted,
  producing two nav bars in the header; the hamburger is hidden at desktop width so there is no
  visible control to close it. Pressing `Escape` clears it (the Escape handler is bound to
  `window`). A width-change effect that resets the menu state would fix it.
- While the mobile menu is open, the full-screen overlay covers the language `<select>`, so
  clicking the language control "with the menu open" hits the overlay. Reach it via keyboard
  (Tab to the select, then Down/Up + Enter) instead.
- Console always logs `[Vercel Web Analytics] Failed to load script from /_vercel/insights/script.js`
  locally. It is environmental, not an app error — report it separately from real exceptions.
- Activating the skip link changes the URL to `#main-content` and scrolls, but `document.activeElement`
  does not become `<main>` (it can end up on the About iframe on the next Tab), since `<main>` has no
  `tabindex="-1"`.

## Swiper carousels
Drag with discrete mouse steps (move → `left_mouse_down` → several `mouse_move`s → `left_mouse_up`);
a single `left_click_drag` often does not register. Projects and Skills carousels both advance one
slide for a ~250px leftward drag; pagination bullets reflect the change.
