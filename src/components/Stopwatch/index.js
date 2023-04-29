// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-app-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="header-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-img"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="buttons-container">
              <button
                className="start-btn button"
                type="button"
                onClick={this.onClickStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="stop-btn button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="reset-btn button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
