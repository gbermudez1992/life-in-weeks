import { useMemo } from "react";

export const LIFE_EXPECTANCY_YEARS = 73;
export const WEEKS_IN_YEAR = 52.1775;
export const TOTAL_WEEKS = Math.floor(LIFE_EXPECTANCY_YEARS * WEEKS_IN_YEAR);

interface LifeCalc {
  weeksLived: number;
  totalWeeks: number;
  weeksLeft: number;
  percentageLived: number;
}

export function useLifeCalc(birthDate: string | null): LifeCalc {
  return useMemo(() => {
    if (!birthDate) {
      return {
        weeksLived: 0,
        totalWeeks: TOTAL_WEEKS,
        weeksLeft: TOTAL_WEEKS,
        percentageLived: 0,
      };
    }

    const birth = new Date(birthDate);
    const now = new Date();

    // Calculate difference in milliseconds
    const diffTime = Math.abs(now.getTime() - birth.getTime());
    // Convert to weeks (1000ms * 60s * 60m * 24h * 7d)
    const weeksLived = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));

    const weeksLeft = Math.max(0, TOTAL_WEEKS - weeksLived);
    const percentageLived = Math.min(100, (weeksLived / TOTAL_WEEKS) * 100);

    return {
      weeksLived,
      totalWeeks: TOTAL_WEEKS,
      weeksLeft,
      percentageLived,
    };
  }, [birthDate]);
}
