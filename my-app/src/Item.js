//items 
import React, { Component } from 'react';
import StyledBox from './Container.js'; 


export class Food extends Component {

	render(){
		return(
			<div>
			<StyledBox
				id = 'food-item'>
				<img src={require('./item-images/260-0.png')} />
				<h1>
					Apple x {this.props.foodAmt} 
				</h1>
				<input type = 'button' value = 'Use' onClick={this.props.changeHealthPoints}/>
				<input type = 'button' value = 'Throw Away' /> 
			</StyledBox> 
			</div>
			)
	}
}

export class Weapon extends Component {

	constructor(){
		super();

		this.state = {
			WeaponStock: 1
		}
	}

	render(){
		return(
			<StyledBox
				id = 'weapon-item'>
				<img src = {require('./item-images/267-0.png')} />
				<h1>
					Sword x {this.state.WeaponStock}
				</h1>
				<input type = 'button' value = 'Use' onClick={'#'}/>
				<input type = 'button' value = 'Throw Away' /> 
			</StyledBox> 
		)
	}
}

