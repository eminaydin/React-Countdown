import React from 'react';
import './App.css';
import Countdown from "./components/countdown/countdown"
import Reveal from "./components/reveal/reveal"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "28 May 2020",
      picture: "https://images.unsplash.com/photo-1587802480811-4be6efcdf373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      newDeadline: "",
      timeLeft: 1,
      theme:"dark"
    }
  }
  timeCalculator = (time) => {
    this.setState({
      timeLeft: time,
    })
  }
  render() {
   

    return (
      
      <div className="App">

        {this.state.timeLeft > 0
          ?

          <div className="main-container"> 
          <Countdown
            deadline={this.state.deadline}
            picture={this.state.picture}
            newDeadline={this.state.newDeadline}
            parentFunc={this.timeCalculator}
            theme = {this.state.theme}
          />
        <div className="container">
              Be fast to be the first one
        </div>
          </div>
          :
         <Reveal/>}

      </div>
      
    );
  }

}

export default App;
