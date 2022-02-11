import React from 'react'

const URL = 'http://localhost:9000/api/result'

const initState = {
  x: 2,
  y: 2,
  steps: 0,
  email: '',
  gridLimit: false,
  alert: ''
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
      this.setState({...this.state,gridLimit:true,alert:"You can't go down"})
    }else{
      this.setState((state) => ({
        ...this.state,
        y: state.y + 1,
        steps: state.steps + 1,
        gridLimit: false,
        alert: ''
      }))
    }
  }

  upHandler = () => {
    if(this.state.y === 1){
      this.setState({...this.state,gridLimit:true,alert:"You can't go up"})
    }else{
      this.setState((state) => ({
        ...this.state,
        y: state.y - 1,
        steps: state.steps + 1,
        gridLimit: false,
        alert: ''
      }))
    }
  }
  
  leftHandler = () => {
    if(this.state.x === 1){
      this.setState({...this.state,gridLimit:true,alert:"You can't go left"})
    }else{
      this.setState((state) => ({
        ...this.state,
        x: state.x - 1,
        steps: state.steps + 1,
        gridLimit: false,
        alert: ''
      }))
    }
  }

  rightHandler = () => {
    if(this.state.x === 3){
      this.setState({...this.state,gridLimit:true,alert:"You can't go right"})
    }else{
      this.setState((state) => ({
        ...this.state,
        x: state.x + 1,
        steps: state.steps + 1,
        gridLimit:false,
        alert: ''
      }))
    }
  }

  emailHandler = (evt) => {
    this.setState({
      ...this.state,
      email: evt.target.value
    })
  }

  render() {

    const {x,y,steps} = this.state

    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({x},{y})</h3>
          <h3 id="steps">You moved {steps} times</h3>
        </div>
        <div id="grid">
          {x===1 &&y===1?<div className="square active">B</div>:<div className="square"></div>}
          {x===2 &&y===1?<div className="square active">B</div>:<div className="square"></div>}
          {x===3 &&y===1?<div className="square active">B</div>:<div className="square"></div>}
          {x===1 &&y===2?<div className="square active">B</div>:<div className="square"></div>}
          {x===2 &&y===2?<div className="square active">B</div>:<div className="square"></div>}
          {x===3 &&y===2?<div className="square active">B</div>:<div className="square"></div>}
          {x===1 &&y===3?<div className="square active">B</div>:<div className="square"></div>}
          {x===2 &&y===3?<div className="square active">B</div>:<div className="square"></div>}
          {x===3 &&y===3?<div className="square active">B</div>:<div className="square"></div>}
        </div>
        <div className="info">
          {this.state.gridLimit?<h3 id="alert">{this.state.alert}</h3>:<h3 id="alert"></h3>}
        </div>
        <div id="keypad">
          <button onClick={this.leftHandler} id="left">LEFT</button>
          <button onClick={this.upHandler} id="up">UP</button>
          <button onClick={this.rightHandler} id="right">RIGHT</button>
          <button onClick={this.downHandler} id="down">DOWN</button>
          <button onClick={this.resetHandler} id="reset">reset</button>
        </div>
        <form>
          <input onChange={this.emailHandler} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
