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

    function safeHide(el: Element | null) {
      if (!el) return;
      try {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty('display', 'none', 'important');
        htmlEl.style.visibility = 'hidden';
        htmlEl.style.pointerEvents = 'none';
        htmlEl.style.opacity = '0';
      } catch {
        // ignore errors
      }
    }

    function removeMatching(root: Document | ShadowRoot) {
      try {
        const list = Array.from(root.querySelectorAll(selectors));
        for (const el of list) {
          safeHide(el as Element);
        }
      } catch {
        // ignore (cross-origin or other DOM access errors)
      }
    }

    function scanAll() {
      // document root
      removeMatching(document);

      // shadow roots
      try {
        const all = Array.from(document.querySelectorAll('*')) as Element[];
        for (const el of all) {
          const maybe = el as unknown as { shadowRoot?: unknown };
          if (
            maybe &&
            typeof maybe.shadowRoot === "object" &&
            maybe.shadowRoot !== null
          ) {
            removeMatching(maybe.shadowRoot as ShadowRoot);
          }
        }
      } catch {
        // ignore
      }

      // same-origin iframes
      try {
        const iframes = Array.from(document.querySelectorAll('iframe')) as HTMLIFrameElement[];
        for (const iframe of iframes) {
          try {
            const doc = iframe.contentDocument;
            if (doc) removeMatching(doc);
          } catch {
            // cross-origin iframe, ignore
          }
        }
      } catch {
        // ignore
      }
    }

    // Inject a style fallback (strong specificity + !important) as a secondary measure
    const style = document.createElement('style');
    style.setAttribute('data-devtools-cleanup', '1');
    style.textContent = `#devtools-indicator, .devtools-indicator, [data-devtools-indicator], [data-nextjs-dev-overlay], [id*="devtools"], [class*="devtools"] { display: none !important; visibility: hidden !important; pointer-events: none !important; opacity: 0 !important; }`;
    try {
      document.head?.appendChild(style);
    } catch {
      // ignore
    }

    // Initial scan
    scanAll();

    // show page after initial cleanup attempt
    try {
      document.documentElement.removeAttribute("data-no-flash");
      try {
        document.documentElement.style.removeProperty("visibility");
      } catch {
        // ignore
      }
    } catch {
      // ignore
    }

    // Observe DOM mutations and hide newly injected nodes
    const mo = new MutationObserver(() => {
      scanAll();
    });
    try {
      mo.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true,
      });
    } catch {
      // ignore
    }

    // Stop after a short period to avoid perpetual work
    const stopTimeout = window.setTimeout(() => {
      try {
        mo.disconnect();
      } catch {
        // ignore
      }
      try {
        document.documentElement.removeAttribute("data-no-flash");
      } catch {
        // ignore
      }
    }, 10_000);

    return () => {
      try {
        mo.disconnect();
      } catch {
        // ignore
      }
      clearTimeout(stopTimeout);
      try {
        style.remove();
      } catch {
        // ignore
      }
      try {
        document.documentElement.removeAttribute("data-no-flash");
      } catch {
        // ignore
      }
    };
  }, []);

  return null;
}
