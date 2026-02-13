import React, { useState } from "react";
import { motion } from "framer-motion";

interface OnboardingProps {
  onComplete: (date: string) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;

    setIsLoading(true);

    // 3 Second artificial delay as requested
    setTimeout(() => {
      onComplete(date);
    }, 3000);
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="loading-container"
      >
        <div className="loading-text">Calculating your time...</div>
        <div className="spinner"></div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="loading-subtext"
        >
          Memento Mori
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="onboarding-container"
    >
      <h1 className="onboarding-title">Life in Weeks</h1>
      <p className="onboarding-subtitle">
        Enter your birth date to visualize your life in weeks.
      </p>

      <form onSubmit={handleSubmit} className="onboarding-form">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="date-input"
        />
        <button type="submit" className="submit-btn">
          See My Life
        </button>
      </form>
    </motion.div>
  );
};
