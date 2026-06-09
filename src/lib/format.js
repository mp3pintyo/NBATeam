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

export const formatBoolean = (value) => {
  if (value === true) return 'Igen';
  if (value === false) return 'Nem';
  return 'Nincs adat';
};
