import React, { Component } from 'react';

//import postsMockup from 'api/data-mockup';
//import "./Homepage.scss"

export class Homepage extends Component {

    render() {
        return (
            <div>
                Homepage
            </div>
        )
    }
}

export default Homepage;

// PUT data to firebase

// componentDidMount(){
//     fetch('https://react-network-requests-default-rtdb.firebaseio.com/posts.json',{
//         method:"PUT",
//         body:JSON.stringify(postsMockup.map(el => ( {...el, id: el.id-1 } ) ) )
//     })
//     .then(res => res.json())
// }
