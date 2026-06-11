// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import ModelCard from './ModelCard.jsx';

afterEach(cleanup);

const baseModel = {
  id: 'test-model',
  name: 'Test Model',
  provider: 'OpenAI',
  variant: 'Preview',
  status: 'success',
  statusLabel: 'Jó videó',
  openSource: true,
  youtubeId: null,
  durationMinutes: 12,
  tokensMillions: 3.4,
  costUsd: 0.245,
  costHuf: 75,
  summary: 'Teszt összefoglaló.',
  overallScore: 7.4,
};

describe('ModelCard', () => {
  it('shows the overall score on the left and stacks status above source badge on the right', () => {
    render(
      <ModelCard
        model={baseModel}
        selected={false}
        onOpen={() => {}}
        onToggleCompare={() => {}}
      />,
    );

    expect(
      screen.getByLabelText(/test model összpontszám: 7.4 \/ 10/i),
    ).toBeVisible();
    expect(screen.queryByText(/overall/i)).not.toBeInTheDocument();

    const meta = screen.getByLabelText(/test model állapot metaadatai/i);
    const labels = within(meta)
      .getAllByText(/jó videó|open source/i)
      .map((node) => node.textContent);

    expect(labels).toEqual(['Jó videó', 'Open Source']);
  });
});
