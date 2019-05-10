import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {createTask,editTask} from './actions/index'
 

import TaskPage from './components/TaskPage'
// const initialState={
//   count:0
// }
// function reducer(state=initialState,action){
//   switch(action.type){
//     case 'INCREMENT':
//     return {count:state.count+1}
  
//     case 'DECREMENT':
//   return {
//     count:state.count-1
//   }

//   default:
//   return state
// }
//   }

// const store=createStore(reducer)



 class App extends React.Component{

  onCreateTask=({title,description})=>{
    this.props.dispatch(createTask({title,description}))
    
  }

  onStatusChange=(id,status)=>{
    this.props.dispatch(editTask(id,{status}))
  }
  render(){
    
    return(
    
      <div className="main-content">
      <TaskPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} onStatusChange={this.onStatusChange}/></div>
      
    )
  }
}

function mapStateToProps(state){
  return {
    tasks:state.tasks
  }
}

export default connect(mapStateToProps)(App)