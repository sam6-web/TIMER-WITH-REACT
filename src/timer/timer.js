import React, { Component } from 'react'


class Timer extends Component{
    constructor(){
        super()
        this.state = {
            t : 0
        }
    }
    changeMessage =(event)=>{
        this.setState(
            {
                t : event.target.value*3600
                
                
            
            }
        )
        
        

    }
    render(){
        return(
        <form >
            <div className="h">
                <h1>conversion heure en seconde</h1>
                <label> inserez en heure </label>
                <input type="number" value={this.state.t} onChange= {this.changeMessage} ></input>
                <h1> resultat : {this.state.t}  </h1>

            </div>
            <button onClick= {this.changeMessage} >mise à zero</button>

        </form>
            
        )
    }
   
}
export default Timer
