import { useState } from "react";
import { LearningModule, type Question } from "../utils/scenes";
import { GameQuestion } from "./GameQuestion";
import { GameAnswers } from "./GameAnswers";
import { GameLearningTip } from "./GameLearningTip";
import { AnimatePresence } from "framer-motion";

interface props {
  //index:number;
  learningModule: LearningModule;
  onNextGame: () => void;
  moreGames: boolean;
}

export const Game = (props: props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<"question" | "tooltip">(
    "question"
  );
  const [questionCompleted, setQuestionCompleted] = useState(false);
  const [playAudio, setPlayAudio] = useState(true);

  const handleQuestionCompleted = () => {
    if (currentQuestion < props.learningModule.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuestionCompleted(true);
      setCurrentScreen("tooltip");
    }
  };
  const handleNextGame = () => {
    props.onNextGame();
    setCurrentScreen("question");
    setCurrentQuestion(0);

  };
  const handlePlayAgain = () => {
    setQuestionCompleted(false);
    setCurrentScreen("question");
    setCurrentQuestion(0);
    setPlayAudio(true);
  };

  const handleAudioStop = () => {
    setPlayAudio(false);
  }

  console.log(props.learningModule.learningTipLink)
  return (
    <section>
      <>
        <GameQuestion
          question={props.learningModule.questions[currentQuestion]}
          onStop={handleAudioStop}
          playAudio={playAudio}
        />

        <GameAnswers
          answer={props.learningModule.questions[currentQuestion].answer}
          completed={questionCompleted}
          onCompleted={handleQuestionCompleted}
          key={currentQuestion}
          moreQuestions={currentQuestion < props.learningModule.questions.length - 1}
        ></GameAnswers>
      </>

      {currentScreen == "tooltip" && (
        <AnimatePresence>
          <GameLearningTip
            linkUrl={props.learningModule.learningTipLink}
            moreGames={props.moreGames}
            onNextGame={handleNextGame}
            onPlayAgain={handlePlayAgain}
          >
            {props.learningModule.learningTip}
          </GameLearningTip>
        </AnimatePresence>
      )}
    </section>
  );
};
