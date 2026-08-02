import { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8082/quiz/all")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleStart = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Quizzes 🎯
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} onStart={handleStart} />
        ))}
      </div>
    </div>
  );
}