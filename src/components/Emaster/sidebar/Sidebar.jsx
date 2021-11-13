

     
import React from 'react'
import Builder from "../../../navigation/Builder";
import NoteCard from "../card/NoteCard";
import { Note } from "./db";
import { Add,  HelpOutlineSharp, Search, SwapVertOutlined } from "@material-ui/icons";
import TopBar from "./TopBar";
import DrawerSlider from "./DrawerSlider";
import { Box, Button, ButtonGroup, Container, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import GridCard from './GridCard';


 const drawerWidth = 340

 const userStyle = makeStyles((theme)=>({
  appBar:{
    boxShadow:'none',
    backgroundColor:"white",
    color:'black',
  },
  title: {
    flexGrow: 3,
    alignItems: 'center',
    display: 'flex',
    color:"black",
    textDecoration: 'none',
    fontSize:'2rem',
    marginLeft:"160px",
    lineHeight:'2.5'
  },
  img:{
    borderRadius:"50px",
    width:'20px',
    height:"20px",
    marginRight:"5px"
  },
  button:{
    marginRight:"5px",
    padding:"2px"
  },
  toolbar:theme.mixins.toolbar

}))


 function Sidebar() {
   const css = userStyle()
   return (
<>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    {/* topbar of Buildernow */}
   <TopBar css={css} drawerWidth={drawerWidth}/>
    <div className={css.toolbar}></div>
 
    {/* Drawer slider */}
  <DrawerSlider css={css} drawerWidth={drawerWidth} />

  {/* buttons in main page */}
    </Box>
    <Box style={{marginBottom:"45px"}}>
      <Typography variant="h4">
      Choose a base    <HelpOutlineSharp style={{cursor:"pointer"}}/>
      <ButtonGroup  variant="outlined"  style={{marginLeft:"30vw"}}>
        <Button variant="outlined" style={{marginRight:"5px"}}><Search/></Button>
        <Button><Add/>custom template</Button>

        <Button><SwapVertOutlined/></Button>

      </ButtonGroup>

      </Typography>

    </Box>
    <ButtonGroup  variant="outlined" style={{marginBottom:"15px"}}>
        <Button variant="outlined" >All</Button>
        <Button>Pro</Button>

        <Button>Store</Button>

      </ButtonGroup>



    

    {/* grid for the builder now  */}
    <GridCard/>
   
     </>
   )
 }

 export default Sidebar

