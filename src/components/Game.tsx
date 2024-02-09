import { useState } from 'react'
import { LearningModule, type Question } from '../utils/scenes'
import { GameQuestion } from './GameQuestion'

interface props {
  learningModule: LearningModule
}

export const Game = (props: props) => {
 
  return (
   <>
   <GameQuestion question={props.learningModule.questions[0]} />
   </>
  )
}
