import React from "react";

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
    <div
      className={`week-box ${status} ${status === "past" ? "animate-in" : ""}`}
      style={status === "past" ? { animationDelay: `${delay}s` } : undefined}
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
    </div>
  );
};
