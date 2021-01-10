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
        <CardContent   justify="center"
                alignItems="center"  direction="row" container className={classes.root} spacing={2}>

            <Card item xs={2}>
               
                <Typography>ciao</Typography>
               
            </Card>

        </CardContent>
    )
}


