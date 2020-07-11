import React from 'react'
import AffirmationCard from '../presentational/HoroscopeCard'
import 'semantic-ui-css/semantic.min.css'

class HoroscopesContainer extends React.Component{


    state = {
        horoscopes: [],
        allSigns: ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"],
        timeFrames: ["today", "yesterday", "tomorrow"],
        sign: "",
        day: ""
    }
    
    getHoroscope = (e) => {
        e.preventDefault()
        const URL = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=${this.state.day}`;
        fetch(URL, {
            method: 'POST'
        }).then(res => res.json())
        .then(json => {this.setState({horoscopes: json}); });
    }

    handleStarSign = (e) => {
        this.setState({sign: e.target.value})
    }

    handleHoroscopeDay = (e) => {
        this.setState({day: e.target.value})
    }

    render(){
        return (
        <div>
            <select className="ui compact menu" onChange={this.handleStarSign}>
                {this.state.allSigns.map((sign, i) => <option value={sign} key={i}>{sign}</option>)}
            </select>
            <select className="ui compact menu" onChange={this.handleHoroscopeDay}>
                {this.state.timeFrames.map((time, i) => <option value={time} key={i}>{time}</option>)}
            </select>
            <button className="ui secondary basic button" onClick={this.getHoroscope}>Get Horoscope!</button>
           <AffirmationCard horoscope={this.state.horoscopes} />
        </div>
        )
    }
}

export default HoroscopesContainer