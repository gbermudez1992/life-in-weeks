import { useState } from "react";
import { Onboarding } from "./components/Onboarding";
import { LifeGrid } from "./components/LifeGrid";
import { useLifeCalc } from "./hooks/useLifeCalc";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [birthDate, setBirthDate] = useState<string | null>(() => {
    return localStorage.getItem("life_weeks_birthdate");
  });

  const { weeksLived, weeksLeft } = useLifeCalc(birthDate);

  const handleDateSubmit = (date: string) => {
    localStorage.setItem("life_weeks_birthdate", date);
    setBirthDate(date);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset your birthdate?")) {
      localStorage.removeItem("life_weeks_birthdate");
      setBirthDate(null);
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {!birthDate ? (
          <motion.div
            key="onboarding"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full flex-grow flex flex-col justify-center"
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Onboarding onComplete={handleDateSubmit} />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="main-content"
          >
            <header className="app-header">
              <h1 className="app-title">Life in Weeks</h1>
              <div className="reset-btn" onClick={handleReset}>
                Reset
              </div>
            </header>

            <LifeGrid
              weeksLived={weeksLived}
              weeksLeft={weeksLeft}
              birthDate={birthDate}
            />

            <footer className="app-footer">
              <p className="mb-4">
                "You act like mortals in all that you fear, and like immortals
                in all that you desire." — Seneca
              </p>
              <p className="text-xs opacity-75">
                Based on a global average life expectancy of 73 years (Source:
                United Nations / WHO).
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
