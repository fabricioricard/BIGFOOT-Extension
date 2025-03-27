// Listener para quando a extensão é instalada ou atualizada
chrome.runtime.onInstalled.addListener((details) => {
    console.log("BIGFOOT Extension instalada ou atualizada.", details.reason);
    // Pode ser útil inicializar configurações ou exibir uma página de boas-vindas
    if (details.reason === "install") {
        chrome.runtime.openOptionsPage?.(); // Abre página de opções, se existir
    }
});

// Estado global para rastrear o compartilhamento
let isSharing = false;

// Função para iniciar o compartilhamento de internet
async function startSharing() {
    if (isSharing) {
        console.log("Compartilhamento já está ativo.");
        return;
    }

    try {
        console.log("Iniciando compartilhamento de internet...");
        // Simulação de conexão com um servidor proxy (substitua pela lógica real)
        await connectToProxyServer();
        isSharing = true;
        updateBadge("ON", "green");
        console.log("Compartilhamento de internet ativo.");
    } catch (error) {
        console.error("Erro ao iniciar compartilhamento:", error);
        isSharing = false;
        updateBadge("OFF", "red");
    }
}

// Função para parar o compartilhamento de internet
async function stopSharing() {
    if (!isSharing) {
        console.log("Compartilhamento já está parado.");
        return;
    }

    try {
        console.log("Parando compartilhamento de internet...");
        // Simulação de desconexão do servidor proxy (substitua pela lógica real)
        await disconnectFromProxyServer();
        isSharing = false;
        updateBadge("OFF", "gray");
        console.log("Compartilhamento de internet parado.");
    } catch (error) {
        console.error("Erro ao parar compartilhamento:", error);
        updateBadge("ERR", "red");
    }
}

// Função auxiliar para conectar ao servidor proxy (placeholder)
async function connectToProxyServer() {
    // Adicione aqui a lógica real, como uma chamada API ou WebSocket
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação
}

// Função auxiliar para desconectar do servidor proxy (placeholder)
async function disconnectFromProxyServer() {
    // Adicione aqui a lógica real
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação
}

// Função para atualizar o badge da extensão
function updateBadge(text, color) {
    chrome.action.setBadgeText({ text });
    chrome.action.setBadgeBackgroundColor({ color });
}

// Listener para o clique no ícone da extensão
chrome.action.onClicked.addListener(async (tab) => {
    if (!isSharing) {
        await startSharing();
    } else {
        await stopSharing();
    }
});

// Listener para atalhos de teclado, se configurados no manifest.json
chrome.commands?.onCommand.addListener((command) => {
    if (command === "toggle-sharing") {
        isSharing ? stopSharing() : startSharing();
    }
});

// Opcional: Verifica periodicamente o estado da conexão (exemplo)
setInterval(() => {
    if (isSharing) {
        console.log("Verificando estado do compartilhamento...");
        // Adicione lógica para verificar a conexão com o proxy, se necessário
    }
}, 60000); // A cada 60 segundos

// Listener para mensagens do popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getStatus") {
        sendResponse({ isSharing });
    } else if (message.action === "toggleSharing") {
        if (isSharing) {
            stopSharing().then(() => sendResponse({ isSharing: false }));
        } else {
            startSharing().then(() => sendResponse({ isSharing: true }));
        }
        return true; // Indica que a resposta é assíncrona
    }
});