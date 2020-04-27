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
      timeLeft: true,
    }
  }
  
  timeCalculator = () => {
    this.setState({
      timeLeft: false,
    })
  }
  render() {
   

    return (
      
      <div className="App">

        {this.state.timeLeft
          ?

          <div className="main-wrapper"> 
          <Countdown
            deadline={this.state.deadline}
            picture={this.state.picture}
            newDeadline={this.state.newDeadline}
            parentFunc={this.timeCalculator}
            photo = {photo}
            theme = "light"
          />

          </div>
          :
         <Reveal/>}

      </div>
      
    );
  }

}

export default App;
