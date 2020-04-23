import React from 'react';
import './App.css';
import Countdown from  "./components/countdown"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "26 April 2020"
    }
  }
  render() {
    return (
      <div className="App">
        <div>Countdown from {this.state.deadline}</div>
        <Countdown
        deadline = {this.state.deadline}/>
      </div>
    );
  }

}

export default App;
