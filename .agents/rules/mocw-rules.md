---
trigger: always_on
---

# MOCW Technical Workspace Rules

## 1. Technology

Use:

- Plain HTML5.
- CSS3.
- Vanilla JavaScript.
- The existing PWA structure where already used.

Do not introduce unnecessary frameworks, plugins, page builders or dependencies.

## 2. Shared CSS

Use `mocw.css` for common website styling.

Keep page-specific styling separate only when necessary.

Do not create conflicting styles or duplicate large sections of CSS without a clear reason.

## 3. Assets

Use the existing project folders and assets.

WebP images should remain in the established MOCW image location.

Do not rename, move or delete assets without approval.

Check image paths carefully before declaring a page complete.

## 4. Service Worker

When HTML layout or text changes, consider whether the cache version in `sw.js` must be updated.

Do not allow the service worker to interfere with the WordPress blog.

## 5. Blog Architecture

The `/blog` area represents “All MOCW”.

All internal links, menus and breadcrumbs referring to All MOCW must route to:

```text
/blog

6. Quiz Routing

The quiz must route to:

/quiz.html

All internal links, navigation menus, footer links and breadcrumbs referring to the quiz must use /quiz.html.

7. HTML Review Policy

Before changing any .html file:

Explain what will change.

Show the important differences or provide the complete replacement.

Obtain approval when the change may affect structure, design, navigation or functionality.

8. Completion Standard

Do not claim that a task is complete unless the relevant files have been checked and the result is honestly described.