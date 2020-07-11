import React from 'react'
import 'semantic-ui-css/semantic.min.css'

class AffirmationCard extends React.Component{
    render(){
        return (
            <div className="ui card">
                <h4>Current Date:</h4>{this.props.horoscope.current_date}<br />
                <h4>Compatibility:</h4> {this.props.horoscope.compatibility} <br />
                <h4>Lucky Number:</h4> {this.props.horoscope.lucky_number} <br />
                <h4>Lucky Time:</h4> {this.props.horoscope.lucky_time} <br />
                <h4>Color:</h4> {this.props.horoscope.color} <br />
                <h4>Date Range:</h4> {this.props.horoscope.date_range} <br />
                <h4>Mood:</h4> {this.props.horoscope.mood} <br />
                <h4>Description:</h4> {this.props.horoscope.description} <br />
            </div>
        )
    }
}

export default AffirmationCard