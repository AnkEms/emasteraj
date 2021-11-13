import {  Box, 
  Container, 
  CssBaseline,
   List,
    ListItem,
     ListItemIcon,
      ListItemText, 
      Typography } from '@material-ui/core'
import { Facebook, Instagram,  LinkedIn,  Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Link } from 'react-router-dom';
import { Company, EmasterAi, Products, ReachUs, Resources } from './data';

const userStyles = makeStyles((theme)=>({
  Margin:{
    // margin:"10px 80px 100px 0px"
    marginTop:"10px",
    marginBottom:'50px'

  },
  container:{
    display:"flex" ,
    flexDirection:"row",
    justifyContent:"center",
    alignItem:"center"
       
  },
  icon:{
    marginRight:"10px",
    color:"black"
  },
  link:{
    textDecoration: 'none',
    color:"black"
  }
}))


function Footer() { 
  const css = userStyles()
  return (
    <>
    
    
    <Container className={css.container}>
      <Box className={css.Margin}>
        <List>
          {
            EmasterAi.map((item,id)=>(
              <ListItem
              key={id}
              >
                <ListItemIcon  className={css.icon}>{item.icon}</ListItemIcon>
                <ListItemText  primary={item.text}/>
              </ListItem>
            ))
          }
        </List>
      </Box>
      
    {/* 2nd list products */}
    <Box className={css.Margin}>
        <List>
          {
            Products.map((item,id)=>(
              <ListItem
              key={id}
              >
                <ListItemIcon  className={css.icon}>{item.icon}</ListItemIcon>
                <ListItemText  primary={item.text}/>
              </ListItem>
            ))
          }
        </List>
      </Box>
  
   {/* 3rd list Resources */}
   <Box className={css.Margin}>
        <List>
          {
            Resources.map((item,id)=>(
              <ListItem
              key={id}
              >
                <ListItemIcon  className={css.icon}>{item.icon}</ListItemIcon>
                <ListItemText  primary={item.text}/>
              </ListItem>
            ))
          }
        </List>
      </Box>
  
{/* 4thd list Company*/}
<Box className={css.Margin}>
        <List>
          {
            Company.map((item,id)=>(
              <ListItem
              key={id}
              >
                <ListItemIcon  className={css.icon}>{item.icon}</ListItemIcon>
                <ListItemText  primary={item.text}/>
              </ListItem>
            ))
          }
        </List>
      </Box>

{/* 5th Reach us */}
<Box className={css.Margin}>
        <List>
          {
          ReachUs.map((item,id)=>(
              <ListItem
              key={id}
              >
                <ListItemIcon  className={css.icon}>{item.icon}</ListItemIcon>
                <ListItemText  primary={item.text}/>
              </ListItem>
            ))
          }
        </List>
</Box>
</Container>

<CssBaseline />
<Container style={{display:'flex'}}>

<Box sx={{ bgcolor: '#f8f9fa', height: '10vh', width:'100vw' }} >
<Typography variant="h6" style={{justifyContent:'center',marginLeft:'120px',alignItems:'center',marginTop:'10px'}}>
  19-A Electronic Complex MPSEDC IT Park, Indore, Madhya Pradesh 452010.Copyright © 2021 <Link className={css.link}>
  Emaster.ai
  </Link>
  </Typography>
  
  

</Box>
<Box style={{display:'flex' ,justifyContent:'center' ,}}>
<img src="assets/1.png" alt="1.png" width="90px" height="90px"/>
<img src="assets/2.png" alt="1.png" width="80px" height="90px" style={{marginLeft:'20px'}}/>
<img src="assets/4.png" alt="1.png" width="180px" height="90px" style={{marginLeft:'20px'}}/>
</Box>
  
</Container>

</>
  )
}

export default Footer
