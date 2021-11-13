import React,{useState} from 'react'
import { Button, FormControl, InputLabel, makeStyles, Menu, MenuItem, Select, TextField } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, ArrowDropDown, SubjectOutlined } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'
import { menuItems } from '../../data/list'
import Main from '../pages/Main'
import SideDrawer from './SideDrawer'
import FormDialog from '../pages/register/FormDialog'
import { Divider } from '@mui/material'
import InrMenu from './InrMenu'
import Experts from './Experts'
import Popup from './Popup'

const drawerWidth = 340

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    content: {
      flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2)
    },
    button:{
      marginRight:"5px",
      padding:"2px"
    },  
    img:{
      borderRadius:"50px",
      width:'20px',
      height:"20px",
      marginRight:"5px"
    },
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
 


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="default"
      >
        <Toolbar>
          <Typography className={classes.content}>
            1.Choose a base
            2.Refine features
            3.Plan Delivery
          </Typography>
         
{/* app bar buttons */}
        <Experts/>       
        <InrMenu  classes={classes} />
        


        <Button 
        variant="outlined"
        className={classes.button}
      onClick={handleClickOpen}   
        >sign in  
       </Button>

       <FormDialog 
        handleClose={handleClose}
        open={open}
       />


        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <SideDrawer classes={classes}/>
     
      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
        <Main 
       
       />

      </div>
    </div>
  )
}