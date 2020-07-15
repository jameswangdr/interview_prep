import React, { Component } from 'react'

class Like extends Component {
    state = {
        liked: false,
        likes: 100,
    }
    
    handleClick = () => {
        this.setState({
            liked: !this.state.liked
        });
        if (this.state.liked) {
            this.state.likes--
        }
        else this.state.likes++
    }
    
    render() {
        let likes = this.state.likes
        let buttonClassName = this.state.liked ? 'like-button liked' : 'like-button'
        
        return (
            <>
                <div>
                    <button onClick={this.handleClick} className={buttonClassName}>Like | <span className='likes-counter'>{likes}</span>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}

export default Like

// class Like extends Component {
//     state = {
//         liked: false,
//     }

//     handleClick = () => {
//         console.log("like")

//         this.setState({
//           liked: !this.state.liked
//         });
//     }

//     render() {
//         let name = "Like";
//         if (this.state.liked === true) {
//             name = "Unlike";
//         }

//         return (
//             <div>
//                 <h1>Like Button</h1>
//                 <button onClick={this.handleClick} type='button'>{name}</button>
//             </div>
//         )
//     }
// }