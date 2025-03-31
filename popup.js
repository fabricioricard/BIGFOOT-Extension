document.getElementById('wallet-input').addEventListener('change', (e) => {
    chrome.runtime.sendMessage({
        action: "setWalletAddress",
        address: e.target.value
    }, (response) => {
        if (response.success) {
            console.log("Carteira configurada com sucesso!");
            updateStatus(); // Atualiza imediatamente após configurar
        }
    });
});

document.getElementById('toggle-btn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "toggleSharing" }, (response) => {
        if (response.error) {
            console.error(response.error);
        } else {
            updateStatus(); // Atualiza após toggle
        }
    });
});

function updateStatus() {
    chrome.runtime.sendMessage({ action: "getStatus" }, (response) => {
        document.getElementById('shared-gb').textContent = response.totalSharedGB.toFixed(2);
        document.getElementById('nano-amount').textContent = response.nanoAmount.toFixed(4);
        document.getElementById('wallet-display').textContent = response.nanoWalletAddress || "Nao configurado";
        document.getElementById('toggle-btn').textContent = response.isSharing ? "Parar" : "Iniciar";
        document.getElementById('wallet-input').value = response.nanoWalletAddress || ""; // Mostra o valor salvo
    });
}

setInterval(updateStatus, 1000);
updateStatus(); // Chama ao carregar
