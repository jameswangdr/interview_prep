import React, { Component } from 'react'
import './css.css'

class Css extends Component {
    state = {

    }



    render() {
        return (
            <>
                <h1>CSS Practice</h1>
                <div className="box-model"></div>

                <div className="outer">
                    <div className="inner">

                    </div>
                </div>
                <hr></hr>
                <div className='tri-left'></div>
                <div className='tri-right'></div>
                <div className='tri-bottom'></div>
                <hr></hr>

                <div className="tri"></div>

                <br></br>
                <div className="container">
                    <div className="square">
                        <div className="circle"></div>
                    </div>
                    <div className="square">
                        <div className="circle"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default Css;