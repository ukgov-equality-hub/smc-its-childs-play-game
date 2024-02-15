import React, { useState } from "react";
import {
  LearningModule,
  SplashScreenModule,
  learningModules,
} from "@/utils/scenes";
import { Game } from "./components/Game";
import { BackgroundAudio } from "./components/BackgroundAudio";
import { SplashScreen } from "./components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";
const App = () => {
  const [learningModule, setLearningModule] = useState(0);
  const handleNextGame = () => {
    if (learningModules.length > learningModule + 1) {
      setLearningModule(learningModule + 1);
    } else {
      setLearningModule(0);
    }
  };

  const pageVariants = {
    initial: { x: "320px" }, // Starts off-screen to the right
    in: { x: 0 }, // Center screen
    out: { x: "-320px" },
    disabled: { x: 0 }, // Moves off-screen to the left
  };

  const pageTransition = {
    type: "tween",
    ease: "easeOut", // Use a linear ease for a smooth, consistent speed
    duration: 0.3,
  };

  const renderModule = (item: LearningModule | SplashScreenModule) => {
    switch (item.type) {
      case "SplashScreenModule":
        return (
          <SplashScreen
            // index={index}
            splashScreen={item as SplashScreenModule}
            onNextGame={handleNextGame}
          />
        );

      default:
        return (
          <Game
            // index={index}
            learningModule={item as LearningModule}
            onNextGame={handleNextGame}
            key={learningModule}
            moreGames={learningModule < learningModules.length - 1}
          />
        );
    }
  };

  return (
    <main className="game">
      <AnimatePresence mode="popLayout">
        {/* {learningModules.map((item, index) => ( */}
        <motion.section
          className="relative"
          variants={pageVariants}
          initial={learningModule == 0 ? "disabled" : "initial"}
          animate="in"
          exit="out"
          transition={pageTransition}
          key={learningModule}
        >
          {renderModule(learningModules[learningModule])}
        </motion.section>
        {/* ))} */}
      </AnimatePresence>
      <BackgroundAudio
        src={(learningModules[0] as SplashScreenModule).backgroundAudio}
        controls={learningModule >= 1}
      />
    </main>
  );
};
export default App;
