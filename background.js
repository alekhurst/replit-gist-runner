chrome.browserAction.onClicked.addListener(function(tab) {
  code = 'var btn = document.querySelector(".replit-btn"); if(btn) { btn.click(); } else { alert("Silly goose! You must be viewing a gist to run it!")}';
  chrome.tabs.executeScript(null, {code: code});
});
