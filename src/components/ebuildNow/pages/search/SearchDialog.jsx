import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@material-ui/core"
import { HighlightOffOutlined } from "@material-ui/icons"
import SearchPage from './SearchPage'

const SearchDialog = ({openSearch,handleSearchClose,open,handleClose,handleClickOpen}) => {
  return (
    <div>
          <Dialog 
        open={openSearch}
         onClose={handleSearchClose}
         maxWidth="xl"
         fullWidth
         fullScreen
      style={{opacity:"0.96",}}
         >

             <DialogTitle style={{marginBottom:"80px"}}>
           <div style={{display:"flex",flexDirection:"row"}}> 

           <Typography variant="h3" style={{marginTop:"3px"}}> Search
            <HighlightOffOutlined
            style={{cursor:"pointer", marginLeft:"78vw"}}
             onClick={handleSearchClose}
             />

            
             </Typography>
             </div>


              
              </DialogTitle>

          <DialogContent >
            {/* <Typography>search button</Typography> */}
            <SearchPage open={open} handleClose={handleClose} handleClickOpen={handleClickOpen}/>

          
            <DialogContentText>
              {/* <Typography>The price and delivery time of custom features may change once we understand exactly what you need.</Typography> */}
          
            </DialogContentText>
          
          </DialogContent>
          <DialogActions>
         
          </DialogActions>
          
         
        </Dialog>
    </div>
  )
}

export default SearchDialog
