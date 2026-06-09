import { formatBoolean, formatMoney, formatNumber, isNumber } from '../lib/format.js';
import Dialog from './Dialog.jsx';
import VideoPoster from './VideoPoster.jsx';

const scoreLabels = {
  skills: 'Skillhasználat',
  instruction: 'Feladatkövetés',
  research: 'Kutatás',
  images: 'Képanyag',
  video: 'Videóminőség',
  audio: 'Hang / TTS',
  technical: 'Technikai megfelelés',
  impression: 'Összbenyomás',
};

export default function ModelDetail({ model, onClose }) {
  return (
    <Dialog titleId="model-detail-title" onClose={onClose} className="dialog--detail">
      <div className="detail">
        <div className="detail__video">
          <VideoPoster youtubeId={model.youtubeId} title={model.name} />
        </div>
        <div className="detail__content">
          <p className="eyebrow">{model.provider ?? 'Hermes Agent teszt'}</p>
          <h2 id="model-detail-title">{model.name}</h2>
          <p className="detail__variant">{model.variant}</p>
          <p className="detail__summary">{model.summary}</p>
          <dl className="detail-metrics">
            <div><dt>Futási idő</dt><dd>{model.durationMinutes ? `${model.durationMinutes} perc` : 'Nincs adat'}</dd></div>
            <div><dt>Token</dt><dd>{isNumber(model.tokensMillions) ? `${formatNumber(model.tokensMillions)} millió` : 'Nincs adat'}</dd></div>
            <div><dt>Költség</dt><dd>{formatMoney(model.costUsd)}</dd></div>
            <div><dt>Videó</dt><dd>{formatBoolean(model.hasVideo)}</dd></div>
            <div><dt>Hang</dt><dd>{formatBoolean(model.hasAudio)}</dd></div>
            <div><dt>9:16</dt><dd>{formatBoolean(model.verticalCompliant)}</dd></div>
            <div><dt>Open Source</dt><dd>{formatBoolean(model.openSource)}</dd></div>
          </dl>
          <div className="score-list">
            {Object.entries(scoreLabels).map(([key, label]) => (
              <div className="score-line" key={key}>
                <span>{label}</span>
                <div className="score-track"><i style={{ width: `${(model.scores[key] ?? 0) * 10}%` }} /></div>
                <strong>{isNumber(model.scores[key]) ? model.scores[key] : '—'}</strong>
              </div>
            ))}
          </div>
          <div className="detail__links">
            {model.providerUrl && <a href={model.providerUrl} target="_blank" rel="noreferrer">Szolgáltatói oldal ↗</a>}
            {model.huggingFaceUrl && <a href={model.huggingFaceUrl} target="_blank" rel="noreferrer">Hugging Face ↗</a>}
            {model.projectPath && <code title={model.projectPath}>{model.projectPath}</code>}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
