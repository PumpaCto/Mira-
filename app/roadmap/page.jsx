'use client';

import { motion } from 'framer-motion';

const steps = [
  { title: "Q2 2025", description: "Token launch on Solana via Pump.fun" },
  { title: "Q3 2025", description: "Reach 1000 holders, grow Twitter and Telegram" },
  { title: "Q4 2025", description: "Release first NFT collection" },
  { title: "Q1 2026", description: "Launch mobile game on App Store and Google Play" },
  { title: "Q2 2026", description: "Announce anime series production" },
  { title: "Q3 2026", description: "Develop open-world crypto PC game" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-10">Roadmap</h1>
      <div className="space-y-10 max-w-3xl w-full">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
            <p className="text-lg">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
