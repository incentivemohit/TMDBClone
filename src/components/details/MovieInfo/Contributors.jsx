import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageComponent from '../../utility/ImageComponent'

export default function Contributors() {
  return (
    <>
    <Box className="flex gap-2">
      <Box className="w-12 h-12">
      <ImageComponent rounded={'rounded-full'} posterPath={"https://www.themoviedb.org/t/p/w138_and_h175_face/zDBEVA7Skrje3A8bmR2VOJRwkZc.jpg"}/>
      </Box>
      <Box >
        <Typography fontWeight={'bold'}>213</Typography>
        <Typography className='text-gray-500' fontSize={14}>Giger</Typography>
      </Box>
    </Box>
    </>
  )
}
