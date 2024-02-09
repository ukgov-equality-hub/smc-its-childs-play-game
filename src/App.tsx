import React from 'react'
import { GameQuestion } from '@/components/GameQuestion'
import {learningModules} from '@/utils/scenes'
import { Game } from './components/Game'
const App = () => {

  return <Game learningModule={learningModules[0]} />
}
export default App
