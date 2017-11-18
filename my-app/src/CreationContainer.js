// for character creation
import React, { Component } from 'react' ;

class CreateCharacter extends Component {

	constructor() {
		super();

		this.state = {
			isHidden : true
		};

		this.blinky = this.blinky.bind(this)
	};

	render(){
		return(
			<div 
			id = 'CreateCharacter'>
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
				className = {this.state.isHidden ? 'default-mode' : 'non-default-mode'}
				onLoad={this.blinky()}>
				PRESS START
			</div>
			</div>

			)
	}

	blinky() {
		setTimeout(() => {
		let currentState = this.state.isHidden
		//console.log(this.state.isHidden)
		this.setState({isHidden : !currentState})	
	}, 500)}
	
}

export default CreateCharacter ;