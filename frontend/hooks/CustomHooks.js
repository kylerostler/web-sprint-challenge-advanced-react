import { useState } from 'react'

const initState = {
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    tooFar: false,
    message: ''
  }


const useMoveSquare = () => {
    const [state, setState ] = useState(initState)

    const resetHandler = () => {
        this.setState(initState)
      }
    
    const downHandler = () => {
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
    
    const upHandler = () => {
        if(this.state.y === 1){
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
      
    const leftHandler = () => {
        if(this.state.x === 1){
          this.setState({...this.state,tooFar:true,message:"You can't go left"})
        }else{
          this.setState((state) => ({
            ...this.state,
            x: state.x - 1,
            steps: state.steps + 1,
            tooFar: false,
            message: ''
          }))
        }
      }
    
    const rightHandler = () => {
        if(this.state.x === 3){
          this.setState({...this.state,tooFar:true,message:"You can't go right"})
        }else{
          this.setState((state) => ({
            ...this.state,
            x: state.x + 1,
            steps: state.steps + 1,
            tooFar:false,
            message: ''
          }))
        }
      }
    

      return [resetHandler, downHandler, upHandler, rightHandler, leftHandler, state]
}

export default useMoveSquare;
