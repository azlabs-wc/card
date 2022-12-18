import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import { componentStyles } from './AzlCard.style';

export class Card extends LitElement {
  // #region Component reactive properties
  /**
   * @attr class
   */
  @property({ type: String, attribute: 'class' })
  cssClass: string = '';

  /**
   * @attr clickable
   */
  @property({ type: Boolean, attribute: 'clickable' })
  clickable: boolean = false;
  // #endregion Component reactive properties

  static override get styles() {
    return [componentStyles];
  }

  protected override render() {
    let cssClass: ClassInfo = {};
    const list = this.cssClass ?? '';
    for (const item of list.split(' ')) {
      cssClass = { ...cssClass, [item]: true };
    }
    // Set the clickable property
    cssClass = { ...cssClass, clickable: this.clickable };
    return html`
      <div id="card" class="card${classMap(cssClass)}">
        <div class="card-header">
          <slot name="card-header"></slot>
        </div>
        <div class="card-block">
          <slot name="card-block"></slot>
        </div>
        <div class="card-footer">
          <slot name="card-footer"></slot>
        </div>
      </div>
    `;
  }
}
