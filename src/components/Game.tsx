import { useState } from 'react'
import { LearningModule, type Question } from '../utils/scenes'
import { GameQuestion } from './GameQuestion'
import { GameAnswers } from './GameAnswers'

interface props {
  learningModule: LearningModule
}

export const Game = (props: props) => {
 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = props.learningModule.questions[currentQuestion]

  const handleQuestionCompleted = () => {
    if(currentQuestion < props.learningModule.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else{

    }
  }
  return (
   <section className="game">
   <GameQuestion question={question}/>
   <GameAnswers answer={question.answer} onCompleted={handleQuestionCompleted} key={currentQuestion}></GameAnswers>
   </section>
  )
}
