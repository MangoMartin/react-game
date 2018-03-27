import React, { Component } from 'react';
import sound from './audio/LabyrinthCut.mp3';
//check for react-sound, react-audio-player, sound manager 2

// Song: "Labyrinth" from The Legend of Zelda (NES), composed by Koji Kondo

// consider adding control function in settings? that, or a toggle audio button
class BackgroundAudio extends Component {

  render() {
    return (
      <div>
        <audio ref="audio_tag" src={sound} type='audio/mp3' autoPlay loop />
      </div>
    );
  }
}


export default BackgroundAudio;
