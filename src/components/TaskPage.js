import React,{Component} from 'react';
import TaskList from './TaskList'
import { stat } from 'fs';



const TASK_STATUSES=['Unstarted','In Progress','Completed'];

class TasksPage extends Component{

    state={
        title:"",
        description:"",
        showNewForm:false
    }
    handleChange=(event)=>{
        let key=event.target.id
        this.setState({
       [key]:event.target.value })
    }
    toggleForm = () =>{
        
       this.setState({
           showNewForm:!this.state.showNewForm
       })
    }
    resetForm(){
        this.setState({
            title:"",
            description:"",
            showNewForm:false
        })
    }
    onCreate=(e)=>{
     e.preventDefault();
     this.props.onCreateTask(
         {
             title:this.state.title,
             description:this.state.description
         }
     ) ;   
     this.resetForm() 
    }

  renderTaskLists(){
   const {tasks}=this.props;
   console.log(tasks)
   return TASK_STATUSES.map(status=>{
       const statusTasks=tasks.filter(task=>task.status===status);
       return <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={this.props.onStatusChange}  />
   })
  }

  render(){
      return(
          <div className="task-list">
          <div className='task-like-header'>
          <button onClick={this.toggleForm} className="button button-default">
          +New Task
          </button>
          </div>
          <div>
           {this.state.showNewForm&&(
              <form onSubmit={this.onCreate}>
              <input onChange={this.handleChange} id="title"className="full-width-input" type="text" placeholder="title" />
              <input onChange={this.handleChange} id="description" className="full-widht-input" type="text" placeholder="description"/>
              <button className="button"type="submit">Save</button>
              </form> 
           )}   
          </div>
          <div className="task-lists">
          {this.renderTaskLists()}
          </div>
          
          </div>
      )
  }

}

export default TasksPage;