type Audio = {
  music: string;
  question: string;
  correct: string;
  wrong: string;
};

export type Answers = {
  choices: string[];
  correctAnswer: string;
  correctAnswerResponse: string;
  incorrectAnswerResponse: string;
};
export type SpeechBubble = {
  type: "top" | "bottomLeft" | "bottomRight" | "left";
  image: string;
  position: string[];
};
export type Question = {
  backgroundImage: string;
  foregroundImage: string;
  speechBubble: SpeechBubble;
  cloudOpacity: string;
  question: string;
  answer: Answers;
  audio: Audio;
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
      music: "assets/generic/sound/sound_soundtrack.mp3",
      question: "question.mp3",
      correct: "correct.mp3",
      wrong: "wrong.mp3",
    },
    questions: [
      {
        backgroundImage: "assets/scene_01/sky_01.jpg",
        foregroundImage: "assets/scene_01/bg_01a.png",
        speechBubble: {
          image: "assets/scene_01/speech_buble_01a.png",
          position: ["18%", "4%"],
          type: "bottomRight",
        },
        cloudOpacity: "20%",
        question: "Can you count the frogs?",
        answer: {
          choices: ["7", "2", "5", "3"],
          correctAnswer: "3",
          correctAnswerResponse: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
        },

        audio: {
          music: "assets/generic/sound/sound_soundtrack.mp3",
          question: "question.mp3",
          correct: "correct.mp3",
          wrong: "wrong.mp3",
        },
      },
      {
        backgroundImage: "assets/scene_01/sky_01.jpg",
        foregroundImage: "assets/scene_01/bg_01b.png",
        speechBubble: {
          image: "assets/scene_01/speech_buble_01b.png",
          position: ["9%", "13%"],
          type: "bottomLeft",
        },
        cloudOpacity: "20%",
        question: "Can you count the dragonflies?",
        answer: {
          choices: ["7", "2", "5", "3"],
          correctAnswer: "2",
          correctAnswerResponse: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
        },
        audio: {
          music: "assets/generic/sound/sound_soundtrack.mp3",
          question: "question.mp3",
          correct: "correct.mp3",
          wrong: "wrong.mp3",
        },
      },
    ],
  },
];
