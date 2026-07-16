# Medical Beauty Ops prototype

## Source of truth

- Edit files under `source/`; do not hand-edit `medical-beauty-ops-demo.html`.
- `source/template.html` contains the HTML structure.
- `source/styles/style-01.css` contains page styles.
- `source/scripts/script-01.js` contains page behavior and data.
- The generated `medical-beauty-ops-demo.html` must remain a portable, double-clickable single-file deliverable.

## Efficient editing

- Locate the target with `rg` first, then read only the relevant section.
- Batch related changes into one edit and avoid repeatedly scanning the entire generated HTML.
- Do not use browser automation for copy, naming, spacing, color, or other localized edits. Use it only when the request requires interaction or visual verification.
- Preserve unrelated behavior and existing user changes.

## Required verification

After every source edit, run:

```sh
node prototypes/medical-beauty-ops/scripts/build-single-html.mjs
node prototypes/medical-beauty-ops/scripts/build-single-html.mjs --check
```

If JavaScript changed, also run:

```sh
node --check prototypes/medical-beauty-ops/source/scripts/script-01.js
```

Only use `scripts/import-single-html.mjs --force` to migrate a newer hand-edited single-file version back into `source/`. It replaces the entire source directory.

## Completion discipline

- A plan or progress acknowledgement is not the deliverable.
- Finish every requested workflow stage before returning a final answer.
- Do not stop after partial implementation when safe, in-scope work remains.
- The task is complete only after the source changes, single-file build, synchronization check, and applicable JavaScript syntax check all succeed.
- If work cannot continue, identify the specific blocker and list what remains unfinished.
