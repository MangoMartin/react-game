import React, { Component } from 'react';
import StyledBox from './Container.js';
import {Food, Weapon, Armor, Bread, Fish, Explosives, Detonator, Record} from './Item.js';

class Inventory extends Component {

	render(){
		return(
			<div>
				<StyledBox
					id = 'ItemWindow'
					className =  {this.props.currentInventoryState ? 'hide' : 'view'}
					>
					<Food
						changeHP = {this.props.changeHP}
						foodSupply = {this.props.foodSupply}
						throwAway = {this.props.throwAway}
					 />
					<Weapon
						Weapon = {this.props.Weapon}
						equipSword = {this.props.equipSword}
						/>
					<Armor
						Armor = {this.props.Armor}
						equipArmor = {this.props.equipArmor}
					 	/>
					<Bread
						Bread = {this.props.Bread}
						useBread = {this.props.useBread}
						throwAwayBread = {this.props.throwAwayBread}
						/>
					<Fish
						Fish = {this.props.Fish}
						useFish = {this.props.useFish}
						throwAwayFish = {this.props.throwAwayFish}
						/>
					<Explosives
						Explosives = {this.props.Explosives}
						detonateExplosives = {this.props.detonateExplosives}
						throwAwayExplosives = {this.props.throwAwayExplosives}
						/>
					<Detonator
						Detonator = {this.props.Detonator}
						detonatorCurrentState = {this.props.detonatorState}
						/>
					<Record
						Record = {this.props.Record}
					 	recordCurrentState = {this.props.recordState}
						/>
				</StyledBox>
			</div>
			)
		}

}

export default Inventory;
