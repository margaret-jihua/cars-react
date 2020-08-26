import React, {Component} from 'react'
import GLE from './GLE-580.jpeg'

class Benz extends Component {
    render () {
        return(
            <div>
                <h1>Mercedes Benz</h1>
                <img src={GLE} alt='GLE-580'></img>
                <p>GLE 580</p>
            </div>
        )
    }
}

export default Benz