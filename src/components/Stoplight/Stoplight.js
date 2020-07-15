import React, { Component } from 'react'
import './Stoplight.css'


class Stoplight extends Component {
    state = {
        red: true,
        yellow: false,
        green: false
    }

    changeColor = () => {
        if (this.state.red) {
            this.setState( { red: false } )
            this.setState( { green: true })
        }
        else if (this.state.yellow) {
            this.setState( { yellow: false })
            this.setState( { red: true })
        }
        else if (this.state.green) {
            this.setState( { green: false })
            this.setState( { yellow: true })
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.changeColor();
        }, 1000);
    }

    render() {
        let red = ''
        let yellow = ''
        let green = ''

        if (this.state.red) {
            red = 'red'
        }
        else if (this.state.yellow) {
            yellow = 'yellow'
        }
        else if (this.state.green) {
            green = 'green'
        }

        return (
            <>
                <div className='stoplight'>
                    <div className='light' id={ red }></div>
                    <div className='light' id={ yellow }></div>
                    <div className='light' id={ green }></div>
                </div>
            </>
        )
    }
}

export default Stoplight
