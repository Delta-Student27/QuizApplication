import { useState } from "react";

export default function Question({ data, onAnswer }) {
  const [selected, setSelected] = useState("");

  const handleClick = (option) => {
    setSelected(option);
    onAnswer(data.id, option);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
      
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {data.questionTitle}
      </h2>

      <div className="space-y-3">
        {[data.option1, data.option2, data.option3, data.option4].map(
          (opt, index) => (
            <button
              key={index}
              onClick={() => handleClick(opt)}
              className={`w-full text-left px-4 py-2 rounded-lg border transition 
                ${
                  selected === opt
                    ? "bg-blue-500 text-white border-blue-500"
                    : "hover:bg-gray-100"
                }`}
            >
              {opt}
            </button>
          )
        )}
      </div>
    </div>
  );
}