import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';
import {
	SceneContainer 
} from './Scenes.js';

//Parent Component
class GameContainer extends Component {
	constructor(props){
		super(props); 

		this.state = {
			isInventoryHidden: false	
		}

		this.newState = this.newState.bind(this);
	}

	render(){
		return(
			<div>
			<PlayerHUD changeState = {this.newState} />
			<Inventory propsName = {this.state.isInventoryHidden} />
			<SceneContainer /> 
			</div>
			  ) 
	}

	newState(){
		let currentState = this.state.isInventoryHidden
		this.setState(
		{ isInventoryHidden: !currentState }
		)
	}

}



export default GameContainer; 