// for character creation
import React, { Component } from 'react' ;

class CreateCharacter extends Component {

	constructor() {
		super();

		this.state = {
			isBlinking : true
		};

		this.blinky = this.blinky.bind(this)
	};

	render(){
		return(
			<div 
				className = 'CreateCharacter'>
			<h1>Create Character</h1>

			<label>Character Name :</label><input
			type = 'text' /><br/>
			<label>Race :</label>
				<select name="Race">
    				<option value="Human">Human</option>
    				<option value="Undead">Undead</option>
    				<option value="Elf">Elf</option>
    				<option value="Orc">Orc</option>
  				</select><br/>
			<label>Gender :</label>
				<select name="Gender">
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			<br/><br/>

			<div
				id  = 'blinker'
				className = {this.state.isBlinking ? 'default-mode' : 'non-default-mode'}
				onLoad={this.blinky()}>
				PRESS START
			</div>
			<div 
				id = 'Creators'>
				<h3>Design Team:</h3>
						<h4>Sean</h4>
						<h4>Ajax</h4>
						<h4>Miko</h4>
			</div>
			</div>

			)
	}

	blinky() {
		setTimeout(() => {
		let currentState = this.state.isBlinking
		//console.log(this.state.isHidden)
		this.setState({isBlinking : !currentState})	
	}, 500)}

}

export default CreateCharacter ;
