import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';

import {
	SceneContainer,
	Scenes 
} from './Scenes.js';

import {Food, Weapon} from './Item.js';


//Parent Component
class GameContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {

			presentLevel: null,
			isInventoryHidden: false,
			HP: 50,
			foodSupply: 5
		}
		this.Scenes = Scenes;
		this.newState = this.newState.bind(this);
		this.changeHP = this.changeHP.bind(this);
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

	render(){
    let game = {
			state: this.state,
			setState: this.setState.bind(this),
			Scenes: this.Scenes,
			nextLevel: this.nextLevel.bind(this),
			};
		return(
			<div>
			<PlayerHUD 
				changeState = {this.newState}
				HealthPoints = {this.state.HP} 
        game={game}
				/>
			<Inventory 
				propsName = {this.state.isInventoryHidden} 
				propsHP = {this.changeHP}
				propsFoodSupply = {this.state.foodSupply}
        game={game}
				/>
			<SceneContainer game={game}/> 
			</div>
			  );

	}


	newState(){
		let currentState = this.state.isInventoryHidden
		this.setState(
			{ isInventoryHidden: !currentState }
		)
	}


	changeHP(){
		let currentHP = this.state.HP;
		let currentFoodSupply = this.state.foodSupply;
		if(currentFoodSupply > 0) {
		this.setState(
		{
			HP: currentHP + 10,
			foodSupply: currentFoodSupply - 1
		})}
	}


}

export default GameContainer; 