import React, { Component } from 'react'



class Step1 extends Component {
    
    //stepnext
    step1next = (event) => {
        event.preventDefault()
        this.props.next()
    }


    
   

    render() {
        const {firstname, lastname, age, handleChange } = this.props;
    


        return (
            <div>
                <form>
                    <label htmlFor="firstname">First Name:</label>
                    <input  type="text" value={firstname}   id="firstname" onChange={handleChange('firstname')}/> 

                    <label htmlFor="lasttname">Last Name:</label>
                    <input  type="text" value={lastname}   id="lastname" onChange={handleChange('lastname')}/> 

                    <label htmlFor="age">Age:</label>
                    <input  type="text" value={age}   id="age" onChange={handleChange('age')}/> 
                    <button onClick={this.step1next}>Next</button>


                </form>
            </div>
        )
       
    } // end of render 
    
    } // end of class



export default  Step1;