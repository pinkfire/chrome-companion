chrome.webRequest.onBeforeSendHeaders.addListener(
 function (details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'X-PINKFIRE-CHANNEL') {
                details.requestHeaders.splice(i, 1);
                break;
            }
        }
        details.requestHeaders.push({name: 'X-PINKFIRE-CHANNEL', value: localStorage.getItem('X-PINKFIRE-CHANNEL')});
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]
);
