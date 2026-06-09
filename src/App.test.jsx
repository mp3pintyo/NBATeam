// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('filters models by search text', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByRole('searchbox', { name: /modell keresése/i }),
      'Nex N2',
    );

    expect(screen.getByRole('heading', { name: 'Nex N2 Pro' })).toBeVisible();
    expect(
      screen.queryByRole('heading', { name: 'Qwen 3.6 27B' }),
    ).not.toBeInTheDocument();
  });

  it('opens and closes an accessible model detail dialog', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', { name: /qwen 3.6 27b részletei/i }),
    );
    expect(
      screen.getByRole('dialog', { name: /qwen 3.6 27b/i }),
    ).toBeVisible();

    await user.click(screen.getByRole('button', { name: /bezárás/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
