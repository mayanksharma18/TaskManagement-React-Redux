import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import { stat } from 'fs';
import Counter from './counter'
import { Provider } from 'react-redux';


const initialState={
  count:0
}
function reducer(state=initialState,action){
  switch(action.type){
    case 'INCREMENT':
    return {count:state.count+1}
  
    case 'DECREMENT':
  return {
    count:state.count-1
  }

  default:
  return state
}
  }

const store=createStore(reducer)

 class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <Counter/>
      </Provider>
      
    )
  }
}


export default App;