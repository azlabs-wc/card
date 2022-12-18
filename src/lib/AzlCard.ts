import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

export class Card extends LitElement {
  /**
   * @attr class
   */
  @property({ type: String, attribute: 'class' })
  cssClass!: string;
  // #endregion Component reactive properties

  static override get styles() {
    return [
      // Card styles
      css`
        div.card {
          position: relative;
          display: block;
          background-color: var(--card-bg-color, #fff);
          box-shadow: 0.15px 0.015px 0px 0px var(--box-shadow-color, #f3f3f3);
          border-radius: var(--card-border-radius, 0.156rem);
          border-width: var(--card-border-width, 0.05rem);
          border-color: var(--card-border-color, #dedede);
          width: 100%;
          border-style: solid;
        }
      `,

      // Card header
      css`
        div.header {
          font-size: 0.8rem;
          color: var(--card-title-color, #666);
          font-weight: var(--card-title-font-weight, 400);
          border-bottom-width: var(--card-border-width, 0.05rem);
          border-bottom-color: var(--card-border-color, #dedede);
          letter-spacing: normal;
          border-bottom-style: solid;
        }
      `,

      // Card block styles
      css`
        .div.block:last-child {
          border-bottom: none;
        }
      `,
      // Card footer styles
      css`
        div.footer {
          border-top-style: solid;
          border-top-width: var(--card-border-width, 0.05rem);
          border-top-color: var(--card-border-color, #dedede);
        }
      `,

      // Common styles
      css`
        div.header,
        div.block,
        div.footer {
          padding: var(--card-header-padding, 1.1rem 1.2rem);
        }
      `,
    ];
  }

  protected override render() {
    let cssClass: ClassInfo = {};
    for (const item of this.cssClass.split(' ')) {
      cssClass = { ...cssClass, [item]: true };
    }
    return html`
      <div id="card" class="card${classMap(cssClass)}">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="block">
          <slot name="block"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
