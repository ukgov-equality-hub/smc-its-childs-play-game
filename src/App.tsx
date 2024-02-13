import React, { useState } from "react";
import { GameQuestion } from "@/components/GameQuestion";
import { learningModules } from "@/utils/scenes";
import { Game } from "./components/Game";
const App = () => {
  const [learningModule, setLearningModule] = useState(0);
  const handleNextGame = () => {
    if (learningModules.length > learningModule + 1) {
      setLearningModule(learningModule + 1);
    }
  };

  return <Game learningModule={learningModules[learningModule]} onNextGame={handleNextGame} key={learningModule} moreGames={learningModule < learningModules.length - 1} />;
};
export default App;
