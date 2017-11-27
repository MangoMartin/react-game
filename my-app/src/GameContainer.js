import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';
import SceneContainer from './Scenes.js';
import {Food, Weapon} from './Item.js';

//Parent Component
class GameContainer extends Component {
	constructor(props){
		super(props); 

		this.state = {
			isInventoryHidden: false,
			HP: 50,
			foodSupply: 5
		}

		this.newState = this.newState.bind(this);
		this.changeHP = this.changeHP.bind(this);
	}

	render(){
		return(
			<div>
			<PlayerHUD 
				changeState = {this.newState}
				HealthPoints = {this.state.HP} 
				/>
			<Inventory 
				propsName = {this.state.isInventoryHidden} 
				propsHP = {this.changeHP}
				propsFoodSupply = {this.state.foodSupply}
				/>
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