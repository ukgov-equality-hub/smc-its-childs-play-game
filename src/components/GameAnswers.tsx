import { useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";
import { Button } from "./Button";
import { Audio } from "@/components/Audio";

interface props {
  answer: Answers;
  onCompleted: () => void;
}

export const GameAnswers = (props: props) => {
  const [message, setMessage] = useState("Select a number");
  const [showNext, setShowNext] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const handleSelectAnswer = (selection: string) => {
    if (selection == props.answer.correctAnswer) {
      setMessage(props.answer.correctAnswerResponse);
      setShowNext(true);
      setCorrectAnswer(true);
    } else {
      setMessage(props.answer.incorrectAnswerResponse);
      setCorrectAnswer(false);

    }

  };

  const handleClickNext = () => {
    props.onCompleted();
    setCompleted(true);
  };

  return (
    <div className="w-full h-[171px] bg-answer-drawer bg-contain absolute bottom-0 font-paytone text-smc-blue pt-16 z-10">
      {completed == false && (
        <div className="bottom-3 relative">
          <h2 className="mt-3 mb-3 text-center text-white font-cabinet-grotesk-bold text-xl">
            {message}
          </h2>
          <div className="flex gap-x-2 items-center justify-center">
            {showNext == false &&
              props.answer.choices.map((item, index) => (
                <GameAnswer
                  item={item}
                  onSelect={() => handleSelectAnswer(item)}
                  correctAnswer={props.answer.correctAnswer == item}
                  key={index}
                />
              ))}
            {showNext && <Button onClick={handleClickNext}>Next</Button>}
          </div>
          <Audio src={props.answer.audio.correct} play={correctAnswer} />
        </div>
      )}
    </div>
  );
};
