import React from 'react';
// import {
//   // applicable containers
// } from './wherever we decide'
import {
  // Drop down menu
} from './DropDown.js'

export class GameFullText extends Component {
  render() {
    var text,
      extras = [];
    if(!this.props.isCurrentChannelNull) {
      text = this.props.currentScene.getText(this.props.game);
      let hasType = false;
      if(text.constructor === Array) {
        if(text[0] === 'string') {
          // undefined in the repo
        } else if (text[0] === 'react') {
            hasType = true;
        }
        text = text[1];
      }

      if(!hasType && typeof(text) === 'string') {
        text = text.split('\n').map((text, index) => {
          console.log('Work it');
          return(
            <GameText
              key={'GameTitle-' + index  + '-' + (index*2)}
              text={text}
            />
          );
        })
      }

      extras = this.props.currentScene.getExtras(this.props.game);

    }

    return(
      <Container maxHeight='40%'>
        {text}
        {extras.map((val, index) => {
          if(typeof(val) === 'string') {
            return(
              <GameText
                key={'GameTitle-' + index + '-Extra-' + (index*2)}
                text={val}
              />
            );
          } else {
              return val;
          }
        })}
      </Container>);
  }
}

// formerly GameButton
export class ActionButton extends Component {
  render() {
    return (
      <div
        className='action-button'
        onClick={this.props.onClick}
      >{this.props.text}</div>
    );
  }
}

// formerly GameTitle
export class MainTitle extends Component {
  render() {
    return (<h1 className='main-title'>{this.props.text}</h1>)
  }
}

export class GameText extends Component {
  render() {
    return (
      <div>
        <p className='game-text'>{this.props.text}</p>
      </div>
    );
  }
}

export class GameImage extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt=''
      />
    );
  }
}
