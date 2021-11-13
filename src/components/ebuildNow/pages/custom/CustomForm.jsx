import React,{useState} from 'react'
import {  Button, Typography,  MenuItem, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, CssBaseline, Divider } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Box } from '@mui/material'
import category from '../../../data/category'

const CustomForm = ({handleClose}) => {
  const [template, setTemplate] = useState("")
  const [link, setLink] = useState("")
  const [select, setSelect] = useState("")
  // console.log(select)
  // const [data,setData] = useState("")
  // console.log(data)



console.log(template,link,select)

  const [state, setState] = useState({
    web: true,
    macOS: false,
    windows: false,
    android:false,
    ios:false,
    watchOs:false,
    mobileSite:false
  });

  const handleSelect = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };
  const { web, macOS, windows,android,ios,watchOs,mobileSite } = state;
  console.log(web,macOS)



  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const handleSubmit =(e)=>{
    e.preventDefault()   
  }

  return(
    <form 
    noValidate
     autoComplete="off"
      onSubmit={handleSubmit}>

     <Typography>Template name</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Enter"
        type="text"
        fullWidth
        required
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>setTemplate(e.target.value)}
      />
    
     <Typography style={{marginRight:"100px"}}>Links to similar templates (min 1, max 3)</Typography>
<TextField
  select
  label="Select"
  value={select}
  onChange={handleChange}
 variant="outlined"
 fullWidth
>
{category.map((option,key) => (
            <MenuItem 
            key={key}
            value={option.text}
            // onChange={()=>setData(option.text)}
            onchange={handleChange}
            >
            {option.text }
            </MenuItem>
          ))}
</TextField>
<Typography style={{marginRight:"100px"}}>Links to similar templates (min 1, max 3)</Typography>
<TextField
 autoFocus
 margin="dense"
 id="name"
 label="www.teplaterefrence.com"
 fullWidth
 required

 variant="outlined"
onChange={(e)=>setLink(e.target.value)}
/>
<Box style={{display:"flex",flexDirection:"column"}}>
<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Desktop</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
              color="primary" 
              checked={web}
              onChange={handleSelect}
              value={web}
              name="web" />
            }
            label="web"
          />

          <FormControlLabel
            control={
              <Checkbox color="primary" checked={macOS} onChange={handleSelect} name="macOS" />
            }
            label="macOS"
          />
          <FormControlLabel
            control={
              <Checkbox
              color="primary"
                checked={windows}
                onChange={handleSelect}
                name="windows"
              />
            }
            label="Windows"
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Mobile</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox color="primary" checked={android} onChange={handleSelect} name="android" />
            }
            label="Android"
          />
          <FormControlLabel
            control={
              <Checkbox color="primary" checked={ios} onChange={handleSelect} name="ios" />
            }
            label="iOS"
          />
          <FormControlLabel
            control={
              <Checkbox
              color="primary"
                checked={watchOs}
                onChange={handleSelect}
                name="watchOs"
              />
            }
            label="watchOS"
          />
          <FormControlLabel
            control={
              <Checkbox
              color="primary"
                checked={mobileSite}
                onChange={handleSelect}
                name="mobileSite"
              />
            }
            label="Mobile Site"
          />  
        </FormGroup>
      </FormControl>
      </Box>
      <Divider/>
<Button 
    type="submit"
    variant="outlined"
    color="success"
    fullWidth
    style={{marginTop:"50px",backgroundColor:"#00d659"}}
    >
  Create Custom Template
</Button>
<TextField/>

    </form>
     
   
  )
}

export default CustomForm;