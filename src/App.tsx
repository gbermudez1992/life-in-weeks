import { useState } from "react";
import { Onboarding } from "./components/Onboarding";
import { LifeGrid } from "./components/LifeGrid";
import { useLifeCalc } from "./hooks/useLifeCalc";
import { SenecaProtocol } from "./components/SenecaProtocol";
import { AntiBucketList } from "./components/AntiBucketList";
import { DeathClock } from "./components/DeathClock";
import { motion } from "framer-motion";

function App() {
  const [birthDate, setBirthDate] = useState<string | null>(() => {
    return localStorage.getItem("life_weeks_birthdate");
  });

  const { weeksLived, weeksLeft } = useLifeCalc(birthDate);
  // Seneca Protocol active by default if user has onboarded (has birthDate)
  const [isSenecaActive, setIsSenecaActive] = useState(!!birthDate);

  const handleDateSubmit = (date: string) => {
    localStorage.setItem("life_weeks_birthdate", date);
    setBirthDate(date);
    // Show Seneca to set the tone
    setIsSenecaActive(true);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset your life?")) {
      localStorage.removeItem("life_weeks_birthdate");
      setBirthDate(null);
      setIsSenecaActive(false);
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {!birthDate ? (
          <Onboarding onComplete={handleDateSubmit} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center"
          >
            {isSenecaActive && (
              <SenecaProtocol onDismiss={() => setIsSenecaActive(false)} />
            )}

            <header className="app-header">
              <h1 className="app-title">Life in Weeks</h1>
              <button onClick={handleReset} className="reset-btn">
                Reset
              </button>
            </header>

            <LifeGrid
              weeksLived={weeksLived}
              weeksLeft={weeksLeft}
              birthDate={birthDate}
            />

            <DeathClock birthDate={birthDate} />

            <AntiBucketList weeksLeft={weeksLeft} />

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
      </div>
    </div>
  );
}

export default App;
