import React from "react";
import { type Question } from "../utils/scenes";
import { Audio } from "@/components/Audio";
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Props {
  question: Question;
}

export const GameQuestion = ({ question }: { question: Question }) => {
  const speechBubbleClass = `game__speechBubble--${question.speechBubble.type}`;

  return (
    <>
      <section>
        <div className="game__bg">
          <img src={question.backgroundImage} alt="" />
        </div>
        <div className="game__clouds">
          <img
            style={{ opacity: question.cloudOpacity }}
            src={BASE_URL + "assets/generic/clouds/clouds.png"}
            alt=""
          />
        </div>
        <div className="game__foreground">
          <img src={question.foregroundImage} alt="" />
        </div>
        <div
          style={{
            top: question.speechBubble.position[0],
            left: question.speechBubble.position[1],
          }}
          className={`game__speechBubble ${speechBubbleClass}`}
        >
          <img src={question.speechBubble.image}></img>
          <p className="-rotate-bubble-text">{question.question}</p>
        </div>
      </section>
      {question.audio && (
        <Audio src={question.audio} autoplay key={question.audio} />
      )}
    </>
  );
};
