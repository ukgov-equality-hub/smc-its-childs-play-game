import { ReactNode } from "react";

interface props {
  children: ReactNode;
  theme?: "primary" | "secondary";
  onClick: () => void;
}

export const Button = ({ children, theme = "primary", onClick }: props) => {
  const buttonThemeClasses = () => {
    switch (theme) {
      case "secondary":
        return "text-white border-2 border-white border-solid";

      default:
        return " text-smc-blue bg-white";
    }
  };

  return (
    <button
      className={`flex-1 font-paytone rounded-full p-3 pl-6 pr-6 text-xl ${buttonThemeClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
