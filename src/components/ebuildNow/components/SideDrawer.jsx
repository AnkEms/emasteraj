import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { menuItems } from '../../data/list'

const SideDrawer = ({classes}) => {
  const [check,setCheck] = useState("")
  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Emaster.ai
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item,key) => (
            <ListItem 
              button 
              key={key}
              onClick={() => setCheck(item.text)}
              // className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemText primary={item.text} />
              <ListItemIcon>{item.icon}</ListItemIcon>

            </ListItem>
          ))}
        </List>
        
      </Drawer>

  )
}

export default SideDrawer
