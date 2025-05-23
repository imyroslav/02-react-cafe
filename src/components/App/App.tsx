import { useState } from 'react';

import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'



function App() {

  const [votes, setVotes] = useState({});

  const handleVote = 

  return (
    <div className={css.app}>

    <CafeInfo />

    </div>

  )
}

export default App
