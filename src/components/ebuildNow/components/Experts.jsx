import { Avatar, Button, Fade, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import experts from "../../data/experts";

const userStyle = makeStyles({
  button:{
    marginRight:"5px",
    padding:"2px",
      
  },  
  img:{
    borderRadius:"50px",
    width:'20px',
    height:"20px",
    marginRight:"5px"
  },
})

export default function Experts() {
  const user = false
  const classes = userStyle()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined" 
        className={classes.button}

      >
    <Avatar
       alt="image" 
       src="assets/1.png"
       className={classes.img}/>  Talk to our expert 
      </Button>
      <Menu
       elevation={0}
           id="basic-menu"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
           MenuListProps={{
             'aria-labelledby': 'basic-button',
           }}
           anchorOrigin={{
            vertical: 'bottom',
      horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
      
          }}
          style={{marginTop:"50px"}}
      >
        {experts.map((expert)=>(
        <MenuItem onClick={handleClose}> {expert.value}</MenuItem>


        ))}
        

      </Menu>
    </div>
  );
}