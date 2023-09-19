import { TextField } from '@mui/material'
import React from 'react'

const InputField = (props) => {
    const{variant,label,onchange,className,value}=props
  return (
    <TextField className={className} value={value}  label={label} variant={variant} onChange={onchange} />
  )
}

export default InputField