import React, { useState } from "react";
// import { Link, withRouter } from "react-router-dom";
// import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Box,
  Typography,
  FormControl,
  InputLabel,
  withStyles,
  TextField,
  Button,
  IconButton,
  Input,
  InputAdornment,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import States from "./States";

const styles = (theme) => ({});

const Login = ({ classes }) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
<<<<<<< HEAD
    <Box>
      <Grid container justify="center">
        <Grid item xs={11} lg={5} sm={10} md={8}>
          {/* <Card> */}
            {/* <Box p={3}> */}
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            {/* </Box> */}
          {/* </Card> */}
        </Grid>
=======
    <Grid container justify="center">
      <Grid item xs={12} lg={4} sm={10} md={8}>
        <Paper>
          <Grid
            container
            direction="column"
            style={{ height: "130px", background: "#1b1464", color: "white" }}
          >
            <Grid item style={{ padding: "30px 0px 0px 30px" }}>
              <Typography variant="h6">Watch your wealth grow</Typography>
            </Grid>
            <Grid item style={{ marginLeft: "10rem", marginTop: "2rem" }}>
              <Typography variant="h5" align="center">
                Login
              </Typography>
            </Grid>
          </Grid>
          <Box p={3} px={8}>
            <Grid container direction="column">
              <Grid item>
                <States />
              </Grid>
              <Grid item style={{ marginTop: "1.5rem" }}>
                <TextField
                  type="number"
                  id="standard-basic"
                  fullWidth
                  label="Enter your mobile number"
                />
              </Grid>
              <Grid item style={{ marginTop: "1.5rem" }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="standard-adornment-password">
                    Enter your password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Typography
                style={{
                  opacity: "0.5",
                  marginTop: "10px",
                  textAlign: "right",
                  color: "#f7931e",
                  cursor: "pointer",
                }}
              >
                Forgot the password
              </Typography>

              <Grid item style={{ marginTop: "3.5rem", opacity: "0.7" }}>
                <Typography>
                  By Logging in, you agree to our{" "}
                  <span style={{ color: "#f7931e" }}>Terms and Conditions</span>{" "}
                  and <span style={{ color: "#f7931e" }}>Privacy Policy</span>
                </Typography>
              </Grid>

              <Button
                variant="contained"
                style={{
                  marginTop: "1.5rem",
                  background: "#f7931e",
                  color: "white",
                }}
              >
                Login
              </Button>
            </Grid>
          </Box>
        </Paper>
>>>>>>> f46e3e4042a2397e98dd061d1c4378487455a77b
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default withStyles(styles)(Login);
