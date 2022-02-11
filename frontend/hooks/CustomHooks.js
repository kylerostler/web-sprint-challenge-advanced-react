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
      }
    
    const downHandler = () => {
        if(state.y === 3){
          setState({...state,gridLimit:true,alert:"You can't go down"})
        }else{
          setState((state) => ({
            ...state,
            y: state.y + 1,
            steps: state.steps + 1,
            gridLimit: false,
            alert: ''
          }))
        }
      }
    
    const upHandler = () => {
        if(state.y === 1){
          setState({...state,gridLimit:true,alert:"You can't go up"})
        }else{
          setState((state) => ({
            ...state,
            y: state.y - 1,
            steps: state.steps + 1,
            gridLimit: false,
            alert: ''
          }))
        }
      }
      
    const leftHandler = () => {
        if(state.x === 1){
          setState({...state,gridLimit:true,alert:"You can't go left"})
        }else{
          setState((state) => ({
            ...state,
            x: state.x - 1,
            steps: state.steps + 1,
            gridLimit: false,
            alert: ''
          }))
        }
      }
    
    const rightHandler = () => {
        if(state.x === 3){
          setState({...state,gridLimit:true,alert:"You can't go right"})
        }else{
          setState((state) => ({
            ...state,
            x: state.x + 1,
            steps: state.steps + 1,
            gridLimit:false,
            alert: ''
          }))
        }
      }
    

      return [resetHandler, downHandler, upHandler, rightHandler, leftHandler, state]
}

export default useMoveSquare;
