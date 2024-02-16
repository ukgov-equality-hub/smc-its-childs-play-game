import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import "./styles/cabinet-grotesk.css"
import "./styles/paytone-one.css"

import "./Game.scss";


createRoot(document.getElementById("smc-game") as HTMLElement).render(<App />);
