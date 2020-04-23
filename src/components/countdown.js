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