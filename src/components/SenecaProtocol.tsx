import React, { useState } from "react";
import { motion } from "framer-motion";

const QUOTES = [
  "Are you doing what matters right now?",
  "If this was your last week, would you be doing this?",
  "You act like mortals in all that you fear, and like immortals in all that you desire.",
  "It is not that we have a short time to live, but that we waste a lot of it.",
  "How long will you wait before you demand the best for yourself?",
  "The whole future lies in uncertainty: live immediately.",
  "You are younger than you will ever be again.",
];

interface SenecaProtocolProps {
  onDismiss: () => void;
}

export const SenecaProtocol: React.FC<SenecaProtocolProps> = ({
  onDismiss,
}) => {
  const [quote] = useState(() => {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F5F0] text-[#1A1A1A] p-8 text-center"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl md:text-5xl font-serif font-bold mb-12 max-w-4xl leading-tight"
      >
        "{quote}"
      </motion.h1>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }} // Delay button to force reading
        onClick={onDismiss}
        className="px-8 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] font-serif text-lg hover:bg-[#1A1A1A] hover:text-[#F5F5F0] transition-colors duration-300"
      >
        Yes, I am focused.
      </motion.button>
    </motion.div>
  );
};
