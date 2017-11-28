import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';

import {
	SceneContainer,
	Scenes 
} from './Scenes.js';

import {Food, Weapon} from './Item.js';
import Equipment from './DropDown.js'

//Parent Component
class GameContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {

			presentLevel: null,
			isInventoryHidden: false,
			isEquipmentHidden: true, 
			HP: 50,
			foodSupply: 5
		}
		this.Scenes = Scenes;
		this.newState = this.newState.bind(this);
		this.changeHP = this.changeHP.bind(this);
		this.changeEquipView = this.changeEquipView.bind(this);
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

				propsEquipmentView = {this.changeEquipView}

        		game={game}

				/>
			<Inventory 
				propsName = {this.state.isInventoryHidden} 
				propsHP = {this.changeHP}
				propsFoodSupply = {this.state.foodSupply}
        game={game}
				/>
			<Equipment/> 
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