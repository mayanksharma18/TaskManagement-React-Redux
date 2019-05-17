import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

 function Task(props) {
  const { status, tasks ,onEdit} = props;
  console.log(tasks)
  return (
    <div>
      <List>
        {tasks!=null &&tasks.map(
          i =>
            i.status == status && (
              <ListItem button>
                <ListItemText
                  inset
                  primary={
                    <Typography
                      variant="h4"
                      align="left"
                      component="h2"
                      color="textPrimary"
                    >
                      {i.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="h5"
                      component="div"
                      color="textPrimary"
                    >
                      {i.description}
                    </Typography>
                  }
                />
                <select value={i.status} id={i.id} onChange={(e)=>onEdit(e)}>
             {       TASK_STATUSES.map(status=><option key={status} value={status}>{status}</option>)}
              </select>
              </ListItem>
            )
        )}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks
  }
}


export default connect(mapStateToProps)(Task)
