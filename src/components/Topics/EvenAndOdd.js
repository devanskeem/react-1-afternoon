import React, { Component }from 'react'

export default class EvenAndOdd extends Component{
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: []
        }
    }
    problemSolver(userInput){
        let string = userInput.split(',');
        let odds = [];
        let evens = [];
        string.forEach(number => {
            if (number % 2 === 0) evens.push(number)
            else odds.push(number)
        })
        this.setState({
            oddArray: odds,
            evenArray: evens
        })
    }
    handleChange(val){
        this.setState({
            userInput: val
        })
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>

                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={() => {this.problemSolver(this.state.userInput)}}>Seperate</button>

                <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>

                <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}