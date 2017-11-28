import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Container.js';
import CreateCharacter from './CreationContainer.js';
import PlayerHUD from './PlayerContainer.js';
import registerServiceWorker from './registerServiceWorker';
import GameContainer from './GameContainer.js';
import Inventory from './Items.js';
import {
	Scene, 
	LevelButton
} from './Scene.js';
import {
	SceneContainer,
	Scenes 
} from './Scenes.js';

ReactDOM.render(<GameContainer />, document.getElementById('root'));
registerServiceWorker();
