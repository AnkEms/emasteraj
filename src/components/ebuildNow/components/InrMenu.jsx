import { Button, Fade, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { useState } from "react";
import currencies from "../../data/currency";


export default function InrMenu({classes}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currency,setCurrency] = useState("INR")


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
      {currency} <ArrowDropDown/>
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
          onClick={handleClose}
      >
        {currencies.map((currency)=>(
        <MenuItem 
        label={currency.label}
       onClick={()=>setCurrency(currency.value)}> {currency.value}</MenuItem>


        ))}
        

      </Menu>
    </div>
  );
}