
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
// import Votes from "../../types/votes";
 

function App() {

  
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
    </div>

  )
}

export default App
