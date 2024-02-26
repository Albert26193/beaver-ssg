import copy from 'copy-to-clipboard';

export function setupCopy() {
  const idMap: Map<HTMLElement, NodeJS.Timeout> = new Map();
  window.addEventListener('click', (e) => {
    const el = e.target as HTMLElement;

    if (el.matches('div[class*="language-"] > button.copy-code')) {
      const parent = el.parentElement;
      const sibling = el.nextElementSibling?.nextElementSibling as HTMLPreElement | null;
      if (!parent || !sibling) {
        return;
      }
      const { innerText: text = '' } = sibling;
      const isCopied = copy(text);
      if (isCopied) {
        el.classList.add('copied');
        clearTimeout(idMap.get(el));
        const timeoutId = setTimeout(() => {
          el.classList.remove('copied');
          el.blur();
          idMap.delete(el);
        }, 1500);
        idMap.set(el, timeoutId);
      }
    }
  });
}
