import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateCharacter from './CreationContainer.js'
import registerServiceWorker from './registerServiceWorker';



// import all(?) components
// define Game component, which is called in ReactDOM.render




ReactDOM.render(<CreateCharacter />, document.getElementById('root'));
registerServiceWorker();
