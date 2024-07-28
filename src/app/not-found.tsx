'use client';
import Link from 'next/link'
export default function NotFound() { 
  return (
    <html>
      <body>
        <h1>Page Not Found</h1>
        <p>Oops! It seems like you've stumbled upon a page that doesn't exist. Don't worry, our internationalization magic is still hard at work on other parts of the app. Feel free to navigate back to explore more!</p>
        <Link href="/">Return Home</Link>
      </body>
    </html>
  );
}