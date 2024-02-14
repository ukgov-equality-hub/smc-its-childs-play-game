import { useState } from "react";
import { type Answers } from "../utils/scenes";

interface props {
  answer: Answers;
}

export const GameAnswer = ({
  item,
  correctAnswer,
  onSelect,
}: {
  item: string;
  correctAnswer: boolean;
  onSelect: (selection: string) => void;
}) => {
  const [selectionState, setSelectionState] = useState<boolean | undefined>();
  const handleSelectAnswer = (selection: string) => {
    correctAnswer ? setSelectionState(true) : setSelectionState(false)
    onSelect(item);
  };

  const unselectedClasses = "bg-white";
  const selectedIncorrectClasses = "opacity-20 text-white";

  const answerClasses = () => selectionState == undefined ? unselectedClasses : selectionState == false ? selectedIncorrectClasses : null;

  return (
    <p
      className={`py-3 px-5 flex-1 text-center items-center justify-center rounded-full cursor-pointer text-xl ${answerClasses()}`}
      onClick={() => handleSelectAnswer(item)}
    >
      {item}
    </p>
  );
};
