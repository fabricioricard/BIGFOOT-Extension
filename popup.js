// Função para atualizar o estado do popup
function updatePopup(isSharing) {
    const statusElement = document.getElementById("status");
    const buttonElement = document.getElementById("toggleButton");
    if (isSharing) {
        statusElement.textContent = "Compartilhamento Ativo";
        buttonElement.textContent = "Parar Compartilhamento";
        buttonElement.classList.add("stop");
    } else {
        statusElement.textContent = "Compartilhamento Parado";
        buttonElement.textContent = "Iniciar Compartilhamento";
        buttonElement.classList.remove("stop");
    }
}

// Verifica o estado inicial ao carregar o popup
document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage({ action: "getStatus" }, (response) => {
        updatePopup(response.isSharing);
    });

    // Listener para o botão de alternar compartilhamento
    document.getElementById("toggleButton").addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "toggleSharing" }, (response) => {
            updatePopup(response.isSharing);
        });
    });

    // Opcional: Atualiza recompensas (placeholder)
    updateRewards();
});

// Função para atualizar recompensas
function updateRewards() {
    const rewardsElement = document.getElementById("rewards");
    // Substitua por uma chamada real à API ou lógica de recompensas
    rewardsElement.textContent = "Recompensas: 0 XNO (em breve)";
}
