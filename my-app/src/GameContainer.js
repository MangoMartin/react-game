import React, { Component } from 'react';
import Box from './Container.js';
import PlayerHUD from './PlayerContainer.js';
import Inventory from './Items.js';
import {
	SceneContainer,
	Scenes
} from './Scenes.js';
import Equipment from './Equipment.js'
import {Food, Weapon} from './Item.js';

//Parent Component
class GameContainer extends Component {
	constructor (props) {
		super(props);

		this.state = {
			presentLevel: null,


		}

		this.Scenes = Scenes;
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
				viewInventory = {this.props.viewInventory}
				HealthPoints = {this.props.HP}
				change_for_the_last_time = {this.props.changeThis}
				chosenRace = {this.props.change_Race}
				changedGender = {this.props.change_Gender}
				change_PlayerName = {this.props.change_playerName}
				viewEquip = {this.props.viewEquip}
				exitGame = {this.props.exitGame}
				Atk = {this.props.Atk}
				Def = {this.props.Def}
				Mana = {this.props.Mana}
        game={game}
				/>
			<Inventory
				currentInventoryState = {this.props.isInventoryHidden}
				changeHP = {this.props.changeHP}
				foodSupply = {this.props.foodSupply}
				Weapon = {this.props.Weapon}
				Armor = {this.props.Armor}
				Bread = {this.props.Bread}
				Fish = {this.props.Fish}
				Detonator = {this.props.Detonator}
				Explosives = {this.props.Explosives}
				useBread = {this.props.useBread}
				useFish = {this.props.useFish}
        game={game}
				detonatorState = {this.props.isDetonatorFound}
				recordState = {this.props.isRecordFound}
				throwAway = {this.props.throwAway}
				throwAwayBread = {this.props.throwAwayBread}
				throwAwayFish = {this.props.throwAwayFish}
				equipSword = {this.props.equipSword}
				equipArmor = {this.props.equipArmor}
				detonateExplosives = {this.props.detonateExplosives}
				/>
			<Equipment
			  isEquipmentHidden = {this.props.isEquipmentHidden}
				equippedWeaponImage = {this.props.equippedWeaponImage}
				equippedWeaponName = {this.props.equippedWeaponName}
				equippedArmorImage = {this.props.equippedArmorImage}
				equippedArmorName = {this.props.equippedArmorName}
				/>
			<SceneContainer game={game}/>
			</div>
			  );
	}

}

export default GameContainer;
