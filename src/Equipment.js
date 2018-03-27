import React, { Component } from 'react';
import StyledBox from './Container.js';

class Equipment extends Component {

  render(){
    return(
      <StyledBox
        id = 'equipment-tab'
        className = {this.props.isEquipmentHidden ? 'hide' : 'view'}
        >
        <span className = 'equipment'>Weapon : {this.props.equippedWeaponName} </span> <img src={this.props.equippedWeaponImage} alt= " "/> <br />
        <span className = 'equipment'>Head : {this.props.equippedHelm} </span> <img src={this.props.equippedHelm} alt= " "/> <br />
        <span className = 'equipment'>Torso : {this.props.equippedArmorName} </span> <img src={this.props.equippedArmorImage} alt= " "/> <br />
        <span className = 'equipment'>Legs : {this.props.equippedLegs} </span> <img src={this.props.equippedLegsImage} alt= " "/><br />
        <span className = 'equipment'>Footwear : {this.props.equippedShoes} </span> <img src={this.props.equippedShoes} alt= " "/><br />
        <span className = 'equipment'>Accessories : {this.props.equippedAccessories} </span> <img src={this.props.equippedAccessories} alt= " "/><br />
      </StyledBox>
    )
  }
}

export default Equipment;
