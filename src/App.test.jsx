// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App.jsx';

afterEach(cleanup);

describe('App', () => {
  it('filters models by search text', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByRole('searchbox', { name: /modell keresése/i }),
      'Nex-N2',
    );

    expect(
      screen.getByRole('button', { name: /nex agi: nex-n2-pro részletei/i }),
    ).toBeVisible();
    expect(
      screen.queryByRole('button', { name: /qwen 3\.6 27b részletei/i }),
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

  it('shows provider and Hugging Face links independently', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', { name: /qwen 3.6 27b részletei/i }),
    );

    expect(
      screen.getByRole('link', { name: /hugging face/i }),
    ).toHaveAttribute(
      'href',
      'https://huggingface.co/unsloth/Qwen3.6-27B-GGUF',
    );
    expect(
      screen.queryByRole('link', { name: /szolgáltatói oldal/i }),
    ).not.toBeInTheDocument();
  });
});
