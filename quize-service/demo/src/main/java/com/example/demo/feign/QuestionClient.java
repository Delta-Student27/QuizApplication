package com.example.demo.feign;

import com.example.demo.model.QuestionWrapper;
import com.example.demo.model.Response;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "question-service")
public interface QuestionClient {

    // 🔥 GET RANDOM QUESTIONS IDS
    @GetMapping("/question/generate")
    List<Integer> getQuestionsForQuiz(
            @RequestParam String category,
            @RequestParam int numQues
    );

    // 🔥 GET QUESTIONS BY IDS
    @PostMapping("/question/getQuestions")
    List<QuestionWrapper> getQuestionsFromIds(
            @RequestBody List<Integer> ids
    );

    // 🔥 CALCULATE SCORE
    @PostMapping("/question/getScore")
    Integer getScore(
            @RequestBody List<Response> responses
    );
}