import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import { CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles ({
   root: {

    
  },
 
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
  box:{textAlign:'center'}
});


export default function TodaySpecs({data}) {
    console.log(data);
      const classes = useStyles();
      if (!data) {
          return 'Loading...'
      }
    return (
        <Grid item xs={12} sm={4} md={6} lg={6}>


        <Card  className={classes.root}>
            <CardContent className={classes.box} item xs>
                <Typography variant="h1" component="h2" className={classes.title}>Velocita vento: {Math.round(data.windSpeed)} km/h</Typography>
                <Typography className={classes.title}>Qualita aria: {data.airQuality} %</Typography>
                <Typography className={classes.title}>Pressione: {Math.round(data.pressure)} mb</Typography>
                <Typography className={classes.title}>Precipitazioni :{data.precip} mm/h</Typography>
            </CardContent>
        </Card>
        </Grid>
    )
}


