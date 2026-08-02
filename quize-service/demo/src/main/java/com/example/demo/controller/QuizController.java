package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.QuestionWrapper;
import com.example.demo.model.Quiz;
import com.example.demo.model.Response;
import com.example.demo.service.QuizService;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    QuizService service;

    // CREATE QUIZ
    @PostMapping("/create")
    public String createQuiz(@RequestParam String category,
                    @RequestParam int numQues,
                    @RequestParam String title) {
        return service.createQuiz(category, numQues, title);
    }

    // GET ALL QUIZ
    @GetMapping("/all")
    public List<Quiz> getAll() {
        return service.getAllQuiz();
    }

    // 🔥 GET QUIZ QUESTIONS
    @GetMapping("/get/{id}")
    public List<QuestionWrapper> getQuiz(@PathVariable Integer id) {
        return service.getQuizQuestions(id);
    }

    // 🔥 SUBMIT QUIZ
    @PostMapping("/submit/{id}")
    public Integer submitQuiz(@PathVariable Integer id,
                        @RequestBody List<Response> responses) {
        return service.calculateResult(id, responses);
    }
}