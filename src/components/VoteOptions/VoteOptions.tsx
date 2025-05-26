import { useState } from "react";
import css from "./VoteOptions.module.css";

interface Votes {
    good: number;
    neutral: number;
    bad: number;
}


export default function VoteOptions() {

    const initialState: Votes = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    const [votes, setVotes] = useState<Votes>(initialState);

    

    const handleVotes = (key: keyof Votes) => {
        setVotes({
            ...votes,
            [key]: votes.[key] + 1,
        });
    }

    const resetVotes = () => {
        setVotes(initialState);
    }

    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => handleVotes("good")}>Good: {votes.good} </button>
            <button className={css.button} onClick={() => handleVotes("neutral")}>Neutral: {votes.neutral} </button>
            <button className={css.button} onClick={() => handleVotes("bad")}>Bad: {votes.bad} </button>
            <button className={`${css.button} ${css.reset}`} onClick={resetVotes} >Reset</button>
        </div>

    )
}