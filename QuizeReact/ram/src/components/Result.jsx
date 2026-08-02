export default function Result({ score, total }) {
  const percentage = (score / total) * 100;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-96">
        
        <h1 className="text-3xl font-bold text-gray-800">
          Your Result 🎉
        </h1>

        <p className="text-5xl font-bold text-blue-600 mt-6">
          {score} / {total}
        </p>

        <p className="mt-4 text-lg text-gray-600">
          {percentage >= 70 ? "Excellent 🚀" : "Keep Practicing 💪"}
        </p>

        <div className="mt-6">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}