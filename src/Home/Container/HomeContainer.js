import React, { Component } from 'react';
import Home from '../Components/Home'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 0, // cents
      running: false,
      button_text: 'Start',
      time: 0
    }
    this.startStopCick = this.startStopCick.bind(this);
    this.startit = this.startit.bind(this);
    this.stopit = this.stopit.bind(this);
    this.saveMoney = this.saveMoney.bind(this);
  }

  startStopCick() {
    if (!this.state.running) {
      this.startit()
    } else {
      this.stopit()
    }
    this.setState({ running: !this.state.running })
  }

  startit() {
    this.setState({ button_text: 'Stop' })
    let interval = setInterval(() => {
      this.saveMoney()
    }, 1000) // 1 sec
    return interval
  }

  stopit() {
    this.setState({ time: this.startit() })

  }

  saveMoney() {
    this.setState({
      money: this.state.money + 1
    })// 1 cent
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div>
        <Home />
        <button onClick={this.startStopCick}>
          {this.state.button_text}
        </button>
        <div>Time: {this.time}</div>
      </div>
    );
  }
}

export default HomeContainer;