var port = chrome.extension.connect({ name: "getgeo" });
var selection = window.getSelection();
var text = selection ? selection.toString() : '';
var loc = window.location.toString();
port.postMessage({command:'geo',selection:text,loc:loc});
