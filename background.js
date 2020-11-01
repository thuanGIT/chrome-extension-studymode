const defaultFilters = [
	"*://*.facebook.com/*",
    "*://*.youtube.com/*",
    "*://*.instagram.com/*"
]

chrome.webRequest.onCompleted.addListener(
    function(details) {
                chrome.tabs.executeScript({file:"content.js"},() => chrome.runtime.lastError);
            },
            {urls: defaultFilters}
);
