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
		let text = "You wake up in a dark cave. Your memory is a bit hazy and your head aches like you have a hangover. Where is this place and how did you get here?";

		return text;
	},
	[
		new LevelButton("But I don't drink...", (game) => {
			game.nextLevel(Scenes.Sobriety);
		}),
		new LevelButton("But I don't drink...anymore", (game) => {
			game.nextLevel(Scenes.Sobriety);
		}),
		new LevelButton("Had one too many", (game) => {
			game.nextLevel(Scenes.Bad_Choices);
		}),
		new LevelButton("Gotta leave this cave, now", (game) => {
			game.nextLevel(Scenes.More_Cave);
		}),
	], [['img', 'startercave.jpg']]),
	Sobriety: new Scene('Cave', (game) => {
		let text = "'I never touch the stuff' You are a bit worried about the circumstances of your situation now. How did you end up here in this state?";

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
