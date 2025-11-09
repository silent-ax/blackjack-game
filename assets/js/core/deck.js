/**
 * Clase que representa una baraja de cartas.
 * Se encarga de crear, manejar y entregar cartas.
 */
export class Deck {
  constructor(suits, numbers, faces) {
    this.suits = suits;
    this.numbers = numbers;
    this.faces = faces;
    this.cards = this.createDeck();
  }

  /**
   * Crea una baraja estándar de 52 cartas.
   * @returns {string[]} Arreglo con todas las cartas.
   */
  createDeck() {
    const cards = [];
    for (const suit of this.suits) {
      for (const value of [...this.numbers, ...this.faces]) {
        cards.push(`${value}${suit}`);
      }
    }
    return cards;
  }

  /**
   * Extrae una carta aleatoria de la baraja.
   * @returns {string} Carta extraída.
   */
  drawCard() {
    if (!this.cards.length) throw new Error("No hay cartas en la baraja.");

    const randomIndex = Math.floor(Math.random() * this.cards.length);
    const [card] = this.cards.splice(randomIndex, 1);

    return card;
  }
}
