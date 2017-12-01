import React, { Component } from 'react';
import PlayerHUD from './PlayerContainer.js';
import StyledBox from './Container.js';
import {Food, Weapon, Armor, Bread, Fish, Explosives, Detonator, Record} from './Item.js';

class Inventory extends Component {

	render(){
		return(
			<div>
				<StyledBox
					id = 'ItemWindow'
					className =  {this.props.currentInventoryState ? 'view' : 'hide'}
					>
					<Food
						changeHealthPoints = {this.props.propsHP}
						foodAmt = {this.props.propsFoodSupply}
					 />
					<Weapon />
					<Armor />
					<Bread />
					<Fish />
					<Explosives />
					<Detonator
						detonatorCurrentState = {this.props.detonatorState}
						recordCurrentState = {this.props.recordState}
					/>
					<Record />
				</StyledBox>
			</div>
			)
		}

}

export default Inventory;
