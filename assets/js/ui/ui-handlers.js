/**
 * Agrega la imagen de una carta al contenedor indicado.
 * @param {string} card - Nombre de la carta (ej. "10H")
 * @param {HTMLElement} container - Contenedor del jugador o computadora.
 */
export function renderCardImage(card, container) {
  const img = document.createElement("img");
  img.src = `./assets/img/${card}.png`;
  img.classList.add("blackjack__card");
  container.appendChild(img);
}

/**
 * Habilita o deshabilita los botones "Pedir" y "Detener".
 * @param {boolean} disabled - true para deshabilitar, false para habilitar.
 */
export function toggleActionButtons(buttons, disabled) {
  buttons.forEach((btn) => {
    const action = btn.dataset.action;
    if (action === "stand" || action === "hit") {
      btn.disabled = disabled;
    }
  });
}

/**
 * Muestra un mensaje al jugador (puede reemplazarse por UI personalizada).
 * @param {string} message - Mensaje a mostrar.
 */
export function showMessage(message) {
  setTimeout(() => alert(message), 100);
}
