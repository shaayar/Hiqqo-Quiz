import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import JoinPage from "./pages/Join";
import QuizPage from "./pages/QuizPage";
import AdminPage from "./pages/QuizCreate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/createQuiz" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
