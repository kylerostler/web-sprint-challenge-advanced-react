import React from 'react'
import useMoveSquare from '../hooks/CustomHooks'

// need state to store coordinates of active square and steps

export default function AppFunctional(props) {

  const [resetHandler, downHandler, upHandler, rightHandler, leftHandler, state] = useMoveSquare();

  const {x,y,gridLimit,alert,steps} = state

  const emailHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      ...this.state,
      email: evt.target.value
    })
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({x}, {y})</h3>
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
      {gridLimit?<h3 id="message">{alert}</h3>:<h3 id="message"></h3>}
      </div>
      <div id="keypad">
        <button onClick={leftHandler} id="left">LEFT</button>
        <button onClick={upHandler}   id="up">UP</button>
        <button onClick={rightHandler} id="right">RIGHT</button>
        <button onClick={downHandler} id="down">DOWN</button>
        <button onClick={resetHandler} id="reset">reset</button>
      </div>
      <form>
        <input onChange={emailHandler} id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
