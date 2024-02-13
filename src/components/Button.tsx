import { ReactNode, useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";

interface props {
  children: ReactNode
  onClick: () => void;
}

export const Button = (props: props) => {
  return (

            <button className="bg-white rounded-full p-3 pl-6 pr-6 text-xl" onClick={props.onClick}>{props.children}</button>
          
  );
};
