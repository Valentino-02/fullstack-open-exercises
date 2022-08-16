import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const mostVotedAnecdoteIndex = votes.indexOf(Math.max(...votes))

  const randomizeAnecdote = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <>
      <h1>Current Anecdote</h1>
      <h4>{anecdotes[selected]}</h4>
      <p>This Anecdote has {votes[selected]} votes</p>
      <button onClick={randomizeAnecdote}>Next Anecdote</button>
      <button onClick={voteAnecdote}>Vote this Anecdote</button>
      <h1>Most voted Anecdote</h1>
      <h4>{anecdotes[mostVotedAnecdoteIndex]} </h4>
    </>
  )
}

export default App