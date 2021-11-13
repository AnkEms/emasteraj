import { Box, Button, Container, Link, TextField, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from "@material-ui/core/styles";  

const userStyles = makeStyles (()=>({

  button:{
    marginLeft:"5px",
    color: "black",
    textDecoration:'none',
    padding:'16px',
    backgroundColor:"#00d659"
  },
}))

export default function Easy() {
  const css = userStyles()
  return (
    <>
   
       <Container style={{paddingTop:'50px' ,display:'flex'}} >

   <Box 
    sx={{
      width: 600,
      height:450,
      }}
   
   style={{marginRight:'12vw'}}>
      <Typography variant="h4" component="h2">
     <b> We make software so easy,<br/>
      everyone can do it.   
      </b>   
      </Typography>
      <br/>
      <Typography variant="h5">
      You pay 70% less and get what you need 6x faster.     
      </Typography>
      <br/>

      <Typography variant="h5">
        Email
      </Typography>


      <TextField
       helperText=" "
       label="Enter Your Email Address"
       variant="outlined"
       autoComplete="off"
       style={{width:"20vw"}}
/>
<Button  
       variant="contained" 
        size="small" 
        className={css.button}
        >
    <Link to="/BuildNow">    
    </Link>
    Book A Free Demo
</Button>      
    </Box>
    
    <Box
    sx={{
      width: 300,
      height:300
      }}
    >
    <img src="assets/5.png" alt="5.png" width="180%" height="130%"/>

    </Box>

    </Container>
<Box style={{marginLeft:"30vw",marginBottom:"2vw"}}>
<img src="assets/pepsi.svg" alt="pepsi.png" style={{marginRight:"2vw"}}/>
<img src="assets/macro.svg" alt="macro.png"  style={{marginRight:"2vw"}}/>
<img src="assets/bbc.svg" alt="bbc.png"  style={{marginRight:"2vw"}}/>
<img src="assets/unite.svg" alt="unite.png"  style={{marginRight:"2vw"}}/>
<img src="assets/nbc.svg" alt="nbc.png"  style={{marginRight:"2vw"}}/>
<img src="assets/fujitsu.svg" alt="fujitsu.png"  style={{marginRight:"2vw"}}/>



</Box>
    </>

    
  )
}
