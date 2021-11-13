import { Button, makeStyles } from '@material-ui/core'
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Divider, IconButton, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { blue } from '@mui/material/colors'
import React,{useState} from 'react'
import Popup from './Popup'

const userStyles = makeStyles({
  btn:{
   backgroundColor:"#ffffff",
   border:"1px solid gray",
   borderRadius:"50px",
   fontSize:"30px"   
  },
  add:{
    border:"1px solid gray",
    borderRadius:"50px",
    fontSize:"30px"  
  }
})

const Cards = ({note}) => { 
  const css = userStyles()

  const [click,setClick] = useState(false)
  // const [check,setCheck] = useState(false)
  return (
    <>
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
          <Avatar alt="pic" src="assets/9GAG.svg" />         
          }
          action={
            <IconButton onClick={()=>setClick(!click)}  >
             {click?
            
            <Checkbox 
             color="primary" 
             checked={true}
            //  aria-describedby={id} variant="contained" onClick={handleClick}
/>
 :<Popup
 css={css.btn}
 click={click}
 />
             }
             
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
       <CardContent>
          <Typography style={{fontSize:"10px"}} >
          INCLUDED FEATURES

          </Typography>
          <Typography style={{fontSize:"12px"}}>
          Download Options, Forgot Password, Comments +23 other features

          </Typography>
          
        </CardContent>  
        <Divider/>
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
      </Card>

    </div>
    </>
  )
}

export default Cards
