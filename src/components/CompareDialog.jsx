import { formatBoolean, formatDualMoney, formatNumber, isNumber } from '../lib/format.js';
import Dialog from './Dialog.jsx';

const rows = [
  ['Futási idő', (model) => model.durationMinutes ? `${model.durationMinutes} perc` : 'Nincs adat'],
  ['Token', (model) => isNumber(model.tokensMillions) ? `${formatNumber(model.tokensMillions)} M` : 'Nincs adat'],
  ['Költség', (model) => formatDualMoney(model.costUsd, model.costHuf)],
  ['Videó', (model) => formatBoolean(model.hasVideo)],
  ['Hang', (model) => formatBoolean(model.hasAudio)],
  ['Képek', (model) => formatBoolean(model.hasImages)],
  ['Skillhasználat', (model) => formatBoolean(model.usedSkills)],
  ['Open Source', (model) => formatBoolean(model.openSource)],
  ['9:16 megfelelés', (model) => formatBoolean(model.verticalCompliant)],
  ['Skillhasználat pont', (model) => isNumber(model.scores.skills) ? `${model.scores.skills} / 10` : 'Nincs pontozva'],
  ['Feladatkövetés pont', (model) => isNumber(model.scores.instruction) ? `${model.scores.instruction} / 10` : 'Nincs pontozva'],
  ['Kutatás pont', (model) => isNumber(model.scores.research) ? `${model.scores.research} / 10` : 'Nincs pontozva'],
  ['Képanyag pont', (model) => isNumber(model.scores.images) ? `${model.scores.images} / 10` : 'Nincs pontozva'],
  ['Videóminőség pont', (model) => isNumber(model.scores.video) ? `${model.scores.video} / 10` : 'Nincs pontozva'],
  ['Hang / TTS pont', (model) => isNumber(model.scores.audio) ? `${model.scores.audio} / 10` : 'Nincs pontozva'],
  ['Technikai pont', (model) => isNumber(model.scores.technical) ? `${model.scores.technical} / 10` : 'Nincs pontozva'],
  ['Összbenyomás pont', (model) => isNumber(model.scores.impression) ? `${model.scores.impression} / 10` : 'Nincs pontozva'],
  ['Összpontszám', (model) => isNumber(model.overallScore) ? `${model.overallScore} / 10` : 'Nincs pontozva'],
];

export default function CompareDialog({ models, onClose }) {
  return (
    <Dialog titleId="compare-title" onClose={onClose} className="dialog--compare">
      <p className="eyebrow">Head to head</p>
      <h2 id="compare-title">Modellek összevetése</h2>
      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Mutató</th>
              {models.map((model) => <th key={model.id}>{model.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, format]) => (
              <tr key={label}>
                <th>{label}</th>
                {models.map((model) => <td key={model.id}>{format(model)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="comparison-notes">
        {models.map((model) => (
          <article key={model.id}>
            <h3>{model.name}</h3>
            <p>{model.summary}</p>
          </article>
        ))}
      </div>
    </Dialog>
  );
}
