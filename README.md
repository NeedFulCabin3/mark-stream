# Mark Stream

`mark-stream` is an instant document processor running entirely inside the web browser. It bypasses massive third-party npm packages to parse basic document formatting syntax directly on input using targeted regex rules and raw DOM manipulation.

## Overview & Value Proposition

Most web applications pull in megabytes of bundled dependencies just to convert headers, links, and lists into visual structures. `mark-stream` handles string parsing in real time through an isolated processing loop. If you need a zero-overhead editor to test basic syntax transformations without waiting for build processes or server round-trips, this project handles it out of the box.

## How It Works

1. **Capture:** The browser monitors text input inside the source pane on every keystroke.
2. **Sanitize & Tokenize:** Raw strings go through basic HTML entity stripping to prevent unwanted script execution before regex patterns execute.
3. **Parse:** Regular expressions spot headers (`#`, `##`), emphasis markers (`*`, `**`), and hyperlinks (`[label](url)`).
4. **List State Management:** A state flag tracks unordered list items (`- ` or `* `), wrapping sequential lines in `<ul>` containers while isolating surrounding paragraphs.
5. **Render:** The converted HTML string updates the DOM container without needing virtual tree diffing algorithms.

## Key Features

* **Real-time Parsing:** Instant string-to-DOM rendering attached directly to the input event stream.
* **Side-by-Side Interface:** Dual-pane view separating raw source text from converted output.
* **Controlled Security:** Simple regex pass strips inline `<tags>` prior to rendering content to mitigate script injection.
* **Zero Bundling:** Runs directly inside any browser engine without Webpack, Vite, or node environment configurations.

## Tech Stack Breakdown

* **HTML5:** Standard structural markup layout using semi-semantic elements (`<main>`, `<header>`).
* **CSS3:** Flexible box model for two-pane split views and baseline reset styles.
* **JavaScript (ES6+):** Pure string matching, regular expressions, and direct DOM node operations.

## Prerequisites & Web-Based Quick Start

You don't need Node.js, npm, or local terminal installations.

### Option A: GitHub Codespaces (Browser Only)
1. Press `,` (comma) on this GitHub repository page or click **Code > Launch Codespaces**.
2. Once the web IDE finishes booting, install the **Live Preview** extension in VS Code Web.
3. Right-click `index.html` and select **Live Preview: Show Preview**.

### Option B: Local Browser Run
1. Download the repo ZIP file directly from GitHub and extract it.
2. Double-click `index.html` to open it in Chrome, Firefox, Safari, or Edge.

## Repository Structure

```text
mark-stream/
├── .github/
│   └── workflows/
│       └── code-quality.yml  # Automated static checks on PR
├── .gitignore                # OS and editor file exclusions
├── LICENSE                   # MIT open-source license text
├── README.md                 # Project documentation
├── index.html                # App entrypoint containing dual-pane DOM containers
├── script.js                 # Parsing logic, regex routines, and input listeners
└── style.css                 # Flexible box layout and editor styling
```

## Roadmap

[ ] Add support for blockquotes and code block syntax (```).

[ ] Implement simple export functionality to download output as .html files.

[ ] Add dark theme support using CSS custom properties.

```"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra```
