import React from 'react';
import "./countdown.css"
import {
    Button,
    Input
} from 'semantic-ui-react';
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
        console.log(
            "hello"
        );

    }

    calculateTheTime(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time > 0) {
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
        else { this.props.parentFunc(); }


    }
    changeDeadline() {

        this.setState({
            deadline: this.state.newDeadline,
        })

    }


    render() {

        return (
            <div className="countdown">
                <div className={`left-divider ${this.props.theme === "dark" ? "dark" : ""}`} style={this.props.photo ? (
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
                        <Input placeholder="Start your own countdown"
                            onChange={event => this.setState({ newDeadline: event.target.value })} />
                        <br />
                        <Button onClick={() => this.changeDeadline()}> Submit</Button>
                    </div>
                </div>

                <div className="message-container">

                    <h1>{this.props.header}</h1>
                    <p>{this.props.text}</p>
                </div>

            </div>
        )
    }
}
Countdown.defaultProps = {
    header: "Just around the corner!",
    text: "Motivate yourself"
}
export default Countdown;