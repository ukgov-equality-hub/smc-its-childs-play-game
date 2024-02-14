import { ReactNode, useEffect, useRef, useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";
import { Audio } from "@/components/Audio";

interface props {
  src: string;
}

export const BackgroundAudio = (props: props) => {
  const [isMuted, setIsMuted] = useState(false);

  const handleMuted = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <button className={`absolute w-10 h-10 top-4 left-4 z-50 ${isMuted ? 'bg-audio-muted' : 'bg-audio-unmuted' }`} onClick={handleMuted}></button>

      <Audio src={props.src} autoplay loop volume={0.5} muted={isMuted} />
    </>
  );
};
