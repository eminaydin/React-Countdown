import React from 'react';
import './App.css';
import Countdown from "./components/countdown/countdown"
import Reveal from "./components/reveal/reveal";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "26 April 2020",
      picture: null,
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">

        {this.state.timeLeft > 0
          ?

          <div className="main-container"> 
          <Countdown
            deadline={this.state.deadline}
            picture={this.state.picture}
            newDeadline={this.state.newDeadline}
            parentFunc={this.timeCalculator}
          />
        <div className="container">
              Be fast to be the first one
        </div>
          </div>
          :
          <Reveal />}

      </div>
      </MuiPickersUtilsProvider>
    );
  }

}

export default App;
