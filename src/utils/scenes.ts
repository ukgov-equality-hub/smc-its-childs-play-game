type Audio = {
  music: string;
  question: string;
  correct: string;
  wrong: string;
};

export type Question = {
  backgroundImage: string;
  question: string;
  choices: number[];
  correctAnswer: number;
  correctAnswerResponse: string;
  incorrectAnswerResponse: string;
};

export type LearningModule = {
  learningTip: string;
  audio: Audio;
  questions: Question[];
};

export const learningModules: LearningModule[] = [
  {
    learningTip:
      "Counting games can be anything! Get them to count their favourite toys, sweets in a bag or birds in the park.",
    audio: {
      music: "background.mp3",
      question: "question.mp3",
      correct: "correct.mp3",
      wrong: "wrong.mp3",
    },
    questions: [
      {
        backgroundImage: "background.jpg",
        question: "Can you count the frogs?",
        choices: [7, 2, 5, 3],
        correctAnswer: 3,
        correctAnswerResponse: "Good job!",
        incorrectAnswerResponse: "No, that's not it.",
      },
      {
        backgroundImage: "background.jpg",
        question: "Can you count the dragonflies?",
        choices: [7, 2, 5, 3],
        correctAnswer: 2,
        correctAnswerResponse: "Good job!",
        incorrectAnswerResponse: "No, that's not it.",
      },
    ],
  },
];
