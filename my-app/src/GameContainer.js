import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';
import SceneContainer from './Scenes.js';
import {Food, Weapon} from './Item.js';
import Equipment from './DropDown.js'
//Parent Component
class GameContainer extends Component {
	constructor(props){
		super(props); 

		this.state = {
			isInventoryHidden: false,
			isEquipmentHidden: true, 
			HP: 50,
			foodSupply: 5
		}

		this.newState = this.newState.bind(this);
		this.changeHP = this.changeHP.bind(this);
		this.changeEquipView = this.changeEquipView.bind(this);
	}

	render(){
		return(
			<div>
			<PlayerHUD 
				changeState = {this.newState}
				HealthPoints = {this.state.HP} 
				propsEquipmentView = {this.changeEquipView}
				/>
			<Inventory 
				propsName = {this.state.isInventoryHidden} 
				propsHP = {this.changeHP}
				propsFoodSupply = {this.state.foodSupply}
				/>
			<SceneContainer /> 
			<Equipment/> 
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
			this.setState({
				HP: currentHP + 10,
				foodSupply: currentFoodSupply - 1
			})
		}
	}

	changeEquipView() {
		let currentEquipView = this.state.isEquipmentHidden;
		if (this.state.isInventoryHidden === false) {
			this.setState({
				isInventoryHidden: true,
				isEquipmentHidden: false
			})
		}
		else {
			this.setState({
				isEquipmentHidden: false
			})
		}
	}

}

export default GameContainer; 