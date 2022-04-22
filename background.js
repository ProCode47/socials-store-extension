<<<<<<< HEAD
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "index.html" });
});
=======
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({'url':"index.html"})
})
>>>>>>> 8001bb94630c8c1a3b168f8bb568ea86a4aa8792
