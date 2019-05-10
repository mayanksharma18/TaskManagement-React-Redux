import React from 'react';

import {connect} from 'react-redux'

class Counter extends React.Component{
 increment=()=>{
     console.log(this.props)
  this.props.dispatch({type:'INCREMENT'})
 }
 decrement=()=>{
    this.props.dispatch({type:'DECREMENT'})

 }
   
    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <span>{this.props.count}</span>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

}

function mapStateToProps(store){
    return {
        count:store.count
    }
}

export default connect(mapStateToProps)(Counter);