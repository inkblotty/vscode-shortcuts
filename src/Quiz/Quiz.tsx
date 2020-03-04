import React, { useState } from 'react';
import Question from './Question';
import { defaultQuestions } from './defaultQuestions';

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const handleNextQuestion = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    if (defaultQuestions.length > activeQuestionIndex + 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    } else {
      setActiveQuestionIndex(0);
    }
  }
  return (
    <Question
      {...defaultQuestions[activeQuestionIndex]}
      goToNextQuestion={handleNextQuestion}
    />
  )
}
export default Quiz;
