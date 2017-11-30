import React, { Component } from 'react';
import StyledBox from './Container.js'; 

class PlayerHUD extends Component {

	constructor(props){
		super(props);

		this.state = {
			Armor: 60
		}
		
		//this.toggleInventory = this.toggleInventory.bind(this);
	}

	render() {
		return(
			<div
				className = 'PlayerHUD'>
			<h1>Player Name: {this.props.change_PlayerName} </h1>
			<h3>Race: {this.props.chosenRace} </h3> 
			<h3>Gender: {this.props.changedGender} </h3>
			<h4>Health Points: {this.props.HealthPoints}/100 </h4> 
			<h5>Armor: {this.state.Armor}/60</h5>
			<div
				id='toggleButtons'>
			<input className='button' type='button' value='Settings' />
			<input name='Items' className='button' type='button' value='Inventory' onClick={this.props.newerState} />
			<br/> 
			<input className='button' type='button' value='Equipment' onClick={this.props.propsEquipmentView} />
			<input className='button' type='button' value='Exit Game' />
			</div>
			</div>
			)
	}
}

export default PlayerHUD;