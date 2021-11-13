import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import React,{useEffect, useRef, useState} from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DropDownCard from './DropDownCard';

const sampleData = new Array(7).fill("item name");


const TopBar = ({drawerWidth,css}) => {
 
  return (
    <div>
       <AppBar
    className={css.appBar}
    style={{height:"4.5vw"}}
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
       <Toolbar>
      
        <Typography noWrap 
        style={{marginLeft:"250px",fontSize:'12px'}}
        >
          1.Choose a base
          2.Refine features
          3.Plan delivery
        </Typography>
       <Box style={{marginLeft:"50vw"}}>
       <Button 
       variant="outlined"
    className={css.button}
       >
       <Avatar alt="image" 
       src="assets/1.png" 
       className={css.img}/>  Talk to our expert
         </Button>
        

        <Button 
        variant="outlined" 
        className={css.button}
        
        >INR <ArrowDropDownIcon/>
        
        </Button>


        <Button 
        variant="outlined"
    className={css.button}
        
        >Sign In</Button>

       </Box>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default TopBar
