import { Typography } from '@mui/material'
import React from 'react'

function Heading({heading}) {
  return (
    <Typography variant="h5" className='text-bold'>{heading} Movies</Typography>
  )
}

export default Heading