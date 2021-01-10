import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import { CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles ({
   root: {
    minWidth: 275,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
  box:{textAlign:'center'}
});

export default function DaysWeather() {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paper}>xs</Paper>
            </Grid>
      </Grid>
    )
}


