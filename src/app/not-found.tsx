'use client';
import Link from 'next/link'
import './globals.css'

export default function NotFound() { 
  return (
    <html lang="en">
      <body>
        <main id="main-content" className="not-found">
          <section aria-labelledby="not-found-heading">
            <h1 id="not-found-heading">Page Not Found</h1>
            <p>Oops! It seems like you have stumbled upon a page that does not exist. Do not worry, our internationalization magic is still hard at work on other parts of the app. Feel free to navigate back to explore more!</p>
            <Link href="/">Return Home</Link>
          </section>
        </main>
      </body>
    </html>
  );
}
