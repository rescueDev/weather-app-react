import React from 'react'
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles ({
  root:{
    margin: '10px 0'
  },
  input:{
    width:'20%',
    paddingLeft: 8
  },
  
})

function InputSearch(props) {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <Input className={classes.input} value={props.value} onChange={props.change} onKeyPress={props.enter} color='primary' placeholder={'Cerca'}></Input>
        </div>
    )
}

export default InputSearch
