import React, {Component } from 'react'
import modelX from './model-x.jpeg'

class Tesla extends Component {
    render() {
        return (
            <div>
                <h1>Tesla</h1>
                <img src={modelX} alt='Model X'></img>
                <p>Model: Model X</p>
                
            </div>
        )
    }
}

export default Tesla;