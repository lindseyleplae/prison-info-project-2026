// Remark plugin: Spanish-content internal-link localizer.
//
// For SPANISH content source files only (anything under a `.../es/<slug>.md`
// path in a content collection), rewrite in-body internal links that point at
// English routes so they point at their Spanish counterparts:
//   /              -> /es/
//   /states/…      -> /es/states/…
//   /guides/…      -> /es/guides/…
// Links already under /es/, same-page anchors (#…), external URLs, and mailto:
// are left untouched. English content is never modified — the plugin no-ops
// unless the source file lives in an `es/` directory.
//
// This keeps the Spanish markdown byte-identical to the English in source (only
// `lang` + `sourceReviewed` differ) while the /es routing is applied at build
// time — so a reader on a Spanish page follows "Learn more" links and stays in
// Spanish instead of dropping back to the English guide.

function rewrite(node) {
  if (!node || typeof node !== 'object') {
    return;
  }

  if (node.type === 'link' && typeof node.url === 'string') {
    const url = node.url;
    // Skip anything already localized, external, protocol-relative, anchor-only,
    // or mailto/tel: only absolute internal app routes are rewritten.
    if (!(url.startsWith('/es/') || url === '/es')) {
      if (url === '/') {
        node.url = '/es/';
      } else if (/^\/(states|guides)(\/|$)/.test(url)) {
        node.url = '/es' + url;
      }
    }
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      rewrite(child);
    }
  }
}

export function esInternalLinks() {
  return (tree, file) => {
    const path =
      (file && (file.path || (file.history && file.history[file.history.length - 1]))) || '';
    // Only act on Spanish content source files: `.../<collection>/es/<slug>.md`.
    if (!/[/\\]es[/\\][^/\\]+\.md$/.test(path)) {
      return;
    }
    rewrite(tree);
  };
}
