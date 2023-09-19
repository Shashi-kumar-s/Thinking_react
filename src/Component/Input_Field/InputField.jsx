import { TextField } from '@mui/material'
import React from 'react'

const InputField = (props) => {
    const{variant,label,onchange}=props
  return (
    <TextField  label={label} variant={variant} onChange={onchange} />
  )
}

export default InputField