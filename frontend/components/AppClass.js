import React from 'react'

const URL = 'http://localhost:9000/api/result'
const initState = {
  x: 2,
  y: 2,
  steps: 0,
  email: '',
  tooFar: false,
  message: ''
}

export default class AppClass extends React.Component {
  constructor(){
    super()
    this.state = initState
  }
  
  resetHandler = () => {
    this.setState(initState)
  }

  downHandler = () => {
    if(this.state.y === 3){
      this.setState({...this.state,tooFar:true,message:"You can't go down"})
    }else{
      this.setState((state) => ({
        ...this.state,
        y: state.y + 1,
        steps: state.steps + 1,
        tooFar: false,
        message: ''
      }))
    }
  }

  upHandler = () => {
    if(this.state.y===1){
      this.setState({...this.state,tooFar:true,message:"You can't go up"})
    }else{
      this.setState((state) => ({
        ...this.state,
        y: state.y - 1,
        steps: state.steps + 1,
        tooFar: false,
        message: ''
      }))
    }
  }
  


  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3> {/** shows current coordinates */}
          <h3 id="steps">You moved 0 times</h3> {/** counter ++ that tracks how many times the active coord have moved*/}
        </div>
        <div id="grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad"> {/** each button needs functionality of changing active square changes coordinates*/}
          <button id="left">LEFT</button>{/** x - 1, y stays */}
          <button id="up">UP</button>{/** y - 1, x stays */}
          <button id="right">RIGHT</button>{/** x + 1, y stays */}
          <button id="down">DOWN</button>{/** y + 1, x stays */}
          <button id="reset">reset</button> {/** resets square to middle 2,2 and resets count */}
        </div>
        <form> {/** accepts an email and spits an error if invalid */}
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input> {/** submits email that was input */}
        </form>
      </div>
    )
  }
}
