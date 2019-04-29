import React, { Component }from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['Devan', 'Lauren', 'Kaden', 'Hallie', 'Rylee', 'Brooke', 'Clint', 'Aleece'],
            userInput: '',
            filteredArray: []
        }

    }
    changeHandler(val){
        this.setState({
            userInput: val
        })
    }
    problemSolver(){
        let unfiltered = this.state.unFilteredArray;
        let filtered = [];
        for (let i = 0; i < unfiltered.length; i++){
            if (unfiltered[i].includes(this.state.userInput)) filtered.push(unfiltered[i])
        }
        this.setState({
            filteredArray: filtered
        })
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unFilteredArray: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={e => this.changeHandler(e.target.value)}></input>

                <button className="confirmationButton" onClick={() => this.problemSolver()}>Filter</button>
                <span className="resultsBox filterStringRB">filteredArray: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString