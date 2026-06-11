const categories = [
  'Skillhasználat',
  'Feladatkövetés',
  'Kutatás',
  'Képanyag',
  'Videóminőség',
  'Hang / TTS',
  'Technikai megfelelés',
  'Összbenyomás',
];

export default function Methodology({ site }) {
  return (
    <section className="methodology" id="modszertan" aria-labelledby="method-title">
      <div>
        <p className="eyebrow">A kísérlet háttere</p>
        <h2 id="method-title">Módszertan</h2>
        <p>{site.hermesDescription}</p>
        <blockquote>{site.taskHu}</blockquote>
        {site.taskEn ? <blockquote>{site.taskEn}</blockquote> : null}
      </div>
      <div>
        <h3>Pontozási kategóriák</h3>
        <ol className="category-list">
          {categories.map((category, index) => (
            <li key={category}><span>0{index + 1}</span>{category}</li>
          ))}
        </ol>
        <p className="data-policy">
          A „Nincs adat” nem jelent nulla pontot. A ranglista csak a később
          megadott, tényleges pontszámokat használja.
        </p>
      </div>
    </section>
  );
}
