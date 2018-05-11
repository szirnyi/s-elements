import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `s-test`
 * Test
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class STest extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Ciao, [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 's-test',
      },
    };
  }
}

window.customElements.define('s-test', STest);
