'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#010314] to-[#0c0f30] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 bg-stars opacity-30 z-0"></div>

      {/* Content */}
      <div className="z-10 p-8 text-center">
        <motion.img
          src="/logo.png"
          alt="Miraverse Token Logo"
          className="w-32 h-32 mx-auto mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Welcome to Miraverse Token
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Your Gateway to the Future of Crypto and Entertainment
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
          <a
            href="https://x.com/MiraVersaToken?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-400 hover:to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition transform"
          >
            Twitter
          </a>
          <a
            href="https://t.me/MiraVerseToken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-400 hover:to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition transform"
          >
            Telegram
          </a>
          <Link
            href="#"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-400 hover:to-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition transform"
          >
            Buy Now (Coming Soon)
          </Link>
        </div>
      </div>
    </div>
  );
}
