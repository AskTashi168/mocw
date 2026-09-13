---
trigger: always_on
---

# MOCW Workspace Rules

- **Tech Stack:** Plain HTML5, CSS3, and JavaScript (Vanilla PWA).
- **Asset Directory:** WebP images live directly in the root `MOCW` folder.
- **Service Worker:** Any layout or text updates to HTML files must prompt an update to the cache version string inside `sw.js`.
- **Review Policy:** Present exact diffs for approval before applying changes to any `.html` file.