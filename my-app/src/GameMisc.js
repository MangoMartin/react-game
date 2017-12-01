import React, { Component } from 'react';
import StyledBox from './Container.js';

export class GameFullText extends Component {
  render() {
    var text,
      extras = [];
    if(!this.props.noLevelPresent) {
      text = this.props.presentLevel.lvlText(this.props.game);
      let hasType = false;
      if(text.constructor === Array) {
         if (text[0] === 'react') {
          hasType = true;
        }
        text = text[1];
      }

        if(!hasType && typeof(text) === 'string') {
          text = text.split('\n').map((text, index) => {
            return(
              <GameText
                key={'MainTitle-' + index  + '-' + (index*2)}
                text={text}
            />
          );
        })
      }

      extras = this.props.presentLevel.lvlEnvironment(this.props.game);

    }

    return(
      <StyledBox>

        {extras.map((val, index) => {
          if(typeof(val) === 'string') {
            return(
              <GameText
                key={'MainTitle-' + index + '-Extra-' + (index*2)}
                text={val}
              />
            );
          } else {
            return val;
          }
        })}
        {text}
      </StyledBox>);
  }
}

// formerly GameButton
export class ActionButton extends Component {
  render() {
    return (
      <div
        className='button-display'
        onClick={this.props.onClick}
      >{this.props.text}</div>
    );
  }
}

// formerly GameTitle
export class MainTitle extends Component {
  render() {
    return (<h5 id='level-title'>{this.props.text}</h5>)
  }
}

export class GameText extends Component {
  render() {
    return (
        <p id='level-text'>{this.props.text}</p>
    );
  }
}

// formerly GameInput; check the line break after label
export class ValueInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || ''
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.value}
          onChange={(event) => {
            this.setState({
              value: event.target.value
            });

            if(typeof(this.props.onChange) === 'function'){
              this.props.onChange(event, event.target.value, this.props.onChangeArgs);
            }
          }}
        />
        <label>{this.props.text}</label><br />
      </div>
    );
  }

}

// formerly GameSelect; check the line break after label
export class OptionSelect extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || this.props.options[0]
    };
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={(event) => {
          this.setState({
              value: event.target.value
            });

            if(typeof(this.props.onChange) === 'function') {
              this.props.onChange(event, event.target.value, this.props.onChangeArgs);
            }
          }}>

          {this.props.options.map((option, index) => {
            return <option
              key={'option-' + index}>
                {option}
              </option>;
            })}
        </select>

        <label>{this.props.text}</label><br />
      </div>
    );
  }
}

export class GameImage extends Component {
  render() {
    return (
      <img
        id = 'level-image'
        src={this.props.src}
        alt=''
      />
    );
  }
}

//from style: display: 'inline', marginLeft: '5%'

// export class ItemMenu extends Component {
//   render() {
//     return (
//       <div class Name='item-menu'>
//         <h3>
//         {this.props.item.getName(this.props.game)}<DropdownMenu
//           style={{
//
//           }}
//           options={[
//             {
//               text: 'Discard',
//               onClick: () => {
//                 if(confirm('Do you really want to throw out your ' + this.props.item.name + '?')){
//                   this.props.game.takePlayerItem(this.props.item);
//                 }
//               },
//             },
//             {
//               // update this to perform an action instead of alert
//               text: 'Use',
//               onClick: () => alert('Use clicked!'),
//               show: this.props.item.type.includes('usable-item')
//             },
//             {
//               text:'Equip',
//               onClick: () => {
//                 this.props.game.equipItem(this.props.item.id, this.props.game);
//               },
//               show: !this.props.item.equipped && !!this.props.item.equipType
//             },
//             {
//               text: 'Un-Equip',
//               onClick: () => {
//                 this.props.game.unEquipItem(this.props.item.id, this.props.game);
//               },
//               show: !!this.props.item.equipped && !!this.props.item.equipType
//             }
//           ]}
//         />
//         </h3>
//         <p>{this.props.item.getDescription(this.props.game)}</p>
//       </div>
//     );
//   }
// }
