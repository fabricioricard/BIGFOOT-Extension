function atualizarIconeCompartilhamento(ativo) {
    chrome.action.setBadgeText({ text: ativo ? "ON" : "OFF" });
    chrome.action.setBadgeBackgroundColor({ color: ativo ? "#4CAF50" : "#FF0000" });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleSharing") {
        chrome.storage.local.set({ isSharing: message.status }, () => {
            atualizarIconeCompartilhamento(message.status);
            sendResponse({ success: true });
        });
        return true;
    }
});

// Inicializar o ícone ao carregar a extensão
chrome.storage.local.get("isSharing", (data) => {
    atualizarIconeCompartilhamento(data.isSharing || false);
});

