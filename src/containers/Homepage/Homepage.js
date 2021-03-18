import React, { Component } from 'react';
import {connect} from 'react-redux';

//import postsMockup from 'api/data-mockup';
//import "./Homepage.scss"

export class Homepage extends Component {

    render() {
        return (
            <div>
                <button onClick = {this.props.incrementCount}>Increment</button>
                <span>{this.props.count}</span>
                <button onClick = {this.props.decrementCount}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        count:state.count
    }
}

const mapDispatchToProps = {
    incrementCount:()=>({type:'INCREMENT_COUNT'}),
    decrementCount:()=>({type:'DECREMENT_COUNT'})
}

export default connect (mapStateToProps,mapDispatchToProps)(Homepage);

// PUT data to firebase

// componentDidMount(){
//     fetch('https://react-network-requests-default-rtdb.firebaseio.com/posts.json',{
//         method:"PUT",
//         body:JSON.stringify(postsMockup.map(el => ( {...el, id: el.id-1 } ) ) )
//     })
//     .then(res => res.json())
// }
