import React, { Component }from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    problemSolver(string){
        let pali = 'false';
        let reversed = ''
        for (let i = string.length-1; i >= 0; i--){
            reversed += string[i]
        }
        if (reversed === string) pali = 'true'

        this.setState({
            palindrome: pali
        })
    }
    changeHandler(val){
        this.setState({
            userInput: val
        })
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.changeHandler(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.problemSolver(this.state.userInput)}>Check for Palindrome</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome