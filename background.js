let isSharing = false;
let sharingStartTime = null;
let totalSharedGB = 0;
let nanoWalletAddress = '';
const NANO_PER_GB = 0.01;
const TRAFFMONETIZER_TOKEN = "FE9sf+b8WxdiFd5ZOYgcdJmFSivw6UWM4/wyWVk91PM=";

let intervalId = null; // Para controlar o setInterval

// Carregar o endereço da carteira do armazenamento ao iniciar
chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get(['nanoWalletAddress'], (result) => {
        if (result.nanoWalletAddress) {
            nanoWalletAddress = result.nanoWalletAddress;
            console.log("Carteira carregada do armazenamento:", nanoWalletAddress);
        }
    });
});

async function startSharing() {
    console.log("Iniciando compartilhamento...");
    try {
        if (!nanoWalletAddress) {
            throw new Error("Endereço da carteira NANO não configurado");
        }
        if (!isSharing) { // Evita múltiplos intervalos
            isSharing = true;
            sharingStartTime = Date.now();
            chrome.action.setBadgeText({ text: "ON" });
            chrome.action.setBadgeBackgroundColor({ color: "green" });
            console.log("Compartilhamento iniciado com sucesso! isSharing:", isSharing);
            intervalId = setInterval(calculateSharedData, 60000); // Armazena o ID do intervalo
        }
    } catch (error) {
        console.error("Erro ao iniciar compartilhamento:", error);
        isSharing = false;
        sharingStartTime = null;
        chrome.action.setBadgeText({ text: "OFF" });
        chrome.action.setBadgeBackgroundColor({ color: "red" });
        throw error;
    }
}

async function stopSharing() {
    console.log("Parando compartilhamento...");
    try {
        if (isSharing) { // Só para se estiver ativo
            isSharing = false;
            sharingStartTime = null;
            if (intervalId) {
                clearInterval(intervalId); // Para o intervalo
                intervalId = null;
            }
            chrome.action.setBadgeText({ text: "OFF" });
            chrome.action.setBadgeBackgroundColor({ color: "gray" });
            console.log("Compartilhamento parado com sucesso! isSharing:", isSharing);
        }
    } catch (error) {
        console.error("Erro ao parar compartilhamento:", error);
        chrome.action.setBadgeText({ text: "ERR" });
        chrome.action.setBadgeBackgroundColor({ color: "red" });
        throw error;
    }
}

async function calculateSharedData() {
    if (!isSharing || !sharingStartTime) {
        console.log("calculateSharedData: Compartilhamento não está ativo, pulando...");
        return;
    }
    console.log("Calculando dados compartilhados (simulado)...");
    totalSharedGB += 0.1; // Simulação: 0.1 GB por minuto
    console.log("Dados compartilhados atualizados - totalSharedGB:", totalSharedGB);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Mensagem recebida no background:", message);
    
    if (message.action === "getStatus") {
        const timeActive = isSharing ? (Date.now() - sharingStartTime) / 1000 : 0;
        const nanoAmount = totalSharedGB * NANO_PER_GB;
        sendResponse({ 
            isSharing, 
            totalSharedGB, 
            nanoAmount, 
            timeActive,
            nanoWalletAddress 
        });
    } 
    else if (message.action === "toggleSharing") {
        if (isSharing) {
            stopSharing().then(() => {
                sendResponse({ isSharing: false, totalSharedGB });
            }).catch((error) => {
                sendResponse({ isSharing: true, totalSharedGB, error: "Falha ao parar" });
            });
        } else {
            startSharing().then(() => {
                sendResponse({ isSharing: true, totalSharedGB });
            }).catch((error) => {
                sendResponse({ isSharing: false, totalSharedGB, error: "Falha ao iniciar" });
            });
        }
        return true;
    } 
    else if (message.action === "setWalletAddress") {
        nanoWalletAddress = message.address;
        // Salva no armazenamento persistente
        chrome.storage.local.set({ nanoWalletAddress: message.address }, () => {
            console.log("Endereço da carteira NANO salvo:", nanoWalletAddress);
            sendResponse({ success: true });
        });
        return true; // Resposta assíncrona
    }
});
