import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Container.js';
import CreateCharacter from './CreationContainer.js';
import PlayerHUD from './PlayerContainer.js';
import registerServiceWorker from './registerServiceWorker';
import GameContainer from './GameContainer.js';
import Inventory from './Items.js';
import {
	Scene, 
	LevelButton
} from './Scene.js';
import {
	SceneContainer,
	Scenes 
} from './Scenes.js';

class Game extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			presentLevel: null,
			isInventoryHidden: false
		}
		this.Scenes = Scenes;
		this.newState = this.newState.bind(this);
	}

	gotoScene (scene, passArgs) {
		if (scene !== null) {
			this.setState((prevState, props) => {
				return {
					presentLevel: scene,
					presentLevelArgs: passArgs || prevState.presentLevelArgs
				};
			});
		}
	}

	componentDidMount () {
		this.gotoScene(this.Scenes.Cave);
	}

	render () {
		let game = {
			state: this.state,
			setState: this.setState.bind(this),
			Scenes: this.Scenes,
			gotoScene: this.gotoScene.bind(this),
			};
		
		return (<div>
			<PlayerHUD changeState = {this.newState} game={game}/>
			<Inventory propsName = {this.state.isInventoryHidden} game={game}/>
			<SceneContainer game={game}/>  
		</div>);
	}
	newState(){
		let currentState = this.state.isInventoryHidden
		this.setState(
		{ isInventoryHidden: !currentState }
		)
	}
}
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


ReactDOM.render(<Game />, document.getElementById('root'));

// ReactDOM.render(<GameContainer />, document.getElementById('root'));
registerServiceWorker();
