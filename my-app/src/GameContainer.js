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
			HP: 50,
			foodSupply: 5,
			isInventoryHidden : false
		}
		this.Scenes = Scenes;
		this.changeHP = this.changeHP.bind(this);
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

	render(){
    let game = {
			state: this.state,
			setState: this.setState.bind(this),
			Scenes: this.Scenes,
			nextLevel: this.nextLevel.bind(this),
			};
		return(
			<div
				id = 'contains-game'
				className = {this.props.changeThis ? 'state-hide' : 'state-view'}
				>
			<PlayerHUD 
				newerState = {this.newState}
				HealthPoints = {this.state.HP} 
				change_for_the_last_time = {this.props.changeThis}
				chosenRace = {this.props.change_Race}
				changedGender = {this.props.change_Gender}
				change_PlayerName = {this.props.change_playerName}
        		game={game}
				/>
			<Inventory
				currentInventoryState = {this.state.isInventoryHidden}
				propsHP = {this.changeHP}
				propsFoodSupply = {this.state.foodSupply}
        		game={game}
				/>
			<SceneContainer game={game}/> 
			</div>
			  );

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

	newState(){
		let currentState = this.state.isInventoryHidden
		this.setState(
			{ isInventoryHidden: !currentState,	
			}
		)
	}


}

export default GameContainer; 