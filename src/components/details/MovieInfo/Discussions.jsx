import { Box, Typography } from '@mui/material'
import React from 'react'

function Discussions() {
  return (
    <Box className="my-2 flex items-center justify-between border border-1 p-2 rounded-lg">
    <Box className="flex items-center gap-2 ">
      <img
        src="https://www.themoviedb.org/t/p/w138_and_h175_face/k1ALgZkOApYt7PIUBkUitmknXQC.jpg"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <Typography>Seriously? 84% before it's even released?</Typography>
    </Box>
    <Box className="flex items-center justify-between w-1/2 ">
      <Typography fontSize={13}>open</Typography>
      <Typography fontSize={13}>4</Typography>
      <Box>
        <Typography variant="caption">Nov 07, 2023 at 8:13 PM</Typography>
        <Typography className="text-end">by therapist</Typography>
      </Box>
    </Box>
  </Box>
  )
}

export default Discussions