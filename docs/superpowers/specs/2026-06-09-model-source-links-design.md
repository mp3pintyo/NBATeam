# Model Source Links Design

## Goal

Separate model access links from downloadable model links and make open-source availability explicit for every model record.

## Data shape

Each record in `src/data/models.json` receives:

- `providerUrl`: the OpenRouter, API, or other service page used to access the model.
- `huggingFaceUrl`: the downloadable Hugging Face model page.
- `openSource`: required boolean indicating that a downloadable/open model is available.

The old ambiguous `modelUrl` field is removed. Existing Hugging Face values move to `huggingFaceUrl`; existing OpenRouter values move to `providerUrl`. Existing user-added YouTube IDs remain unchanged.

## Interface

Model cards display an `Open Source` badge when `openSource` is true. The detail dialog shows the boolean status and renders separate `Szolgáltatói oldal` and `Hugging Face` links when present. The comparison table includes open-source status. A new quick filter shows only open-source models.

## Validation

Tests cover the open-source filter and verify that the detail dialog renders both links independently.

