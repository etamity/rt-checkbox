import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './Components/CheckBox/CheckBox.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
        checked: false,
        checkboxLabel: 'test checkbox'
    }
  }

  render() {

    let onClick = (e) => {
        this.setState({
          checked: !this.state.checked,
          checkboxLabel: this.state.checked ? 'test checkbox' : 'test checked'
        });
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Checkbox is most common used component, use stateless method to create the component,
          component state should be managed by higher level container <br />
        </p>
        <div className="App-container">
          <Checkbox checked={this.state.checked} label={this.state.checkboxLabel} onClick={onClick}></Checkbox>
        </div>
      </div>
    );
  }
}

export default App;
