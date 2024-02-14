type Audio = {
  music: string;
  question: string;
  correct: string;
  wrong: string;
};

export type SpeechBubble = {
  type: "top" | "bottom" | "left";
  image: string;
  position: string[];
};
export type Question = {
  backgroundImage: string;
  foregroundImage: string;
  speechBubble: SpeechBubble;
  cloudOpacity: string;
  question: string;
  choices: string[];
  correctAnswer: string;
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
        backgroundImage: "/assets/scene_01/sky_01.jpg",
        foregroundImage: "/assets/scene_01/bg_01a.png",
        speechBubble: {
          image: "/assets/scene_01/speech_buble_01a.png",
          position: ["18%", "4%"],
          type: "bottom",
        },
        cloudOpacity: "80%",
        question: "Can you count the frogs?",
        choices: ["7", "2", "5", "3"],
        correctAnswer: "3",
        correctAnswerResponse: "Good job!",
        incorrectAnswerResponse: "No, that's not it.",
      },
      {
        backgroundImage: "/assets/scene_01/sky_01.jpg",
        foregroundImage: "/assets/scene_01/bg_01b.png",
        speechBubble: {
          image: "/assets/scene_01/speech_buble_01.png",
          position: ["18%", "4%"],
          type: "bottom",
        },
        cloudOpacity: "80%",
        question: "Can you count the dragonflies?",
        choices: ["7", "2", "5", "3"],
        correctAnswer: "2",
        correctAnswerResponse: "Good job!",
        incorrectAnswerResponse: "No, that's not it.",
      },
    ],
  },
];
