import VideoPoster from './VideoPoster.jsx';

export default function Hero({ site, modelCount }) {
  return (
    <header className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">{modelCount} modell · egy azonos feladat</p>
        <h1>{site.title}</h1>
        <p className="hero__lead">{site.subtitle}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#modellek">
            Eredmények
          </a>
          <a className="button button--ghost" href="#modszertan">
            Módszertan
          </a>
        </div>
      </div>
      <VideoPoster
        youtubeId={site.mainYoutubeId}
        title={`A teljes ${modelCount} modelles teszt`}
        ratio="wide"
      />
    </header>
  );
}
