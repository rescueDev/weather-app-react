import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import { CardContent, Typography } from '@material-ui/core';
import 'fontsource-roboto';

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

export default function TodayWeather({data}) {
  const classes = useStyles();

  if(!data.weather){
      return 'Loading...'
  }

    return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item xs={12} md={8} lg={6}>
            <Card className={classes.root}>

            <CardContent className={classes.box} item xs>
                <Typography variant="h1" component="h2" className={classes.title}>{data.city}, {data.country}</Typography>
                <Typography className={classes.title}>{data.ts}</Typography>
                <Typography className={classes.title}>{Math.round(data.temp)} C</Typography>
                <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt=""/>
                <Typography className={classes.title}>{data.weather.description}</Typography>
            </CardContent>

            </Card>

        </Grid>
        
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
    );
}


