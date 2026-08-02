import React, { useState } from "react";
import { createQuiz } from "../services/api";

const CreateQuiz = () => {
  const [category, setCategory] = useState("");
  const [numQ, setNumQ] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      await createQuiz(category, numQ, title);
      alert("Quiz Created ✅");
    } catch (error) {
      console.error(error);
      alert("Failed ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Quiz</h2>

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Number of Questions"
        value={numQ}
        onChange={(e) => setNumQ(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Create Quiz</button>
    </div>
  );
};

export default CreateQuiz;