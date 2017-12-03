import React from 'react';
import {
	Scene,
	LevelButton
} from './Scene.js';
import StyledBox from './Container.js';
import {
	GameFullText,
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
				id="text-img"
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
			let text = "You wake up in a dark cave, your eternal resting place. Your resurrection is the result of some unfinished business, as it always is with the Undead.";
			return text;
		} else {
			let text = "You wake up in a dark cave. Your memory is a bit hazy and your head aches similarly to when one has a hangover.";
			return text;
		}
	}, [
		new LevelButton("Don't drink...",
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
		new LevelButton("Don't drink...anymore", (game) => {
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
		new LevelButton("Gather bearings", (game) => {
			game.nextLevel(Scenes.Condition);
			},
			(game) => {
				if (game.race === "Undead") {
					this.showButton=true;
					return this.showButton;
				} else {
					this.showButton=false;
					return this.showButton;
				}
			}
		),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		}),
	], [['img', 'startercave.jpg']]),


	Sobriety: new Scene('Cave', (game) => {
		let text = "'So this is what a hangover feels like.' However, what you really want to know is how you ended up in this cave. You have not sustained any injuries, so you suspect foul play.";

		return text;
	}, [
		new LevelButton('Try to recall', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'knight.jpg']]),


	Been_Clean: new Scene('Cave', (game) => {
		let text = "It's been many years since you had a drink, not since the aftermath of the Great Cataclysmic War. But that stands the question, how did you end up in this cave? You have not sustained any injuries, so you suspect foul play.";

		return text;
	}, [
		new LevelButton('Try to recall', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'knight.jpg']]),


	Bad_Choices: new Scene('Cave', (game) => {
		let text = "You boozehound, you. You tell yourself that's the last time you split a keg of Ye Ol' English with your medieval boys. But that stands the question, how did you end up in this cave?";

		return text;
	}, [
		new LevelButton('Try to recall', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'knight.jpg']]),

	Condition: new Scene('Cave', (game) => {
		let text = "Judging by how many bones protrude from your rotting flesh, you have been dead for a few weeks. Your inventory is full of the items you were buried with. You have retained few memories from your time among the living other than the memories connected to your unfinished business."
		return text;
	}, [
		new LevelButton('Try to recall', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'skelington.jpg']]),

	Remember: new Scene('Cave', (game) => {
		if (game.race === "Undead") {
			let text = "You lived as a simple retired mercenary. You spent your time looking for odd jobs in the land of Ulmeyda until your death in the year 108 of our Lord Cloudman's reign when you were killed in a duel against Bert the Ruthless. Your death was an honorable one, yet something else has rekindled your soul...";
			return text;
		} else {
			let text = "You aren't sure how long you've been out, but your inventory is the same as you left it. You are certain that the year is 108 of our Lord Cloudman's reign, you live in the land of Ulmeyda, and you are a simple retired mercenary looking for odd jobs. Otherwise, the last memory you have before blacking out is of checking your empty pockets at the market which made you think of...";
			return text;
		}
	}, [
		new LevelButton("...", (game) => {
			game.nextLevel(Scenes.Gerald);
		})
		], [['img', 'startercave.jpg']]),


	Gerald: new Scene('Cave', (game) => {
		if (game.race === "Undead") {
			let text = "...that goddamn Gerald the Spineless. That guy owes you $14. He said he'd pay you back before your duel in case you didn't survive, but that bum blew you off. Your eternal soul will not be able to rest until you reclaim the honor and glory of your $14 legacy!";
			return text;
		} else {
			let text = "...that goddamn Gerald the Spineless. That guy owes you $14. He said he'd pay you back, but that was like forever ago. Your purpose is now clear, inspiring you to blaze a tireless trail through out the land searching for the subject of your hatred: Gerald and his bullshit.";
			return text;
		}

	}, [
		new LevelButton("Leave the cave, find Gerald", (game) => {
			game.nextLevel(Scenes.Outside);
		})
		], [['img', 'gerald.jpg']]),


	Outside: new Scene('Outside of the cave', (game) => {
		let text = "As you exit the cave, the bright change in light causes you to wince. As your vision adjusts, you realize you aren't sure where you are in Ulmeyda. Thankfully, a town is visible from where you stand.";

		return text;
	}, [
		new LevelButton('Head towards town', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'outside.jpg']]),


	Outside_Now: new Scene('Outside of the cave', (game) => {
		let text = "Who cares about the plot or the game developer's hardwork? Just make it easy for yourself and say you are on a quest to get $14 owed to you by some villain named...I dunno...Gerald...the Lame. You exit the cave drooling for action and see a town in the distance.";

		return text;
	}, [
		new LevelButton('Head towards the town', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'outside.jpg']]),


	First_Encounter: new Scene('ENCOUNTER!', (game) => {
		let text = "As you begin to leave an enemy encounters you. It's a one-legged frog approaching with a loaded musket and a crutch. Don't count this amphibian out though, it has seen some battles, it has been in the trenchs. The frog on his last leg in it for one more battle, and you better prepare yourself.";

		return text;
	}, [
		new LevelButton('Engage', (game) => {
			game.nextLevel(Scenes.Fight1);
		}),
		new LevelButton('Coward it out', (game) => {
			game.nextLevel(Scenes.Coward);
			game.froggo(49);
		}),
	], [['img', 'froggo.jpg']]),

	Coward: new Scene('ENCOUNTER!', (game) => {
		let text = "Fearless Frog leans against his crutch, aghast as you bolt away from him. He shoots you in the back of the head for dissapointing everyone. You take 49 points of damage.";

		return text;
	}, [
		new LevelButton('Engage', (game) => {
			game.nextLevel(Scenes.Shop);
		})
	], [['img', 'travel.gif']]),

	Fight1: new Scene('Battle!', (game) => {
		if (Scenes.Fight1.playerVisitedCounter === 1) {
			let text = game.name + " VS. Fearless Frog";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 2) {
			let text = "You deal " + game.atk + " points of damage to Fearless Frog. Fearless frog smacks you hard upside the head. You recieve 8 points of damage";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 3) {
			let text = "You deal " + game.atk + " points of damage to Fearless Frog. Fearless frog shoots off one of your fingers. Hmmmmm...8 damage.";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 4) {
			let text = "You deal " + game.atk + " points of damage to Fearless Frog. Fearless frog is weak but he smacks you with his crutch. You recieve 8 points of damage";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 5) {
			let text = "You brutally slaughtered the frog.";
			return text;
		}
	}, [
		new LevelButton('Attack', (game) => {
			game.nextLevel(Scenes.Fight1);
			game.froggo(8);
			game.critical();
		},
			(game) => {
				if (Scenes.Fight1.playerVisitedCounter === 5) {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		new LevelButton('Defend', (game) => {
			game.nextLevel(Scenes.Fight1);
			game.froggo(2);
		},
		(game) => {
				if (Scenes.Fight1.playerVisitedCounter === 5) {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		new LevelButton('Go to town shop', (game) => {
			game.nextLevel(Scenes.Shop);
			game.receiveMoney();
		},
		(game) => {
				if (Scenes.Fight1.playerVisitedCounter === 5) {
					this.showButton=true;
					return this.showButton;
				} else {
					this.showButton=false;
					return this.showButton;
				}
			}
		)
	], [['img', 'fight.gif']]),

	Shop: new Scene('Town Shop', (game) =>{
		let text = "You only got $5 from slaying that frog and the shop is selling a record and a detonator for $5 each. Gerald... Which should you buy?";
		return text;
	}, [
		new LevelButton('Buy record', (game) => {
			game.nextLevel(Scenes.Bought);
			game.boughtRecord();
		}),
		new LevelButton("Buy detonator", (game) => {
			game.nextLevel(Scenes.Bought);
			game.boughtDet();
		}),
		new LevelButton("Leave here forever", (game) => {
			game.nextLevel(Scenes.Exit_Shop);
		})
		], [['img', 'shop.jpg']]),

	Bought: new Scene('Town Shop', (game) =>{
		let text = "Why did you buy that? Now you are broke.";
		return text;
	}, [
		new LevelButton("Leave here forever", (game) => {
			game.nextLevel(Scenes.Exit_Shop);
		})
		], [['img', 'shop.jpg']]),

	Exit_Shop: new Scene('Town Shop', (game) =>{
		let text = "You turn to the shop keep and tell him you will never ever return to this shop again, as long as you live. You wait for the shopkeep to say something for a few seconds, then leave.";
		return text;
	}, [
		new LevelButton("Head for the door", (game) => {
			game.nextLevel(Scenes.Plot_Twist);
		})
		], [['img', 'shop.jpg']]),

	Plot_Twist: new Scene('Town Shop', (game) =>{
		let text = "The shopkeep reveals himself to be Gerald. He's a pretty old guy, you forgot he was the town shopkeep. He has your money but he isn't really about giving it to you. He also drugged your drink and threw you in the cave. Moment of truth.";
		return text;
	}, [
		new LevelButton("Destruction", (game) => {
			game.nextLevel(Scenes.Bad_End);
			game.receiveMoney();
			game.receiveMoney();
			game.receiveMoney();
		}),
		new LevelButton("Forgiveness", (game) => {
			game.nextLevel(Scenes.Good_End);
			game.receiveMoney();
		}),
			new LevelButton("Use explosives", (game) => {
			game.nextLevel(Scenes.The_End);
			game.detonateExplosives();
		}),
		], [['img', 'gerald.jpg']]),

	Bad_End: new Scene('Town Shop', (game) =>{
		let text = "You pull a nice DDT. Gerald is finished, your money in your hands. That was kind of messed up tho tbh, you are not the hero after all.";
		return text;
	}, [
		new LevelButton("Bad End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'lucha.gif']]),

	Good_End: new Scene('Town Shop', (game) =>{
		let text = "You negotiate with Gerald and you recieve $5. That was anti climactic but at least you keep your integrity.";
		return text;
	}, [
		new LevelButton("Good End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'forgive.jpg']]),

	The_End: new Scene('Town Shop', (game) =>{
		if (game.race === "Undead") {
			let text = "You walk away from an explosion without looking at it. You didn't get your $14 back, but now you can go back to your cave and go back to being dead.";
			return text;
		} else {
			let text = "You walk away from an explosion without looking at it. You didn't get your $14 back, but you got plenty of memories to last a life time.";
			return text;
		}
	}, [
		new LevelButton("The End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'explode.gif']]),

	Completionist: new Scene('End', (game) =>{
		let text = "You won!";
		return text;
	}, [
		new LevelButton("Replay?", (game) => {
			game.nextLevel(Scenes.Cave);
		})
		], [['text', 'Thanks for Playing']]),

};

