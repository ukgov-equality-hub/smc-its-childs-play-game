import { useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";
import { Button } from "./Button";
import { Audio } from "@/components/Audio";

interface props {
  answer: Answers;
  completed: boolean;
  onCompleted: () => void;
  moreQuestions: boolean;
}

export const GameAnswers = (props: props) => {
  const [message, setMessage] = useState(props.answer.prompt);
  const [showNext, setShowNext] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const handleSelectAnswer = (selection: string) => {
    if (selection == props.answer.correctAnswer) {
      setCorrectAnswer(true);
      if (props.moreQuestions){
        setMessage(props.answer.correctAnswerMoreQuestionPrompt);

      } else{
        setMessage(props.answer.correctAnswerResponse);
      }
      setShowNext(true);
    } else {
      setCorrectAnswer(false);
      setMessage(props.answer.incorrectAnswerResponse);
    }
  };

  const handleClickNext = () => {
    props.onCompleted();
  };

  return (
    <div className="w-full h-[171px] bg-answer-drawer bg-contain absolute bottom-0 font-paytone text-smc-blue pt-16 z-10">
      {props.completed == false && (
        <div className="bottom-5 relative">
          <h2 className="mt-3  mb-3 text-center text-white font-cabinet-grotesk-bold text-xl">
            {message}
          </h2>

          {showNext == false && (
            <div className="flex gap-x-2 items-center justify-center px-10">
              {props.answer.choices.map((item, index) => (
                <GameAnswer
                  item={item}
                  onSelect={() => handleSelectAnswer(item)}
                  correctAnswer={props.answer.correctAnswer == item}
                  key={index}
                />
              ))}
            </div>
          )}

          {showNext && (
            <>
              <div className="flex gap-x-2 items-center justify-center mx-24">
                <Button onClick={handleClickNext}>Next</Button>{" "}
              </div>
              <Audio src={props.answer.audio.correct} play={correctAnswer} />
            </>
          )}
        </div>
      )}
    </div>
  );
};
