import { useState } from 'react'

const Statistics = props => {
  const {good, neutral, bad} = props
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return {all, average, positive}
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handelBad = () => setBad(bad + 1)

  const { all, average, positive } = Statistics({ good, neutral, bad })

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {handleGood} text = "good"></Button>
      <Button onClick = {handleNeutral} text = "neutral"></Button>
      <Button onClick = {handelBad} text = "bad"></Button>

      <h1>statistics</h1>
      {all > 0 ? (
        <table>
          <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + " %"} />
        </tbody>
      </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App