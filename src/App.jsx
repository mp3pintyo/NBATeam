import { useMemo, useState } from 'react';
import models from './data/models.json';
import site from './data/site.json';
import { toggleComparison } from './lib/comparison.js';
import {
  calculateAggregates,
  filterModels,
  getRankedModels,
  sortModels,
} from './lib/models.js';
import CompareDialog from './components/CompareDialog.jsx';
import CompareTray from './components/CompareTray.jsx';
import Filters from './components/Filters.jsx';
import Hero from './components/Hero.jsx';
import Methodology from './components/Methodology.jsx';
import ModelDetail from './components/ModelDetail.jsx';
import ModelGrid from './components/ModelGrid.jsx';
import Podium from './components/Podium.jsx';
import Scoreboard from './components/Scoreboard.jsx';

export default function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('score-desc');
  const [detailModel, setDetailModel] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [compareError, setCompareError] = useState(null);
  const [compareOpen, setCompareOpen] = useState(false);

  const visibleModels = useMemo(
    () => sortModels(filterModels(models, { query, filter }), sort),
    [query, filter, sort],
  );
  const selectedModels = selectedIds
    .map((id) => models.find((model) => model.id === id))
    .filter(Boolean);

  const handleToggleCompare = (modelId) => {
    const result = toggleComparison(selectedIds, modelId);
    setSelectedIds(result.selected);
    setCompareError(result.error);
  };

  return (
    <>
      <a className="skip-link" href="#modellek">Ugrás a modellekhez</a>
      <div className="top-line" />
      <nav className="nav" aria-label="Fő navigáció">
        <a className="brand" href="#top">Hermes <strong>Model League</strong></a>
        <div>
          <a href="#ranglista">Ranglista</a>
          <a href="#modellek">Modellek</a>
          <a href="#modszertan">Módszertan</a>
        </div>
      </nav>
      <main>
        <Hero site={site} />
        <Scoreboard aggregates={calculateAggregates(models)} />
        <div id="ranglista"><Podium ranked={getRankedModels(models)} /></div>
        <section className="section field-section" id="modellek" aria-labelledby="field-title">
          <div className="section-heading">
            <div><p className="eyebrow">A teljes mezőny</p><h2 id="field-title">Modellek</h2></div>
            <p>{visibleModels.length} megjelenített modell · válassz legfeljebb hármat</p>
          </div>
          <Filters
            query={query}
            filter={filter}
            sort={sort}
            onQueryChange={setQuery}
            onFilterChange={setFilter}
            onSortChange={setSort}
          />
          <ModelGrid
            models={visibleModels}
            selectedIds={selectedIds}
            onOpen={setDetailModel}
            onToggleCompare={handleToggleCompare}
          />
        </section>
        <Methodology site={site} />
      </main>
      <footer>
        <a className="brand" href="#top">Hermes <strong>Model League</strong></a>
        <p>17 modell. Egy feladat. Az adatok beszélnek.</p>
      </footer>
      <CompareTray
        models={selectedModels}
        error={compareError}
        onRemove={handleToggleCompare}
        onOpen={() => setCompareOpen(true)}
        onClear={() => { setSelectedIds([]); setCompareError(null); }}
      />
      {detailModel && <ModelDetail model={detailModel} onClose={() => setDetailModel(null)} />}
      {compareOpen && <CompareDialog models={selectedModels} onClose={() => setCompareOpen(false)} />}
    </>
  );
}
