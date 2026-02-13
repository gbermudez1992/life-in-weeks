import React from "react";
import { WeekBox } from "./WeekBox";
import { TOTAL_WEEKS } from "../hooks/useLifeCalc";

interface LifeGridProps {
  weeksLived: number;
  weeksLeft: number;
  birthDate: string;
}

export const LifeGrid: React.FC<LifeGridProps> = ({
  weeksLived,
  weeksLeft,
  birthDate,
}) => {
  const birth = new Date(birthDate);

  // Generate boxes
  const boxes = Array.from({ length: TOTAL_WEEKS }, (_, i) => {
    const isPast = i < weeksLived;
    const isCurrent = i === weeksLived;

    // Calculate approximate date for this week
    const weekDate = new Date(birth.getTime() + i * 7 * 24 * 60 * 60 * 1000);
    const age = Math.floor(i / 52);
    const dateStr = weekDate.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });

    // Stagger animation for past weeks
    const animationDelay = isPast ? (i / weeksLived) * 1.5 : 0;

    return (
      <WeekBox
        key={i}
        weekIndex={i}
        status={isPast ? "past" : isCurrent ? "current" : "future"}
        dateRange={dateStr}
        age={age}
        delay={animationDelay} // Pass delay to component
      />
    );
  });

  return (
    <div className="life-grid-container">
      <div className="stats-header">
        <div className="stat-item">
          <span className="stat-value">{weeksLived.toLocaleString()}</span>
          <span className="stat-label">Weeks Lived</span>
        </div>
        <div className="stat-divider">/</div>
        <div className="stat-item">
          <span className="stat-value">{weeksLeft.toLocaleString()}</span>
          <span className="stat-label">Weeks Left</span>
        </div>
      </div>
      <div className="life-grid">{boxes}</div>
    </div>
  );
};
