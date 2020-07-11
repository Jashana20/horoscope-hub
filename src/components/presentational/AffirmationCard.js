import React from 'react'

class AffirmationCard extends React.Component{
    render(){
        return (
            <div>
                Current Date: {this.props.horoscope.current_date} <br />
                Compatibility: {this.props.horoscope.compatibility} <br />
                Lucky Number: {this.props.horoscope.lucky_number} <br />
                Lucky Time: {this.props.horoscope.lucky_time} <br />
                Color: {this.props.horoscope.color} <br />
                Date Range: {this.props.horoscope.date_range} <br />
                Mood: {this.props.horoscope.mood} <br />
                Description: {this.props.horoscope.description} <br />
            </div>
        )
    }
}

export default AffirmationCard