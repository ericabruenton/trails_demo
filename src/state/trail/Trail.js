import React, { Component } from 'react';

class Trail extends Component {
    render() {
      return (
        <div className="trail">
          <h3>{this.props.name}</h3>
        </div>
      );
    }
  }
  
  export default Trail;