import { BlackjackUtils } from "./blackjack-util.js";

/**
 * Lógica principal del juego de Blackjack.
 * Administra los puntajes y las decisiones de la computadora.
 */
export const BlackjackGame = {
  playerScore: 0,
  computerScore: 0,

  /**
   * Lógica del turno de la computadora.
   * Roba cartas hasta superar o igualar el puntaje del jugador sin pasar de 21.
   * @param {Deck} deckInstance - Instancia de la clase Deck.
   * @returns {string[]} - Cartas robadas por la computadora.
   */
  computerTurn(deckInstance) {
    const cards = [];
    while (this.computerScore < this.playerScore && this.playerScore <= 21) {
      const card = deckInstance.drawCard();
      const value = BlackjackUtils.getCardValue(card);
      this.computerScore += value;
      cards.push(card);
    }
    return cards;
  },

  /**
   * Reinicia los puntajes del juego.
   */
  reset() {
    this.playerScore = 0;
    this.computerScore = 0;
  },
};
