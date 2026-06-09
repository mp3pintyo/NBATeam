# Hermes Model League Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a deployable Hungarian React website that presents and compares 17 Hermes Agent model runs in an NBA Arena visual system.

**Architecture:** Vite serves a static React single-page application. Experiment records live in JSON, pure selector modules derive rankings and aggregates, and focused React components render cards, filters, details, video, and comparison overlays.

**Tech Stack:** React 19, Vite 7, Vitest, Testing Library, ESLint, CSS

---

### Task 1: Project foundation and experiment data

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/data/models.json`
- Create: `src/data/site.json`
- Create: `src/lib/models.js`
- Test: `src/lib/models.test.js`

- [ ] Write failing tests for aggregate statistics, rankings, filtering, and sorting.
- [ ] Run `npm test -- --run` and confirm failures due to missing selectors.
- [ ] Implement the minimal pure selectors and complete model dataset.
- [ ] Run `npm test -- --run` and confirm selectors pass.

### Task 2: Comparison selection rules

**Files:**
- Create: `src/lib/comparison.js`
- Test: `src/lib/comparison.test.js`

- [ ] Write failing tests for add, remove, duplicate, and fourth-model rejection.
- [ ] Run the focused test and confirm expected failures.
- [ ] Implement immutable selection updates with a three-item limit.
- [ ] Run all tests.

### Task 3: Arena application shell

**Files:**
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles.css`
- Create: `src/components/Hero.jsx`
- Create: `src/components/Scoreboard.jsx`
- Create: `src/components/Podium.jsx`
- Create: `src/components/Methodology.jsx`

- [ ] Render the main navigation, hero video poster, aggregate scoreboard, podium fallback, and methodology.
- [ ] Add the Arena visual tokens, typography, responsive grids, focus treatment, and reduced-motion rule.
- [ ] Verify the application renders with `npm run build`.

### Task 4: Model discovery and detail

**Files:**
- Create: `src/components/Filters.jsx`
- Create: `src/components/ModelGrid.jsx`
- Create: `src/components/ModelCard.jsx`
- Create: `src/components/ModelDetail.jsx`
- Create: `src/components/VideoPoster.jsx`

- [ ] Connect search, filtering, and sorting to the pure selectors.
- [ ] Render honest missing-data states and coming-soon cards.
- [ ] Add the accessible model detail dialog and lazy YouTube iframe.
- [ ] Test representative user interactions with Testing Library.

### Task 5: Three-model comparison

**Files:**
- Create: `src/components/CompareTray.jsx`
- Create: `src/components/CompareDialog.jsx`
- Modify: `src/App.jsx`

- [ ] Wire card selection to comparison state.
- [ ] Add sticky selected-model tray and clear/remove actions.
- [ ] Add the horizontally scrollable metrics and score comparison.
- [ ] Surface a visible error when a fourth model is selected.

### Task 6: Deployment and final verification

**Files:**
- Create: `render.yaml`
- Create: `.gitignore`
- Create: `README.md`
- Create: `eslint.config.js`

- [ ] Document JSON editing, YouTube IDs, score population, local commands, and Render deployment.
- [ ] Run `npm test -- --run`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Perform a local production-preview HTTP smoke test.

