import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/result'

const initState = {
  x: 2,
  y: 2,
  steps: 0,
  email: '',
  gridLimit: false,
  alert: '',
  message: '',
  submitted: false
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
      this.setState({...this.state,gridLimit:true,alert:"You can't go down", message: ''})
    }else{
      this.setState((state) => ({
        ...this.state,
        y: state.y + 1,
        steps: state.steps + 1,
        gridLimit: false,
        alert: '',
        submitted: false
      }))
    }
  }

  upHandler = () => {
    if(this.state.y === 1){
      this.setState({...this.state,gridLimit:true,alert:"You can't go up", message: ''})
    }else{
      this.setState((state) => ({
        ...this.state,
        y: state.y - 1,
        steps: state.steps + 1,
        gridLimit: false,
        alert: '',
        submitted: false
      }))
    }
  }
  
  leftHandler = () => {
    if(this.state.x === 1){
      this.setState({...this.state,gridLimit:true,alert:"You can't go left", message: ''})
    }else{
      this.setState((state) => ({
        ...this.state,
        x: state.x - 1,
        steps: state.steps + 1,
        gridLimit: false,
        alert: '',
        submitted: false
      }))
    }
  }

  rightHandler = () => {
    if(this.state.x === 3){
      this.setState({...this.state,gridLimit:true,alert:"You can't go right", message: ''})
    }else{
      this.setState((state) => ({
        ...this.state,
        x: state.x + 1,
        steps: state.steps + 1,
        gridLimit:false,
        alert: '',
        submitted: false
      }))
    }
  }

  emailHandler = (evt) => {
    this.setState({
      ...this.state,
      email: evt.target.value
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    const payloadToSend = { x: this.state.x, y: this.state.y, steps: this.state.steps, email: this.state.email}
    axios.post(URL, payloadToSend)
    .then(res => {
      console.log(res.data)
      this.setState({...this.state, message: res.data.message, submitted: true, alert: ''})
    }).catch(err => {
      console.error(err.response.data.message)
      this.setState({...this.state, message: err.response.data.message, submitted: true, alert: ''})
    })
    this.setState({...this.state, input: evt.target.reset()})
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
          {this.state.gridLimit?<h3 id="message">{this.state.alert}</h3>:<h3 id="message"></h3>}
          {this.state.submitted?<h3 id="message">{this.state.message}</h3>:<h3 id="message"></h3>}
        </div>
        <div id="keypad">
          <button onClick={this.leftHandler} id="left">LEFT</button>
          <button onClick={this.upHandler} id="up">UP</button>
          <button onClick={this.rightHandler} id="right">RIGHT</button>
          <button onClick={this.downHandler} id="down">DOWN</button>
          <button onClick={this.resetHandler} id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.emailHandler} id="email" type="email" placeholder="type email"></input>
          <input  id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
