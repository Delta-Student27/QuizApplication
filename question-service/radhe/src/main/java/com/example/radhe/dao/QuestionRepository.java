package com.example.radhe.dao;

import com.example.radhe.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

    List<Question> findByCategory(String category);

    List<Question> findByCategoryAndDifficultyLevel(String category, String difficultyLevel);
}