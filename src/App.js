import React from 'react';
import './App.css';
import Countdown from "./components/countdown/countdown"
import Reveal from "./components/reveal/reveal"
import photo from  "./photo-1587802480811-4be6efcdf373.jpeg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "28 May 2020",
      newDeadline: "",
      timeLeft: 1,
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

          <div className="main-wrapper"> 
          <Countdown
            deadline={this.state.deadline}
            picture={this.state.picture}
            newDeadline={this.state.newDeadline}
            parentFunc={this.timeCalculator}
            theme = {"light"}
            photo = {photo}
            header = "Just around the corner!"
            text = "Motivate yourself"
          />

          </div>
          :
         <Reveal/>}

      </div>
      
    );
  }

}

export default App;
