
chrome.action.onClicked.addListener(function() {
  chrome.tabs.create({ url: "http://192.168.1.71:8501" });
});
