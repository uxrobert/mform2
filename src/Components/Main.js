import React, { Component } from 'react';
import Step1 from '../Components/Step1';
import Step2 from '../Components/Step2';
import Dashboard from '../Components/Dashboard';

class Main extends Component {

state = {
    step: 1, 
    firstname: "", 
    lastname: "",
    age: "",
    hobbies: "",
    favorite_food: "",
    favorite_sport: ""
}

 // move forward
 next = () => {
     const {step} = this.state
     this.setState({step: step + 1})
 }


 // previous to go back
 previous = () => {
    const {step} = this.state
    this.setState({step: step - 1})
}

// handlechange 
handleChange = input => e => {
    this.setState({[input]: e.target.value});
}



// handlechange = input => e => {
//     this.setState({[input]: e.target.value});
// }


// pass the data into the components

// step: 1, 
//     firstname: "", 
//     lastname: "",
//     age: "",
//     hobbies: "",
//     favorite_food: "",
//     favorite_sport: "


passDate = () => {
    const{ firstname, lastname, age,  hobbies, favorite_food ,favorite_sport, step } = this.state
   // Step1
    if(step === 1){
        
        return ( 
            <Step1  firstname={firstname} lastname={lastname} age={age} next={this.next} handleChange={this.handleChange}  />
       )
    }


// Step2
    if(step === 2){
        return ( <Step2  hobbies={hobbies} favorite_food={favorite_food} favorite_sport={favorite_sport} handleChange={this.handleChange}
         next={this.next} previous={this.previous}/>)
    }

//Step2
    if(step === 3){
        return ( <Dashboard
     firstname={firstname} lastname={lastname} age={age} hobbies={hobbies} favorite_food={favorite_food} favorite_sport={favorite_sport}/>)
    }

}

    render() {
        return (
        <div>
            {this.passDate()}  
         </div>
        )
    }
}



export default  Main;