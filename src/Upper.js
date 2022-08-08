import { Button, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ResponsiveAppBar from './Navbar'
import './App.css';

const Upper = () => {
  return (
    <header className="App-header">
 
        <ResponsiveAppBar />
        <Box sx={{ flexGrow: 0,position:"absolute",bottom:"20px" }}>
            <Tooltip title="Get updates">
            <Button sx={{backgroundColor:"#02122B",color:"white",fontSize:"1.2vw",borderRadius:"30px",padding:".5vw 2.5vw"}} variant="contained">Receive email updates</Button>
            </Tooltip>
           
          </Box>
   
    </header>
  )
}

export default Upper