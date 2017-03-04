let code = document.querySelector('pre').textContent;

chrome.storage.sync.get(['redirectToReplit', 'replitLang'], function(storage) {
  if (!storage.redirectToReplit) return;

  var code = document.querySelector('pre').textContent;
  chrome.storage.sync.set({
    code: code,
    redirectToReplit: false,
    runOnReplit: true,
  });

  window.location.href = 'https://repl.it/languages/' + storage.replitLang;
});
