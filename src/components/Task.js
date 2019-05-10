import React  from 'react';

const TASK_STATUSES=['Unstarted','In Progress','Completed'];

const Task=props=>{
  const  onStatusChange=(e)=> {
      console.log(props)
        this.props.onStatusChange(props.tasks.id,e.target.value)
     }
return(
    <div className='task'>
    <div className="task-header">
    <div>{props.task.title}</div>
    
    <select value={props.task.status} onChange={onStatusChange}>
     {TASK_STATUSES.map(status=><option key={status} value={status}>{status}</option>)}
    </select>
    </div>
    <hr/>
    <div className="task-body">{props.task.description}</div>
    </div>
)

}
export default Task