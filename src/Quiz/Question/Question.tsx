import React, { useEffect, useState } from 'react';
import { handleKeys } from './hooks';
import { QuestionType } from '../quiz.d';

interface QuestionProps extends QuestionType {
  goToNextQuestion: (e?: any) => void;
}
const Question = ({ answerKeys, goToNextQuestion, title }: QuestionProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { recentKeys, clearKeys } = handleKeys();
  const isCorrect = recentKeys.slice(answerKeys.length * -1).reduce((prev, key, i) => prev && key === answerKeys[i], true);

  useEffect(() => {
    if (recentKeys.length) {
      clearKeys();
    }
    setIsAnswerVisible(false);
  }, [title]);

  return (
    <div>
      <h2>{title}</h2>

      <code>
        {recentKeys.map(key => <div>{key}</div>)}
      </code>

      {isAnswerVisible && <div>Answer: {answerKeys.join(' ')}</div>}

      <button disabled={isCorrect}>Show Answer</button>
      <button onClick={goToNextQuestion}>Next Question</button>
    </div>
  )
}
export default Question;
