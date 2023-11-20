import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="para">Count is {displayText}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase by Random Number between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
