package com.example.radhe.service;

import com.example.radhe.dao.QuestionRepository;
import com.example.radhe.model.Question;
import com.example.radhe.model.QuestionWrapper;
import com.example.radhe.model.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionService {

    @Autowired
    QuestionRepository repo;

    public List<Question> getAllQuestions() {
        return repo.findAll();
    }

    public List<Question> getByCategory(String category) {
        return repo.findByCategory(category);
    }

    public String addQuestion(Question q) {
        repo.save(q);
        return "Question added successfully";
    }

    // 🔥 GENERATE RANDOM IDS
    public List<Integer> getQuestionsForQuiz(String category, int numQues) {

        List<Question> questions = repo.findByCategory(category);

        Collections.shuffle(questions);

        List<Integer> ids = new ArrayList<>();

        for (int i = 0; i < numQues && i < questions.size(); i++) {
            ids.add(questions.get(i).getId());
        }

        return ids;
    }

    // 🔥 GET QUESTIONS (WITHOUT ANSWER)
    public List<QuestionWrapper> getQuestionsFromIds(List<Integer> ids) {

        List<QuestionWrapper> list = new ArrayList<>();

        for (Integer id : ids) {
            Question q = repo.findById(id).orElse(null);

            QuestionWrapper qw = new QuestionWrapper();
            qw.setId(q.getId());
            qw.setQuestionTitle(q.getQuestionTitle());
            qw.setOption1(q.getOption1());
            qw.setOption2(q.getOption2());
            qw.setOption3(q.getOption3());
            qw.setOption4(q.getOption4());

            list.add(qw);
        }

        return list;
    }

    // 🔥 CALCULATE SCORE
    public Integer getScore(List<Response> responses) {

        int score = 0;

        for (Response res : responses) {

            Question q = repo.findById(res.getId()).orElse(null);

            if (q.getRightAnswer().equals(res.getResponse())) {
                score++;
            }
        }

        return score;
    }
}
