import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Task from './Task'
const styles =theme=>( {
  card: {
    minWidth: 250
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 12
  },
  pos: {
    marginBottom: 12
  },
  root: {
    flexGrow: 1,
    margin:30
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
})

const status = ["Unstarted", "In Progress", "Completed"];

function TaskList(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div className={classes.root}>
     <Grid  container className={classes.root} spacing="30">
      { status.map((item,key) => (
        
         <Grid key ={item} item xs>
         <Grid container className={classes.demo} justify="center" spacing={Number*30}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {item}
            </Typography>
            <hr/>
            <Typography component="p">
            <Task  tasks={props.tasks} onEdit={props.onEdit} status={item}/>
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}
export default withStyles(styles)(TaskList);
