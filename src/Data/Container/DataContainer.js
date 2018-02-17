import React, { Component } from 'react';
import Data from '../Components/Data'
import axios from 'axios';

class DataContainer extends Component {
  render() {
    axios.get('https://ironhack-hackaton.herokuapp.com/saving-entry', {headers: {
      'authorization': 'basic 9d32dcd0-13fd',
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/xml',
    }})
    .then((response) => console.log(response))
  .catch(function (error) {
    console.log(error);
  });

    return (
      <div>
        <Data />
      </div>
    );
  }
}

export default DataContainer;
