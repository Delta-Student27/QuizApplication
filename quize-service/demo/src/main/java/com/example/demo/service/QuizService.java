package com.example.demo.service;

import com.example.demo.dao.QuizRepository;
import com.example.demo.feign.QuestionClient;
import com.example.demo.model.QuestionWrapper;
import com.example.demo.model.Quiz;
import com.example.demo.model.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    QuizRepository repo;

    @Autowired
    QuestionClient client;

    // CREATE QUIZ
    public String createQuiz(String category, int numQues, String title) {

        List<Integer> ids = client.getQuestionsForQuiz(category, numQues);

        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestionIds(ids);

        repo.save(quiz);

        return "Quiz created successfully!";
    }

    // GET ALL QUIZ
    public List<Quiz> getAllQuiz() {
        return repo.findAll();
    }

    // 🔥 GET QUIZ QUESTIONS
    public List<QuestionWrapper> getQuizQuestions(Integer id) {

        Quiz quiz = repo.findById(id).orElseThrow();

        List<Integer> questionIds = quiz.getQuestionIds();

        return client.getQuestionsFromIds(questionIds);
    }

    // 🔥 SUBMIT QUIZ
    public Integer calculateResult(Integer id, List<Response> responses) {

        Quiz quiz = repo.findById(id).orElseThrow();

        return client.getScore(responses);
    }
}