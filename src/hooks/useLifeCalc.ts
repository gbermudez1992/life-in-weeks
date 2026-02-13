import { useMemo } from "react";

export const LIFE_EXPECTANCY_YEARS = 73;
export const WEEKS_IN_YEAR = 52.1775;
export const TOTAL_WEEKS = Math.floor(LIFE_EXPECTANCY_YEARS * WEEKS_IN_YEAR);

interface LifeCalc {
  weeksLived: number;
  totalWeeks: number;
  weeksLeft: number;
  percentageLived: number;
  lifeExpectancy: number; // Added
  age: number; // Added
}

export function useLifeCalc(birthDate: string | null): LifeCalc {
  return useMemo(() => {
    if (!birthDate) {
      return {
        weeksLived: 0,
        totalWeeks: TOTAL_WEEKS,
        weeksLeft: TOTAL_WEEKS,
        percentageLived: 0,
        lifeExpectancy: LIFE_EXPECTANCY_YEARS,
        age: 0,
      };
    }

    const birth = new Date(birthDate);
    const lifeExpectancy = 73; // Using the constant LIFE_EXPECTANCY_YEARS is better
    const currentDate = new Date(); // Renamed from 'now' to 'currentDate'

    // Calculate difference in milliseconds
    const diffTime = Math.abs(currentDate.getTime() - birth.getTime());
    // Convert to weeks (1000ms * 60s * 60m * 24h * 7d)
    const weeksLived = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7)); // Changed to Math.ceil

    const totalWeeks = lifeExpectancy * 52; // Recalculated totalWeeks
    const weeksLeft = Math.max(0, totalWeeks - weeksLived); // Using new totalWeeks

    // Calculate age
    let age = currentDate.getFullYear() - birth.getFullYear();
    const m = currentDate.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birth.getDate())) {
      age--;
    }

    const percentageLived = Math.min(100, (weeksLived / totalWeeks) * 100); // Using new totalWeeks

    return {
      weeksLived,
      totalWeeks, // Using new totalWeeks
      weeksLeft,
      percentageLived,
    };
  }, [birthDate]);
}
