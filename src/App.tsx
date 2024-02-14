import React, { useState } from "react";
import { GameQuestion } from "@/components/GameQuestion";
import { LearningModule, SplashScreenModule, learningModules } from "@/utils/scenes";
import { Game } from "./components/Game";
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
  switch (learningModules[learningModule].type) {
    case "SplashScreenModule":
      return <SplashScreen splashScreen={learningModules[learningModule] as SplashScreenModule} onNextGame={handleNextGame} />

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
export default App;
