package com.example.radhe.controller;

import com.example.radhe.model.Question;
import com.example.radhe.model.QuestionWrapper;
import com.example.radhe.model.Response;
import com.example.radhe.service.QuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    QuestionService service;

    // ✅ GET ALL QUESTIONS
    @GetMapping("/all")
    public List<Question> getAll() {
        return service.getAllQuestions();
    }

    // ✅ GET BY CATEGORY
    @GetMapping("/category/{category}")
    public List<Question> getByCategory(@PathVariable String category) {
        return service.getByCategory(category);
    }

    // ✅ ADD QUESTION
    @PostMapping("/add")
    public String add(@RequestBody Question q) {
        return service.addQuestion(q);
    }

    // 🔥 GENERATE RANDOM QUESTION IDS (USED BY QUIZ SERVICE)
    @GetMapping("/generate")
    public List<Integer> generate(
            @RequestParam String category,
            @RequestParam int numQues) {
        return service.getQuestionsForQuiz(category, numQues);
    }

    // 🔥 GET QUESTIONS WITHOUT ANSWERS
    @PostMapping("/getQuestions")
    public List<QuestionWrapper> getQuestions(
            @RequestBody List<Integer> ids) {
        return service.getQuestionsFromIds(ids);
    }

    // 🔥 CALCULATE SCORE
    @PostMapping("/getScore")
    public Integer getScore(
            @RequestBody List<Response> responses) {
        return service.getScore(responses);
    }
}