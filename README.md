# Character Atlas

An interactive character explorer for **Bleach, Naruto, and One Piece**, built with HTML, CSS, and vanilla JavaScript.

## Features

- Search characters by name and filter by series or faction.
- Sort by power rating or character name.
- Switch between character forms and transformations.
- Explore custom SVG radar and Haki charts, plus Naruto databook-style stat meters.
- View series-specific stats in a responsive card layout.

## Run locally

Open `index.html` in a modern browser. No installation, build step, API key, or backend is required. Google Fonts requires an internet connection; fallback fonts are provided.

Alternatively, from this directory run:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and controls |
| `assets/styles.css` | Theme, card layout, and responsive styles |
| `assets/app.js` | Character data, chart rendering, filtering, sorting, and interaction state |

## Implementation

Character records and forms are bundled directly in JavaScript. A shared state object tracks search, series, faction, and sorting; separate objects track selected forms and expanded stats. Rendering functions generate the visible cards and charts. SVG geometry is calculated directly without a charting library.

## Data and scope

This is an unofficial fan project. The dataset includes entries labeled official and entries labeled estimated; cross-series scores are interpretive rather than a canonical shared scale. Source labels are part of the supplied dataset and have not been independently verified. Character and series names belong to their respective owners.

Selections are held in memory and reset when the page reloads. There is no account system or remote database.

## Manual review

1. Search for a character, then clear the search.
2. Switch series and verify the faction options update.
3. Try each sorting option.
4. Switch a character form and inspect its updated stats.
5. Enter an unmatched search and verify the empty state.
6. Check the layout at desktop and narrow mobile widths.

## Author

[Lakshmi Muppana](https://github.com/L4K5HM1)
