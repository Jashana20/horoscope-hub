import React from 'react';
import './App.css';
import AffirmationContainer from './components/containers/AffirmationContainer'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Horoscope Hub<i className="moon outline icon"/></h1>
        <br />
        <AffirmationContainer />
      </div>
    )  
  }
}

export default App;
