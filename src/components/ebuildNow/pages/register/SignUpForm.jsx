import { 
    Typography,
    TextField,
     Button,Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from '.';
import {useCreatePostMutation} from '../../../../Service/Post' 



function SignUpForm() {

  const [ createPost,responseInfo] = useCreatePostMutation()
  // console.log(createPost)
  

  const [mail, setMail] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [currency, setCurrency] = useState("")
  const [password,setPassword] = useState("")
  const [password1,setPassword1] = useState("")
  const [checkBox,setCheckBox] = useState(false)
  const [error,setError] =useState(false)



  const handleSubmit =(e)=>{
    e.preventDefault()
    
    if(password!== password1){
      setError(true)
      console.log("password did not match")
    }
    
  }

    // console.log(mail,mail,number,currency,password,password1,checkBox)
  
  const newPost = {
    "company_email":mail,
    "name":name,
    "phone_number":number,
    "currency":currency,
    "password":password
  }


  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)


  return (
    // Get All Data
    <div className="App">
      
      {/* <button onClick={() => { createPost(newPost) }}>Add Post</button> */}
      <form
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
    
    >
     <Typography>Company email</Typography>
      <TextField
        required
        autoFocus
        margin="dense"
        id="email"
        label="Company email"
        type="email"
        fullWidth
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>setMail(e.target.value)}
      />
      <Typography>Name</Typography>
      <TextField
        required
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>setName(e.target.value)}

      />
    <Typography>Phone Number</Typography>
      <TextField
        required
        autoFocus
        margin="dense"
        id="number"
        label="Number"
        type="tel"
        fullWidth
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>setNumber(e.target.value)}

      />
      <Typography>Currency</Typography>
      <TextField
        required
        margin="dense"
        id="number"
        label="Number"
        type="tel"
        fullWidth
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>setCurrency(e.target.value)}

      />
    
     <div style={{display:"flex"}}>
     <Typography style={{marginRight:"100px"}}>Password</Typography>

     </div>
<TextField
required
 autoFocus
 margin="dense"
 id="password"
 label="Password"
 type="password"
 fullWidth
 variant="outlined"
 onChange={(e)=>setPassword(e.target.value)}
 error={error}

/>
<div style={{display:"flex"}}>

<Typography style={{marginRight:"100px"}}>Password Agian</Typography>

     </div>
<TextField
required
 autoFocus
 margin="dense"
 id="password"
 label="Password Again"
 type="password"
 fullWidth
 variant="outlined"
 error={error}

 onChange={(e)=>setPassword1(e.target.value)}

/>
<Checkbox onChange={(e)=>setCheckBox(!checkBox)}  color="primary"/>I agree to the Privacy Policy and Terms and Conditions
<Button onClick={() => { createPost(newPost) }}
type="submit"
    variant="outlined"
    color="success"
    fullWidth
    style={{marginTop:"50px",backgroundColor:"#00d659"}}
    >
  SignUp
</Button>

    </form>
    </div>
  );
}


// )
// const SignUpForm = () => {
//   const [mail, setMail] = useState("")
//   const [name, setName] = useState("")
//   const [number, setNumber] = useState("")
//   const [currency, setCurrency] = useState("")
//   const [password,setPassword] = useState("")
//   const [password1,setPassword1] = useState("")
//   const [checkBox,setCheckBox] = useState(false)
//   const [error,setError] =useState(false)



//   const handleSubmit =(e)=>{
//     e.preventDefault()
    
//     if(password!== password1){
//       setError(true)
//       console.log("password did not match")
//     }
    

//     console.log(mail,mail,number,currency,password,password1,checkBox)
//   }





//   return (
  
//     <form
//     noValidate
//     autoComplete="off"
//     onSubmit={handleSubmit}
    
//     >
//      <Typography>Company email</Typography>
//       <TextField
//         required
//         autoFocus
//         margin="dense"
//         id="email"
//         label="Company email"
//         type="email"
//         fullWidth
//         variant="outlined"
//         style={{width:"100%"}}
//         onChange={(e)=>setMail(e.target.value)}
//       />
//       <Typography>Name</Typography>
//       <TextField
//         required
//         autoFocus
//         margin="dense"
//         id="name"
//         label="Name"
//         type="text"
//         fullWidth
//         variant="outlined"
//         style={{width:"100%"}}
//         onChange={(e)=>setName(e.target.value)}

//       />
//     <Typography>Phone Number</Typography>
//       <TextField
//         required
//         autoFocus
//         margin="dense"
//         id="number"
//         label="Number"
//         type="tel"
//         fullWidth
//         variant="outlined"
//         style={{width:"100%"}}
//         onChange={(e)=>setNumber(e.target.value)}

//       />
//       <Typography>Currency</Typography>
//       <TextField
//         required
//         margin="dense"
//         id="number"
//         label="Number"
//         type="tel"
//         fullWidth
//         variant="outlined"
//         style={{width:"100%"}}
//         onChange={(e)=>setCurrency(e.target.value)}

//       />
    
//      <div style={{display:"flex"}}>
//      <Typography style={{marginRight:"100px"}}>Password</Typography>

//      </div>
// <TextField
// required
//  autoFocus
//  margin="dense"
//  id="password"
//  label="Password"
//  type="password"
//  fullWidth
//  variant="outlined"
//  onChange={(e)=>setPassword(e.target.value)}
//  error={error}

// />
// <div style={{display:"flex"}}>

// <Typography style={{marginRight:"100px"}}>Password Agian</Typography>

//      </div>
// <TextField
// required
//  autoFocus
//  margin="dense"
//  id="password"
//  label="Password Again"
//  type="password"
//  fullWidth
//  variant="outlined"
//  error={error}

//  onChange={(e)=>setPassword1(e.target.value)}

// />
// <Checkbox onChange={(e)=>setCheckBox(!checkBox)}  color="primary"/>I agree to the Privacy Policy and Terms and Conditions
// <Button 
// type="submit"
//     variant="outlined"
//     color="success"
//     fullWidth
//     style={{marginTop:"50px",backgroundColor:"#00d659"}}
//     >
//   SignUp
// </Button>

//     </form>
     
  
//   )
// }

export default SignUpForm
