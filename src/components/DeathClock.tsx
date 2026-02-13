import React, { useState, useEffect } from "react";

interface DeathClockProps {
  birthDate: string;
  lifeExpectancyYears?: number;
}

export const DeathClock: React.FC<DeathClockProps> = ({
  birthDate,
  lifeExpectancyYears = 73,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  useEffect(() => {
    const birth = new Date(birthDate);
    // Life expectancy in ms: years * 365.25 * 24 * 60 * 60 * 1000
    const totalLifeMs = lifeExpectancyYears * 365.25 * 24 * 60 * 60 * 1000;
    const deathDate = new Date(birth.getTime() + totalLifeMs);

    const interval = setInterval(() => {
      const now = new Date();
      const diffMs = deathDate.getTime() - now.getTime();
      setSecondsLeft(Math.max(0, Math.floor(diffMs / 1000)));
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate, lifeExpectancyYears]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#1A1A1A] text-[#F5F5F0] w-full max-w-md my-8 rounded-sm shadow-2xl">
      <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-2">
        Memento Mori
      </div>
      <div className="text-4xl md:text-6xl font-serif font-bold tabular-nums tracking-tight">
        {secondsLeft.toLocaleString()}
      </div>
      <div className="text-sm font-mono mt-2 opacity-80">SECONDS REMAINING</div>
    </div>
  );
};
