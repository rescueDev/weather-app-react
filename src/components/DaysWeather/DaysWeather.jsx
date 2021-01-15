import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { CardContent, Typography } from '@material-ui/core';

const StyledDiv = styled.div`
  margin: 10px;
  
  width:100%;


  @media all (max-width:320px) {
    width: 100% ;
    background: purple;
  } 
    @media all (max-width:768px) {
    width: calc(100% / 6) ;
  } 
`

const useStyles = makeStyles ({
   root: {
        backgroundColor:'rgba(255,255,255,0.5);'    
  },
  icon:{
    width:'60px',
    height:'60px',
  },
  center:{
    textAlign:'center'
  },
  title: {
    fontSize: 16,
    padding: 8
  },
  pos: {
    marginBottom: 12,
  },
  box:{textAlign:'center'}
});

export default function DaysWeather(props) {
    const classes = useStyles();
    //console.log(props);
    return (
      <StyledDiv>

        <Card  className={classes.root}>
            
                <Typography  variant="h1" component="h2" className={classes.title}>{props.ts} </Typography>
                <img className={classes.icon} src={`https://www.weatherbit.io/static/img/icons/${props.weather.icon}.png`} alt=""/>
                <Typography className={classes.title}>{Math.round(props.max)} C</Typography>
                <Typography className={classes.title}>{Math.round(props.min)} C</Typography>
                <Typography className={classes.title}> {Math.round(props.precip)} mm/h</Typography>
            
        </Card>

      </StyledDiv>
    )
}


