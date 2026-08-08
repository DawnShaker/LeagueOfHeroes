(function () {
  window.addEventListener('message', (event) => {
    const message = event.data;
    if (event.source !== window || message?.source !== 'LOH_LEAGUE_SITE' || message?.type !== 'CONNECT_EXTENSION') return;

    chrome.runtime.sendMessage({ type: 'LOH_STORE_CONNECTION', config: message.config }, (response) => {
      const error = chrome.runtime.lastError?.message || response?.error || '';
      window.postMessage({
        source: 'LOH_BROWSER_EXTENSION',
        type: 'CONNECTION_RESULT',
        requestId: message.requestId,
        ok: !error && response?.ok === true,
        error
      }, window.location.origin);
    });
  });
})();
