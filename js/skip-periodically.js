(() => {
  var minimumInterval = 7000;
  chrome.storage.sync.get("minimumInterval", s => minimumInterval = s.minimumInterval);

  const
    caption = document.getElementById('caption'),
    keyEvent = new KeyboardEvent('keydown', {keyCode: 39, ctrlKey: true}),
    loadNext = (_, observer) => {
      document.dispatchEvent(keyEvent);
      if (observer) {
        observer.disconnect();
      } else {
        observer = new MutationObserver(loadNext);
      }
      setTimeout(() => observer.observe(caption, {childList: true, subtree: true}), minimumInterval);
    };

  setTimeout(loadNext(), minimumInterval);

  chrome.runtime.sendMessage('showPopup');

  console.log("Hello");

  chrome.storage.onChanged.addListener(() => {
    chrome.storage.sync.get("minimumInterval", s => minimumInterval = s.minimumInterval);
  });
})();
