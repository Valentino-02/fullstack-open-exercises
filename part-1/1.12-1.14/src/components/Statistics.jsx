import React from 'react'

const Statistic = ({name, number}) => <tr><td>{name} {number}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good * 100 / total

  if (total === 0) {
    return (
      <div>No Feedback Given</div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic name='good' number={good} />
        <Statistic name='neutral' number={neutral} />
        <Statistic name='bad' number={bad} />
        <Statistic name='total' number={total} />
        <Statistic name='average' number={average} />
        <Statistic name='positive' number={positive + '%'} />
      </tbody>
    </table>
  )
}

export default Statistics