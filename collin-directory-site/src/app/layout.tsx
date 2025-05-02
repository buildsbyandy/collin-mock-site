import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import CatFactWidget from './components/CatFactWidget';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* Site-wide navigation bar with branding and main links */}
        <nav className="flex items-center justify-between px-6 py-4 border-b" role="navigation" aria-label="Main navigation">
          
          {/* Left section: Logo and disclaimer */}
          <div className="flex items-center gap-3">
            <Image
              src="/collin-logo.png"
              alt="Collin College Logo" // alt text for screen reader accessibility
              width={200}
              height={200}
              priority // tells Next.js to preload this image for faster load
            />
            <span className="text-sm text-gray-500 self-end pb-1">
              Personal Project Mock-up Collin College
            </span>
          </div>

          {/* Right section: accessible link list to site pages */}
          <ul className="flex gap-6 text-sm text-blue-800 font-medium" role="menubar">
            <li role="none">
              <Link href="/" role="menuitem">Home</Link>
            </li>
            <li role="none">
              <Link href="/explore" role="menuitem">Explore Collin</Link>
            </li>
            <li role="none">
              <Link href="/about" role="menuitem">About Me</Link>
            </li>
          </ul>
        </nav>

        {/* Main content container */}
        <main className="px-6 py-10 max-w-5xl mx-auto" role="main">
          {children}
        </main>

        <footer className="mt-12 pt-8 border-t text-center">
  {/* Random Cat Fact Widget */}
  <div className="pb-6">
    <CatFactWidget />
  </div>

  {/* Disclaimer text */}
  <p className="text-xs text-gray-500 px-4 max-w-xl mx-auto">
    This is a personal project unofficial mock-up. Collin College is a registered institution and not affiliated with this site.
  </p>
</footer>
      </body>
    </html>
  );
}
