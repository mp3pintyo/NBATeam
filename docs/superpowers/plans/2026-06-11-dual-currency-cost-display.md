# Dual Currency Cost Display Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show model costs everywhere in both USD and HUF separated by ` / ` when the data is available.

**Architecture:** Extend the shared formatting layer with a dual-currency formatter so cards, the detail dialog, and the compare dialog all use the same display logic. Cover the formatter directly with unit tests and verify the detail dialog content through the existing app-level UI tests.

**Tech Stack:** React 19, Vite, Vitest, Testing Library

---

### Task 1: Shared Cost Formatter

**Files:**
- Modify: `src/lib/format.js`
- Create: `src/lib/format.test.js`

- [ ] **Step 1: Write the failing test**

```javascript
it('formats usd and huf together when both are known', () => {
  expect(formatDualMoney(0.245, 75)).toBe('$0,245 / 75 Ft');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/format.test.js`
Expected: FAIL because `formatDualMoney` does not exist yet.

- [ ] **Step 3: Write minimal implementation**

```javascript
export const formatDualMoney = (usd, huf) => {
  if (isNumber(usd) && isNumber(huf)) return `${formatMoney(usd)} / ${formatHuf(huf)}`;
  if (isNumber(usd)) return formatMoney(usd);
  if (isNumber(huf)) return formatHuf(huf);
  return 'Nincs adat';
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/format.test.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/format.js src/lib/format.test.js
git commit -m "feat: add dual currency formatter"
```

### Task 2: Use Shared Formatter Across UI

**Files:**
- Modify: `src/components/ModelCard.jsx`
- Modify: `src/components/ModelDetail.jsx`
- Modify: `src/components/CompareDialog.jsx`
- Modify: `src/App.test.jsx`

- [ ] **Step 1: Write the failing UI test**

```javascript
expect(screen.getByText('$0,245 / 75 Ft')).toBeVisible();
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/App.test.jsx`
Expected: FAIL because the UI still renders only USD.

- [ ] **Step 3: Write minimal implementation**

```javascript
<dd>{formatDualMoney(model.costUsd, model.costHuf)}</dd>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/App.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/ModelCard.jsx src/components/ModelDetail.jsx src/components/CompareDialog.jsx src/App.test.jsx
git commit -m "feat: show usd and huf costs together"
```
