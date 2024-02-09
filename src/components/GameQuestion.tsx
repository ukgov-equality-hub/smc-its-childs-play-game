import React from 'react'
import { type Question } from '../utils/scenes'

interface Props {
  question: Question
}

export const GameQuestion = ({ question }: { question: Question }) => {

const speechBubbleClass = `game__speechBubble__${question.speechBubble.type}`

  return (
    <section className="game">
      <div className="game__bg">
        <img src={question.backgroundImage} alt="" />
      </div>
      <div className="game__clouds">
        <img style={{opacity: question.cloudOpacity}}  src="/assets/generic/clouds/clouds.png" alt="" />
      </div>
      <div className="game__foreground">
        <img src={question.foregroundImage} alt="" />
      </div>
      <div style={{ top: question.speechBubble.position[0], left: question.speechBubble.position[1]}}  className={`game__speechBubble ${speechBubbleClass}`}>
        <img src={question.speechBubble.image}></img>
        <p>{question.question}</p>
      </div>
    </section>
  )
}
