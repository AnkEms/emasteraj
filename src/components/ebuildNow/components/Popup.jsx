import { Button, Checkbox, Popover, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import React, { useState } from 'react'

const Popup = ({css}) => {
  const [anchorEl,setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };


  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  console.log(open)

  const id = open ? 'simple-popover' : undefined; 
  // console.log(id)


  

  return (
    <div>
{/*       
      <Checkbox 
             color="primary" 
             checked={true}
             aria-describedby={id} variant="contained" onClick={handleClick}
             >
 </Checkbox>   */}
 <Button 
             aria-describedby={id} 
             css={css.btn}
             color="primary" 
             variant="contained"
              onClick={handleClick}
 
 ><Add/></Button>

 <Popover
    id={id}
   open={open}
   anchorEl={anchorEl}
   onClose={handleClose}
   anchorOrigin={{
     vertical: 'bottom',
     horizontal: 'left',
   }}
 >
 
   <Typography>pop up showed and its started working with all this things</Typography>
 </Popover>
    </div>
  )
}

export default Popup

// <Checkbox 
// color="primary" 
// className={css.add} 
// onClick = {()=>setCheck(!check)}
// checked={click}
// />