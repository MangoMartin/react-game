import React, { Component } from 'react';
import {
	Scene, 
	SceneButton
} from './Scene.js';
import StyledBox from './Container.js';
import {
	GameText, 
	ValueInput,
	GameFullText, 
	OptionSelect,
	GameImage
} from './GameMisc';
import {
	ButtonsContainer
} from './ButtonsContainer.js';

class SceneContainer extends Component {

	render(){
		let currentScene = this.props.game.state.currentScene;
		let isCurrentChannelNull = currentScene === null;
		return (<StyledBox id="main-container" className="SceneContainer">
			<GameImage 
				isCurrentChannelNull={isCurrentChannelNull} 
				game={this.props.game} 
				currentScene={currentScene} 
			/>
			<p id="scene-text">
			<GameFullText 
				isCurrentChannelNull={isCurrentChannelNull} 
				game={this.props.game} 
				currentScene={currentScene} 
			/>
			</p>
			<div className = 'buttons'>
			<ButtonsContainer className='button-display'
				isCurrentChannelNull={isCurrentChannelNull} 
				game={this.props.game} 
				currentScene={currentScene}
			/>
			</div>
		</StyledBox>);
	}
}

export default SceneContainer;