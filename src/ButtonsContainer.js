import React from 'react';
import StyledBox from './Container.js';
import {
	ActionButton
} from './GameMisc';

export class ButtonsContainer extends React.Component { 
	render () {
		return (<StyledBox className='buttons'> 
			{((!this.props.noLevelPresent) ? this.props.presentLevel.buttons.map((button, index) => { 
				if(button.loadButton(this.props.game)){
					return (<ActionButton
						key={"game-button-" + index + "-" + (index*2)} 
						text={button.loadButtonText(this.props.game)} 
						onClick={() => button.onClick(this.props.game)}
					/>);
				}
				return false;
			}) : false)}
		</StyledBox>);
	}
}