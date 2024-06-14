import { useState } from 'react'
import { Button } from './Components.jsx'
import { Header } from './Components.jsx'
import { Statistics } from './Components.jsx'


const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
  
  const handleGoodClick = () => setClicks({...clicks, good: clicks.good + 1})
  const handleNeutralClick = () => setClicks({...clicks, neutral: clicks.neutral + 1})
  const handleBadClick = () => setClicks({...clicks, bad: clicks.bad + 1})
  
  return (
    <div>
      <Header header={"give feedback"}/>
      <Button
        onClick={handleGoodClick}
        text='good'
      />
      <Button 
        onClick={handleNeutralClick}
        text='neutral'
      />
      <Button 
        onClick={handleBadClick}
        text='bad'
      />
      <Header header={'statistics'}/>
      <Statistics clicks={clicks}/>
    </div>
  )
}

export default App