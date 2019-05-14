import React from "react";
import TaskPage from "./components/TaskPage";

import { connect } from "react-redux";
import {createTask,editTask} from './actions/index'

class App extends React.Component {
  onCreate=({title,description})=>{
    
    this.props.dispatch(createTask({title,description}))
  }
  onEdit=(e)=>{
   let id = e.target.id
    let status = e.target.value
    console.log(id,status)

   this.props.dispatch(editTask({id,status}))
  }
  render() {
    // console.log(this.props.tasks)
    return (
      <div>
        <h1>Hello</h1>
        <TaskPage onCreate={this.onCreate} onEdit={this.onEdit}tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);
