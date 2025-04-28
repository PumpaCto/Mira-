'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StarsBackground from './components/StarsBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#010314] via-[#0a0f2b] to-[#000] overflow-hidden text-white flex flex-col items-center justify-center px-4">
      <StarsBackground />
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center z-10 text-center"
      >
        <Image
          src="/logo.png"
          alt="Miraverse Token"
          width={200}
          height={200}
          className="mb-6 animate-pulse"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-orange-400">Miraverse Token</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          A new universe of crypto possibilities awaits you. Explore, create, and thrive in the decentralized future!
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="#">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition">
              Buy Now
            </button>
          </Link>
          <Link href="#">
            <button className="border border-orange-500 hover:bg-orange-600 hover:text-white text-orange-500 font-semibold py-3 px-8 rounded-full transition">
              Coming Soon
            </button>
          </Link>
        </div>

        <div className="flex gap-6 mt-8 text-sm">
          <Link href="https://t.me/MiraVerseToken" target="_blank" className="hover:text-orange-400">Telegram</Link>
          <Link href="https://x.com/MiraVersaToken?s=09" target="_blank" className="hover:text-orange-400">Twitter</Link>
        </div>
      </motion.div>

      <footer className="absolute bottom-4 text-xs text-gray-400">
        © 2025 Miraverse Token. All rights reserved.
      </footer>
    </div>
  );
}
