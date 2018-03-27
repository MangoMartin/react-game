import React from 'react';

import {
	GameText, 
	GameImage 
} from './GameMisc.js'; 

export class Scene {
	constructor (level, text, buttons, environment) {
		if(!level) level = "????";
		if(!text) text = "!!! No text provided !!!";
		if(!buttons) buttons = [];
		if(!environment) environment = [];

		this.level = level;
		this.text = text;
		this.buttons = buttons;
		this.environment = environment;
		this.playerVisitedCounter = 0;
	}

	loadLevel (game) {
		let type = typeof(this.level);
		if (type === 'function') {
			return this.level(game);
		} else if (type === 'string') {
			return this.level;
		} else if (type === 'array') {
			return this.level.join(' ');
		}
		return '- Error: Text Not A Valid Type -';
	}

	lvlEnvironment (game) {
		var environment = [];
		for(let i = 0; i < this.environment.length; i++) {
			if (this.environment[i].constructor === Array) {
				if (typeof(this.environment[i][0]) === 'function') {
					environment.push(this.environment[i][0](game));
				} else if (typeof(this.environment[i][0]) === 'string') {
					let envi0 = this.environment[i][0].toLowerCase();
					if (envi0 === 'function') {
						environment.push(this.environment[i][1](game));
					} else if (envi0 === 'react') {
						environment.push(this.environment[i][1]);
					} else if (envi0 === 'img' || envi0 === 'image') {
						environment.push(<GameImage key={"GameImage-" + i + "-" + this.environment[i][1]} src={this.environment[i][1]} />);
					} else if (envi0 === 'text') {
						environment.push(<GameText key={"GameText-" + i} text={this.environment[i][1]} />);
					} else {
						environment.push(this.environment[i][1]);
					}
				}
			} else if (this.environment[i].constructor === Function) {
				environment.push(this.environment[i](game));
			} else if (this.environment[i].constructor === String) {
				environment.push(this.environment[i]);
			}
		}
		return environment;
	}
	lvlText (game) {
		let type = typeof(this.text);

		if (type === 'function') {
			return this.text(game);
		} else if (type === 'string') {
			return ['string', this.text];
		} else if (type === 'array') {
			return ['string', this.text.join(' ')];
		}
		return '!!! Invalid Text Type !!!';
	}


}

export class LevelButton {
	constructor (buttonText, onClick, showButton) {
		if(!buttonText) buttonText = '!!! No button description !!!';

		if(!onClick) onClick = () => alert("!!! placebo button !!!");

		if(!showButton) showButton = true;

		this.buttonText = buttonText;
		this.onClick = onClick;
		this.showButton = showButton;
	}

	loadButtonText (game) {
		let type = typeof(this.buttonText);

		if (type === 'function') {
			return this.buttonText(game);
		} else if (type === 'string') {
			return this.buttonText;
		} else if (type === 'array') {
			return this.buttonText.join(' ');
		}
		return '- Error: Text Not A Valid Type -';
	}

	loadButton (game) {
		let type = typeof(this.showButton);
		if (type === 'function') {
			return this.showButton(game);
		} else if (type === 'boolean') {
			return this.showButton;
		} else if (type === 'string' || type === 'number') {
			return !!this.showButton;
		}
		return true;
	}
}
