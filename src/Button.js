import React from 'react'
import './Button.css'

export default class Button extends React.Component {
    render() {
        return (
            <button 
            id='button' 
            className={this.props.className} 
            onClick={() => { this.props.buttonPressed(this.props.text) } }
            >
                {this.props.text}
            </button>
        )
    }
}