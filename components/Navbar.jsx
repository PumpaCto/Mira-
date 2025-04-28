'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 fixed top-0 z-20 bg-[#010314]/70 backdrop-blur-md">
      <div className="flex items-center">
        <img src="/logo.png" alt="Miraverse Logo" className="h-12" />
      </div>

      <div className="flex space-x-6 text-white font-semibold">
        <Link href="/">
          <span className="hover:text-blue-400 transition">Home</span>
        </Link>
        <Link href="/about">
          <span className="hover:text-blue-400 transition">About</span>
        </Link>
        <Link href="/roadmap">
          <span className="hover:text-blue-400 transition">Roadmap</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-blue-400 transition">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
