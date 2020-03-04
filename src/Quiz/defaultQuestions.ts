import { QuestionType } from "./quiz.d";

// helpful: https://keycode.info/
// should I make answerkeys numbers instead? is event.which more accurate?
export const defaultQuestions : QuestionType[] = [
  {
    title: 'Open the Command Palette',
    answerKeys: ['Meta', 'p'],
    answerKeysDisplay: ['Command', 'p'],
  },
  {
    title: 'Wrap several lines of code',
    description: 'Either using wrapper element like <div></div> or in { }, for example',
    answerKeys: ['Alt', '∑'],
    answerKeysDisplay: ['Option', 'w'],
  },
];