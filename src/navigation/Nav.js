import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";
import style from '../navigation/Nav.module.css';
import { BrowserRouter,Router,Switch } from 'react-router-dom';
import{Container,Paper,Box,Typography,Button, AppBar,Toolbar}from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";  
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const userStyles = makeStyles ((theme)=>({
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




const Nav=()=> {
  const css = userStyles()
    
    return(
        <>
             <AppBar py={30} className={css.appBar} >

      <Toolbar >
      <Typography className={css.title} >
          <Link to='/' variant='h2' className={css.title}>EMaster.ai </Link>
   
       </Typography>
       <Box style={{marginRight:"120px"}}>
       <Link to='/Solutions'  className={css.navBar} >Solutions <ArrowDropDownIcon className={css.arrow} /> </Link>
       <Link to='/WhyChooseUs'  className={css.navBar} >Why Choose Us <ArrowDropDownIcon className={css.arrow} /></Link>
       <Link to='/Resources' className={css.navBar} >Resources <ArrowDropDownIcon className={css.arrow} /></Link>
       <Button  variant="contained" size="large"  className={css.button} ><Link to='/FreeDemo'> </Link>Get Free Demo </Button>
       <Button  variant="contained"  size="large" className={css.button} style={{backgroundColor:"#00d659"}}>
    <Link to="/BuildNow">
    
    </Link>
    Build Now
</Button>

</Box>
      </Toolbar>
      
      
      
       </AppBar>
       
       {/* <div>
    
    <Button color="primy">material UI</Button>
<Link to="/home">Home-page</Link>
        <Link to="/about">About-page</Link>
</div> */}
        </>
    )
}
        


export default Nav;