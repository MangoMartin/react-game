import React from 'react';
import StyledBox from './Container.js';
import {
	ActionButton
} from './GameMisc';

export class ButtonsContainer extends React.Component { // imported to GameContainer.js, Scenes.js, SituationalContainer.js, and index.js
	render () {
		return (<StyledBox className='buttons'> 
			{((!this.props.isCurrentChannelNull) ? this.props.currentScene.buttons.map((button, index) => { //isCurrentChannelNull, currentScene
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