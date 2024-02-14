import React, { useState } from "react";
import { learningModules } from "@/utils/scenes";
import { Game } from "./components/Game";
import { BackgroundAudio } from "./components/BackgroundAudio";
const App = () => {
  const [learningModule, setLearningModule] = useState(0);
  const handleNextGame = () => {
    if (learningModules.length > learningModule + 1) {
      setLearningModule(learningModule + 1);
    } else {
      setLearningModule(0)
    }
  };

  return(
  <main className="game">
    <Game learningModule={learningModules[learningModule]} onNextGame={handleNextGame} key={learningModule} moreGames={learningModule < learningModules.length - 1} />
    <BackgroundAudio src={learningModules[learningModule].audio.music} />
  </main>
)};
export default App;
