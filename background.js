const defaultFilters = [
	"*://*.facebook.com/*",
    "*://*.youtube.com/*",
    "*://*.instagram.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
  });

