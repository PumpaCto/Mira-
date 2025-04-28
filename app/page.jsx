'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-stars text-white p-8">
      {/* Logo with animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <Image 
          src="/logo.png" 
          alt="Miraverse Token Logo" 
          width={200} 
          height={200} 
          className="rounded-full"
        />
      </motion.div>

      {/* Heading with animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        Welcome to <span className="text-orange-400">Miraverse Token</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-xl text-gray-300 max-w-2xl text-center mb-10"
      >
        A new universe of possibilities is coming.  
        Dive into the future of Anime, Gaming, and Web3 innovation on Solana blockchain.  
        Stay tuned for the revolution!
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex space-x-4 mb-10"
      >
        <Link href="#">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-full text-lg">
            Buy Now
          </button>
        </Link>
        <Link href="#">
          <button className="border-2 border-orange-400 hover:bg-orange-400 hover:text-white text-orange-400 font-bold py-2 px-6 rounded-full text-lg">
            Coming Soon
          </button>
        </Link>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex space-x-8 text-lg underline underline-offset-4"
      >
        <a href="https://t.me/MiraVerseToken" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          Telegram
        </a>
        <a href="https://x.com/MiraVersaToken?s=09" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          Twitter
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        © 2025 Miraverse Token. All rights reserved.
      </footer>
    </div>
  );
}
