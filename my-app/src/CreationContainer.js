// for character creation
import React, { Component } from 'react';
import GameContainer from './GameContainer.js';
import BackgroundAudio from './Sound.js';
let weapon_image = require('./item-images/267-0.png');
let armor_image = require('./item-images/311-0.png');

class CreateCharacter extends Component {

	constructor() {
		super();

		this.state = {
			playerName: '',
			Race: '',
			Gender: '',
			isBlinking : true,
			isGameHidden : true,
			isInventoryHidden : true,
			isEquipmentHidden : true,
			HP: 50,
			Mana : 60,
			Atk : 10,
			Def : 10,
			foodSupply: 5,
			Weapon : 1,
			Armor : 1,
			Bread : 3,
			Fish : 1,
			Explosives : 2,
			Detonator : 1,
			Record : 1,
			equippedWeaponImage : '',
			equippedWeaponName : '',
			equippedArmorImage : '',
			equippedArmorName : '',
			isDetonatorFound : false,
			isRecordFound : false,
			enemyLife: 100
		};

		this.blinky = this.blinky.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.chooseRace = this.chooseRace.bind(this);
		this.changeGender = this.changeGender.bind(this);
		this.exitGame	= this.exitGame.bind(this);
		this.viewInventory = this.viewInventory.bind(this);
		this.viewEquip = this.viewEquip.bind(this);
		this.changeHP = this.changeHP.bind(this);
		this.throwAway = this.throwAway.bind(this);
		this.useBread = this.useBread.bind(this);
		this.useFish = this.useFish.bind(this);
		this.throwAwayFish = this.throwAwayFish.bind(this);
		this.throwAwayBread = this.throwAwayBread.bind(this);
		this.equipSword = this.equipSword.bind(this);
		this.equipArmor = this.equipArmor.bind(this);
		this.detonateExplosives = this.detonateExplosives.bind(this);
		this.takeFrogDamage = this.takeFrogDamage.bind(this);
		this.doDamage = this.doDamage.bind(this);
		this.changeDetonatorState = this.changeDetonatorState.bind(this);
		this.changeRecordState = this.changeRecordState.bind(this);
		this.throwAwayExplosives = this.throwAwayExplosives.bind(this);
	};

	componentDidMount(){
		window.addEventListener('keypress', this.handleKeyPress)
	}

	render(){
		return(
			<div
				className = 'CreateCharacter'
				>
			<h1>Create Character</h1>
			<label>Character Name :</label>
			<input type = 'text' value={this.state.playerName} onChange = {this.handleChangeName} /><br/>
			<label>Race : </label><input list='races' name='availableRaces' onChange={this.chooseRace}/>
				<datalist id="races">
    				<option value="Human">Human</option>
    				<option value="Undead">Undead</option>
    				<option value="Elf">Elf</option>
    				<option value="Orc">Orc</option>
  				</datalist> <br/>

			<label>Gender :</label><input list='genders' name='availableGenders' onChange = {this.changeGender} />
				<datalist id='genders'>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</datalist>

			<br/><br/>
			<div
				id  = 'blinker'
				className = {this.state.isBlinking ? 'hide' : 'view'}
				onLoad={this.blinky()}
				>
				PRESS START
			</div>
			<div
				id = 'Creators'>
				<h3>Design Team:</h3>
						<h4>Sean</h4>
						<h4>Ajax</h4>
						<h4>Miko</h4>
			</div>
			<GameContainer
				changeHP = {this.changeHP}
				takeFrogDamage = {this.takeFrogDamage}
				doDamage = {this.doDamage}
				enemyLife = {this.state.enemyLife}
				changeRecordState = {this.changeRecordState}
				changeDetonatorState = {this.changeDetonatorState}
				useFish = {this.useFish}
				useBread = {this.useBread}
				throwAway = {this.throwAway}
				throwAwayBread = {this.throwAwayBread}
				throwAwayFish = {this.throwAwayFish}
				throwAwayExplosives = {this.throwAwayExplosives}
				equipSword = {this.equipSword}
				equipArmor = {this.equipArmor}
				viewInventory = {this.viewInventory}
				viewEquip = {this.viewEquip}
				changeThis = {this.state.isGameHidden}
				change_playerName = {this.state.playerName}
				change_Race = {this.state.Race}
				change_Gender = {this.state.Gender}
				inventory_state = {this.state.isInventoryHidden}
				changeState = {this.newState}
				exitGame = {this.exitGame}
				isInventoryHidden = {this.state.isInventoryHidden}
				isEquipmentHidden = {this.state.isEquipmentHidden}
				HP = {this.state.HP}
				Mana = {this.state.Mana}
				Atk = {this.state.Atk}
				Def = {this.state.Def}
				foodSupply = {this.state.foodSupply}
				Weapon = {this.state.Weapon}
				Armor = {this.state.Armor}
				Bread = {this.state.Bread}
				Fish = {this.state.Fish}
				Explosives = {this.state.Explosives}
				Detonator = {this.state.Detonator}
				Record = {this.state.Record}
				equippedWeaponImage = {this.state.equippedWeaponImage}
				equippedWeaponName = {this.state.equippedWeaponName}
				equippedArmorImage = {this.state.equippedArmorImage}
				equippedArmorName = {this.state.equippedArmorName}
				detonateExplosives = {this.detonateExplosives}
				isDetonatorFound = {this.state.isDetonatorFound}
				isRecordFound = {this.state.isRecordFound}
				 />
  		<BackgroundAudio />
			</div>
			)
}

