chrome.storage.sync.get(['code', 'runOnReplit'], function(storage) {
  if (!storage.runOnReplit) return;

  chrome.storage.sync.set({ 'code': null, runOnReplit: false });

  // code injected into replit
  var script = document.createElement('script');
  script.type="text/javascript";
  var codeStr = JSON.stringify(storage.code);
  script.textContent = 'window.setEditorContent(' + codeStr + ')';

  (document.head || document.body || document.documentElement).appendChild(script);

  // were done, lets reset
  chrome.storage.sync.set({
    'redirectToReplit': false,
    'runOnReplit': false,
    'code': null,
  });
});
