export default function TestSwitcher({ tests, activeId, onChange }) {
  return (
    <section className="test-switcher" aria-label="Tesztprompt kiválasztása">
      {tests.map((test) => {
        const active = test.id === activeId;
        return (
          <button
            type="button"
            key={test.id}
            className={`test-switcher__item${active ? ' test-switcher__item--active' : ''}`}
            aria-pressed={active}
            onClick={() => onChange(test.id)}
          >
            <strong>{test.number}</strong>
            <span>
              <b>Teszt {test.number} — {test.shortTitle}</b>
              <small>{test.statusLabel}</small>
            </span>
            <i aria-hidden="true">→</i>
          </button>
        );
      })}
    </section>
  );
}
