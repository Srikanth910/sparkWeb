import React from "react";
// import PropTypes from 'prop-types';
import { Grid, Card, Box, Typography } from "@material-ui/core";

const Login = (props) => {
  return (
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
      </Grid>
    </Box>
  );
};

Login.propTypes = {};

export default Login;
