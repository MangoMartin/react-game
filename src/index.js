import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CreateCharacter from './CreationContainer.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
		<CreateCharacter />
	, document.getElementById('root'));

registerServiceWorker();
