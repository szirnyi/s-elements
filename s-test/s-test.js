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
        .container {
          background-color: silver;
          padding: 24px;
        }
      </style>
      <div class="container">
        <h2>[[_greeting]]</h2>
      </div>
    `;
  }
  static get properties() {
    return {
      username: {
        type: String,
        value: '',
        observer: '_doUsername'
      },
      greeting: {
        type: String,
        value: 'Salut'
      },
    };
  }

  // ---------------------------------------------------------
  // Functions
  // ---------------------------------------------------------
  
  _doUsername() {
    // Init
    var username = this.get('username'); 
    var greeting = this.get('greeting'); 

    // Begrüssungstext festlegen
    if (username !== '') {
      greeting = greeting + ', ' + username;  
    };
    greeting = greeting + '!';

    // Variable - SET
    this.set('_greeting', greeting);
     
    // Prüfen
    // console.log('_doUsername', this.greeting);
  }

}

window.customElements.define('s-test', STest);
