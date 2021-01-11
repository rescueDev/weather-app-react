import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import { CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles ({
   root: {
    margin: '40px auto', 
    minWidth: '15%'
  },
 
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  box:{textAlign:'center'}
});

export default function DaysWeather(props) {
    const classes = useStyles();
    console.log(props);
    return (
        <Card  item xs={12} sm={12} md={3} className={classes.root}>
            <CardContent >
                <Typography  variant="h1" component="h2" className={classes.title}>{props.ts} </Typography>
                <img src={`https://www.weatherbit.io/static/img/icons/${props.weather.icon}.png`} alt=""/>
                <Typography className={classes.title}>{Math.round(props.max)} C</Typography>
                <Typography className={classes.title}>{Math.round(props.min)} C</Typography>
                <Typography className={classes.title}> {props.precip} mm/h</Typography>
            </CardContent>
        </Card>
    )
}


