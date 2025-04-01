document.addEventListener("DOMContentLoaded", () => {
    loadStoredData();

    document.getElementById("wallet-input").addEventListener("change", (e) => {
        const walletAddress = e.target.value;
        chrome.storage.local.set({ nanoWalletAddress: walletAddress }, () => {
            console.log("Carteira salva:", walletAddress);
            updateStatus();
        });
    });

    document.getElementById("toggle-btn").addEventListener("click", () => {
        chrome.storage.local.get("isSharing", (data) => {
            const newStatus = !data.isSharing;
            chrome.storage.local.set({ isSharing: newStatus }, () => {
                console.log("Compartilhamento:", newStatus ? "Ativado" : "Desativado");
                updateStatus();
            });

            chrome.runtime.sendMessage({ action: "toggleSharing", status: newStatus });
        });
    });

    document.getElementById("claim-btn").addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "claimRewards" }, (response) => {
            if (response.success) {
                alert("NANO resgatado com sucesso!");
                updateStatus();
            } else {
                alert("Erro ao resgatar NANO.");
            }
        });
    });

    function updateStatus() {
        chrome.storage.local.get(["nanoWalletAddress", "isSharing", "totalSharedGB", "nanoAmount"], (data) => {
            document.getElementById("wallet-input").value = data.nanoWalletAddress || "";
            document.getElementById("wallet-display").textContent = data.nanoWalletAddress || "Não configurado";
            document.getElementById("shared-gb").textContent = (data.totalSharedGB || 0).toFixed(2);
            document.getElementById("nano-amount").textContent = (data.nanoAmount || 0).toFixed(4);
            
            document.getElementById("toggle-btn").textContent = data.isSharing ? "Parar Compartilhamento" : "Iniciar Compartilhamento";
            document.getElementById("toggle-btn").style.backgroundColor = data.isSharing ? "#ff4444" : "#ffcc00";
        });
    }

    function loadStoredData() {
        chrome.storage.local.get(["nanoWalletAddress", "isSharing"], (data) => {
            if (data.nanoWalletAddress) {
                document.getElementById("wallet-input").value = data.nanoWalletAddress;
                document.getElementById("wallet-display").textContent = data.nanoWalletAddress;
            }
            document.getElementById("toggle-btn").textContent = data.isSharing ? "Parar Compartilhamento" : "Iniciar Compartilhamento";
            document.getElementById("toggle-btn").style.backgroundColor = data.isSharing ? "#ff4444" : "#ffcc00";
        });
    }

    setInterval(updateStatus, 1000);
    updateStatus();
});

