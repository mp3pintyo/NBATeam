export default function CompareTray({
  models,
  error,
  onRemove,
  onOpen,
  onClear,
}) {
  if (!models.length && !error) return null;

  return (
    <aside className="compare-tray" aria-live="polite">
      <div>
        <span className="compare-tray__count">{models.length} / 3</span>
        <strong>Összehasonlítás</strong>
        <div className="compare-tray__models">
          {models.map((model) => (
            <button
              type="button"
              onClick={() => onRemove(model.id)}
              aria-label={`${model.name} eltávolítása`}
              key={model.id}
            >
              {model.name} ×
            </button>
          ))}
        </div>
        {error && <p className="compare-tray__error">{error}</p>}
      </div>
      <div className="compare-tray__actions">
        <button type="button" className="text-button" onClick={onClear}>Törlés</button>
        <button
          type="button"
          className="button button--dark"
          onClick={onOpen}
          disabled={models.length < 2}
        >
          Összevetés
        </button>
      </div>
    </aside>
  );
}
