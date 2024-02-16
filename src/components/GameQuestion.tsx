import React from "react";
import { type Question } from "../utils/scenes";
import { Audio } from "@/components/Audio";
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Props {
  question: Question;
  playAudio: boolean;
  onStop: () => void;
}

export const GameQuestion = (props : Props) => {
  const speechBubbleClass = `game__speechBubble--${props.question.speechBubble.type}`;

  return (
    <>
      <section>
        <div className="game__bg">
          <img src={props.question.backgroundImage} alt="" />
        </div>
        <div className="game__clouds">
          <img
            style={{ opacity: props.question.cloudOpacity }}
            src={BASE_URL + "assets/generic/clouds/clouds.png"}
            alt=""
          />
        </div>
        <div className="game__foreground">
          <img src={props.question.foregroundImage} alt="" />
        </div>
        <div
          style={{
            top: props.question.speechBubble.position[0],
            left:props. question.speechBubble.position[1],
          }}
          className={`game__speechBubble ${speechBubbleClass}`}
        >
          <img src={props.question.speechBubble.image}></img>
          <p className="-rotate-bubble-text">{props.question.question}</p>
        </div>
      </section>
         {question.audio && (
      {props.question.audio && (
        <Audio src={props.question.audio} autoplay key={props.question.audio} onStop={props.onStop} play={props.playAudio} />

      )}
    </>
  );
};
