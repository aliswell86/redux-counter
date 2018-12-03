import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';
import Button from '../components/Buttons';

class App extends Component {

  render() {
    return (
      <div>
        <Button />
        <CounterContainer/>
      </div>
    );
  }

}

export default App;
