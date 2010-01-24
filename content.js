document.addEventListener("keypress", function(event) {
  if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
    // Only send through hotkey commands.
    chrome.extension.sendRequest({
      keyIdentifier: event.keyIdentifier,
      shiftKey: event.shiftKey,
      ctrlKey: event.ctrlKey,
      altKey: event.altKey,
      metaKey: event.metaKey
    });
  }
  return false;
}, false);

// Not used yet because I need window.focus.
//chrome.extension.onRequest.addListener(
//  function(request, sender, sendResponse) {
//    console.log('got the event! ' + window.focus);
//    try {
//      window.focus();
//    } catch (e) {
//      console.log('exception: ' + e);
//    }
//    sendResponse({'foo': 'got it!'});
//  });
