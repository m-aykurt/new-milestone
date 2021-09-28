import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar } from "@mui/material";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#046582",
    color: (props) => props.color,
  },
});

export default function MenuAppBar(props) {
  const classes = useStyles(props);
  const [auth] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch {
      alert("Failed to log out");
    }
  };

  return (
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Avatar
                alt="clrswy"
                src="https://lms.clarusway.com/pluginfile.php/1/core_admin/logocompact/300x300/1628491244/clarusway_LOGO_tek_png.png"
              />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={1} justifyContent="center">
              <Chip
                label="-----<Murat/> Blog -----"
                href="https://github.com/serhatkoyuncu/react-blog-page"
                variant="outlined"
                component="a"
                clickable
                target="_blank"
                size="medium"
                sx={{
                  borderColor: "primary.main",
                  color: "white",
                  fontSize: 25,
                  "&:hover": { opacity: 1 },
                }}
              />
            </Stack>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {currentUser ? (
                  <>
                    <MenuItem onClick={handleClose}>
                      <Link to="/profile">Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/new-blog">New</Link>
                    </MenuItem>
                    <MenuItem onClick={(handleClose, handleLogout)}>
                      <Link to="/">Log Out</Link>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleClose}>
                      <Link to="/login">Log In</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/register">Register</Link>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
