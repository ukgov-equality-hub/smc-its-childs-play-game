import React from "react";
import { GameQuestion } from "@/components/GameQuestion";
import { learningModules } from "@/utils/scenes";
import { Game } from "./components/Game";
import { Audio } from "@/components/Audio"
import { BackgroundAudio } from "./components/BackgroundAudio";
const App = () => (
  <main className="game">
    <Game learningModule={learningModules[0]} />
    <BackgroundAudio src={learningModules[0].audio.music} />
  </main>
);
export default App;
