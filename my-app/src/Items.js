import React, { Component } from 'react';

import PlayerHUD from './PlayerContainer.js';
import StyledBox from './Container.js';

class Inventory extends Component {


	render(){
		console.log(this.props.propsName)
		return(
			<div>
				<StyledBox
					id = 'ItemWindow'
					className =  {this.props.propsName ? 'show-window' : 'hide-window'}
					>

					<h1>Items Go Here</h1>
				</StyledBox>
			</div>
			)
		}

}

export default Inventory; 
