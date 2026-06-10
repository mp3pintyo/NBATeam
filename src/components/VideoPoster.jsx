import { useState } from 'react';

export default function VideoPoster({
  youtubeId,
  title,
  ratio = 'vertical',
  eagerPlayer = false,
}) {
  const [playing, setPlaying] = useState(eagerPlayer);

  if (youtubeId && playing) {
    return (
      <div className={`video-frame video-frame--${ratio}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`video-poster video-poster--${ratio}`}
      onClick={() => youtubeId && setPlaying(true)}
      disabled={!youtubeId}
      aria-label={
        youtubeId ? `${title} videó lejátszása` : `${title}: videó hamarosan`
      }
      style={
        youtubeId
          ? {
              backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(3, 6, 11, .92)), url("https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg")`,
            }
          : undefined
      }
    >
      <span className="poster-grid" aria-hidden="true" />
      <span className="poster-kicker">Hermes Model League</span>
      <span className="poster-title">{title}</span>
      <span className="play-button" aria-hidden="true">
        {youtubeId ? '▶' : '—'}
      </span>
      {!youtubeId && <span className="poster-empty">Videót nem generált</span>}
    </button>
  );
}
