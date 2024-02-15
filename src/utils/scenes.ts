export type Audio = {
  correct: string;
  wrong?: string;
};

export type Answers = {
  choices: string[];
  prompt: string;
  correctAnswer: string;
  correctAnswerResponse: string;
  correctAnswerMoreQuestionPrompt: string;
  incorrectAnswerResponse: string;
  audio: Audio;
};
export type SpeechBubble = {
  type: "top" | "bottomLeft" | "bottomRight" | "leftTop"| "leftBottom";
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
  audio?: string;
};

export type LearningModule = {
  type: "LearningModule";
  learningTip: string;
  learningTipLink?: string;
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
  backgroundAudio: string;
};

function createLearningModule(module: LearningModule): LearningModule {
  return {
    ...module,
    type: "LearningModule",
  };
}

function createSplashScreenModule(
  module: SplashScreenModule
): SplashScreenModule {
  return {
    ...module,
    type: "SplashScreenModule",
  };
}

export const learningModules: Array<LearningModule | SplashScreenModule> = [
    createSplashScreenModule({
      logo: "assets/scene_00/logo.svg",
      backgroundImage: "assets/scene_00/sky_00.jpg",
      foregroundImage: "assets/scene_00/bg_00.png",
      cloudOpacity: "80%",
      message: "Learning fun for everyone",
      buttonText: "Play",
      backgroundAudio: "assets/generic/sound/sound_soundtrack.mp3",
    } as SplashScreenModule),
  createLearningModule({
    learningTip:
      "Counting games can be anything! Get them to count their favourite toys, sweets in a bag or birds in the park.",
      learningTipLink:
      "https://www.gov.uk",
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
        audio: "assets/scene_01/sound/sound_frog.mp3",
        answer: {
          choices: ["7", "2", "5", "3"],
          prompt:"Select a number",
          correctAnswer: "3",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_01/sound/sound_frog.mp3",
          },
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
        audio: "assets/scene_01/sound/sound_buzz.mp3",
        answer: {
          choices: ["7", "2", "5", "3"],
          prompt:"Select a number",
          correctAnswer: "2",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_01/sound/sound_buzz.mp3",
          },
        },
      },
    ],
  } as LearningModule),
  createLearningModule({
    learningTip:
      "Chatting to your child about everyday things can really help them! Try asking what colour toys are as you’re tidying.",
    questions: [
      {
        backgroundImage: "assets/scene_02/sky_02.jpg",
        foregroundImage: "assets/scene_02/bg_02a.png",
        speechBubble: {
          image: "assets/scene_02/speech_buble_02.png",
          position: ["44%", "17%"],
          type: "top",
        },
        cloudOpacity: "60%",
        question: "What colour is the bus?",
        audio: "assets/scene_02/sounds/sound_bus_horn.mp3",
        answer: {
          choices: ["Red", "Yellow", "Blue"],
          prompt:"Select a colour",
          correctAnswer: "Red",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_02/sounds/sound_bus_horn.mp3",
          },
        },
      },
      {
        backgroundImage: "assets/scene_02/sky_02.jpg",
        foregroundImage: "assets/scene_02/bg_02b.png",
        speechBubble: {
          image: "assets/scene_02/speech_buble_02.png",
          position: ["44%", "17%"],
          type: "top",
        },
        cloudOpacity: "60%",
        question: "What colour is the bus?",
        audio: "assets/scene_02/sounds/sound_bus_bell.mp3",
        answer: {
          choices: ["Red", "Yellow", "Blue"],
          prompt:"Select a colour",
          correctAnswer: "Blue",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_02/sounds/sound_bus_bell.mp3",
          },
        },
      },
      {
        backgroundImage: "assets/scene_02/sky_02.jpg",
        foregroundImage: "assets/scene_02/bg_02c.png",
        speechBubble: {
          image: "assets/scene_02/speech_buble_02.png",
          position: ["44%", "17%"],
          type: "top",
        },
        cloudOpacity: "60%",
        question: "What colour is the bus?",
        audio: "assets/scene_02/sounds/sound_bus_horn.mp3",
        answer: {
          choices: ["Red", "Yellow", "Blue"],
          prompt:"Select a colour",
          correctAnswer: "Yellow",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_02/sounds/sound_bus_horn.mp3",
          },
        },
      },
    ],
  } as LearningModule),
  createLearningModule({
    learningTip:
      "There’s no ‘right’ way to play! Try acting out a scene from their favourite story or make up a new one.",
    questions: [
      {
        backgroundImage: "assets/scene_03/sky_03.jpg",
        foregroundImage: "assets/scene_03/bg_03a.png",
        speechBubble: {
          image: "assets/scene_03/speech_buble_03a.png",
          position: ["24%", "34%"],
          type: "leftTop",
        },
        cloudOpacity: "60%",
        question: "What noise do I make?",
        answer: {
          choices: ["Moo", "Baa", "Woof"],
          prompt:"Select a noise",
          correctAnswer: "Moo",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_03/sounds/sound_cow.mp3",
          },
        },
      },
      {
        backgroundImage: "assets/scene_03/sky_03.jpg",
        foregroundImage: "assets/scene_03/bg_03b.png",
        speechBubble: {
          image: "assets/scene_03/speech_buble_03bc.png",
          position: ["21%", "34%"],
          type: "leftBottom",
        },
        cloudOpacity: "60%",
        question: "What noise do I make?",
        answer: {
          choices: ["Moo", "Baa", "Woof"],
          prompt:"Select a noise",
          correctAnswer: "Baa",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_03/sounds/sound_sheep.mp3",
          },
        },
      },
      {
        backgroundImage: "assets/scene_03/sky_03.jpg",
        foregroundImage: "assets/scene_03/bg_03c.png",
        speechBubble: {
          image: "assets/scene_03/speech_buble_03bc.png",
          position: ["21%", "34%"],
          type: "leftBottom",
        },
        cloudOpacity: "60%",
        question: "What noise do I make?",
        answer: {
          choices: ["Moo", "Baa", "Woof"],
          prompt:"Select a noise",
          correctAnswer: "Woof",
          correctAnswerResponse: "Correct!",
          correctAnswerMoreQuestionPrompt: "Correct - keep going!",
          incorrectAnswerResponse: "Oops, try again!",
          audio: {
            correct: "assets/scene_03/sounds/sound_dog.mp3",
          },
        },
      },
    ],
  } as LearningModule)
];
