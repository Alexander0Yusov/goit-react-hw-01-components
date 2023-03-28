import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          style={{ backgroundColor: `${getRandomHexColor()}` }}
          className={css.item}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage} %</span>
        </li>
      ))}
    </ul>
  </section>
);