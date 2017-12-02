import React, { Component } from 'react';
import StyledBox from './Container.js';

class PlayerHUD extends Component {

	render() {
		return(
			<div
				className = 'PlayerHUD'>
			<div>
			<h1>Player Name: {this.props.change_PlayerName} </h1>
			<h3>Race: {this.props.chosenRace} </h3>
			<h3>Gender: {this.props.changedGender} </h3>
			<h7> $$$ : </h7>
			</div>
			<div>
			<h4>Health Points: {this.props.HealthPoints}/100 </h4>
			<h5>Mana: {this.props.Mana}/60</h5>
			<h6> Atk: {this.props.Atk} Def: {this.props.Def} </h6>
			</div>
			<div>
				<div id='toggleButtons'>
					<input className='button' type='button' value='Settings' />
					<input name='Items' className='button' type='button' value='Inventory' onClick={this.props.viewInventory} />
					<br/>
					<input className='button' type='button' value='Equipment' onClick={this.props.viewEquip} />
					<input className='button' type='button' value='Exit Game' onClick={this.props.exitGame} />
				</div>
			</div>
			</div>
			)
	}
}

export default PlayerHUD;
