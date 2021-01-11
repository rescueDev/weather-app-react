import React from 'react'
import Input from '@material-ui/core/Input';

function InputSearch(props) {
    return (
        <div>
          <Input value={props.value} onChange={props.change} onKeyPress={props.enter} color='secondary' placeholder={'Cerca'}></Input>
        </div>
    )
}

export default InputSearch
