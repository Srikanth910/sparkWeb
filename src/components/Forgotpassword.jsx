import React from "react";
import { Grid, Paper, Typography, Box, TextField, Button } from "@material-ui/core";

import States from "./States";

const Forgotpassword = (props) => {
  return (
    <Grid container justify="center">
      <Grid item xs={10} lg={3} sm={10} md={8}>
        <Paper>
          <Grid
            container
            direction="column"
            style={{ height: "80px", background: "#1b1464", color: "white" }}
          >
            <Grid item style={{margin: 'auto'}}>
              <Typography variant="h5">
                Forgot password
              </Typography>
            </Grid>
          </Grid>
          <Box p={3} px={3}>
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

              <Button
                variant="contained"
                style={{
                  marginTop: "5rem",
                  background: "#f7931e",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Forgotpassword;
