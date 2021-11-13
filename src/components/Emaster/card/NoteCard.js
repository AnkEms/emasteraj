import {
   Avatar,
   Button, 
   Card,
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    CssBaseline, 
    Divider, 
    IconButton, 
    Typography 
  } from '@material-ui/core'
import { Add, } from '@material-ui/icons';
import React from 'react'



const NoteCard = ({note}) => {
  
  return (
    <div>
     
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        avatar={
          <Avatar alt="pic" src="assets/9GAG.svg" />         
}
        action={
          <IconButton >
            <Add/>
          </IconButton>
        }
        title={note.title}
        subheader={note.content}
        
        />
        <CardMedia
        component="img"
        height="194"
        image="assets/6.png"
        alt="pic"
        />
       <CssBaseline/> 
        <CardContent>
          <Typography style={{fontSize:"10px"}} >
          INCLUDED FEATURES

          </Typography>
          <Typography style={{fontSize:"12px"}}>
          Download Options, Forgot Password, Comments +23 other features

          </Typography>
          
        </CardContent>
        <CardActions>
          <Typography>
            From
            <br/>

          ₹ 548k platform per 
          </Typography>
          
          <IconButton style={{marginLeft:"100px"}}>
            <Button variant="outlined">View Details</Button>
          </IconButton>

        </CardActions>
        <Divider/>
      </Card>
       
    </div>
  )
} 

export default NoteCard
