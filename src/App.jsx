import "./App.css";
import 'animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;