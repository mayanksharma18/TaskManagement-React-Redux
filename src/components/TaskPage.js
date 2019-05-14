import React from "react";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Paper
} from "@material-ui/core/";
import withStyles from "@material-ui/core/styles/withStyles";
import TaskList from "./TaskList";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class TaskPage extends React.Component {
  state = {
    title: "",
    description: "",
    addToggle: false
  };
  handleChange = e => {
    let key = e.target.id;
    this.setState({
      [key]: e.target.value
    });
  };
  showForm = () =>
    this.setState({
      addToggle: !this.state.addToggle
    });

  resetForm = () => {
    this.setState({
      title: "",
      description: "",
      addToggle: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate({
      title: this.state.title,
      description: this.state.description
    });
    this.resetForm();
  };
  

  render() {
  
    const { classes } = this.props;
    return (
      <div>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Button onClick={this.showForm} variant="contained" color="primary">
              <Typography component="h1" variant="h5">
                +Add Task
              </Typography>
            </Button>
            {this.state.addToggle && (
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Title</InputLabel>
                  <Input
                    onChange={this.handleChange}
                    id="title"
                    name="title"
                    autoComplete="title"
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Description</InputLabel>
                  <Input
                    onChange={this.handleChange}
                    name="description"
                    type="text"
                    id="description"
                    autoComplete="description"
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Save
                </Button>
              </form>
            )}
          </Paper>
        </main>
        <div>
          <TaskList onEdit={this.props.onEdit} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TaskPage);
