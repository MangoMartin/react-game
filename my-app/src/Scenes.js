import React, { Component } from 'react';
import StyledBox from './Container.js';

class SceneContainer extends Component {

	render(){
		return(
			<StyledBox
				className = 'SceneContainer'>
				<img id= 'scene-image' src={require('./dogpics/images.jfif')} alt='image here'/>	
				<p id='scene-text' >SCENE TEXT HERE</p> 
				<div
				 className = 'buttons'>
				<input className='button-display' type='button' name='action1' value='button 1' />
				<input className='button-display' type='button' name='action2' value='button 2' />
				<input className='button-display' type='button' name='action3' value='button 3' />
				</div>


			</StyledBox> 
		)
	}
}

export default SceneContainer; 