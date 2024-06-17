import { useState } from 'react'
import { Button } from './Components'
import { getRandomIntInclusive } from './Components'
import { Header } from './Components'
import { Anecdote } from './Components'
import { WinnerAnecdote } from './Components'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setVote] = useState(Array(8).fill(0))

  const handleClick = () => {
    const index = getRandomIntInclusive(0, anecdotes.length - 1)
    setSelected(index)
  }

  const handleVote = () => {
    const copy= [...allVotes]
    console.log(copy)
    copy[selected]++
    setVote(copy)
  }

  return (
    <div>
      <Header header='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votesCount={allVotes[selected]} />
      <Button
        onClick={handleVote}
        text='vote'
      />
      <Button 
        onClick={handleClick}
        text='next anecdote'
      />
      <Header header='Anecdote with most votes' />
      <WinnerAnecdote text={anecdotes} votesCount={allVotes}/>
    </div>
    
  )
 
}

export default App