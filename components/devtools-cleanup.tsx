"use client";

import { useEffect } from "react";

export default function DevtoolsCleanup() {
  useEffect(() => {
    const selectors = [
      '#devtools-indicator',
      '.devtools-indicator',
  '[data-devtools-indicator]',
  '[data-nextjs-dev-overlay]',
      '[id*="devtools"]',
      '[class*="devtools"]',
    ].join(',');

    // Instead of removing nodes (which can race with React and cause NotFoundError),
    // prefer to hide them via inline styles. This avoids altering the DOM tree.
    function safeRemoveElement(el: Element | Node | null) {
      if (!el) return;
      try {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty('display', 'none', 'important');
        htmlEl.style.visibility = 'hidden';
        htmlEl.style.pointerEvents = 'none';
        htmlEl.style.opacity = '0';
      } catch (e) {
        // ignore
      }
    }

    function removeMatching(root: Document | ShadowRoot) {
      try {
        const list = Array.from(root.querySelectorAll(selectors));
        list.forEach((el) => {
          // Defensive: remove element if possible
          try {
            safeRemoveElement(el);
          } catch (e) {
            // fallback: hide it
            (el as HTMLElement).style.setProperty('display', 'none', 'important');
            (el as HTMLElement).style.visibility = 'hidden';
            (el as HTMLElement).style.pointerEvents = 'none';
            (el as HTMLElement).style.opacity = '0';
          }
        });
      } catch (e) {
        // ignore cross-origin or other errors
      }
    }

    function scanAll() {
      // document root
      removeMatching(document);

      // shadow roots
      try {
        const all = Array.from(document.querySelectorAll('*')) as Element[];
        for (const el of all) {
          // @ts-ignore
          const sr = (el as any).shadowRoot as ShadowRoot | null;
          if (sr) removeMatching(sr);
        }
      } catch (e) {
        /* ignore */
      }

      // same-origin iframes
      try {
        const iframes = Array.from(document.querySelectorAll('iframe')) as HTMLIFrameElement[];
        for (const iframe of iframes) {
          try {
            const doc = iframe.contentDocument;
            if (doc) removeMatching(doc);
          } catch (e) {
            // cross-origin iframe, ignore
          }
        }
      } catch (e) {
        /* ignore */
      }
    }

    // Inject a style fallback (strong specificity + !important) as a secondary measure
    const style = document.createElement('style');
    style.setAttribute('data-devtools-cleanup', '1');
  style.textContent = `#devtools-indicator, .devtools-indicator, [data-devtools-indicator], [data-nextjs-dev-overlay], [id*="devtools"], [class*="devtools"] { display: none !important; visibility: hidden !important; pointer-events: none !important; opacity: 0 !important; }`;
    document.head?.appendChild(style);

    // Initial scan
    scanAll();
    // show page after initial cleanup attempt
    try {
      document.documentElement.removeAttribute('data-no-flash');
  // remove inline visibility:hidden set on the html element
  try { document.documentElement.style.removeProperty('visibility'); } catch (e) { /* ignore */ }
    } catch (e) {
      /* ignore */
    }

    // Observe DOM mutations and remove newly injected nodes
    const mo = new MutationObserver(() => {
      scanAll();
    });
    mo.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true,
    });

    // Stop after a short period to avoid perpetual work
    const stopTimeout = window.setTimeout(() => {
      try {
        mo.disconnect();
      } catch (e) {
        /* ignore */
      }
      // show page after cleanup attempt
      try {
        document.documentElement.removeAttribute('data-no-flash');
      } catch (e) {
        /* ignore */
      }
    }, 10_000);

    return () => {
      try {
        mo.disconnect();
      } catch (e) {
        /* ignore */
      }
      clearTimeout(stopTimeout);
      try {
        try { style.remove(); } catch (e) { /* ignore */ }
      } catch (e) {
        /* ignore */
      }
      try {
        document.documentElement.removeAttribute('data-no-flash');
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

  return null;
}
