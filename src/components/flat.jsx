import React, { Component } from 'react';
import Data from '../../data/flats.js';

class Flat extends Component {
  handleClick = () => {
    if (this.props.method){ 
      this.props.method(this.props.flat)
    }
  }

  render() {
    return(
        <div className="card"
        onClick={this.handleClick}
        style={{backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`}}>
          <h3 className="name">{this.props.flat.name}</h3>
          <h4 className="price">£{this.props.flat.price}</h4>
        </div>
    )
  }
}

export default Flat;
