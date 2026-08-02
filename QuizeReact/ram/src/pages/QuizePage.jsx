import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Question from "../components/Question";

export default function QuizePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8082/quiz/${id}`)
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleAnswer = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const handleSubmit = () => {
    axios.post(`http://localhost:8082/quiz/submit/${id}`, answers)
      .then((res) => {
        navigate("/result", {
          state: { score: res.data, total: questions.length }
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      
      <h1 className="text-2xl font-bold mb-6 text-center">
        Quiz Time 🚀
      </h1>

      {questions.map((q) => (
        <Question key={q.id} data={q} onAnswer={handleAnswer} />
      ))}

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg"
        >
          Submit Quiz ✅
        </button>
      </div>
    </div>
  );
}