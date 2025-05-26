import { type Votes } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
    onVote: (key: keyof Votes) => void ;
    onReset: () => void;
}


export default function VoteOptions({onVote, onReset}: VoteOptionsProps) {

    
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onVote("good")}>Good</button>
            <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
            <button className={css.button} onClick={() => onVote("bad")}>Bad</button>
            <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
        </div>

    )
}