import React, { Component } from 'react';
import './App.css';
import State from './state/State';
let states = [];
states.push({
  "name": "colorado",
  "cool":true,
  "population":"too many",
  "trails": [
    "hellroar",
    'angel\'s landing',
    'trail of beers'
  ]
})    
states.push({
  "name": "illinois",
  "cool":false,
  "population":"too many",
  "trails": [
    "flatlands"
  ]
})    
states.push({
  "name": "kansas",
  "cool":false,
  "population":"like five or something",
  "trails": [
    "the highway"
  ]
})
class App extends Component {
  render() {
    let statesStuff = states.map((state, index)=>{
      return <State data={state} key={index} />
    })
    return (
      <div className="App">
        <h1>HOWDY PARD'NER</h1>
        {statesStuff}
      </div>
    );
  }
}

export default App;
