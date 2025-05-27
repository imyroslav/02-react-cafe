import { type Votes } from "../../types/votes.ts";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}

export default function VoteStats({votes, totalVotes, positiveRate}: VoteStatsProps) {
    return (
    <div className={css.container}>
        <p className={css.stat}>Good: <strong className={css.number}>{votes.good}</strong></p>
        <p className={css.stat}>Neutral: <strong className={css.number}>{votes.neutral}</strong></p>
        <p className={css.stat}>Bad: <strong className={css.number}>{votes.bad}</strong></p>
            <p className={css.stat}>Total: <strong className={css.number}>{totalVotes}</strong></p>
            <p className={css.stat}>Positive: <strong className={css.number}>{positiveRate}%</strong></p>
    </div>

    )
}