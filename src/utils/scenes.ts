interface Module {
 kind: string;

}

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
}
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
  answer: Answers
};

export type LearningModule = {
  type: "LearningModule";
  learningTip: string;
  audio: Audio;
  questions: Question[];

};

export type SplashScreenModule = {
  type: "SplashScreenModule";
  logo: string;
  backgroundImage: string;
  foregroundImage: string;
  message: string;
  buttonText: string;
  cloudOpacity: string;
  audio: Audio;
}

function createLearningModule(module: LearningModule): LearningModule {
  return {
    ...module,
    type: 'LearningModule',
  };
}

function createSplashScreenModule(module: SplashScreenModule): SplashScreenModule {
  return {
    
    ...module,
    type: 'SplashScreenModule'
  };
}

export const learningModules: Array<LearningModule | SplashScreenModule> = [
  createSplashScreenModule( {
    logo:"assets/scene_00/logo.svg",
    backgroundImage:"assets/scene_00/sky_00.jpg",
    foregroundImage:"assets/scene_00/bg_00.png",
    cloudOpacity:"80%",
    message:"Learning fun for everyone",
    buttonText: "Play",
    audio: {
      music: "assets/generic/sound/sound_soundtrack.mp3",
      question: "question.mp3",
      correct: "correct.mp3",
      wrong: "wrong.mp3",
    },
  } as SplashScreenModule),
  createLearningModule({
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
        answer:{
          choices: ["7", "2", "5", "3"],
          correctAnswer: "3",
          correctAnswerResponse: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
        }

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
        answer:{
          choices: ["7", "2", "5", "3"],
          correctAnswer: "2",
          correctAnswerResponse: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
        }
      },
    ],
  } as LearningModule),
  createLearningModule({
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
        backgroundImage: "assets/scene_01/sky_01.jpg",
        foregroundImage: "assets/scene_01/bg_01a.png",
        speechBubble: {
          image: "assets/scene_01/speech_buble_01a.png",
          position: ["18%", "4%"],
          type: "bottomRight",
        },
        cloudOpacity: "20%",
        question: "Can you count more frogs?",
        answer:{
          choices: ["7", "2", "5", "3"],
          correctAnswer: "3",
          correctAnswerResponse: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
        }

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
        answer:{
          choices: ["7", "2", "5", "3"],
          correctAnswer: "2",
          correctAnswerResponse: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
        }
      },
    ],
  } as LearningModule),
];
