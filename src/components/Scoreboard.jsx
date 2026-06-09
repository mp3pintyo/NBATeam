import { formatMoney, formatNumber } from '../lib/format.js';

export default function Scoreboard({ aggregates }) {
  const items = [
    ['Indulók', aggregates.participants],
    ['Elkészült videó', aggregates.completedVideos],
    ['Ismert token', `${formatNumber(aggregates.knownTokensMillions)} M`],
    ['Ismert költség', formatMoney(aggregates.knownCostUsd)],
  ];

  return (
    <section className="scoreboard" aria-label="Összesített adatok">
      {items.map(([label, value]) => (
        <div className="scoreboard__item" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}
