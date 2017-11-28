import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';
import {
	SceneContainer,
	Scenes 
} from './Scenes.js';

//Parent Component
class GameContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			presentLevel: null,
			isInventoryHidden: false
		}
		this.Scenes = Scenes;
		this.newState = this.newState.bind(this);
	}

	nextLevel (scene, passArgs) {
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
		this.nextLevel(this.Scenes.Cave);
	}

	render () {
		let game = {
			state: this.state,
			setState: this.setState.bind(this),
			Scenes: this.Scenes,
			nextLevel: this.nextLevel.bind(this),
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

export default GameContainer; 