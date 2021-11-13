import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, makeStyles, Typography } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { HighlightOffOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import CustomForm from './CustomForm'




const userStyle=makeStyles({
  cross:{
    marginLeft:"30vw",
    fontSize:"40px",
    "&:hover":{
      color:red[700],
    cursor:"pointer",

    }
  },
   
})

const CustomDialog = ({open,handleClose}) => {
  const [click ,setClick] = useState(true)
  const classes = userStyle()




  return (
    <div>
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
      style={{height:"900px",width:"600px",display:"flex"}}
       />
            </div>
            <div>
            <DialogTitle style={{marginBottom:"80px"}}>
            <Typography variant="h3" style={{marginTop:"3px"}}> Custom
            <HighlightOffOutlined
            className={classes.cross}
             onClick={handleClose}
             />

            
             </Typography>
              
              </DialogTitle>
          <DialogContent >
            <Typography>Create custom template</Typography>

          
            <DialogContentText>
              <Typography>The price and delivery time of custom features may change once we understand exactly what you need.</Typography>
          
            </DialogContentText>
            <CustomForm handleClose={handleClose} />
          
          </DialogContent>
          <DialogActions>
         
          </DialogActions>
            </div>
          </div>
       
         
        </Dialog>
      
    </div>
  )
}

export default CustomDialog
