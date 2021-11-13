import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";  
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Form from "./Form";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";


const userStyles = makeStyles (()=>({
  appBar:{
    boxShadow:'none',
    backgroundColor:"white"
  },
  title: {
    flexGrow: 2,
    alignItems: 'center',
    display: 'flex',
    color:"black",
    textDecoration: 'none',
    fontSize:'2rem',
    marginLeft:"160px"
  },
  navBar:{
    flexGrow: 1,
    alignItems: 'center',   
    textDecoration: 'none',
    color:"black",
    marginLeft: "15px",
  },

  button:{
    margin:"10px",
    color: "black",
    textDecoration:'none',
    padding:'20px'
  },
  arrow:{
  verticalAlign:'middle'
  }

}))

// import { Box, Button, Divider, List, ListItem,ListItemIcon,ListItemText,Drawer } from '@material-ui/core';
// import { InboxIcon,MailIcon } from '@material-ui/icons';

// import * as React from 'react';


// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }




const Nav=()=> {
  const css = userStyles()

    return(
        <>
        <AppBar className={css.appBar} >

      <Toolbar >
      <Typography className={css.title} >
          <Link to='/' variant='h2' className={css.title}>EMaster.ai </Link>
   
       </Typography>
       <Box style={{marginRight:"120px"}}>
       <Link to='/Solutions'  
       className={css.navBar} >Solutions <ArrowDropDownIcon className={css.arrow} /> </Link>
       <Link to='/WhyChooseUs'  className={css.navBar} >Why Choose Us <ArrowDropDownIcon className={css.arrow} /></Link>
       <Link to='/Resources' className={css.navBar} >Resources <ArrowDropDownIcon className={css.arrow} /></Link>
       <Button  
       variant="contained" 
       size="large"  
       className={css.button}
      
        >
         <Link to='/FreeDemo'> </Link>Get Free Demo 
         </Button>
        {/* <Form/> */}
       
    <Link to="/BuildNow" style={{textDecoration:"none"}}>    
    <Button  
       variant="contained" 
        size="large" 
        className={css.button} 
        style={{backgroundColor:"#00d659"}}
        
        >
    Build Now

        </Button>
    </Link>

</Box>
      </Toolbar>    
       </AppBar>
   
        </>
    )
}
        


export default Nav;