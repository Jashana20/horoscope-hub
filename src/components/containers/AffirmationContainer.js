import React from 'react'

class AffirmationContainer extends React.Component{

    state = {
        affirmation: []
    }

    componentDidMount(){
        fetch("https://healthruwords.p.rapidapi.com/v1/quotes", {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-host": "healthruwords.p.rapidapi.com",
		    "x-rapidapi-key": "c3f5aaa52cmsh7c164162eddb056p121118jsn507985c3776f"
        }}
    )
    .then(res => res.json())
    .then(json => this.setState({affirmation: json}))
    }

    render(){
        return <h2>universal affirmations</h2>
    }
}

export default AffirmationContainer