import { describe, expect, it } from 'vitest';
import { toggleComparison } from './comparison.js';

describe('toggleComparison', () => {
  it('adds and removes model ids immutably', () => {
    const original = ['alpha'];
    expect(toggleComparison(original, 'beta')).toEqual({
      selected: ['alpha', 'beta'],
      error: null,
    });
    expect(toggleComparison(original, 'alpha')).toEqual({
      selected: [],
      error: null,
    });
    expect(original).toEqual(['alpha']);
  });

  it('rejects a fourth distinct model', () => {
    expect(toggleComparison(['a', 'b', 'c'], 'd')).toEqual({
      selected: ['a', 'b', 'c'],
      error: 'Egyszerre legfeljebb 3 modell hasonlítható össze.',
    });
  });
});
