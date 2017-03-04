function createBtn() {
  var parent = document.querySelector('.file-actions');

  var btn = document.createElement('a');
  btn.href = parent.querySelector('a').href; // link to gist raw
  btn.className = 'btn btn-sm replit-btn';
  btn.onclick = function() {
    var fileName = document.querySelector('.gist-blob-name').textContent.trim();
    var split = fileName.split('.');
    var extension = split[split.length - 1];
    var replitLang = getLangFromExtension(extension);
    chrome.storage.sync.set({
      redirectToReplit: true,
      replitLang: replitLang,
    });
  };

  var txt = document.createElement('span');
  txt.innerHTML = 'Run on replit';
  txt.className = 'txt';
  btn.appendChild(txt);

  var img = document.createElement('div');
  img.className = 'img';
  btn.appendChild(img);

  parent.insertBefore(btn, parent.childNodes[0]);
}

function getLangFromExtension(extension) {
  switch (extension) {
    case 'js':
      return 'javascript';
    case 'py':
      return 'python3';
    case 'html':
    case 'css':
      return 'web_project';
    case 'ss':
    case 'scm':
    case 'sls':
      return 'scheme';
    case 'cs':
      return 'csharp';
    case 'java':
      return 'java';
    case 'c':
      return 'c';
    case 'cpp':
      return 'cpp';
    case 'fs':
    case 'fsi':
    case 'fsscript':
      return 'fsharp';
    case 'go':
      return 'go';
    case 'hs':
      return 'haskell';
    case 'lua':
      return 'lua';
    case 'php':
      return 'php';
    case 'rb':
      return 'ruby';
    case 'rs':
      return 'rust';
    case 'swift':
      return 'swift';
    case 'coffee':
      return 'coffeescript';
    case 'roy':
      return 'roy';
    case 'apl':
      return 'apl';
    case '4th':
      return 'forth';
    case 'bf':
      return 'brainfuck';
    default:
      return extension;
  }
}

// reset storage to default
chrome.storage.sync.set({
  redirectToReplit: false,
  runOnReplit: false,
  code: null,
});

createBtn();
