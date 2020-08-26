import React, { Component } from 'react'
import Q7 from './Q7.jpeg'

class Audi extends Component {
    render() {
        return (
            <div>
                <h1>Audi</h1>
                <img src={Q7} alt='Q7'></img>
                <p>Model: Q7</p>                
            </div>
        )
    }
}

export default Audi;