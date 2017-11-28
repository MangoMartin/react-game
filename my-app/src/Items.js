import React, { Component } from 'react';
import PlayerHUD from './PlayerContainer.js';
import StyledBox from './Container.js';
import {Food, Weapon} from './Item.js';

class Inventory extends Component {

	render(){
		return(
			<div>
				<StyledBox
					id = 'ItemWindow'
					className =  {this.props.propsName ? 'show-window' : 'hide-window'}
					>
					<Food 
						changeHealthPoints = {this.props.propsHP}
						foodAmt = {this.props.propsFoodSupply}
					 />
					<Weapon />
				</StyledBox>
			</div>
			)
		}

}

export default Inventory; 
