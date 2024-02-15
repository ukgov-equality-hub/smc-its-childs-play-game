import { ReactNode, useState } from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface props {
  children: ReactNode;
  onNextGame: () => void;
  onPlayAgain: () => void;
  moreGames: boolean;
}

export const GameLearningTip = (props: props) => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const variants = {
    drawerHidden: { y: 500, opacity: 1 },
    drawerVisible: {
      y: 0,
      opacity: 1,
    },
    drawerExit: {
      y: 600,
      opacity: 1,
      transition: {
        transition: {
          type: "tween",
          ease: "easeIn",
          duration: 0.6,
        },
      },
    },
    buttonHidden: {
      y: 30,
      opacity: 0,
    },
    buttonVisible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6,
      },
    },
    buttonExit: {
      y: 30,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.6,
      },
    },
    tooltipHidden: {
      opacity: 0,
    },
    tooltipVisible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
      tooltipExit: {
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      },
    },
  };

  const handleNextGAme = () => {
    setReverseAnimation(true);

      props.onNextGame();
    
  };

  const handlePlayAgain = () => {
    setReverseAnimation(true);
    setTimeout(() => {
      props.onPlayAgain();
    },400)
  };
  const pageTransition = {
    type: "tween",
    ease: "easeIn", // Use a linear ease for a smooth, consistent speed
    duration: 0.6,
  };

  return (
    <motion.div
      className="w-full h-full backdrop-blur-xl absolute z-30 top-0 left-0"
      variants={variants}
      initial="drawerHidden"
      animate={reverseAnimation == false ? "drawerVisible" : "drawerExit"}
      exit="drawerExit"
      transition={pageTransition}
      onAnimationComplete={() => setPanelVisible(true)}
    >
      <motion.div
        className="relative rounded-xl mx-5 my-11 bg-smc-blue text-white text-center text-xl font-cabinet-grotesk"
        variants={variants}
        initial="tooltipHidden"
        exit="tooltipExit"
        animate={panelVisible ? "tooltipVisible" : "tooltipHidden"}
      >
        <div className="px-5 py-7">
          <h2 className="font-paytone pb-5">Learning tip</h2>
          <p className=" font-bold  mx-1">{props.children}</p>
          <a className="py-3 font-black inline-block">More tips</a>
          <div className="flex gap-x-3 items-center justify-center pt-3">
            <a className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-social-x text-white"></a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-social-instagram"></a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col mx-10 gap-2"
        variants={variants}
        initial="buttonHidden"
        exit="buttonExit"
        animate={panelVisible ? "buttonVisible" : "buttonHidden"}
      >
        {props.moreGames && (
          <>
            <Button onClick={handleNextGAme}>Next game</Button>
            <Button onClick={handlePlayAgain} theme="secondary">
              Play again
            </Button>
          </>
        )}

        {props.moreGames == false && (
          <>
            <Button onClick={handlePlayAgain}>Play again</Button>
            <Button onClick={handleNextGAme} theme="secondary">
              Start again
            </Button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};
