chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('https://www.disneyplus.com/watch/')) {
    chrome.scripting.executeScript({
      target: {tabId: tabId, allFrames: true},
      files: ['content.js']
    });
  }
});

