import React, { Component }from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    firstInput(val){
        this.setState({
            number1: val
        })
    }
    secondInput(val){
        this.setState({
            number2: val
        })
    }
    problemSolver(){
        let num1 = +this.state.number1
        let num2 = +this.state.number2
        let total = num1 + num2
        this.setState({
            sum: total
        })
    }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.firstInput(e.target.value)}></input>
                <input className="inputLine" onChange={e => this.secondInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.problemSolver()}>Add</button>
                <span className="resultsBox">Result: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum