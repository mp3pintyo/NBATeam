import ModelCard from './ModelCard.jsx';

export default function ModelGrid({
  models,
  selectedIds,
  onOpen,
  onToggleCompare,
}) {
  if (!models.length) {
    return (
      <div className="empty-state">
        <strong>Nincs találat.</strong>
        <span>Próbálj másik keresést vagy szűrőt.</span>
      </div>
    );
  }

  return (
    <div className="model-grid">
      {models.map((model) => (
        <ModelCard
          model={model}
          selected={selectedIds.includes(model.id)}
          onOpen={onOpen}
          onToggleCompare={onToggleCompare}
          key={model.id}
        />
      ))}
    </div>
  );
}
