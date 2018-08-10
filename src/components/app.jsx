import React, { Component } from 'react';
import Flat from './flat.jsx';
import Data from '../../data/flats.js';
import FlatList from './flatlist'
import SimpleMap from './map'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFlat: Data[0]
    }
  }

  method = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    return(
        <div className="main-container">
          <div className="cards">
            <div className="container-fluid">
              <div className="row">
                <FlatList className="flatlist" flats={Data} method={this.method}/>
              </div>
            </div>
          </div>
          <div className="map">
            <SimpleMap flat={this.state.selectedFlat} />
          </div>
        </div>
    )
  }
}

export default App;
