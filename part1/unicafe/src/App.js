import { useState } from 'react'

const Statistics = (props) =>  {
  if ((props.good + props.neutral + props.bad) === 0) {
    return "No feedback given";
  }
  return (
    <>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.counterTotal} />
          <StatisticLine text="average" value={props.counterAverage} />
          <StatisticLine text="positive" value={props.counterPositive} />
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <table>
        <tr>
          <td style={{width: 60}}>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </table>
    </>
  )
}

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
  return <div>all {props.counter} </div>
}

const Average = (props) => {
  return <div>average {props.counter} </div>
}

const Positive = (props) => {
  return <div>positive {props.counter} </div>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const counterTotal = () => {
    return good + neutral + bad;
  }

  const counterAverage = () => {
    return (good - bad) / (good + neutral + bad);
  }
  
  const counterPositive = () => {
    return good / (good + neutral + bad) * 100;
  }

  return (
    <>
      <h2>give feedback</h2>
      <Button buttonName="good" setCounter={setGood} counter={good} />
      <Button buttonName="neutral" setCounter={setNeutral} counter={neutral} />
      <Button buttonName="bad" setCounter={setBad} counter={bad} />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} 
      counterTotal={counterTotal()} counterAverage={counterAverage()}  counterPositive={counterPositive()} />
    </>
  )
}

export default App