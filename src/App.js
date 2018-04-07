import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import CardExampleWithAvatar from './components/playground/CardExampleWithAvatar';
import AppBarComponent from './components/AppBarComponent';
import DrawerComponent from './components/DrawerComponent';

import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <MultiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Toe App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AppBarComponent />
        <DrawerComponent />
        <Board />
        
        <MyAwesomeReactComponent />
        <CardExampleWithAvatar />
        
      </div>
      </MultiThemeProvider>
    );
  }
}

export default App;
