chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleDarkMode") {
    document.body.classList.toggle('dark-mode');
    sendResponse({status: "dark mode toggled"});
  }
});
