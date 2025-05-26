
import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notfication';
import { type Votes } from "../../types/votes";
// import Votes from "../../types/votes";
 

function App() {

  const initialState: Votes = {
    good: 0,
    neutral: 0,
    bad: 0
}
const [votes, setVotes] = useState<Votes>(initialState);



const handleVotes = (key: keyof Votes) => {
    setVotes({
        ...votes,
        [key]: votes[key] + 1,
    });
}

const resetVotes = () => {
    setVotes(initialState);
}

const totalVotes = votes.good + votes.neutral + votes.bad
 
const canReset = Boolean(totalVotes)  
  
const positiveRate = totalVotes
? Math.round((votes.good / totalVotes) * 100)
: 0


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVotes} onReset={resetVotes} reset={canReset} />
      { totalVotes > 0 ? <VoteStats stats={votes} totalStats={totalVotes} positiveStats={positiveRate} />
      : <Notification />}
    </div>

  )
}

export default App
