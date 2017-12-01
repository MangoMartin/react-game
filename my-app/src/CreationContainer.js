// for character creation
import React, { Component } from 'react';
import {BrowserRouter as Router,
		Link,
		Route} from 'react-router-dom';
import GameContainer from './GameContainer.js';
import ReactDOM from 'react-dom';
import PlayerContainer from './PlayerContainer.js';

class CreateCharacter extends Component {


	constructor() {
		super();

		this.state = {
			playerName: '',
			Race: '',
			Gender: '',
			isBlinking : true,
			isGameHidden : true
		};

		this.blinky = this.blinky.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.handleChangeName = this.handleChangeName.bind(this)
		this.chooseRace = this.chooseRace.bind(this)
		this.changeGender = this.changeGender.bind(this)

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
			<input type = 'text' value={this.state.Name} onChange = {this.handleChangeName} /><br/>
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
				changeThis = {this.state.isGameHidden}
				change_playerName = {this.state.playerName}
				change_Race = {this.state.Race}
				change_Gender = {this.state.Gender}
				inventory_state = {this.state.isInventoryHidden}
				changeState = {this.newState}
				 />
			</div>
			)
	}

	blinky() {
		setTimeout(() => {
		let currentState = this.state.isBlinking
		this.setState({isBlinking : !currentState})
	}, 500)}

	handleKeyPress(event){
		let stateOfGame = this.state.isGameHidden;
		if(event.key == 'Enter'){
			this.setState(
			{
				isGameHidden: false,
			})
		}
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

}

export default CreateCharacter ;
