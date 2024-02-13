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
  const selectedIncorrectClasses = "opacity-30";

  const answerClasses = () => selectionState == undefined ? unselectedClasses : selectionState == false ? selectedIncorrectClasses : null;

  return (
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ${answerClasses()}`}
      onClick={() => handleSelectAnswer(item)}
    >
      {item}
    </div>
  );
};
