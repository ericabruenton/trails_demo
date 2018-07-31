import React, { Component } from 'react';
import Trail from './trail/Trail';

class State extends Component {
    render() {
        let coolDisplay;
        if(this.props.data.cool){
            coolDisplay = <p>SO COOL</p>
        }
        let trails = this.props.data.trails.map((trail, index)=>{
            return <Trail name={trail} />
        })
      return (
        <div className="state">
          <h1>{this.props.data.name}</h1>
          <p>{this.props.data.population}</p>
          {coolDisplay}
          {trails}
        </div>
      );
    }
  }
  
  export default State;