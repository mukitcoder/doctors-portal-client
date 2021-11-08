import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const {user, logOut} = useAuth()
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Link to="/home">
              <Button sx={{ textDecoration: "none", color: "white" }}>
                Home
              </Button>
            </Link>
            <Link to="/appointment">
              <Button sx={{ color: "white" }}>Appointment</Button>
            </Link>
            <Typography variant="body1" >{user.displayName} {user.email} </Typography>
           {
             user?.email ?
             
             <Button onClick={logOut} sx={{ color: "white" }}>Log Out</Button>
           :
            <Link to="/login">
            <Button sx={{ color: "white" }}>Log In</Button>
          </Link> 
           }
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
