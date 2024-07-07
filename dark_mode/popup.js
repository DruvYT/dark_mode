document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "toggleDarkMode"}, function(response) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        // Try reloading the content script
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          files: ['content.js']
        }, () => {
          // Retry sending the message
          chrome.tabs.sendMessage(tabs[0].id, {action: "toggleDarkMode"});
        });
      } else {
        console.log(response.status);
      }
    });
  });
});
