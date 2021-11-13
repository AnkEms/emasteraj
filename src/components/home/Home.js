import React from 'react'
import Builder from '../../navigation/Builder'
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Solutions from '../../navigation/Solutions';
import WhyChooseUs from '../../navigation/WhyChooseUs';
import Resources from '../../navigation/Resources';
import FreeDemo from '../../navigation/FreeDemo';
import BuildNow from '../../navigation/BuildNow';
import Easy from './Easy';

const userStyles = makeStyles((theme) => ({
  root:{
      width:"100vw",
      height:"100vh",
      // backgroundColor:theme.palette.grey[300],
      padding:theme.spacing(5),
  },
  toolbar:theme.mixins.toolbar
}));

function Home() {
  const classes = userStyles();

  return (
    <div>    
        <Container className={classes.root}>  
          <Switch>
            <Route exact path ="/" component={Builder}/>
            <Route  path ="/Solutions" component={Solutions}/>
            <Route  path ="/WhyChooseUs" component={WhyChooseUs}/>
            <Route  path ="/Resources" component={Resources}/>
            <Route  path ="/FreeDemo" component={FreeDemo}/>
            <Route  path ="/BuildNow" component={BuildNow}  />
          </Switch>
         </Container>       
         {/* <Easy style={{display:'flex',flexDirection:'row'}}/> */}
   
    </div>
  )
}

export default Home
