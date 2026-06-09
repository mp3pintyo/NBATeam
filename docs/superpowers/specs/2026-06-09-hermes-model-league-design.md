# Hermes Model League - Design Specification

## Goal

Create a Hungarian, video-first comparison website for 17 language-model runs performed inside Hermes Agent. The site combines a strong editorial story with transparent, filterable experiment data and supports direct comparison of up to three models.

## Audience and tone

The primary audience arrives from the accompanying YouTube video. The experience should feel like an NBA broadcast package: dark arena surfaces, bright orange accents, oversized condensed typography, scoreboards, rankings, and clear status signals. It must remain an analysis tool rather than becoming decorative sports fan art.

## Information architecture

1. Hero with the experiment premise and the main 16:9 YouTube video.
2. Aggregate scoreboard for participant count, completed videos, known tokens, and known cost.
3. Podium populated only when scored models exist.
4. Filterable and sortable model field.
5. Sticky comparison tray with a hard limit of three models.
6. Full comparison overlay with category scores and operational metrics.
7. Model detail overlay with notes, links, score breakdown, and a 9:16 YouTube player.
8. Methodology section containing the Hermes Agent description, original task, scoring categories, and missing-data policy.

## Data model

All editable experiment content lives in `src/data/models.json`. Each model record contains identity, provider/runtime, model links, timing, token and cost data, outcome flags, concise notes, eight optional category scores, an optional overall score, and an optional YouTube video ID.

Missing values use `null`. They render as `Nincs adat` and never silently become zero. The one model not yet supplied is an explicit `coming-soon` record. Rankings only include records with a numeric overall score.

## Scoring

The eight user-approved categories are:

- Skillhasználat
- Feladatkövetés
- Kutatás
- Képanyag
- Videóminőség
- Hang/TTS
- Technikai megfelelés
- Összbenyomás

Scores are supplied later by the user. The application does not infer or manufacture scores from qualitative notes.

## Video behavior

The main video and model videos are represented by YouTube IDs. Cards show YouTube poster images without loading an iframe. An iframe is created only after the user opens a video, reducing initial network and CPU cost. Missing videos use a branded neutral poster.

## Interaction

Users can search by model name, filter by outcome traits, and sort by score, duration, token count, cost, or name. A comparison checkbox adds a model to a sticky tray. A fourth selection is rejected with a clear Hungarian message. Detail and comparison overlays are keyboard accessible, close on Escape, and restore usable page state.

## Responsive behavior

The desktop field uses four columns where space allows. Cards collapse to two columns and then one. The comparison table preserves full data and scrolls horizontally on narrow screens. Video detail remains centered and respects the 9:16 ratio.

## Architecture

The site is a static React and Vite application deployed to Render. Pure data selectors and comparison-state helpers are isolated from components and tested with Vitest. React components own presentation and local interaction state. No backend or database is required.

## Reliability and accessibility

Invalid links are not rendered. Missing media receives a placeholder. Buttons have explicit labels and focus states. Dialogs use semantic roles and labelled headings. Color is reinforced by text labels. Reduced-motion preferences disable nonessential transitions.

## Verification

Automated tests cover aggregate calculations, filtering, sorting, ranking eligibility, and the maximum-three comparison rule. Final verification includes tests, linting, a production build, and a browser-level responsive smoke check.
