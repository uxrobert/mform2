import React, { Component } from 'react'

// hobbies={hobbies} favorite_food={favorite_food} favorite_sport={favorite_sport}
class Step2 extends Component {
    //step_previous
    step2previous = (event) => {
        event.preventDefault()
        this.props.previous()
    }

    step2next = (event) => {
        event.preventDefault()
        this.props.next()
    }


    render() {
        const{ hobbies, favorite_food, favorite_sport, handleChange, next, previous } = this.props
        return (
            <div>
            <form>
                <label htmlFor="hobbies">Hobbies:</label>
                <input  type="text" value={hobbies}   id="hobbies" onChange={handleChange('hobbies')}/> 

                <label htmlFor="favorite_food,">Favorite Food,:</label>
                <input  type="text" value={favorite_food}   id="favorite_food" onChange={handleChange('favorite_food')}/> 

                <label htmlFor="favorite_sport">Favorite Sport:</label>
                <input  type="text" value={favorite_sport}   id="favorite_sport" onChange={handleChange('favorite_sport')}/> 
                <button onClick={this.step2next}>Next</button>
                <button onClick={this.step2previous}>Previous</button>


            </form>
            </div>
        )
    }
}


export default  Step2;