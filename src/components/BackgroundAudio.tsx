import { ReactNode, useEffect, useRef, useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";
import { Audio } from "@/components/Audio";

interface props {
  src: string;
  controls?: boolean;
}

export const BackgroundAudio = (props: props) => {
  const [isMuted, setIsMuted] = useState(false);

  const handleMuted = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
    {props.controls && (
      <button className={`absolute w-10 h-10 top-4 left-4 z-20 ${isMuted ? 'bg-audio-muted' : 'bg-audio-unmuted' }`} onClick={handleMuted}></button>
    )}

      <Audio src={props.src} autoplay loop volume={0.3} muted={isMuted} />
    </>
  );
};
