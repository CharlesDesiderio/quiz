interface answerChoiceProps {
  choices: {
    a: string
    b: string
    c: string
    d: string
  }
}

const AnswerChoice = ({ choices }: answerChoiceProps) => {
  return (
    <div>
      <div>{choices.a}</div>
      <div>{choices.b}</div>
      <div>{choices.c}</div>
      <div>{choices.d}</div>
    </div>
  )
}

export default AnswerChoice