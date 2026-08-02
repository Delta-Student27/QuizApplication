import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import QuizePage from "./pages/QuizePage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <Router>
      
      {/* Navbar (visible on all pages) */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<QuizePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>

    </Router>
  );
}