import { ReactNode, useEffect, useRef, useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";

interface props {
  src: string;
  loop?: boolean;
  volume?: number;
  autoplay?: boolean;
  play?: boolean;
  muted?: boolean;
}

export const Audio = (props: props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const volume = props.volume ?? 1;

  const safeVolume = Math.min(Math.max(volume, 0), 1);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = safeVolume; // Sets initial volume to 50%

      if (props.autoplay){
        document.addEventListener(
            "click",
            () => {
              if (audioRef.current) {
                audioRef.current.play();
              }
            },
            { once: true }
          );
      }

    }
  }, []);

  // React to changes in the muted prop
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = props.muted ?? false;
    }
  }, [props.muted]); // Rerun the effect if the muted prop changes

  return (
    <audio
      ref={audioRef}
      {...(props.loop && { loop: true })}
      {...(props.autoplay && { autoPlay: true })}
    >
      <source src={props.src} type="audio/mp3" />
    </audio>
  );
};

Audio.propTypes = {
  volume: function (
    props: { [x: string]: number },
    propName: string,
    componentName: string
  ) {
    if (props[propName] < 0 || props[propName] > 1) {
      return new Error(
        `${propName} in ${componentName} must be between 0 and 1`
      );
    }
  },
};
