import css from "./VoteStats.module.css";

export default function VoteStats() {
    return (
    <div className={css.container}>
        <p className={css.stat}>Good: <strong className={css.number}></strong></p>
        <p className={css.stat}>Neutral: <strong className={css.number}>0</strong></p>
        <p className={css.stat}>Bad: <strong className={css.number}>0</strong></p>
        <p className={css.stat}>Total: <strong className={css.number}>0</strong></p>
        <p className={css.stat}>Positive: <strong className={css.number}>0%</strong></p>
    </div>

    )
}