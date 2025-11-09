import { BlackjackUtils } from "../core/blackjack-util.js";
import { Deck } from "../core/deck.js";
import { FACES, NUMBERS, SUITS } from "./../config/constanst.js";
import { BlackjackGame } from "./../core/blackjack-game.js";
import {
  renderCardImage,
  showMessage,
  toggleActionButtons,
} from "./ui-handlers.js";

/**
 * Inicializa los eventos de la interfaz de usuario para el juego de Blackjack.
 */
export function initGame() {
  const deckInstance = new Deck(SUITS, NUMBERS, FACES);

  const buttons = document.querySelectorAll("[data-action]");
  const scoreDisplay = {
    player: document.querySelector("[data-score='player']"),
    computer: document.querySelector("[data-score='computer']"),
  };
  const cardContainers = {
    player: document.querySelector("[data-cards='player']"),
    computer: document.querySelector("[data-cards='computer']"),
  };

  /**
   * Configura los eventos de los botones del juego.
   */
  buttons.forEach((btn) => {
    const action = btn.dataset.action;

    btn.addEventListener("click", () => {
      switch (action) {
        // Nuevo juego
        case "new":
          deckInstance.cards = deckInstance.createDeck();
          BlackjackGame.reset();

          scoreDisplay.player.textContent = BlackjackGame.playerScore;
          scoreDisplay.computer.textContent = BlackjackGame.computerScore;

          cardContainers.player.innerHTML = "";
          cardContainers.computer.innerHTML = "";

          toggleActionButtons(buttons, false);
          break;

        // Pedir carta
        case "hit":
          const card = deckInstance.drawCard();
          const value = BlackjackUtils.getCardValue(card);
          BlackjackGame.playerScore += value;

          scoreDisplay.player.textContent = BlackjackGame.playerScore;
          renderCardImage(card, cardContainers.player);

          // Validaciones de estado del juego
          if (BlackjackGame.playerScore > 21) {
            showMessage("Te has pasado de 21. ¡Perdiste!");
            toggleActionButtons(buttons, true);
          } else if (BlackjackGame.playerScore === 21) {
            const cards = BlackjackGame.computerTurn(deckInstance);

            cards.forEach((c) => renderCardImage(c, cardContainers.computer));

            scoreDisplay.computer.textContent = BlackjackGame.computerScore;
            toggleActionButtons(buttons, true);

            if (BlackjackGame.computerScore === 21) {
              showMessage("¡Empate!");
            } else {
              showMessage("¡Ganaste!");
            }
          }
          break;

        // Detener (turno de la computadora)
        case "stand":
          const cards = BlackjackGame.computerTurn(deckInstance);

          cards.forEach((c) => renderCardImage(c, cardContainers.computer));

          scoreDisplay.computer.textContent = BlackjackGame.computerScore;
          toggleActionButtons(buttons, true);

          // Resultado final
          if (BlackjackGame.computerScore > 21) {
            showMessage("La computadora se pasó de 21. ¡Ganaste!");
          } else if (
            BlackjackGame.computerScore === BlackjackGame.playerScore
          ) {
            showMessage("¡Empate!");
          } else if (BlackjackGame.computerScore > BlackjackGame.playerScore) {
            showMessage("La computadora gana.");
          }
          break;
      }
    });
  });
}
