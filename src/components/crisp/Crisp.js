function setCrispInitialized() {
  window.$crispInitialized = true;
}

function initCrisp() {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = '6f4643ed-87d4-4f3a-a959-48706a5ad438';
  setCrispInitialized();
}

function isCrispInitialized() {
  if (window.$crispInitialized) return true;

  return false;
}

export function enableCrisp() {
  if (!isCrispInitialized()) {
    initCrisp();
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://client.crisp.im/l.js';
    s.async = 1;
    d.getElementsByTagName('head')[0].appendChild(s);
  }
}

export function openCrisp() {
  enableCrisp();
  window.$crisp.push(['do', 'chat:open']);
}
