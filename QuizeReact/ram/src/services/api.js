import axios from "axios";

// 👉 Base URL
const BASE_URL = "http://localhost:8082";

// 👉 Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= QUIZ APIs =================

// 🔹 Get all quizzes
export const getAllQuizzes = async () => {
  try {
    const res = await api.get("/quiz/all");
    return res.data;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error;
  }
};


// 🔹 Create quiz ✅ FIXED HERE
export const createQuiz = async (category, numQ, title) => {
  try {
    const res = await api.post("/quiz/create", null, {
      params: {
        category: category,
        numQues: numQ,   // 🔥 FIX (IMPORTANT)
        title: title,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error creating quiz:", error);
    throw error;
  }
};


// 🔹 Get questions for quiz
export const getQuizQuestions = async (quizId) => {
  try {
    const res = await api.get(`/quiz/get/${quizId}`); // 🔥 FIXED endpoint
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};


// 🔹 Submit quiz answers
export const submitQuiz = async (quizId, answers) => {
  try {
    const res = await api.post(`/quiz/submit/${quizId}`, answers);
    return res.data;
  } catch (error) {
    console.error("Error submitting quiz:", error);
    throw error;
  }
};

export default api;