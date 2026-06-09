const numeric = (value) => typeof value === 'number' && Number.isFinite(value);

export function calculateAggregates(models) {
  return models.reduce(
    (totals, model) => ({
      participants: totals.participants + 1,
      completedVideos: totals.completedVideos + (model.hasVideo ? 1 : 0),
      knownTokensMillions:
        totals.knownTokensMillions +
        (numeric(model.tokensMillions) ? model.tokensMillions : 0),
      knownCostUsd:
        totals.knownCostUsd + (numeric(model.costUsd) ? model.costUsd : 0),
    }),
    {
      participants: 0,
      completedVideos: 0,
      knownTokensMillions: 0,
      knownCostUsd: 0,
    },
  );
}

export function getRankedModels(models) {
  return models
    .filter((model) => numeric(model.overallScore))
    .toSorted((a, b) => b.overallScore - a.overallScore);
}

export function filterModels(models, { query = '', filter = 'all' }) {
  const normalizedQuery = query.trim().toLocaleLowerCase('hu');

  return models.filter((model) => {
    const matchesQuery =
      !normalizedQuery ||
      `${model.name} ${model.variant ?? ''} ${model.provider ?? ''}`
        .toLocaleLowerCase('hu')
        .includes(normalizedQuery);

    const matchesFilter =
      filter === 'all' ||
      (filter === 'with-video' && model.hasVideo) ||
      (filter === 'with-audio' && model.hasAudio) ||
      (filter === 'free' && model.costUsd === 0) ||
      (filter === 'open-source' && model.openSource === true) ||
      (filter === 'successful' && model.status === 'success') ||
      (filter === 'stopped' && model.status === 'stopped') ||
      (filter === 'coming-soon' && model.status === 'coming-soon');

    return matchesQuery && matchesFilter;
  });
}

const compareKnownNumbers = (a, b, direction = 1) => {
  const aKnown = numeric(a);
  const bKnown = numeric(b);
  if (!aKnown && !bKnown) return 0;
  if (!aKnown) return 1;
  if (!bKnown) return -1;
  return (a - b) * direction;
};

export function sortModels(models, sort = 'score-desc') {
  const result = [...models];
  const sorters = {
    'score-desc': (a, b) =>
      compareKnownNumbers(a.overallScore, b.overallScore, -1),
    'duration-asc': (a, b) =>
      compareKnownNumbers(a.durationMinutes, b.durationMinutes),
    'tokens-asc': (a, b) =>
      compareKnownNumbers(a.tokensMillions, b.tokensMillions),
    'cost-asc': (a, b) => compareKnownNumbers(a.costUsd, b.costUsd),
    'name-asc': (a, b) => a.name.localeCompare(b.name, 'hu'),
  };

  return result.sort(sorters[sort] ?? sorters['score-desc']);
}
