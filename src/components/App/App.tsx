
import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
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

  
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVotes} onReset={resetVotes}/>
      <VoteStats />

    </div>

  )
}

export default App
