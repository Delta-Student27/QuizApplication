export default function QuizCard({ quiz, onStart }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition transform duration-300">
      
      <h2 className="text-xl font-bold text-gray-800">
        {quiz.title}
      </h2>

      <p className="text-gray-500 mt-2">
        Category: {quiz.category || "General"}
      </p>

      <button
        onClick={() => onStart(quiz.id)}
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        Start Quiz 🚀
      </button>
    </div>
  );
}