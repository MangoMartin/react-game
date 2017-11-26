import React, { Component } from 'react';
import StyledBox from './Container.js'; 
import Inventory from './Items.js';

class PlayerHUD extends Component {

	constructor(props){
		super(props);

		this.state = {
			PlayerName: '',
			Race: '',
			HP: 100,
			Armor: 60
		}

		//this.toggleInventory = this.toggleInventory.bind(this);
	}

	render() {
		return(
			<div
				className = 'PlayerHUD'>
			<h1>Player Name: </h1>
			<h3>Race: </h3> 
			<h4>Health Points: {this.state.HP}/100 </h4> 
			<h5>Armor: {this.state.Armor}/60</h5>
			<div
				id='toggleButtons'>
			<input className='button' type='button' value='Settings' />
			<input name='Items' className='button' type='button' value='Inventory' onClick={this.props.changeState} />
			<br/>
			<input className='button' type='button' value='Equipment' />
			<input className='button' type='button' value='Exit Game' />
			</div>
			</div> 
			)
	}


}

export default PlayerHUD;