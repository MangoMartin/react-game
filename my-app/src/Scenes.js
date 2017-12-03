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
		if (game.race === "Undead") {
			let text = "You wake up in a dark cave. This place has been your grave for many years. ";
			return text;
		} else {
			let text = "You wake up in a dark cave. Your memory is a bit hazy and your head aches like you have a hangover. Where is this place and how did you get here?";
			return text;
		} 
	}, 

	[   
		new LevelButton("But I don't drink...", 
			(game) => {
				game.nextLevel(Scenes.Sobriety);
			}, 
			(game) => { 
				if (game.race === "Undead") {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		new LevelButton("But I don't drink...anymore", (game) => {
			game.nextLevel(Scenes.Been_Clean);
			}, 
			(game) => { 
				if (game.race === "Undead") {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		new LevelButton("Had one too many", (game) => {
			game.nextLevel(Scenes.Bad_Choices);
			}, 
			(game) => { 
				if (game.race === "Undead") {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		new LevelButton("Gotta leave this cave, now", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		}),
	], [['img', 'startercave.jpg']]),

	Sobriety: new Scene('Cave', (game) => {
		let text = "'I never touch the stuff.' You are a bit worried about the circumstances of your situation now. How did you end up here in this state?";

		return text;
	}, [
		new LevelButton('Try to remember', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Gotta leave this cave, now", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'startercave.jpg']]),

	Been_Clean: new Scene('Cave', (game) => {
		let text = "It's been many years since you had a drink, not since the aftermath of the Great Fidget Spinner War. You are a bit worried about the circumstances of your situation now. How did you end up here in this state?";

		return text;
	}, [
		new LevelButton('Try to remember', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Gotta leave this cave, now", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'startercave.jpg']]),

	Bad_Choices: new Scene('Cave', (game) => {
		let text = "Damn, not doing that again anytime soon, the headache isn't worth all that Patron. Something still feels a bit off though...";

		return text;
	}, [
		new LevelButton('Try to remember', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Gotta leave this cave, now", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'startercave.jpg']]),

	Remember: new Scene('Cave', (game) => {
		let text = "You aren't sure how long you've been out. You are certain that the year is 108, you live in the Kingdom of Last Chances, and you are a simple retired mercenary looking for odd jobs. Otherwise, the last memory you have before blacking out is of...";

		return text;
	}, [
		new LevelButton("...", (game) => {
			game.nextLevel(Scenes.Gerald);
		})
		], [['img', 'think.jpg']]),

	Gerald: new Scene('Cave', (game) => {
		let text = "...that goddamn Gerald. That guy owes you $14. He said he'd pay you back, but that was like two moons ago. You no longer care about your circumstances, a fire has been lit in your soul. For pride, for honor, for pettiness, it doesn't matter. All you are certain of is that bastard owes you $14.";
		return text;
	}, [
		new LevelButton("GERALLLLLLLD", (game) => {
			game.nextLevel(Scenes.Outside);
		})
		], [['img', 'rage.jpg']]),
	
	Outside: new Scene('Outside of the cave', (game) => {
		let text = "As you exit the cave, the bright change in light causes you to wince. As your vision adjusts to the light, you realize you aren't sure where you are. Thankfully, a town is visible from where you stand.";

		return text;
	}, [
		new LevelButton('Go back to cave', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'fantasy-world.jpg']]),

	Outside_Now: new Scene('Outside of the cave', (game) => {
		let text = "Who cares about the how, you just need to leave that stupid boring cave. As you exit the cave, the bright change in light causes you to wince. As your vision adjusts to the light, you realize you aren't sure where you are. Thankfully, a town is visible from where you stand.";

		return text;
	}, [
		new LevelButton('Head towards the town', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'fantasy-world.jpg']]),

	First_Encounter: new Scene('ENCOUNTER!', (game) => {
		let text = "A horrible Ficken (aka Chox) crosses your path. Looks like its determined to take you out. What do?";

		return text;
	}, [
		new LevelButton('Slay the monstrous beast', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
		new LevelButton('Coward it out', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'ficken.jpg']]),
};