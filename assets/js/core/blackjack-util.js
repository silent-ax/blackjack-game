/**
 * Utilidades para cálculos del juego Blackjack
 */
export const BlackjackUtils = {
  /**
   * Calcula el valor numérico de una carta.
   * @param {string} card - Ejemplo: "10C", "AS", "KH"
   * @returns {number} - Valor numérico de la carta
   */
  getCardValue(card) {
    const value = card.match(/[0-9AQJK]/g).join("");
    return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
  },
};
