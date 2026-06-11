// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
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

  it('shows dual-currency costs on cards, detail, and compare views', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText('$0,245 / 75 Ft')).toBeVisible();

    await user.click(
      screen.getByRole('button', { name: /minimax m3 részletei/i }),
    );

    expect(
      within(screen.getByRole('dialog', { name: /minimax m3/i })).getByText('$0,245 / 75 Ft'),
    ).toBeVisible();

    await user.click(screen.getByRole('button', { name: /bezárás/i }));

    const search = screen.getByRole('searchbox', { name: /modell keresése/i });

    await user.clear(search);
    await user.type(search, 'MiniMax M3');
    await user.click(screen.getByRole('checkbox', { name: /összevetés/i }));

    await user.clear(search);
    await user.type(search, 'DeepSeek V4 Pro');
    await user.click(screen.getByRole('checkbox', { name: /összevetés/i }));

    await user.click(screen.getByRole('button', { name: /összevetés/i }));

    const compareDialog = screen.getByRole('dialog', { name: /modellek összevetése/i });
    expect(within(compareDialog).getByText('$0,245 / 75 Ft')).toBeVisible();
  });
});
