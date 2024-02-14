import React, { useState } from "react";
import {
  LearningModule,
  SplashScreenModule,
  learningModules,
} from "@/utils/scenes";
import { Game } from "./components/Game";
import { BackgroundAudio } from "./components/BackgroundAudio";
import { SplashScreen } from "./components/SplashScreen";
const App = () => {
  const [learningModule, setLearningModule] = useState(0);
  const handleNextGame = () => {
    if (learningModules.length > learningModule + 1) {
      setLearningModule(learningModule + 1);
    } else {
      setLearningModule(0);
    }
  };

  const renderModule = () => {
    switch (learningModules[learningModule].type) {
      case "SplashScreenModule":
        return (
          <SplashScreen
            splashScreen={learningModules[learningModule] as SplashScreenModule}
            onNextGame={handleNextGame}
          />
        );

      default:
        return (
          <Game
            learningModule={learningModules[learningModule] as LearningModule}
            onNextGame={handleNextGame}
            key={learningModule}
            moreGames={learningModule < learningModules.length - 1}
          />
        );
    }
  };

  return (
    <main className="game">
      {renderModule()}
      <BackgroundAudio
        src={(learningModules[0] as SplashScreenModule).backgroundAudio} controls={learningModule >= 1}
      />
    </main>
  );
};
export default App;
