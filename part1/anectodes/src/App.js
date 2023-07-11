import { useState } from 'react'

const NextButton = (props) => {
  const randomNumber = () => props.setSelected(Math.floor(Math.random() * 8));
  return (
    <>
      <button onClick={randomNumber}>next anecdote</button>
    </>
  )
}

const DisplayVotes = (props) => {
  return (
    <>
      <p>has {props.array[props.selected]} votes</p>
    </>
  )
} 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anecdotesArray = []
  for (let i = 0; i < anecdotes.length; i++) {
    anecdotesArray.push(0);    
  }

  const [votes, setVotes] = useState(anecdotesArray)
  const updatedVotes = [...votes];
  const handleVoteClick = () => {
      updatedVotes[selected] += 1; 
      setVotes(updatedVotes)
  }

  const findMaxNumberAndIndex = (array) => {
    let maxNumber = 0;
    let maxIndex = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i];
        maxIndex = i;
      }      
    }

    return [maxNumber, maxIndex];
  }

  let [highestVotes, highestVotesIndex] = findMaxNumberAndIndex(votes);
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <DisplayVotes array={votes} selected={selected} />
      <button onClick={handleVoteClick}>vote</button>
      <NextButton setSelected={setSelected} />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestVotesIndex]}</p>
      <p>has {highestVotes} votes </p>
    </div>
  )
}

export default App