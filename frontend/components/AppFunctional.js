import React from 'react'
import useMoveSquare from '../hooks/CustomHooks'
import axios from 'axios';

// need state to store coordinates of active square and steps

const URL = 'http://localhost:9000/api/result'

export default function AppFunctional(props) {

  const [resetHandler, downHandler, upHandler, rightHandler, leftHandler, state, setState] = useMoveSquare();

  const {x,y,steps,email,gridLimit,alert,message,submitted} = state

  const emailHandler = (evt) => {
    setState({
      ...state,
      email: evt.target.value
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    const payloadToSend = { x: x, y: y, steps: steps, email: email}
    axios.post(URL, payloadToSend)
    .then(res => {
      console.log(res.data)
      setState({...state, message: res.data.message, submitted: true, alert: ''})
    }).catch(err => {
      console.error(err.response.data.message)
      setState({...state, message: err.response.data.message, submitted: true, alert: ''})
    })
    setState({...state, input: evt.target.reset()})
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({x}, {y})</h3>
        {steps===1?<h3 id="steps">You moved {steps} time</h3>:<h3 id="steps">You moved {steps} times</h3>}
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
        {gridLimit?<h3 id="message">{alert}</h3>:<h3 id="message"></h3>}
        {submitted?<h3 id="message">{message}</h3>:<h3 id="message"></h3>}
      </div>
      <div id="keypad">
        <button onClick={leftHandler} id="left">LEFT</button>
        <button onClick={upHandler}   id="up">UP</button>
        <button onClick={rightHandler} id="right">RIGHT</button>
        <button onClick={downHandler} id="down">DOWN</button>
        <button onClick={resetHandler} id="reset">reset</button>
      </div>
      <form id="emailform" onSubmit={onSubmit}>
        <input onChange={emailHandler} id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
