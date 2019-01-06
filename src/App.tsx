import './App.css';

import React, { Component } from 'react';

import { drumPadInfoList } from './_domain/drum-pad-list';
import DrumMachine from './components/drum-machine';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <DrumMachine drumPadInfoList={drumPadInfoList} />
    );
  }
}
