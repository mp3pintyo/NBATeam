import { describe, expect, it } from 'vitest';
import {
  calculateAggregates,
  filterModels,
  getRankedModels,
  sortModels,
} from './models.js';

const models = [
  {
    id: 'alpha',
    name: 'Alpha',
    status: 'success',
    durationMinutes: 8,
    tokensMillions: 2,
    costUsd: 1.5,
    hasVideo: true,
    hasAudio: true,
    openSource: true,
    overallScore: 8.5,
  },
  {
    id: 'beta',
    name: 'Beta',
    status: 'stopped',
    durationMinutes: 20,
    tokensMillions: null,
    costUsd: null,
    hasVideo: false,
    hasAudio: false,
    openSource: false,
    overallScore: null,
  },
  {
    id: 'gamma',
    name: 'Gamma',
    status: 'partial',
    durationMinutes: 12,
    tokensMillions: 4,
    costUsd: 0,
    hasVideo: true,
    hasAudio: false,
    openSource: true,
    overallScore: 7,
  },
];

describe('calculateAggregates', () => {
  it('sums only known numeric values and counts completed videos', () => {
    expect(calculateAggregates(models)).toEqual({
      participants: 3,
      completedVideos: 2,
      knownTokensMillions: 6,
      knownCostUsd: 1.5,
    });
  });
});

describe('getRankedModels', () => {
  it('excludes unscored records and sorts scores descending', () => {
    expect(getRankedModels(models).map((model) => model.id)).toEqual([
      'alpha',
      'gamma',
    ]);
  });
});

describe('filterModels', () => {
  it('matches search text and selected feature filters', () => {
    expect(
      filterModels(models, { query: 'a', filter: 'with-audio' }).map(
        (model) => model.id,
      ),
    ).toEqual(['alpha']);
  });

  it('returns free models when the free filter is selected', () => {
    expect(
      filterModels(models, { query: '', filter: 'free' }).map(
        (model) => model.id,
      ),
    ).toEqual(['gamma']);
  });

  it('returns only downloadable open-source models', () => {
    expect(
      filterModels(models, { query: '', filter: 'open-source' }).map(
        (model) => model.id,
      ),
    ).toEqual(['alpha', 'gamma']);
  });
});

describe('sortModels', () => {
  it('puts missing numeric values after known values', () => {
    expect(sortModels(models, 'cost-asc').map((model) => model.id)).toEqual([
      'gamma',
      'alpha',
      'beta',
    ]);
  });

  it('sorts names without mutating the source array', () => {
    const result = sortModels([...models].reverse(), 'name-asc');
    expect(result.map((model) => model.name)).toEqual([
      'Alpha',
      'Beta',
      'Gamma',
    ]);
    expect(models[0].id).toBe('alpha');
  });
});
