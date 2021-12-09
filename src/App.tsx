import { useState } from 'react'
import AnswerChoice from './components/AnswerChoice'
import Card from './components/Card'

const questionList = [
  {
    question: 'Question 1',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'a',
    userGuess: ''
  },
  {
    question: 'Question 2',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'b',
    userGuess: ''
  },
  {
    question: 'Question 3',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'c',
    userGuess: ''
  },
  {
    question: 'Question 4',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'd',
    userGuess: ''
  },
  {
    question: 'Question 5',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'a',
    userGuess: ''
  },
  {
    question: 'Question 6',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'b',
    userGuess: ''
  },
  {
    question: 'Question 7',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'c',
    userGuess: ''
  },
  {
    question: 'Question 8',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'd',
    userGuess: ''
  },
  {
    question: 'Question 9',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'a',
    userGuess: ''
  },
  {
    question: 'Question 10',
    choices: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    correctAnswer: 'b',
    userGuess: ''
  }
]

// Randomly pick 5 questions to be in the game.
const pickQuestions = () => {
  let questions = questionList
  let pickedQuestions = []
  for (let i = 0; i < 5; i++) {
    let choice = Math.floor(Math.random() * (questionList.length))
    pickedQuestions.push(questions[choice])
    questions.splice(choice, 1)
  }
  return pickedQuestions
}

let initialState = pickQuestions()

const App = () => {
  
  const [questions, setQuestions] = useState(initialState)

  return (
    <div>

    {questions.map((question) => {
      return <Card question={question.question}>
        <AnswerChoice choices={question.choices} />
      </Card>
    })}

    </div>
  )
}

export default App