# Model Source Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add separate provider and Hugging Face links plus explicit open-source status to every model.

**Architecture:** The JSON schema remains flat and editable. Existing pure filtering logic gains one predicate, while card, detail, and comparison components read the new fields directly.

**Tech Stack:** React, JSON, Vitest, Testing Library

---

### Task 1: Define expected behavior

**Files:**
- Modify: `src/lib/models.test.js`
- Modify: `src/App.test.jsx`

- [ ] Add an open-source filter test using records with explicit booleans.
- [ ] Add a detail-dialog test requiring independent provider and Hugging Face links.
- [ ] Run the focused tests and confirm they fail because the behavior is absent.

### Task 2: Migrate data and interface

**Files:**
- Modify: `src/data/models.json`
- Modify: `src/lib/models.js`
- Modify: `src/components/Filters.jsx`
- Modify: `src/components/ModelCard.jsx`
- Modify: `src/components/ModelDetail.jsx`
- Modify: `src/components/CompareDialog.jsx`
- Modify: `src/styles.css`
- Modify: `README.md`

- [ ] Replace `modelUrl` with `providerUrl` and `huggingFaceUrl`.
- [ ] Add required `openSource` booleans without altering user-added YouTube IDs.
- [ ] Implement filtering and the new badge, links, detail metric, and comparison row.
- [ ] Document the three fields and their editing rules.

### Task 3: Verify

**Files:**
- Verify: all changed files

- [ ] Run `npm test -- --run`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Run a schema audit confirming 17 booleans and no remaining `modelUrl` keys.

