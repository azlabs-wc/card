import { Card } from './lib/AzlCard.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-card': Card;
  }
}

export { Card };
