export interface QuestionType {
  title: string;
  description?: string; // any additional info to help answer the question
  answerKeys: KeyboardEvent['key'][];
  answerKeysDisplay?: string[]; // sometimes the key name isn't what's displayed on the keyboard
}
