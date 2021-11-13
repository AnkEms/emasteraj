import React from "react";
import Sidebar from "../components/Emaster/sidebar/Sidebar";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Builder from "./Builder";
import Layout from "../components/ebuildNow/components/Layout";
import SignUpForm from "../components/ebuildNow/pages/register/SignUpForm";






const BuildNow=()=>{
    return(
      <Switch>
<Route path="/signup" component={SignUpForm}></Route>
   <Layout/>    
   </Switch>
    )
  }





  export  default BuildNow;