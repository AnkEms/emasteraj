import { List, ListItemText } from "@material-ui/core";
import React from "react";

const liCls =
  "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";

const DropDownCard = ({ data = [], setOpen }) => (
  <div >
    <List>
      {data.map((item, i) => (
        <ListItemText key={i} onClick={() => setOpen(false)}>
          {item}
        </ListItemText>
      ))}
    </List>
  </div>
);

export default DropDownCard;
