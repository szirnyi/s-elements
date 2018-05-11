import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * `s-score`
 * Zeigt den Notendurschnitt und Pluspunkte dar.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SScore extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          display: block;

          --green: #4CAF50;
          --orange: #FF9800;
          --red: #FF5722;
          --grey: #757575;
        }

        .grey {
          fill: var(--grey);  
        }

        .green {
          fill: var(--green);  
        }

        .green_stroke {
          stroke: var(--green);  
        }

        .orange {
          fill: var(--orange);  
        }

        .orange_stroke {
          stroke: var(--orange);  
        }

        .red {
          fill: var(--red);  
        }

        .red_stroke {
          stroke: var(--red);  
        }
              
        .circular-chart {
          display: block;
          margin: 10px auto;
          max-width: 80%;
          max-height: 128px;
        }

        .circular-chart-small {
          display: block;
          margin: 10px auto;
          max-width: 80%;
          max-height: 64px;
        }

        .note {
          font-family: sans-serif;
          letter-spacing: -0.03rem;
          font-size: 0.9em;
          text-anchor: middle;
        }

        .punkte {
          font-family: sans-serif;
          font-size: 0.425em;
          letter-spacing: 0.03rem;
          font-weight: 800;
          text-anchor: middle;
        }

        .circle {
          fill: none;
          stroke-width: 2.8;
          stroke-linecap: round;
          animation: progress 1s ease-out forwards;
        }

        .circle-small {
          fill: none;
          stroke-width: 4;
          stroke-linecap: round;
          animation: progress 1s ease-out forwards;
        }

        .circle-bg {
          fill: none;
          stroke: #eee;
          stroke-width: 2;
        }

        @keyframes progress {
          0% {
            stroke-dasharray: 0 100;
          }
        }
      </style>

      <svg viewbox="0 0 36 36" class$="[[class-circular]]">
        <path class="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        <path id="path" class$="[[class-circle]] [[kreis_farbe]]"
          stroke-dasharray$="[[prozent]], 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="26" class="note grey">[[note]]</text>
        <text x="18" y="14" class$="punkte [[punkte_farbe]]">[[punkte]]</text>
      </svg>
    `;
  }
  static get properties() {
    return {
      note: {
        type: String,
        observer: '_doNote'
      },
      points: {
        type: String,
        value: '',
        observer: '_doPoints'
      },
      small: {
        type: Boolean,
        value: false,
        observer: '_doSmall'
      },
    };
  }

  // ---------------------------------------------------------
  // Functions
  // ---------------------------------------------------------
  
  _doNote() {
    // Init
    var note = this.get('note');  

    // Prozent rechnen
    var prozent = 100 / 6 * parseFloat(note);
    
    // Auf eine Nachkommastelle runden
    prozent = Math.round(prozent * 10) / 10

    // Variable - SET
    this.set('prozent', prozent);
    
    // Prüfen
    // console.log('_noteToProzent', note, this.prozent);
  }
  
  _doPoints() {
    // Init
    var points = this.get('points');  

    // Punkte mit + ergänzen
    var punkte = "";  
    if (parseFloat(points) > 0) {
      punkte = "+" + points;  
    } else {
      punkte = "" + points;  
    };

    // Farbe der Pluspunkte setzen
    var punkte_farbe = "orange";
    
    if (parseFloat(points) > 2) {
      punkte_farbe = "green"; 
    };

    if (parseFloat(points) < 0) {
      punkte_farbe = "red"; 
    };

    // Variable - SET
    this.set('punkte', punkte);
    this.set('punkte_farbe', punkte_farbe);
    this.set('kreis_farbe', punkte_farbe + "_stroke");
    
    // Prüfen
    // console.log('_noteToProzent', points, this.punkte, this.punkte_farbe, this.kreis_farbe);
  }

  _doSmall() {
    // Init
    var small = this.get('small');  

    if (small) {
      this.set('class-circular', 'circular-chart-small');
      this.set('class-circle', 'circle-small');
    } else {
      this.set('class-circular', 'circular-chart');
      this.set('class-circle', 'circle');
    };
  }

}

window.customElements.define('s-score', SScore);