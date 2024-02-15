import { ReactNode } from "react";
import { Button } from "./Button";

interface props {
  children: ReactNode
  onNextGame: () => void;
  onPlayAgain: () => void;
  moreGames: boolean;
}

export const GameLearningTip = (props: props) => {
  return (
    <div className="w-full h-full backdrop-blur-xl absolute z-30 top-0 left-0">
      <div className="relative rounded-xl mx-5 my-11 bg-smc-blue text-white text-center text-xl font-cabinet-grotesk">
        <div className="px-5 py-7">
          <h2 className="font-paytone pb-5">Learning tip</h2>
          <p className=" font-bold  mx-1">
         {props.children}
          </p>
          <a className="py-3 font-black inline-block">More tips</a>
          <div className="flex gap-x-3 items-center justify-center pt-3">
            <a className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-social-x text-white"></a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-social-instagram"></a>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-10 gap-2">
        {props.moreGames && (
          <>
            <Button onClick={props.onNextGame}>Next game</Button>
            <Button onClick={props.onPlayAgain} theme="secondary">
              Play again
            </Button>
          </>
        )}

        {props.moreGames == false && (
          <>
            <Button onClick={props.onPlayAgain}>Play again</Button>
            <Button onClick={props.onNextGame} theme="secondary">
              Start again
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
