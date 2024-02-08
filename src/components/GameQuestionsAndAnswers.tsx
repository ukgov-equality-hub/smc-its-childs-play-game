import { useState } from "react";
import { Question } from "../utils/scenes";

type props = {
  question: Question;
  onProgress: () => void;
};

export const GameQuestionsAndAnswers = (props: props) => {
  const [previouslyAnswered, setPreviouslyAnswered] = useState<number[]>([]);

  const handleAnswer = (answer: number) => {
    if (previouslyAnswered.includes(answer)) {
      return;
    }
    setPreviouslyAnswered([...previouslyAnswered, answer]);
    if (answer === props.question.correctAnswer) {
      props.onProgress();
    }
  };

  return (
    <div>
      <h2>{props.question.question}</h2>
      <div>
        {props.question.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={previouslyAnswered.includes(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};
