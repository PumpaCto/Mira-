'use client';

import { useState } from 'react';

const faqs = [
  { question: "What is Miraverse Token?", answer: "An anime-powered crypto project with NFT, games, and a future anime series." },
  { question: "Which blockchain?", answer: "Miraverse Token is built on Solana." },
  { question: "When is the launch?", answer: "Launching Q2 2025 via Pump.fun." },
  { question: "Will there be an NFT collection?", answer: "Yes, planned for Q4 2025!" },
  { question: "Is there a mobile game?", answer: "Mobile game launching Q1 2026 on App Store and Google Play." },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">FAQ</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left text-2xl font-semibold"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
