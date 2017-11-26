import React from 'react';

import {
	GameText, 
	GameImage 
} from './GameMisc.js'; 

export class Scene {
	constructor (level, text, buttons, actions) {
		if(!level) level = "?????"; 
		if(!text) text = "!!! No text provided !!!";
		if(!buttons) buttons = [];
		if(!actions) actions = [];

		this.level = level;
		this.text = text;
		this.buttons = buttons;
		this.actions = actions;
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
		return '!!! Invalid Text Type !!!';
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

	lvlActions (game) {  
		var actions = []; 
		for(let i = 0; i < this.actions.length; i++) { 
			if (this.actions[i].constructor === Array) { 
				if (typeof(this.actions[i][0]) === 'function') { 
					actions.push(this.actions[i][0](game)); 
				} else if (typeof(this.actions[i][0]) === 'string') { 
					let actionsi0 = this.actions[i][0].toLowerCase();
					if (actionsi0 === 'function') { 
						actions.push(this.actions[i][1](game)); 
					} else if (actionsi0 === 'react') { 
						actions.push(this.actions[i][1]); 
					} else if (actionsi0 === 'img' || actionsi0 === 'image') { 
						actions.push(<GameImage key={"GameImage-" + i + "-" + this.actions[i][1]} src={this.actions[i][1]} />);
					} else if (actionsi0 === 'text') { 
						actions.push(<GameText key={"GameText-" + i} text={this.actions[i][1]} />); 
					} else { 
						actions.push(this.actions[i][1]); 
					}
				}
			} else if (this.actions[i].constructor === Function) { 
				actions.push(this.actions[i](game)); 
			} else if (this.actions[i].constructor === String) { 
				actions.push(this.actions[i]); 
			}
		}
		return actions; 
	}
}

export class LevelButton { 
	constructor (buttonText, buttonEvent, showButton) {
		if(!buttonText) buttonText = '!!! No button description !!!';

		if(!buttonEvent) buttonEvent = () => alert("!!! placebo button !!!");

		if(!showButton) showButton = true;
		
		this.buttonText = buttonText;
		this.buttonEvent = buttonEvent;
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