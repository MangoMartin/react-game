//items
import React, { Component } from 'react';
import StyledBox from './Container.js';


export class Food extends Component {

	render(){
		return(
			<div>
			<StyledBox
				id = 'food-item'>
				<img src={require('./item-images/260-0.png')} alt= " "/>
				<h1>
					Fuji Apple x {this.props.foodSupply}
				</h1>
				<input className = 'button' type = 'button' value = 'Use' onClick={this.props.changeHP}/>
				<input className = 'button' type = 'button' value = 'Throw Away' onClick={this.props.throwAway} />
			</StyledBox>
			</div>
			)
	}
}

export class Weapon extends Component {

	render(){
		return(
			<StyledBox
				id = 'weapon-item'>
				<img src = {require('./item-images/267-0.png')} alt= " "/>
				<h1>
					Sword x {this.props.Weapon}
				</h1>
				<input className = 'button' type = 'button' value = 'Equip' onClick={this.props.equipSword}/>
				<input className = 'button' type = 'button' value = 'Throw Away' onClick={this.props.throwAway} />
			</StyledBox>
		)
	}
}

export class Armor extends Component {

	render(){
		return(
			<StyledBox
				id = 'armor-item'>
			 <img src = {require('./item-images/311-0.png')} alt= " "/>
			 <h1>
			 		Chainmail x {this.props.Armor}
			 </h1>
			 <input className = 'button' type = 'button' value = 'Equip' onClick={this.props.equipArmor}/>
			 <input className = 'button' type = 'button' value = 'Throw Away' onClick={this.props.throwAway} />
			</StyledBox>
		)
	}
}

export class Bread extends Component {

		render(){
			return(
				<StyledBox
					id = 'bread'>
					<img src = {require('./item-images/297-0.png')} alt= " "/>
	 			 <h1>
	 			 		Stale Bread x {this.props.Bread}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={this.props.useBread}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' onClick={this.props.throwAwayBread}/>
				</StyledBox>
			)
		}
}

export class Fish extends Component {

		render(){
			return(
				<StyledBox
					id = 'fish'>
					<img src = {require('./item-images/349-2.png')} alt= " "/>
	 			 <h1>
	 			 	Poisonous Blowfish x {this.props.Fish}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={this.props.useFish}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' onClick={this.props.throwAwayFish} />
				</StyledBox>
			)
		}
}

export class Explosives extends Component {


		render(){
			return(
				<StyledBox
					id = 'explosives'>
					<img src = {require('./item-images/46-0.png')} alt= " "/>
	 			 <h1>
	 			 	Explosives x {this.props.Explosives}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={this.props.detonateExplosives}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' onClick={this.props.throwAwayExplosives}/>
				</StyledBox>
			)
		}
}

export class Detonator extends Component {

		render(){
			return(
				<StyledBox
					id = 'detonator'
					className = {this.props.detonatorCurrentState ? 'view' : 'hide'}>
					<img src = {require('./item-images/407-0.png')} alt= " "/>
	 			 <h1>
	 			 	Detonator x {this.props.Detonator}
	 			 </h1>
	 			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
	 			 <input className = 'button' type = 'button' value = 'Throw Away' />
				</StyledBox>
			)
		}
}

export class Record extends Component {

	render(){
		return(
			<StyledBox
				id = 'record'
				className = {this.props.recordCurrentState ? 'view' : 'hide'}
				>
				<img src = {require('./item-images/2260-0.png')} alt= " "/>
			 <h1>
				Record x {this.props.Record}
			 </h1>
			 <input className = 'button' type = 'button' value = 'Use' onClick={'#'}/>
			 <input className = 'button' type = 'button' value = 'Throw Away' />
			</StyledBox>
		)
	}
}
