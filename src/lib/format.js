export const isNumber = (value) =>
  typeof value === 'number' && Number.isFinite(value);

export const formatNumber = (value, digits = 2) =>
  isNumber(value)
    ? new Intl.NumberFormat('hu-HU', {
        maximumFractionDigits: digits,
      }).format(value)
    : 'Nincs adat';

export const formatMoney = (value) =>
  isNumber(value) ? `$${formatNumber(value, 3)}` : 'Nincs adat';

export const formatHuf = (value) =>
  isNumber(value) ? `${formatNumber(value, 0)} Ft` : 'Nincs adat';

export const formatDualMoney = (usd, huf) => {
  if (isNumber(usd) && isNumber(huf)) return `${formatMoney(usd)} / ${formatHuf(huf)}`;
  if (isNumber(usd)) return formatMoney(usd);
  if (isNumber(huf)) return formatHuf(huf);
  return 'Nincs adat';
};

export const formatBoolean = (value) => {
  if (value === true) return 'Igen';
  if (value === false) return 'Nem';
  return 'Nincs adat';
};
