import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  

const TASK_STATUSES=['Unstarted','In Progress','Completed'];

const Task=props=>{
    const { classes } = props;
  function onStatusChange(e){
      props.onStatusChange(
       e.target.id,
       e.target.value
      )
  }
return(
    <div className='task'>
    <div className="task-header">
    <div>{props.task.title}</div>
    
    <select value={props.task.status}  id={props.task.id} onChange={(e)=>onStatusChange(e)}>
     {TASK_STATUSES.map(status=><option key={status} value={status}>{status}</option>)}
    </select>
    </div>
    <hr/>
    <div className="task-body">{props.task.description}</div>
    </div>
)

}
export default withStyles(styles)(Task)