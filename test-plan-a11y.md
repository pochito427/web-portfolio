# Test plan — PR #1 a11y / Node 24 / next-intl move (web-portfolio)

Target: production server already running on http://localhost:3000 (Node 24 build of branch `devin/1790134922-a11y-node24-tests`).
Code refs: `src/components/Navbar.tsx:79-101` (skip link, button hamburger, aria-expanded/controls, Escape),
`src/app/[locale]/page.tsx:29-46` (`<main id="main-content">`, section ids/refs),
`src/components/LocalSwitcher.tsx:14-32` (select → `router.replace('/'+locale)`),
`src/styles/Navbar.module.css:12-27` (skipLink hidden at top:-40px, visible on :focus), `:128-149` (hamburger only at ≤500px width).

## T1 — Home page renders at /en with no console errors
Navigate to http://localhost:3000/ (expect redirect to /en). Scroll whole page.
Pass: hero "Hi, I am Alfonso Jimenez" + "FULL-STACK" heading visible; About section with video iframe visible; "My Projects" Swiper carousel with project cards; "My Skills" carousel; Footer ("Let's work together") and social icons visible. Browser console shows 0 errors (warnings noted separately).

## T2 — Skip link appears on keyboard focus and jumps to main content
From top of page press Tab once.
Pass: a visibly rendered black "Skip to main content" link appears at top-left (screenshot must show it; it is off-screen at top:-40px when unfocused). Press Enter.
Pass: URL becomes `.../en#main-content` and focus/scroll target is the `<main id="main-content">` region (verify by screenshot of page position and next-Tab focus landing inside main, not back on the nav).

## T3 — Hamburger at mobile width: mouse + keyboard + Escape, aria-expanded flips
Resize the Chrome window to ≤500px CSS width (wmctrl) and reload /en.
Pass precondition: desktop nav links hidden, hamburger button visible; `aria-expanded="false"`.
a) Keyboard: Tab to the hamburger, press Enter → full-screen dark mobile menu with Home/About/Projects/Skills/Contact appears; aria-expanded becomes "true" and `#mobile-navigation` exists.
b) Press Escape → menu disappears visually; aria-expanded back to "false".
c) Press Space on the button → menu opens again (proves real `<button>`), then click the button → closes.
Fail if aria-expanded stays stale, menu doesn't open by keyboard, or Escape doesn't close.

## T4 — Nav link scrolls to correct section
Back at desktop width on /en, click "Projects" in the top nav.
Pass: page scrolls so the "My Projects" heading/carousel is in view (screenshot before = hero visible, after = projects visible). Then click "Contact": footer/social section in view.

## T5 — Language round-trip en ↔ es
Using the language `<select>` (aria-label "Select language") choose "Español".
Pass: URL becomes /es AND copy changes: nav "Inicio/Sobre mí/Proyectos/Habilidades/Contacto", hero "Hola, soy Alfonso Jiménez", projects heading "Mis Proyectos". Select "English" → back to /en with English copy. No console errors either way.

## T6 — Swiper carousels interactable
On the Projects carousel: perform a real mouse drag (mouse down, move ~250px left, screenshot while button still held, then release).
Pass: slide position visibly moves during the drag and settles on a different project card after release; pagination/arrow control (if present) also advances a slide. No console errors thrown by Swiper.
Repeat one drag on the Skills carousel.

## T7 — 404 page
Navigate to http://localhost:3000/en/does-not-exist.
Pass: not-found page renders with "Page Not Found" heading and a "Return Home" link; clicking it returns to the home page.

## T8 — Adversarial
a) Direct hash nav: load http://localhost:3000/en#projects-section → projects section in view on load.
b) At mobile width, open the mobile menu then change language to Español while open → no crash, page renders /es correctly (note menu state).
c) Rapid toggling: click hamburger 6 times fast → final state consistent with aria-expanded value, no console errors.
d) Resize mobile→desktop with menu open → desktop nav shows, no duplicated/overlapping nav; no errors.

Evidence: continuous screen recording with annotations + screenshots at each pass/fail point; console checked via browser_console after each phase.
