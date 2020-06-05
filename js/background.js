chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({minimumInterval: 7000});
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message === 'showPopup') {
    chrome.pageAction.show(sender.tab.id);
  }
});
