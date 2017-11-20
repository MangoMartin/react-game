import React, { Component } from 'react';

export default class StyledBox extends Component {

	render(){
		return(
			<Box  
					id = {this.props.id}
					className = {'styled-box' + (this.props.className || '')}
			>
			{this.props.children}
			</Box>
			)
	}
}

export class Box extends Component {

	render(){
		return(
			<div
				id = {this.props.id || ''}
				className = {'box' + (this.props.className	 || '')}
				style = {{
					height : this.props.height || ''
				}}
				>
				{this.props.children}
				</div>
		)
	}
}
