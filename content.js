chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchTraffmonetizer") {
        fetch("https://app.traffmonetizer.com/", { method: "GET" })
            .then(response => response.json())
            .then(data => sendResponse({ success: true, data }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true;
    }
});
