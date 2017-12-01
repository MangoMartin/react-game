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
let weapon_image = require('./item-images/267-0.png');
let armor_image = require('./item-images/311-0.png');
//Parent Component
class GameContainer extends Component {
	constructor (props) {
		super(props);

		this.state = {
			presentLevel: null,
			HP: 50,
			Mana : 60,
			Atk : 10,
			Def : 10,
			foodSupply: 5,
			Weapon : 1,
			Armor : 1,
			Bread : 3,
			Fish : 1,
			Explosives : 1,
			Detonator : 1,
			Record : 1,
			equippedWeaponImage : '',
			equippedWeaponName : '',
			equippedArmorImage : '',
			equippedArmorName : '',
			isInventoryHidden : false,
			isDetonatorFound : false,
			isRecordFound : false,
			isEquipmentHidden : true
		}

		this.Scenes = Scenes;
		this.changeHP = this.changeHP.bind(this);
		this.newState = this.newState.bind(this);
		this.throwAway = this.throwAway.bind(this);
		this.useBread = this.useBread.bind(this);
		this.useFish = this.useFish.bind(this);
		this.throwAwayFish = this.throwAwayFish.bind(this);
		this.throwAwayBread = this.throwAwayBread.bind(this);
		this.viewEquip = this.viewEquip.bind(this);
		this.equipSword = this.equipSword.bind(this);
		this.equipArmor = this.equipArmor.bind(this);

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
				viewEquip = {this.viewEquip}
				Atk = {this.state.Atk}
				Def = {this.state.Def}
				Mana = {this.state.Mana}
        game={game}
				/>
			<Inventory
				currentInventoryState = {this.state.isInventoryHidden}
				changeHP = {this.changeHP}
				foodSupply = {this.state.foodSupply}
				Weapon = {this.state.Weapon}
				Armor = {this.state.Armor}
				Bread = {this.state.Bread}
				Fish = {this.state.Fish}
				useBread = {this.useBread}
				useFish = {this.useFish}
        game={game}
				detonatorState = {this.state.isDetonatorFound}
				recordState = {this.state.isRecordFound}
				throwAway = {this.throwAway}
				throwAwayBread = {this.throwAwayBread}
				throwAwayFish = {this.throwAwayFish}
				equipSword = {this.equipSword}
				equipArmor = {this.equipArmor}
				/>
			<Equipment
			  isEquipmentHidden = {this.state.isEquipmentHidden}
				equippedWeaponImage = {this.state.equippedWeaponImage}
				equippedWeaponName = {this.state.equippedWeaponName}
				equippedArmorImage = {this.state.equippedArmorImage}
				equippedArmorName = {this.state.equippedArmorName}
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
			{ isInventoryHidden: !currentState
			}
		)
	}

	changeDetonatorState(){
		this.setState(
			{ isDetonatorFound : true}
		)
	}

	changeRecordState(){
		this.setState(
			{ isRecordFound : true}
		)
	}

	throwAway() {
		let currentFoodSupply = this.state.foodSupply
		if(currentFoodSupply > 0) {
		this.setState(
			{ foodSupply : currentFoodSupply - 1 }
		)}
	}

	useBread(){
		let currentBreadSupply = this.state.Bread;
		let currentHP = this.state.HP;
		if(currentBreadSupply > 0){
		this.setState(
			{ Bread : currentBreadSupply - 1,
				HP : currentHP + 5 }
		)}
	}

	throwAwayBread() {
		let currentFoodSupply = this.state.Bread
		if(currentFoodSupply > 0) {
		this.setState(
			{ Bread : currentFoodSupply - 1 }
		)}
	}

	useFish(){
		let currentFishSupply = this.state.Fish;
		let currentHP = this.state.HP;
		if(currentFishSupply > 0){
		this.setState(
			{ Fish : currentFishSupply - 1,
				HP : currentHP - 50 }
		)}
	}

	throwAwayFish() {
		let currentFoodSupply = this.state.Fish;
		if(currentFoodSupply > 0) {
		this.setState(
			{ Fish : currentFoodSupply - 1 }
		)}
	}

	viewEquip(){
		let currentEquipState = this.state.isEquipmentHidden;
		this.setState(
			{ isEquipmentHidden : !currentEquipState }
		)
	}

	equipSword(){
		let equippedWeaponName = this.state.equippedWeapon;
		let imageOfaSword = weapon_image;
		let Atk = this.state.Atk;
		this.setState(
			{ equippedWeaponImage : imageOfaSword,
				equippedWeaponName : 'Sword',
			  Atk : Atk + 10 }
		)
	}

	equipArmor(){
		let equippedArmorName = this.state.equippedArmorName;
		let imageOfanArmor = armor_image;
		let Def = this.state.Def;
		this.setState(
			{ equippedArmorImage : imageOfanArmor,
			  equippedArmorName : 'Chainmail',
			  Def : Def + 10 }
		)
	}
}

export default GameContainer;
