import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import Display from './Display.js';
import { connect } from 'react-redux';
import { operationPressed, digitPressed, equals, buttonpress } from './actions/actions.js'



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Display currentValue={this.props.currentValue}/>
        <div id='button-container'>
          <Button id='ac' text={'AC'} className={'ac'} buttonPressed={this.props.operationPressed} />
          <Button id='div' text={'/'} buttonPressed={this.props.operationPressed}/>
          <Button id='mult' text={'X'} buttonPressed={this.props.operationPressed}/>
          <Button id='seven' text={'7'} buttonPressed={this.props.operationPressed}/>
          <Button id='eight' text={'8'} buttonPressed={this.props.digitPressed}/>
          <Button id='nine' text={'9'} buttonPressed={this.props.digitPressed}/>
          <Button id='minus' text={'-'} buttonPressed={this.props.operationPressed}/>
          <Button id='four' text={'4'} buttonPressed={this.props.digitPressed}/>
          <Button id='five' text={'5'} buttonPressed={this.props.digitPressed}/>
          <Button id='six' text={'6'} buttonPressed={this.props.digitPressed}/>
          <Button id='plus' text={'+'} buttonPressed={this.props.operationPressed}/>
          <Button id='one' text={'1'} buttonPressed={this.props.operationPressed}/>
          <Button id='two' text={'2'} buttonPressed={this.props.digitPressed}/>
          <Button id='three' text={'3'} buttonPressed={this.props.digitPressed}/>
          <Button id='equal' text={'='} className={'equals'} buttonPressed={this.props.equals}/>
          <Button id='zero' text={'0'} className={'zero'} buttonPressed={this.props.digitPressed}/>
          <Button id='point' text={'.'} buttonPressed={this.props.operationPressed}/>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { currentValue: state.currentValue }
}

function mapDispatchToProps(dispatch) {
  return {
    digitPressed: digit => dispatch(digitPressed(digit)),
    equals: () => dispatch(equals()),
    operationPressed: operation => dispatch(operationPressed(operation))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
