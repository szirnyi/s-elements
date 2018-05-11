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
        <h2>[[greeting]]</h2>
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
    };
  }

  // ---------------------------------------------------------
  // Functions
  // ---------------------------------------------------------
  
  _doUsername() {
    // Init
    var username = this.get('username'); 

    // Begrüssungstext festlegen
    var greeting = 'Hoi' ;
    if (username !== '') {
      greeting = greeting + ', ' + username;  
    };
    greeting = greeting + '!';

    // Variable - SET
    this.set('greeting', greeting);
     
    // Prüfen
    console.log('_doUsername', this.greeting);
  }

}

window.customElements.define('s-test', STest);
