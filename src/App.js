import './App.css';
import React from 'react'

import { makeStyles } from "@material-ui/core/styles";  
import { Container, Divider } from '@material-ui/core';
import BuildNow from './navigation/BuildNow';





const userStyles = makeStyles ((theme)=>({
  toolbar:theme.mixins.toolbar
}))



const App=()=> {
  const css = userStyles()
    return(
   <>
 
     <BuildNow/>
   </>
    );
}
    




export default App;
