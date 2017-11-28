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
	GameImage,
	MainTitle
} from './GameMisc';
import {
	ButtonsContainer
} from './ButtonsContainer.js';

export class SceneContainer extends React.Component {

	render(){
		let presentLevel = this.props.game.state.presentLevel;
		let noLevelPresent = presentLevel === null;
		return (<StyledBox className="SceneContainer">
			<MainTitle 
				text={(!noLevelPresent) ? presentLevel.loadLevel(this.props.game) : '.....'}
			/>
			<GameFullText 
				noLevelPresent={noLevelPresent} 
				game={this.props.game} 
				presentLevel={presentLevel} 
			/>
			<ButtonsContainer 
				noLevelPresent={noLevelPresent} 
				game={this.props.game} 
				presentLevel={presentLevel}
			/>
		</StyledBox>);
	}
}

export var Scenes = {
		Cave: new Scene('Cave', (game) => {
		let text = "You are in a cave";
	
		return text;
	}, 
	[
		new LevelButton('Explore Cave', (game) => {
			game.nextLevel(Scenes.Outside);
		}),
		new LevelButton('Procrastinate', (game) => {
			game.nextLevel(Scenes.More_Cave);
		})
	], [['img', 'images.jfif']]),
		More_Cave: new Scene('Sitting in the cave', (game) => {
		let text = "You are still in a cave";

		return text;
	}, [
		new LevelButton('Get Back In the Game', (game) => {
			game.nextLevel(Scenes.Cave);
		})
		], [['img', './images.jfif']]),
		Outside: new Scene('Outside', (game) => {
		let text = "Pretty shitty outside too";

		text += '\nGo back in the cave maybe?';

		return text;
	}, [
		new LevelButton('Go back to cave', (game) => {
			game.nextLevel(Scenes.Cave);
		}),
	], [['img', './images.jfif']])
};