const places = ['Első hely', 'Második hely', 'Harmadik hely'];

export default function Podium({ ranked }) {
  return (
    <section className="section podium-section" aria-labelledby="podium-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Power ranking</p>
          <h2 id="podium-title">Dobogó</h2>
        </div>
        <p>A rangsor a később megadott összpontszámokból épül fel.</p>
      </div>
      <div className="podium">
        {places.map((place, index) => {
          const model = ranked[index];
          return (
            <article className="podium-card" key={place}>
              <span className="podium-card__number">0{index + 1}</span>
              <span className="podium-card__place">{place}</span>
              <h3>{model?.name ?? 'Pontozásra vár'}</h3>
              <p>
                {model ? `${model.overallScore} / 10` : 'Nincs még pontszám'}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
