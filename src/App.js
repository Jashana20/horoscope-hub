import React from 'react';
import './App.css';
import AffirmationContainer from './components/containers/AffirmationContainer'

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Horoscope Hub</h1>
        <AffirmationContainer />
      </div>
    )  
  }
}

export default App;
