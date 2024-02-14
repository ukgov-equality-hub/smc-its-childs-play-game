import React from "react";
import { SplashScreenModule, type Question } from "../utils/scenes";
import { Button } from "./Button";

interface Props {
  question: Question;
}

export const SplashScreen = ({
  splashScreen,
  onNextGame

}: {
  splashScreen: SplashScreenModule;
  onNextGame: () => void
}) => {
  return (
    <>
      <section className="game">
        <div className="game__bg">
          <img src={splashScreen.backgroundImage} alt="" />
        </div>
        <div className="game__clouds">
          <img
            style={{ opacity: splashScreen.cloudOpacity }}
            src="/assets/generic/clouds/clouds.png"
            alt=""
          />
        </div>
        <div className="game__foreground">
          <img src={splashScreen.foregroundImage} alt="" />
        </div>
        <div className="absolute top-6 left-6 w-28 h-16">
          <img src={splashScreen.logo} alt="" />
        </div>
        <div className="w-full h-[191px] absolute bottom-0 font-paytone text-smc-blue pt-16 z-10">
          <h2 className="mt-3 mb-3 text-center text-white font-cabinet-grotesk-bold text-2xl font-bold">
            {splashScreen.message}
          </h2>
          <div className="flex gap-x-2 items-center justify-center mx-24">
              {" "}
              <Button onClick={onNextGame}>Next</Button>{" "}
            </div>
        </div>
      </section>
    </>
  );
};
