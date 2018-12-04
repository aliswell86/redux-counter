import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import ButtonContainer from './ButtonContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonContainer/>
        <CounterListContainer/>
      </div>
    );
  }
};

export default App;
