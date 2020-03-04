import { QuestionType } from "./quiz.d";

// helpful: https://keycode.info/
// should I make answerkeys numbers instead? is event.code more accurate?
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
  {
    title: 'Go to Symbol in Workspace',
    answerKeys: ['Meta', 'p', '#'],
  },
  {
    title: 'Go to Symbol in File',
    answerKeys: ['Meta', 'p', '@'],
  },
  {
    title: 'Go to Line number',
    answerKeys: ['Meta', 'p', ':'],
  },
  {
    title: 'Select next instance of highlighted character(s)',
    answerKeys: ['Meta', 'd'],
  },
  {
    title: 'Return to previous cursor position',
    answerKeys: ['Meta', 'u'],
  }
];
