import React, { Component } from 'react';
import Home from '../Components/Home'

class HomeContainer extends Component {
  state = {
    money: 0, // cents
    running: false,
    button_text: 'Start',
    time: 0
  }

  startStopCick() {

  }

  start() {
    if (this.state.running) {
      this.setState({
        button_text: 'Stop'
      })
      time: setInterval(() => {
        this.saveMoney()
      }, 1000) // 1 sec
    }
    // this.state.running = !this.state.running
  }

  stop() {
    this.setState({ time: })
  }

  saveMoney() {
    this.setState({
      money: this.state.money += 1 // 1 cent
    })
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div>
        <Home />
        <button onClick={this.startStopCick()}>
          {this.state.button_text}
        </button>
        <div>Time: {this.time}</div>
      </div>
    );
  }
}

export default HomeContainer;