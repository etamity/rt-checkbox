import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CheckBox from './Components/CheckBox/CheckBox.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//Simple testing
it('renders checkbox', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckBox />, div);
});

// As the checkbox is stateless component
// no state, no liftcycle, no refs, therefore no need to do further testing
//Simple testing
it('renders checkbox with props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckBox checked={true} label="Just Test"/>, div);
});

