import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Container.js';
import CreateCharacter from './CreationContainer.js';
import registerServiceWorker from './registerServiceWorker';
import GameContainer from './GameContainer.js';
import Inventory from './Items.js';


// import all(?) components
// define Game component, which is called in ReactDOM.render

// return all containers in a div; in game, bind state, all defined funcs and scenes
// class Game extends Component {
//   constructor(props) {
//
//   }
//
//   render() {
//     let game = {
//       state: this.state,
//       setState: this.setState.bind(this)
//     }
//     return null;
//   }
// }



ReactDOM.render(<GameContainer />, document.getElementById('root'));
registerServiceWorker();
