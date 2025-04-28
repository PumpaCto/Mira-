'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Miraverse Token</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/tokenomics" className="hover:text-gray-400">Tokenomics</Link>
          <Link href="/roadmap" className="hover:text-gray-400">Roadmap</Link>
          <Link href="/faq" className="hover:text-gray-400">FAQ</Link>
          <Link href="/team" className="hover:text-gray-400">Team</Link>
          <Link href="/partners" className="hover:text-gray-400">Partners</Link>
          <Link href="/vision" className="hover:text-gray-400">Vision</Link>
          <Link href="/ecosystem" className="hover:text-gray-400">Ecosystem</Link>
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          <Link href="/universe-map" className="hover:text-gray-400">Universe</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <Link href="/about" className="block hover:text-gray-400">About</Link>
          <Link href="/tokenomics" className="block hover:text-gray-400">Tokenomics</Link>
          <Link href="/roadmap" className="block hover:text-gray-400">Roadmap</Link>
          <Link href="/faq" className="block hover:text-gray-400">FAQ</Link>
          <Link href="/team" className="block hover:text-gray-400">Team</Link>
          <Link href="/partners" className="block hover:text-gray-400">Partners</Link>
          <Link href="/vision" className="block hover:text-gray-400">Vision</Link>
          <Link href="/ecosystem" className="block hover:text-gray-400">Ecosystem</Link>
          <Link href="/blog" className="block hover:text-gray-400">Blog</Link>
          <Link href="/universe-map" className="block hover:text-gray-400">Universe</Link>
          <Link href="/contact" className="block hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
