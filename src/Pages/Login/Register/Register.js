import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  TextField,
  Typography,
  LinearProgress,
  Alert
} from "@mui/material";
import logo from "../../../images/login.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const {registerUser,user, isLoading, authError} = useAuth()

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password Didn't Match !!! Please Check");
      return;
    }
    registerUser(loginData.email, loginData.password)
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Register
          </Typography>
          {
              !isLoading && <form onSubmit={handleLoginSubmit}>
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="standard"
                name="email"
                type="email"
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnBlur}
              />
              <TextField
                id="standard-basic"
                label="Your Password"
                variant="standard"
                type="password"
                name="password"
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnBlur}
              />
              <TextField
                id="standard-basic"
                label="Confirm Your Password"
                variant="standard"
                type="password"
                name="password2"
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnBlur}
              />
  
              <NavLink to="/login">
                <Button sx={{ m: 1 }} variant="text">
                  * Already have an account? please login
                </Button>
              </NavLink>
  
              <Button
                sx={{ width: "75%", mt: 2 }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>
            </form>
          }
          {isLoading && <LinearProgress />}
          {user?.email && <Alert  sx={{mt:2}} variant="filled" severity="success">User Created SuccessFully!</Alert>}

          {authError && <Alert  sx={{mt:2}} variant="filled" severity="warning">{authError}!</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={logo} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
