import { QuestionType } from "./quiz.d";

// helpful: https://keycode.info/
// currently using event.code, which we can use to enforce correct keyboard hand placement
export const defaultQuestions : QuestionType[] = [
  {
    title: 'Open the Command Palette',
    answerKeys: ['MetaLeft', 'KeyP'],
  },
  {
    title: 'Wrap several lines of code',
    description: 'Either using wrapper element like <div></div> or in { }, for example',
    answerKeys: ['AltRight', 'KeyW'],
  },
  {
    title: 'Go to Symbol in Workspace',
    answerKeys: ['MetaLeft', 'KeyP', 'Shift', 'Digit3'],
  },
  {
    title: 'Go to Symbol in File',
    answerKeys: ['MetaLeft', 'KeyP', 'Shift', 'Digit2'],
  },
  {
    title: 'Go to Line number',
    answerKeys: ['MetaLeft', 'KeyP', 'Shift', 'Semicolon'],
  },
  {
    title: 'Select next instance of highlighted character(s)',
    answerKeys: ['MetaRight', 'KeyD'],
  },
  {
    title: 'Return to previous cursor position',
    answerKeys: ['MetaLeft', 'KeyU'],
  }
];
