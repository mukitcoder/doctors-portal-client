import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, user, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
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

            <NavLink to="/register">
              <Button sx={{ m: 1 }} variant="text">
                * New user? please register
              </Button>
            </NavLink>

            <Button
              sx={{ width: "75%", mt: 2 }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </form>
          {isLoading && <LinearProgress />}
          {user?.email && (
            <Alert sx={{ mt: 2 }} variant="filled" severity="success">
              User Logged In SuccessFully!
            </Alert>
          )}

          {authError && (
            <Alert sx={{ mt: 2 }} variant="filled" severity="warning">
              {authError}!
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={logo} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
