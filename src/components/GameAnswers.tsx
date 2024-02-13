import { useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";
import { Button } from "./Button";

interface props {
  answer: Answers;
  onCompleted: () => void;
}

export const GameAnswers = (props: props) => {
  const [message, setMessage] = useState("Select a number");
  const [showNext, setShowNext] = useState(false);

  const handleSelectAnswer = (selection: string) => {
    if (selection == props.answer.correctAnswer) {
      setMessage(props.answer.correctAnswerResponse);
      setShowNext(true);
    } else {
      setMessage(props.answer.incorrectAnswerResponse);
    }
  };


  return (
    <div className="w-full h-[171px] bg-answer-drawer bg-contain absolute bottom-0 font-paytone text-smc-blue pt-16 z-10">
      <div className="bottom-3 relative">
        <h2 className="mt-3 mb-3 text-center text-white font-cabinet-grotesk text-xl">
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
           {showNext && (
            <Button onClick={props.onCompleted}>Next</Button>
           )}

        </div>
      </div>
    </div>
  );
};
