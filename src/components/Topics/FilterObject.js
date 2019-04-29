import React, { Component }from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],

              userInput: '',
              filteredEmployees: [],
        
        }
    }
    problemSolver(property){
        let employees = this.state.employees
        let filtered = employees.filter(element => element[property] !== undefined)
        this.setState({
            filteredEmployees: filtered
        })
    }
    changeHandler(val){
        this.setState({
            userInput: val
        })
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>

                <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) }</span>

                <input className="inputLine" onChange={e => this.changeHandler(e.target.value)}></input>

                <button className="confirmationButton" onClick={() => this.problemSolver(this.state.userInput)}>Filter</button>

                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredEmployees, null, '\n') }</span>
            </div>
        )
    }
}

export default FilterObject