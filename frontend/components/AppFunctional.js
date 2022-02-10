import React from 'react'

// need state to store coordinates of active square and steps

export default function AppFunctional(props) {
  return (
    <div id="wrapper" className={props.className}>
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
      {/** the active square has a B and a classname of "active" */}
        <button id="left">LEFT</button> {/** x - 1, y stays */}
        <button id="up">UP</button> {/** y - 1, x stays */}
        <button id="right">RIGHT</button> {/** x + 1, y stays */}
        <button id="down">DOWN</button> {/** y + 1, x stays */}
        <button id="reset">reset</button> {/** resets square to middle 2,2 and resets count */}
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input> {/** accepts an email and spits an error if invalid */}
        <input id="submit" type="submit"></input> {/** submits email that was input */}
        {/** success and error messages come from api */}
      </form>
    </div>
  )
}
