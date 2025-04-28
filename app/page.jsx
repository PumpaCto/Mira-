'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#010314] to-[#0c0f30] flex flex-col items-center justify-center relative overflow-hidden text-white">
      
      {/* Stars Background */}
      <div className="absolute inset-0 bg-stars opacity-20 z-0"></div>

      {/* Main Content */}
      <div className="z-10 p-8 text-center flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Miraverse Token Logo"
            width={180}
            height={180}
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Welcome to <span className="text-orange-400">Miraverse Token</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          A new universe of possibilities is coming soon. Stay tuned for the revolution on Solana!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
        >
          <a
            href="https://x.com/MiraVersaToken?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
          >
            Twitter
          </a>
          <a
            href="https://t.me/MiraVerseToken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
          >
            Telegram
          </a>
          <button
            disabled
            className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
          >
            Coming Soon
          </button>
        </motion.div>

        {/* Footer */}
        <p className="text-gray-500 text-sm">
          © 2025 Miraverse Token. All rights reserved.
        </p>
      </div>
    </div>
  );
}
