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
            deadline: this.props.deadline,
           

        }
     


    }


    componentDidMount() {
        this.interval = setInterval(() => this.calculateTheTime(this.state.deadline), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)

    }

    calculateTheTime(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        this.props.parentFunc(time);
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
    changeDeadline() {

        this.setState({
            deadline: this.state.newDeadline,
        })

    }


    render() {

        return (
            <div className="countdown">
                <div className={`left-divider ${this.props.theme === "dark" ? "dark" : ""}`} style = {this.props.photo ? (
                {
                    backgroundImage: "url(" + this.props.photo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }
            ) :
             {
               
            }}> 
                <div className="info">
                    <div>Countdown to {this.state.deadline}</div>
                    <div><span>{this.state.days}</span> days</div>
                    <div><span> {this.state.hours}</span> hours</div>
                    <div><span> {this.state.minutes}</span> minutes</div>
                    <div><span> {this.state.seconds}</span> seconds</div>
                    <input placeholder="Start your own countdown"
                    onChange= {event => this.setState({newDeadline: event.target.value})}/>
                    <button onClick={() => this.changeDeadline()}> Submit</button>
                </div>
                </div>

                <div className="message-container">
              <p>Be fast to be the first one</p>
        </div>
            </div>
        )
    }
}
export default Countdown;