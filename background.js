chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { toggleCss: true });
    console.log('hello');
});

console.log('hello - bg');
