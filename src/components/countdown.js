import React from 'react';
import "./countdown.css"

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            picture: false,
            theme: "light"
        }
    }


    componentDidMount() {
        setInterval(() => this.calculateTheTime(this.props.deadline), 1000)

            ;
    }

    calculateTheTime(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({
            days,
            hours,
            minutes,
            seconds,
        })

    }

    render() {

        return (
            <div className= {`countdown ${this.state.picture ? "picture" : ""}`}>
                <div className="info"> 
                <div>Countdown from {this.props.deadline}</div>
                <div><span>{this.state.days}</span> days</div>
                <div><span> {this.state.hours}</span> hours</div>
                <div><span> {this.state.minutes}</span> minutes</div>
                <div><span> {this.state.seconds}</span> seconds</div>
                </div>
            </div>
        )
    }
}
export default Countdown;