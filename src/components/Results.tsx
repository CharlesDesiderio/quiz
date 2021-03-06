interface resultsProps {
  data: {
    question: string
    choices: {
      a: string
      b: string
      c: string
      d: string
    },
    correctAnswer: string
    userGuess: string
  }[]
}

const Results = ({ data }: resultsProps) => {

  const numberCorrect = data.filter((item) => {
    return item.correctAnswer === item.userGuess
  })

  console.log(numberCorrect)

  return (
    <div>
      You got {numberCorrect.length} out of {data.length} right!
    </div>
  )
}

export default Results