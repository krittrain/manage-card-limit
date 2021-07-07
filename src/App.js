import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 2),
    width: 300
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));

function valuetext(value) {
  return `${value}K`;
}

export default function AutoGridNoWrap() {
  const classes = useStyles();
  const [value, setValue] = React.useState(
    [0, 50000],
    [0, 1000000],
    [0, 20000000]
  );
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Typography noWrap>Please set the limits here</Typography>
      <Paper className={classes.paper}>
        <Grid container justify-content = "flex-start" spacing={2} direction="column">
          <Grid item xs>
            <Typography noWrap>ATM Withdrwal</Typography>
            <Grid>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
             
              <TextareaAutosize aria-label="empty textarea" placeholder="Empty" className = "textarea"  value = {value}/>
            </Grid>
          </Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} direction="column">
          <Grid item xs>
            <Typography noWrap>Contactless Limit</Typography>
            <Grid>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
               <TextareaAutosize aria-label="empty textarea" placeholder="Empty" className = "textarea" value = {value} />
            </Grid>
          </Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} direction="column">
          <Grid item xs>
            <Typography noWrap>Ecommerce Limit</Typography>
            <Grid>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            <TextareaAutosize aria-label="empty textarea" placeholder="Empty" className = "textarea" />
          </Grid>
          </Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} direction="column">
          <Grid item xs>
            <Typography noWrap>POS limit</Typography>
            <Grid>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
          
            <TextareaAutosize aria-label="empty textarea" placeholder="Empty" className = "textarea" />
            </Grid>
          </Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Grid>
        </Grid>
      </Paper>
      <Button variant="contained" color="secondary">
        Submit
      </Button>
    </div>
  );
}



