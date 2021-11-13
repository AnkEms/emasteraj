import { Button, ButtonGroup, Container, Divider, Grid, Typography,TextField   } from '@material-ui/core'
import { Add, HelpOutlineSharp, Search, SwapVertOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Notes } from '../../data/cardList'
import Cards from '../components/Cards'
import Popup from '../components/Popup'
import SearchPage from './search/SearchPage'
import CustomDialog from './custom/CustomDialog'
import FormDialog from './register/FormDialog'
import SearchDialog from './search/SearchDialog'


const Main = () => {
  const [open, setOpen] = useState(false);
  const [openSearch,setOpenSearch] = useState(false)
 


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  const handleSearchOpen = () => {
   setOpenSearch(true);
  };

  const handleSearchClose = () => {
    setOpenSearch(false);
  };
 
  
  

  return (
    <>
    <Container>
    <Typography variant="h4">
      Choose a base    <HelpOutlineSharp style={{cursor:"pointer"}}/>
      <ButtonGroup  variant="outlined"  style={{marginLeft:"22vw"}}>
      
        <Button
         variant="outlined"
         onClick={handleSearchOpen}
         ><Search/></Button>
        <SearchDialog
        handleSearchClose={handleSearchClose}
        openSearch={openSearch}
        handleClose={handleClose}
        open={open}
        handleClickOpen={handleClickOpen}
        />

        
        <Button
        variant="outlined"
        onClick={handleClickOpen}   

        ><Add/>custom template</Button>
        
        <CustomDialog 
        handleClose={handleClose}
        open={open}
        /> 
        
        <Button><SwapVertOutlined/></Button>

      </ButtonGroup>

      </Typography>
      <Divider  style={{marginBottom:"30px",marginTop:"30px"}}/>

      <ButtonGroup  variant="outlined" style={{marginBottom:"15px"}}>
        <Button variant="outlined" >All</Button>
        <Button>Pro</Button>

        <Button>Store</Button>

      </ButtonGroup>

    </Container>  

    <Container>
      
    <Grid container spacing={3}>
      {Notes.map(note => (
        <Grid item xs={12} md={6} lg={4} key={note.id}>
          <Cards note={note}/>

        </Grid>
      ))}
    </Grid>

  </Container>
  </>
  )
}

export default Main
