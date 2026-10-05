import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import "./styles/fonts.css";
import "./styles/typography.css";
import App from "./App.jsx";
import QuizProvider from "./context/QuizProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <QuizProvider>
        <App />
      </QuizProvider>
    </HashRouter>
  </StrictMode>,
);
