export default function Filters({
  query,
  filter,
  sort,
  onQueryChange,
  onFilterChange,
  onSortChange,
}) {
  const filters = [
    ['all', 'Összes'],
    ['with-video', 'Videó készült'],
    ['with-audio', 'Van hang'],
    ['free', 'Ingyenes'],
    ['successful', 'Sikeres'],
    ['stopped', 'Leállított'],
  ];

  return (
    <div className="filters">
      <label className="search">
        <span>Modell keresése</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Keresés név vagy szolgáltató alapján"
        />
      </label>
      <div className="filter-row" aria-label="Gyorsszűrők">
        {filters.map(([value, label]) => (
          <button
            type="button"
            className={filter === value ? 'chip chip--active' : 'chip'}
            onClick={() => onFilterChange(value)}
            key={value}
          >
            {label}
          </button>
        ))}
      </div>
      <label className="sort">
        <span>Rendezés</span>
        <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
          <option value="score-desc">Pontszám szerint</option>
          <option value="duration-asc">Leggyorsabb</option>
          <option value="tokens-asc">Legkevesebb token</option>
          <option value="cost-asc">Legolcsóbb</option>
          <option value="name-asc">Név szerint</option>
        </select>
      </label>
    </div>
  );
}
