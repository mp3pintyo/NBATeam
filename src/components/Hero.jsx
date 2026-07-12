import VideoPoster from './VideoPoster.jsx';

export default function Hero({ test, modelCount }) {
  return (
    <header className="hero" id="top">
      <div className="hero__copy">
        <h1>{test.headline}</h1>
        <p className="hero__lead">{test.description.replace('{modelCount}', String(modelCount))}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#modellek">
            Aktív teszt eredményei
          </a>
          <a className="button button--ghost" href="#modszertan">
            Prompt megnyitása
          </a>
        </div>
      </div>
      <VideoPoster
        youtubeId={test.mainYoutubeId}
        title={`${test.shortTitle} – ${modelCount} modell tesztje`}
        ratio="wide"
      />
    </header>
  );
}
