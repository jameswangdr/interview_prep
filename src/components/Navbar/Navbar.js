import React, { Component } from 'react'

import './Navbar.css'

class Navbar extends Component {
    state = {
        working: true
    }


    render() {
        // const addTo = function(passed) {
        //     const add = function(inner) {
        //         return passed + inner
        //     }
        //     return add
        // }

        // const addThree = new addTo(3);
        // const addFour = new addTo(4);
        
        // console.dir(addThree(1));
        // console.dir(addFour(1));
        // console.dir((addTo))




        const addTo = function(passed) {
            const add = function(inner) {
                return passed + inner
            }
            return add
        }

        console.dir(addTo(3))

        const addThree = new addTo(3)
        const addFour = new addTo(4)

        console.log(addThree(1))
        console.log(addFour(1))
        console.dir(addFour)
        return (
            <>
                <div className="nav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Navbar
