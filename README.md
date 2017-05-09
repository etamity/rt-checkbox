# React - CheckBox
### Introduction

This is simple stateless react checkbox component with label included.

### Usage

    <CheckBox checked={true} label="CheckBox Component"/>
    
As it's a stateless component, so it won't have lifecycle, no internal state, not able use refs as well. If you want to deal with state or lifecycle, please try to do the logic in higher level components,  and the best practise is use redux to manage whole application states.

    <CheckBox checked={this.state.checked} label={this.state.label}/>

### Testing

    npm run test

### Start the server

This command serves the app at `http://localhost:3000` and provides basic URL
routing for the app:

    npm start


### Build

    npm run build
