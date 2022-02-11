import { useState } from 'react'

const initState = {
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    gridLimit: false,
    alert: ''
  }


const useMoveSquare = () => {
    const [state, setState ] = useState(initState)

    const resetHandler = () => {
        setState(initState)
        document.getElementById("emailform").reset();
      }
    
    const downHandler = () => {
        if(state.y === 3){
          setState({...state,gridLimit:true,alert:"You can't go down", message: ''})
        }else{
          setState((state) => ({
            ...state,
            y: state.y + 1,
            steps: state.steps + 1,
            gridLimit: false,
            alert: '',
            submitted: false
          }))
        }
      }
    
    const upHandler = () => {
        if(state.y === 1){
          setState({...state,gridLimit:true,alert:"You can't go up", message: ''})
        }else{
          setState((state) => ({
            ...state,
            y: state.y - 1,
            steps: state.steps + 1,
            gridLimit: false,
            alert: '',
            submitted: false
          }))
        }
      }
      
    const leftHandler = () => {
        if(state.x === 1){
          setState({...state,gridLimit:true,alert:"You can't go left", message: ''})
        }else{
          setState((state) => ({
            ...state,
            x: state.x - 1,
            steps: state.steps + 1,
            gridLimit: false,
            alert: '',
            submitted: false
          }))
        }
      }
    
    const rightHandler = () => {
        if(state.x === 3){
          setState({...state,gridLimit:true,alert:"You can't go right", message: ''})
        }else{
          setState((state) => ({
            ...state,
            x: state.x + 1,
            steps: state.steps + 1,
            gridLimit:false,
            alert: '',
            submitted: false
          }))
        }
      }
    

      return [resetHandler, downHandler, upHandler, rightHandler, leftHandler, state, setState]
}

export default useMoveSquare;
