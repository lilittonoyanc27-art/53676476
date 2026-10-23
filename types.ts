export interface SubtitleLine {
  id: number;
  start: number; // in seconds
  end: number;   // in seconds
  speaker: 'Natalia Oreiro' | 'Facundo Arana' | 'Got Talent Jurado' | 'Público';
  spanishText: string;
  armenianText: string;
  notes?: string;
}

export interface QuizOption {
  id: string;
  textEs: string;
  textHy: string;
}

export interface QuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: QuizOption[];
  correctOptionId: string;
  explanationEs: string;
  explanationHy: string;
}

export interface TrueFalseItem {
  id: number;
  statementEs: string;
  statementHy: string;
  isTrue: boolean;
  explanationEs: string;
  explanationHy: string;
}

export interface FillBlankItem {
  id: number;
  sentenceBefore: string;
  missingWord: string;
  sentenceAfter: string;
  options: string[];
  fullSentenceEs: string;
  sentenceHy: string;
  explanationEs: string;
  explanationHy: string;
}

export interface WhoSaidItItem {
  id: number;
  quoteEs: string;
  quoteHy: string;
  speaker: 'Natalia Oreiro' | 'Facundo Arana';
  contextEs: string;
  contextHy: string;
}

export interface WordOrderSentence {
  id: number;
  originalEs: string;
  words: string[];
  translationHy: string;
  hintEs: string;
  hintHy: string;
}

export interface MeaningOption {
  id: string;
  textEs: string;
  textHy: string;
}

export interface ExpressionMeaningItem {
  id: number;
  expressionEs: string;
  expressionHy: string;
  options: MeaningOption[];
  correctOptionId: string;
  explanationEs: string;
  explanationHy: string;
}

export interface ExpressionItem {
  id: number;
  spanish: string;
  armenian: string;
  explanationHy: string;
  contextEs: string;
  contextHy: string;
  timestamp: number; // seconds in video
  speaker: 'Natalia Oreiro' | 'Facundo Arana' | 'Got Talent';
  tag: string;
}

export interface UserStats {
  quizScore: number;
  quizTotal: number;
  completedQuizzes: number;
  gamesFinished: {
    tf: number;
    fill: number;
    who: number;
    order: number;
    meaning: number;
  };
  savedExpressions: number[];
}