	blinky() {
		setTimeout(() => {
		let currentState = this.state.isBlinking
		this.setState({isBlinking : !currentState})
	}, 500)}

	handleKeyPress(event){
		if(event.key === 'Enter'){
			this.setState(
			{
				isGameHidden: false,
			})
		}
	}

	exitGame() {
		this.setState(
			{
				playerName : '',
				Race : '',
				Gender : '',
				HP: 50,
				Mana : 60,
				Atk : 10,
				Def : 10,
				foodSupply: 5,
				Weapon : 1,
				Armor : 1,
				Bread : 3,
				Fish : 1,
				Explosives : 2,
				Detonator : 1,
				Record : 1,
				isInventoryHidden: true,
				isEquipmentHidden: true,
				isGameHidden: true }
		)
	}

	handleChangeName(event){
		this.setState({
			playerName: event.target.value
		})
	}

	chooseRace(event){
		this.setState({
			Race : event.target.value
		})
	}

	changeGender(event){
		this.setState({
			Gender : event.target.value
		})
	}

	viewInventory(){
		this.setState(
			{ isInventoryHidden: false,
				isEquipmentHidden : true
			}
		)
	}

	viewEquip(){
		this.setState(
			{ isInventoryHidden : true,
				isEquipmentHidden : false }
		)
	}

	changeHP(){
		let currentHP = this.state.HP;
		let currentFoodSupply = this.state.foodSupply;
		if(currentFoodSupply > 0 && currentHP < 100) {
		this.setState(
		{
			HP: currentHP + 10,
			foodSupply: currentFoodSupply - 1
		})}
		else if (currentHP >= 100){
			alert('Your HP is full..')
		}
		else {
			alert('You ran out of apples')
		}
	}

	takeFrogDamage(dmg){
		let currentHP = this.state.HP;
		this.setState({
			HP: currentHP - dmg
		}) 
	}

	doDamage() {
		let currentLife = this.state.enemyLife;
		let damageDone = this.state.Atk;
		this.setState({
			enemyLife: currentLife - damageDone
		})
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
		let currentFoodSupply = this.state.foodSupply;
		if(currentFoodSupply > 0) {
		this.setState(
			{ foodSupply : currentFoodSupply - 1 }
		)}
		else {
			alert('No more apples to throw away!')
		}
	}

	useBread(){
		let currentBreadSupply = this.state.Bread;
		let currentHP = this.state.HP;
		if(currentBreadSupply > 0 && currentHP < 100){
		this.setState(
			{ Bread : currentBreadSupply - 1,
				HP : currentHP + 5 }
		)}
		else if (currentHP >= 100) {
			alert('Your HP is full..')
		}
		else {
			alert('You ran out of bread')
		}
	}

	throwAwayBread() {
		let currentFoodSupply = this.state.Bread
		if(currentFoodSupply > 0) {
		this.setState(
			{ Bread : currentFoodSupply - 1 }
		)}
		else {
			alert('Stop wasting food!')
		}
	}

	useFish(){
		let currentFishSupply = this.state.Fish;
		let currentHP = this.state.HP;
		if(currentFishSupply > 0){
		this.setState(
			{ Fish : currentFishSupply - 1,
				HP : currentHP - 50 }
		)
		alert('Who would have thought eating the poisonous blowfish would be poisonous? You lose 50 HP!')
		}
	}

	throwAwayFish() {
		let currentFoodSupply = this.state.Fish;
		let HP = this.state.HP;
		if(currentFoodSupply > 0) {
		this.setState(
			{ Fish : currentFoodSupply - 1,
			  HP : HP - 50  }
		)
		alert('Attempting to throw the blowfish agitates it, causing it to flail its poisonous quills into your face, damaging you by 50HP!')
		}

	}

	equipSword(){
		let Weapon = this.state.Weapon;
		let imageOfaSword = weapon_image;
		let Atk = this.state.Atk;
		if(Weapon > 0){
		this.setState(
			{ equippedWeaponImage : imageOfaSword,
				equippedWeaponName : 'Sword',
			  Atk : Atk + 10,
			 	Weapon : Weapon - 1 }
		)}
	}

	equipArmor(){
		let Armor = this.state.Armor;
		let imageOfanArmor = armor_image;
		let Def = this.state.Def;
		if (Armor > 0){
		this.setState(
			{ equippedArmorImage : imageOfanArmor,
			  equippedArmorName : 'Chainmail',
			  Def : Def + 10,
			  Armor : Armor - 1 }
		)}
	}

	detonateExplosives(){
		if(this.state.isDetonatorFound === false) {
			alert('You need a detonator to use Explosives..')
		}
		else {
			let currentState = this.state.Explosives
			this.setState(
				{ Explosives : currentState - 1 }
			)
			alert('You just blew a freakin hole!')
		}
	}

	throwAwayExplosives() {
		let currentState = this.state.Explosives
		if(currentState > 0) {
		this.setState(
			{ Explosives : currentState - 1 }
		)}
		else {
			alert('No more explosives to throw away!')
		}
	}

}
export default CreateCharacter ;
