import React, { Component } from 'react';
import {
	Scene, 
	LevelButton
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

export class SceneContainer extends React.Component {

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

export var Scenes = {
		Cave: new Scene('Cave', (game) => {
		let text = "You are in a cave";

		text += '\nSorry man.';

		return text;
	}, [
		new LevelButton('Explore Cave', (game) => {
			game.gotoScene(Scenes.Outside);
		}),
		new LevelButton('Procrastinate', (game) => {
			game.gotoScene(Scenes.More_Cave);
		})
	], [['img', './images.jfif']]),
		More_Cave: new Scene('Sitting in the cave', (game) => {
		let text = "You are still in a cave";

		return text;
	}, [
		new LevelButton('Get Back In the Game', (game) => {
			game.gotoScene(Scenes.Cave);
		})
		], [['img', './images.jfif']]),
		Outside: new Scene('Outside', (game) => {
		let text = "Pretty shitty outside too";

		text += '\nGo back in the cave maybe?';

		return text;
	}, [
		new LevelButton('Go back to cave', (game) => {
			game.gotoScene(Scenes.Cave);
		}),
	], [['img', './images.jfif']])
};