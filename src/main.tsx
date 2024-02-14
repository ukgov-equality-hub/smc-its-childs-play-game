import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import "./Game.css";

createRoot(document.getElementById("smc-game") as HTMLElement).render(<App />);
