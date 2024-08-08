// Jogadores iniciais (recuperando do localStorage ou criando um array vazio)
let confirmedPlayers =
  JSON.parse(localStorage.getItem("confirmedPlayers")) || [];
let waitingPlayers = JSON.parse(localStorage.getItem("waitingPlayers")) || [];

const confirmedList = document.getElementById("confirmedPlayers");
const waitingList = document.getElementById("waitingPlayers");

// Função para salvar listas no localStorage
function saveListsToLocalStorage() {
  localStorage.setItem("confirmedPlayers", JSON.stringify(confirmedPlayers));
  localStorage.setItem("waitingPlayers", JSON.stringify(waitingPlayers));
}

// Função para renderizar listas com ícones de excluir
function renderLists() {
  confirmedList.innerHTML = confirmedPlayers
    .map(
      (player, index) =>
        `<li>${player}<span class="delete-icon" onclick="removePlayer('confirmed', ${index})">&#128465;</span></li>`
    )
    .join("");

  waitingList.innerHTML = waitingPlayers
    .map(
      (player, index) =>
        `<li>${player}<span class="delete-icon" onclick="removePlayer('waiting', ${index})">&#128465;</span></li>`
    )
    .join("");
}

// Função para remover jogador da lista
function removePlayer(listType, index) {
  if (listType === "confirmed") {
    confirmedPlayers.splice(index, 1);
  } else if (listType === "waiting") {
    waitingPlayers.splice(index, 1);
  }
  saveListsToLocalStorage();
  renderLists();
}

renderLists();

// Adicionar jogador na lista de confirmação de presença
document.getElementById("addPlayer").addEventListener("click", () => {
  const playerName = prompt("Digite o nome do jogador:");
  if (playerName) {
    if (confirmedPlayers.length >= 11) {
      // Move o primeiro jogador da lista de confirmados para a lista de espera
      const playerToMove = confirmedPlayers.shift();
      waitingPlayers.push(playerToMove);
    }

    // Adiciona o novo jogador à lista de confirmados
    confirmedPlayers.push(playerName);
    saveListsToLocalStorage();
    renderLists();
  }
});

// Mover jogador para lista de espera
document.getElementById("moveToWaiting").addEventListener("click", () => {
  if (confirmedPlayers.length > 0) {
    // Move o primeiro jogador da lista de confirmados para a lista de espera
    const playerToMove = confirmedPlayers.shift();
    waitingPlayers.push(playerToMove);
    saveListsToLocalStorage();
    renderLists();
  } else {
    alert("Nenhum jogador na lista de confirmados para mover!");
  }
});
