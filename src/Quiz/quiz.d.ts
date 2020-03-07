export interface QuestionType {
  title: string;
  description?: string; // any additional info to help answer the question
  answerKeys: KeyboardEvent['code'][];
}
