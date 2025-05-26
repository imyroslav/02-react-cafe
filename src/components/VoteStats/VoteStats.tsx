import { type Votes } from "../../types/votes.ts";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
    stats: Votes;
    totalStats: number;
    positiveStats: number;
}

export default function VoteStats({stats, totalStats, positiveStats}: VoteStatsProps) {
    return (
    <div className={css.container}>
        <p className={css.stat}>Good: <strong className={css.number}>{stats.good}</strong></p>
        <p className={css.stat}>Neutral: <strong className={css.number}>{stats.neutral}</strong></p>
        <p className={css.stat}>Bad: <strong className={css.number}>{stats.bad}</strong></p>
            <p className={css.stat}>Total: <strong className={css.number}>{totalStats}</strong></p>
            <p className={css.stat}>Positive: <strong className={css.number}>{positiveStats}%</strong></p>
    </div>

    )
}