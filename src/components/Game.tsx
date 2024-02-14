import { useState } from "react";
import { LearningModule, type Question } from "../utils/scenes";
import { GameQuestion } from "./GameQuestion";
import { GameAnswers } from "./GameAnswers";
import { GameLearningTip } from "./GameLearningTip";

interface props {
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
    setCurrentQuestion(0);
    setCurrentScreen("question");
  };
  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setCurrentScreen("question");
    setQuestionCompleted(false);
  };
  return (
    <section>
      <>
        <GameQuestion
          question={props.learningModule.questions[currentQuestion]}
        />

        <GameAnswers
          answer={props.learningModule.questions[currentQuestion].answer}
          completed={questionCompleted}
          onCompleted={handleQuestionCompleted}
          key={currentQuestion}
        ></GameAnswers>
      </>

      {currentScreen == "tooltip" && (
        <>
          <GameLearningTip
            moreGames={props.moreGames}
            onNextGame={handleNextGame}
            onPlayAgain={handlePlayAgain}
          />
        </>
      )}
    </section>
  );
};
