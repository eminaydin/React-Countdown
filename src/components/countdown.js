import React from 'react';


class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    calculateTheTime(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log("time", time);
        
    }

    render() {
        this.calculateTheTime(this.props.deadline)
        return (      
          <div>
            <div>{this.state.days} days</div>
        <div>{this.state.hours} hours</div>
        <div>{this.state.minutes} minutes</div>
        <div>{this.state.seconds} seconds</div>

            </div>
        )
    }
}
export default Countdown;