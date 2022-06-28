import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

const profile = () => {
  const name=localStorage.getItem('name')
  // alert(`${name}, welcome to profile page`)
  return (
    <div>
   <Typography variant='h2' align='center'>
    welcome to profile page {name}

   </Typography>
   <Typography align='center'>

   <LoadingButton
     
              size="large"
              type="submit"
              variant="contained"
              
              
            >
             logout
            </LoadingButton>
   </Typography>

    </div>
  )
}

export default profile