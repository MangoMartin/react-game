import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  Box,
  StyledBox
} from './Container.js';

import {
  GameFullText,
  ActionButton,
  MainTitle,
  GameText,
  ValueInput,
  OptionSelect,
  GameImage,
  // ItemMenu
} from './GameMisc.js';

import {
  Food,
  Weapon
} from './Item.js';

import Inventory from './Items.js';
import PlayerHUD from './PlayerContainer.js';
import CreateCharacter from './CreationContainer.js';
import GameContainer from './GameContainer.js';
import BackgroundAudio from './Sound.js';
import sound from './audio/LabyrinthCut.mp3';

import {
	Scene,
	LevelButton
} from './Scene.js';

import {
	SceneContainer,
	Scenes
} from './Scenes.js';

import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
		<CreateCharacter />
	, document.getElementById('root'));

registerServiceWorker();
