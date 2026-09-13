# Character Atlas

A responsive character explorer for **Bleach, Naruto, and One Piece**, with form-specific comparisons and transparent ranking notes.

**48 characters · 68 forms · zero runtime dependencies**

## What it does

- Search names with accent-insensitive matching; filter by universe and faction.
- Compare named forms, with the strongest listed form selected by default.
- Sort within each universe without implying a universal cross-series power scale.
- Read an explanation of every placement and its limitations.
- Use keyboard-accessible controls, visible focus indicators and mobile layouts.

## Run locally

Open `index.html` in a modern browser. No installation, API key, build step or network connection is required for the dashboard. Reading links require internet access.

Or serve the directory:

```sh
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000).

## Rankings and accuracy

Scores are **editorial estimates**, not official power levels or fight probabilities. Comparisons consider the named form, story portrayal, demonstrated abilities and constraints. Close scores are uncertain; some ties are intentional. The dataset is a curated roster, not an exhaustive encyclopedia.

The scope ends at Bleach chapter 686, Naruto chapter 700, and One Piece chapter 1057. The interface contains spoilers within those boundaries. See [methodology, corrections and sources](docs/RANKING-METHODOLOGY.md).

The revised dataset removes unverified databook totals, Haki percentages and bounties. It corrects several mislabeled forms and obvious progression inconsistencies. Exact numeric ordering remains interpretive.

## Code structure

| File | Responsibility |
| --- | --- |
| `assets/data.js` | Character records, forms, estimates and context |
| `assets/logic.js` | Pure search, filtering, form selection and sorting |
| `assets/app.js` | Rendering, input events and focus preservation |
| `assets/styles.css` | Responsive presentation and interaction states |
| `tests/rankings.test.cjs` | Data and behavior regressions |

The browser loads three plain scripts in order. Data and comparison logic also export CommonJS modules for Node's built-in test runner. No framework or bundler is needed. Selections stay in memory and reset on reload; nothing is sent to a server.

## Verification

With Node.js 20 or newer:

```sh
npm test
```

Seven automated tests cover schema constraints, selected ranking relationships, invalid form selection, grouped sorting, search and HTML escaping. A Chromium check also exercised filters, keyboard form selection, focus retention, reset, empty results and overflow at widths of 320, 390, 768 and 1440 pixels. These checks do not establish canon accuracy or constitute a complete accessibility audit.

## Contributing

For a ranking correction, provide the character, exact form, chapter or episode reference, relevant conditions and proposed comparison. Update the explanation alongside the number. For code changes, run the tests and check keyboard and mobile behavior.

Independent fan project by [Lakshmi Muppana](https://github.com/L4K5HM1). Character and series rights belong to their respective creators.
