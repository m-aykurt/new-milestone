import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";

import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ width: "100%",height:"80vh", bgcolor: "background.paper", display:"flex", alignItems: 'center', justifyContent: 'center' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary={currentUser && currentUser.email} />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{justifyContent: 'center'}} disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Logout">
                <Link to="/">Log Out</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default Profile;
