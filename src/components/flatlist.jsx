import React, { Component } from 'react';
import Flat from './flat'


const FlatList = ({ flats, method }) => {
  return (
    <div>
      {flats.map((flat) => <div className="col-sm-6"  key={Math.random()} >
        <Flat flat={flat} method={method} />
        </div>
         )}
    </div>
  )
}

export default FlatList;

