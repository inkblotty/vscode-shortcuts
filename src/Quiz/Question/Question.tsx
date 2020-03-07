import React, { useEffect, useState } from 'react';
import { useHandleKeys } from './hooks';
import { QuestionType } from '../quiz.d';
import keyDisplayMap, { isMappableKey } from '../keyDisplayMap';

interface QuestionProps extends QuestionType {
  goToNextQuestion: (e?: any) => void;
}
const mapKey = (key: any) => (
  isMappableKey(key) ? keyDisplayMap[key] : key
);
const Question = ({ answerKeys, goToNextQuestion, title }: QuestionProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { recentKeys, clearKeys } = useHandleKeys([]);
  const isCorrect = !!recentKeys.length && recentKeys.slice(answerKeys.length * -1).reduce((prev, key, i) => prev && key === answerKeys[i], true);

  useEffect(() => {
    if (recentKeys.length) {
      clearKeys();
    }
    setIsAnswerVisible(false);
  }, [title]);

  const showAnswer = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    setIsAnswerVisible(true);
  }

  const mappedAnswerKeys = answerKeys.map(mapKey);

  return (
    <div>
      <h2>{title}</h2>

      <code>
        {recentKeys.map(key => <div>{mapKey(key)}</div>)}
      </code>

      {isAnswerVisible || isCorrect
        ? <div>Answer: {mappedAnswerKeys.join(' ')}</div>
        : null
      }

      <button disabled={isCorrect || isAnswerVisible} onClick={showAnswer}>Show Answer</button>
      <button onClick={goToNextQuestion}>Next Question</button>
    </div>
  )
}
export default Question;
