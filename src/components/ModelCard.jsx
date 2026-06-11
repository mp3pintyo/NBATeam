import { formatDualMoney, formatNumber } from '../lib/format.js';
import VideoPoster from './VideoPoster.jsx';

export default function ModelCard({
  model,
  selected,
  onOpen,
  onToggleCompare,
}) {
  const comingSoon = model.status === 'coming-soon';
  const overallScore = Number.isFinite(model.overallScore)
    ? `${model.overallScore} / 10`
    : '—';

  return (
    <article className={`model-card model-card--${model.status}`}>
      <div className="model-card__media">
        <VideoPoster youtubeId={model.youtubeId} title={model.name} />
        <div
          className="model-card__score-badge"
          aria-label={`${model.name} összpontszám: ${overallScore}`}
        >
          <strong>{Number.isFinite(model.overallScore) ? model.overallScore : '—'}</strong>
        </div>
        <div
          className="model-card__meta-badges"
          aria-label={`${model.name} állapot metaadatai`}
        >
          <span className={`status status--${model.status}`}>
            {model.statusLabel}
          </span>
          {model.openSource && (
            <span className="source-badge">Open Source</span>
          )}
        </div>
      </div>
      <div className="model-card__body">
        <p className="model-card__provider">{model.provider ?? 'Adatfeltöltésre vár'}</p>
        <h3>{model.name}</h3>
        <p className="model-card__variant">{model.variant}</p>
        <div className="mini-stats">
          <span>
            <small>Idő</small>
            {model.durationMinutes ? `${model.durationMinutes} perc` : '—'}
          </span>
          <span>
            <small>Token</small>
            {model.tokensMillions
              ? `${formatNumber(model.tokensMillions)} M`
              : '—'}
          </span>
          <span>
            <small>Költség</small>
            {formatDualMoney(model.costUsd, model.costHuf)}
          </span>
        </div>
        <p className="model-card__summary">{model.summary}</p>
        <div className="model-card__actions">
          <button
            type="button"
            className="text-button"
            onClick={() => onOpen(model)}
            aria-label={`${model.name} részletei`}
          >
            Részletek
          </button>
          {!comingSoon && (
            <label className="compare-check">
              <input
                type="checkbox"
                checked={selected}
                onChange={() => onToggleCompare(model.id)}
              />
              Összevetés
            </label>
          )}
        </div>
      </div>
    </article>
  );
}
