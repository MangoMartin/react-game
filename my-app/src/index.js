import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Container.js'
import CreateCharacter from './CreationContainer.js'
import registerServiceWorker from './registerServiceWorker';


// import all(?) components
// define Game component, which is called in ReactDOM.render




ReactDOM.render(<Box />, document.getElementById('root'));
registerServiceWorker();
