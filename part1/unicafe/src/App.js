import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.setCounter(props.counter + 1)}>
      {props.buttonName}
    </button>
  )
}

const FeedbackScore = (props) => {
  return <div>{props.name} {props.counter} </div>
}

const Total = (props) => {
  return <div>all {props.counterTotal} </div>
}

const Average = (props) => {
  return <div>average {props.counterAverage} </div>
}

const Positive = (props) => {
  return <div>positive {props.counterPositive} </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>give feedback</h2>
      <Button buttonName="good" setCounter={setGood} counter={good} />
      <Button buttonName="neutral" setCounter={setNeutral} counter={neutral} />
      <Button buttonName="bad" setCounter={setBad} counter={bad} />

      <h2>statistics</h2>
      <FeedbackScore name="good" counter={good} />
      <FeedbackScore name="neutral" counter={neutral} />
      <FeedbackScore name="bad" counter={bad} />
      <Total counterTotal={good + neutral + bad} />
      <Average counterAverage={(good - bad) / (good + neutral + bad)} />
      <Positive counterPositive={good / (good + neutral + bad) * 100} />
    </>
  )
}

export default App