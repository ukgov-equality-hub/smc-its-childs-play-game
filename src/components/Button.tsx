import { ReactNode, useState } from "react";
import { type Answers } from "../utils/scenes";
import { GameAnswer } from "./GameAnswer";

interface props {
  children: ReactNode
  theme?: "primary" | "secondary";
  onClick: () => void;
}

export const Button = ({ children, theme = "primary", onClick }: props) => {

  const buttonThemeClasses = () =>{
    switch (theme) {
      case "secondary":
        return "text-white border-2 border-white";
    
      default:
        return" text-smc-blue bg-white";
    }
  }

  return (

            <button className={`flex-1 font-paytone rounded-full py-3 px-6 text-xl ${buttonThemeClasses()}`}  onClick={onClick}>{children}</button>
          
  );
};
