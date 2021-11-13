import { Divider, Drawer, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { listData, rateData } from './data'

const DrawerSlider = ({css,drawerWidth}) => {
  return (
    <div>
      <Drawer
    style={{overflow:'hidden'}}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar >
        
          <Typography variant="h5">
       <Link to="/">Emaster.ai</Link> 

        
       
      </Typography>

         
      </Toolbar>
      <Divider />
      <h5 style={{marginLeft:"50px"}}>Filter by category </h5>
      
      <List>
      { 
          listData.map((item,id)=>(
           <ListItem
           key={id}
            >
             <ListItemText  primary={item.text}/>
              <ListItemIcon  className={css.icon}>{item.icon}</ListItemIcon>

           </ListItem>
         ))
        }
      </List>
      <Divider />
      <h5 style={{marginLeft:"50px"}}>Filter By Cost</h5>
      <List>
      { 
           rateData.map((item,id)=>(
                            <ListItem
             key={id}
             >
               <ListItemText  primary={item.text}/>
               <ListItemIcon  className={css.icon}>{item.icon}</ListItemIcon>

             </ListItem>
           ))
         }
      </List>
    </Drawer>
      
    </div>
  )
}

export default DrawerSlider
