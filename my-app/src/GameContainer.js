import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';
import renderIf from 'render-if'

class GameContainer extends Component {
	constructor(props){
		super(props); 

		this.state = {
			isInventoryHidden: false,
			
		}

		this.newState = this.newState.bind(this);
	}

	render(){
		return(
			<div>
			<PlayerHUD moreData = {this.newState} />
			
			<Inventory propsName = {this.state.isInventoryHidden} />
			
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