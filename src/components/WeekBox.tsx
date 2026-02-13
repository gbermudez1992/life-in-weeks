import React from "react";
import { motion } from "framer-motion";

interface WeekBoxProps {
  status: "past" | "current" | "future";
  weekIndex: number;
  dateRange?: string;
  age?: number;
  delay?: number;
}

export const WeekBox: React.FC<WeekBoxProps> = ({
  status,
  weekIndex,
  dateRange,
  age,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={
        status === "past"
          ? { opacity: 0, scale: 0.8 }
          : { opacity: 1, scale: 1 }
      }
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1, delay }}
      className={`week-box ${status}`}
      title={dateRange ? `Week ${weekIndex + 1} - Age ${age}` : undefined}
    >
      {/* Tooltip on hover */}
      {dateRange && (
        <div className="tooltip">
          <div>Week {weekIndex + 1}</div>
          <div>{dateRange}</div>
          <div>Age {age}</div>
        </div>
      )}
    </motion.div>
  );
};
