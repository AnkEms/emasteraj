import React,{useState} from 'react'
import { Grid, Paper, Button, Typography, Container } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Link,  } from 'react-router-dom'
import { Box } from '@mui/material'





  



const SignInForm = ({handleClose}) => {

  // console.log("Response Informetion:",responseInfo)
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [mailError, setMailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  


  const handleSubmit =(e)=>{
    e.preventDefault()
    setMailError(false)
    setPasswordError(false)

    if (mail === '') {
      setMailError(true)
    }
    if (password === '') {
      setPasswordError(true)
    }
    

    console.log(mail,password)
  }

  return(
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
     <Typography>Company email</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Company email"
        type="email"
        fullWidth
        required
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>setMail(e.target.value)}
        error={mailError}
        helperText="enter valid email"
      />
    
     <div style={{display:"flex"}}>
     <Typography style={{marginRight:"100px"}}>Password</Typography>
     <Link to="#" style={{textDecoration:"none"}}><Typography >forgot your password</Typography></Link>

     </div>

<TextField
 autoFocus
 margin="dense"
 id="name"
 label="Password"
 type="password"
 fullWidth
 required
 error={passwordError}

 variant="outlined"
 onChange={(e)=>setPassword(e.target.value)}
 
/>
<Button 
    type="submit"
    variant="outlined"
    color="success"
    fullWidth
    style={{marginTop:"50px",backgroundColor:"#00d659"}}
    >
  SignIn
  
</Button>

    </form>
     
   
  )
}

export default SignInForm;