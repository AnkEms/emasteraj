import React,{useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonBase, ButtonGroup, Divider, Grid, Typography } from "@mui/material";
import { Box, makeStyles, Paper } from "@material-ui/core";
import { HighlightOffOutlined, HighlightOffTwoTone } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import { Link, useLocation } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "../signin/SignInForm";

const userStyle=makeStyles({
  cross:{
    marginLeft:"30vw",
    fontSize:"40px",
    "&:hover":{
      color:red[700],
    cursor:"pointer",

    }
  },
   cross1:{
     marginLeft:"30vw",
    fontSize:"32px",
    "&:hover":{
      color:red[700],
    cursor:"pointer",

    }
  }
})

export default function FormDialog({handleClose,open}) {
  const classes = userStyle()
  const [click ,setClick] = useState(true)

  
 
  

  return (
    <Box flexgrow={1}>
    
      <Grid 
      sx={{maxWidth:800}}
       container 
       spacing={2}
       columns={16}
       >
      
       {click? 
       <Dialog 
        open={open}
         onClose={handleClose}
         maxWidth="xl"
         >
          <div 
       style={{display:"flex"}}
          
          >
            <div>
            <img alt="complex" src="/assets/newsignuppopup.png" 
      style={{height:"650px",width:"500px",display:"flex"}}
       />
            </div>
            <div>
            <DialogTitle style={{marginBottom:"80px"}}>
            <Typography variant="h3" style={{marginTop:"3px"}}> Sign In  
            <HighlightOffOutlined
            className={classes.cross}
             onClick={handleClose}
             />

            
             </Typography>
              
              </DialogTitle>
          <DialogContent >
          <Divider style={{marginBottom:"40px"}}>Sign in with email</Divider>

          <div style={{marginLeft:"24px",marginBottom:"40px",marginTop:"50px"}}>
         <Button variant="outlined" style={{marginRight:"10px"}} ><img alt="google" src="/assets/googlelogin.svg"/></Button>
          <Button variant="outlined" style={{marginRight:"10px"}}><img alt="google" src="/assets/linkedinIcon.svg"/></Button>
          <Button variant="outlined" style={{marginRight:"10px"}}><img alt="google" src="/assets/facebook.svg"/></Button>
          </div>

            <DialogContentText>
          <Divider style={{marginBottom:"30px"}}>Sign in with email</Divider>
          
            </DialogContentText>
            <SignInForm handleClose={handleClose} />
          
          </DialogContent>
          <DialogActions>
         <div style={{marginRight:"25vw",display:"flex"}}>

          <Typography style={{marginLeft:"30px",marginTop:"10px"}} >
        Don't have an account?       
      </Typography>
            <Button style={{marginTop:"3px"}} onClick={()=>{setClick(!click)}}> signup  </Button>
            </div>
          </DialogActions>
            </div>
          </div>
       
         
        </Dialog>:
        <Dialog 
        open={open}
         onClose={handleClose}
         maxWidth="xl"
         >
          <div 
       style={{display:"flex"}}
          
          >
            <div>
            <img alt="complex" src="/assets/newsignuppopup.png" 
      style={{height:"950px",width:"600px",display:"flex"}}
       />
            </div>
            <div>
            <DialogTitle style={{marginBottom:"80px"}}>
            <Typography variant="h3" style={{marginTop:"3px"}}> Sign up
            <HighlightOffOutlined
            className={classes.cross1}
             onClick={handleClose}
             />

            
             </Typography>
              
              </DialogTitle>
          <DialogContent >
          <Divider style={{marginBottom:"40px"}}>Sign up using</Divider>

          <div style={{marginLeft:"24px",marginBottom:"40px",marginTop:"50px"}}>
         <Button variant="outlined" style={{marginRight:"10px"}} ><img alt="google" src="/assets/googlelogin.svg"/></Button>
          <Button variant="outlined" style={{marginRight:"10px"}}><img alt="google" src="/assets/linkedinIcon.svg"/></Button>
          <Button variant="outlined" style={{marginRight:"10px"}}><img alt="google" src="/assets/facebook.svg"/></Button>
          </div>

            <DialogContentText>
          <Divider style={{marginBottom:"30px"}}>Sign in with email</Divider>
          
            </DialogContentText>
            <SignUpForm />
          
          </DialogContent>
          <DialogActions>
         <div style={{marginRight:"25vw",display:"flex"}}>


          <Typography style={{marginLeft:"30px",marginTop:"10px"}} >
    Already have an account? 
      
      </Typography>

          <Button style={{marginTop:"2px"}} onClick={()=>{setClick(!click)}}> signIn </Button>

         </div>

          </DialogActions>
            </div>
          </div>
       
         
        </Dialog>}
      </Grid>
    </Box>
  );
}
