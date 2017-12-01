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
					Fuji Apple x {this.props.foodAmt}
				</h1>
				<input className = 'button' type = 'button' value = 'Use' onClick={this.props.changeHealthPoints}/>
				<input className = 'button' type = 'button' value = 'Throw Away' />
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
				<input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
				<input className = 'button' type = 'button' value = 'Throw Away' />
			</StyledBox>
		)
	}
}

export class Armor extends Component {

	constructor(){
		super();

		this.state = {
			ArmorStock: 1
		}
	}

	render(){
		return(
			<StyledBox
				id = 'armor-item'>
			 <img src = {require('./item-images/311-0.png')} />
			 <h1>
			 	Chainmail x {this.state.ArmorStock}
			 </h1>
			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
			 <input className = 'button' type = 'button' value = 'Throw Away' />
			</StyledBox>
		)
	}
}

export class Bread extends Component {

		constructor(){
			super();

			this.state = {
				Bread : 1
			}
		}

		render(){
			return(
				<StyledBox
					id = 'bread'>
					<img src = {require('./item-images/297-0.png')} />
	 			 <h1>
	 			 	Stale Bread x {this.state.Bread}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' />
				</StyledBox>
			)
		}
}

export class Fish extends Component {

		constructor(){
			super();

			this.state = {
				Fish : 1
			}
		}

		render(){
			return(
				<StyledBox
					id = 'fish'>
					<img src = {require('./item-images/349-2.png')} />
	 			 <h1>
	 			 	Poisonous Blowfish x {this.state.Fish}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' />
				</StyledBox>
			)
		}
}

export class Explosives extends Component {

		constructor(){
			super();

			this.state = {
				Explosives : 1
			}
		}

		render(){
			return(
				<StyledBox
					id = 'explosives'>
					<img src = {require('./item-images/46-0.png')} />
	 			 <h1>
	 			 	Explosives x {this.state.Explosives}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' />
				</StyledBox>
			)
		}
}

export class Detonator extends Component {

		constructor(){
			super();

			this.state = {
				Detonator : 1,
			}
		}

		render(){
			return(
				<StyledBox
					id = 'detonator'
					className = {this.props.detonatorCurrentState ? 'view' : 'hide'}>
					<img src = {require('./item-images/407-0.png')} />
	 			 <h1>
	 			 	Explosives x {this.state.Detonator}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' />
				</StyledBox>
			)
		}
}

export class Record extends Component {

	constructor(){
		super();

		this.state = {
			Record : 1
		}
	}

	render(){
		return(
			<StyledBox
				id = 'record'
				className = {this.props.recordCurrentState ? 'view' : 'hide'}
				>
				<img src = {require('./item-images/2260-0.png')} />
			 <h1>
				Record x {this.state.Record}
			 </h1>
			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
			 <input className = 'button' type = 'button' value = 'Throw Away' />
			</StyledBox>
		)
	}
}
