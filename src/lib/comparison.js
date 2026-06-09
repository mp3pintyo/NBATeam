export function toggleComparison(selected, modelId) {
  if (selected.includes(modelId)) {
    return {
      selected: selected.filter((id) => id !== modelId),
      error: null,
    };
  }

  if (selected.length >= 3) {
    return {
      selected,
      error: 'Egyszerre legfeljebb 3 modell hasonlítható össze.',
    };
  }

  return { selected: [...selected, modelId], error: null };
}
