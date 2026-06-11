import { describe, expect, it } from 'vitest';
import { formatDualMoney, formatMoney } from './format.js';

describe('formatMoney', () => {
  it('formats usd amounts with the existing precision', () => {
    expect(formatMoney(0.245)).toBe('$0,245');
  });
});

describe('formatDualMoney', () => {
  it('formats usd and huf together when both are known', () => {
    expect(formatDualMoney(0.245, 75)).toBe('$0,245 / 75 Ft');
  });

  it('falls back to usd when only usd is known', () => {
    expect(formatDualMoney(2, null)).toBe('$2');
  });

  it('returns no data when both currencies are missing', () => {
    expect(formatDualMoney(null, null)).toBe('Nincs adat');
  });
});
