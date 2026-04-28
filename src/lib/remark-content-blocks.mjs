function prependLabel(node, className, text) {
  if (!text) {
    return;
  }

  node.children.unshift({
    type: 'paragraph',
    data: {
      hName: 'p',
      hProperties: {
        className: [className]
      }
    },
    children: [{ type: 'text', value: text }]
  });
}

function walk(node, visitor) {
  if (!node || typeof node !== 'object') {
    return;
  }

  visitor(node);

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      walk(child, visitor);
    }
  }
}

export function prisonContentBlocks() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== 'containerDirective') {
        return;
      }

      const attributes = node.attributes ?? {};
      const name = node.name;

      if (name === 'callout') {
        const variant = attributes.variant || attributes.type || 'info';
        prependLabel(node, 'callout-title', attributes.title);
        node.data = {
          hName: 'aside',
          hProperties: {
            className: ['callout', `callout--${variant}`],
            'data-variant': variant,
            role: 'note'
          }
        };
        return;
      }

      if (name === 'reality-check') {
        prependLabel(node, 'reality-check-label', attributes.title || attributes.label);
        node.data = {
          hName: 'aside',
          hProperties: {
            className: ['reality-check'],
            role: 'note'
          }
        };
        return;
      }

      if (name === 'key-info') {
        prependLabel(node, 'key-info-label', attributes.title);
        node.data = {
          hName: 'aside',
          hProperties: {
            className: ['key-info'],
            role: 'note'
          }
        };
        return;
      }

      if (name === 'steps') {
        node.data = {
          hName: 'section',
          hProperties: {
            className: ['steps']
          }
        };
        return;
      }

      if (name === 'cost-table') {
        node.data = {
          hName: 'div',
          hProperties: {
            className: ['cost-table']
          }
        };
        return;
      }

      if (name === 'quick-facts') {
        prependLabel(node, 'key-info-label', attributes.title);
        node.data = {
          hName: 'section',
          hProperties: {
            className: ['quick-facts']
          }
        };
        return;
      }
    });
  };
}
