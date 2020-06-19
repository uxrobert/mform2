import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        const{firstname, lastname, age, hobbies, favorite_food, favorite_sport } = this.props

        return (
            <div>
            <h1>first Name</h1>
            firstname={firstname}
            <h1>Last Name</h1>
            lastname={lastname}
            <h1>Age</h1>
            age={age}
            <h1>Hobbies</h1>
            hobbies={hobbies}
            <h1>Favorite Foods</h1>
           favorite_food={favorite_food}

           <h1>Favorite Sports</h1>
           favorite_sport={favorite_sport}
           
            </div>
        )
    }
}


export default  Dashboard;