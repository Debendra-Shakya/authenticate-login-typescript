import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import styled from "@emotion/styled";

const profile = () => {
  const name=localStorage.getItem('name')

  const handlesubmit = (e: any) => {
   localStorage.clear();
      // Navigate('/login')
   
  };
  const RootStyle = styled("div")({
    background: "rgb(249, 250, 251)",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    
  });
  return (
    <div>
      <RootStyle>
      <Typography variant='h2' >
    welcome to profile page {name}

   </Typography>
   <Typography >
   <LoadingButton
     
              size="large"
              type="submit"
              variant="contained"
              onSubmit={handlesubmit}
              
            >
             logout
            </LoadingButton>

   </Typography>

      </RootStyle>
  
    </div>
  )
}

export default profile