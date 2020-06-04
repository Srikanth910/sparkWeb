import React from "react";
import "./home.css";
import {
  Grid,
  Box,
  Typography,
  Divider,
  ListItem,
  List,
  Button,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(17),
      marginLeft: 16,
      justifyContent: "center",
    },
  },
}));
const Home = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container justify="center">
        <Grid item xs={10} lg={3} sm={10} md={8}>
          <div>
            <div style={{ height: 50, backgroundColor: "#1b1464" }}>
              <div className="d-flex  justify-content-between header">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  alt=""
                  className=" img-fluid"
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                />

                <img
                  src={process.env.PUBLIC_URL + "/dots.png"}
                  alt=""
                  className=" img-fluid d-flex align-items-end"
                  style={{
                    height: 5,
                    width: 20,
                    alignSelf: "center",
                    marginRight: 10,
                    marginTop: 10,
                  }}
                />
              </div>
            </div>

            <div style={{ height: "30px", backgroundColor: "" }}></div>
            <div
              style={{
                height: 210,
                backgroundColor: "#ffffff",
                marginHorizontal: 32,
              }}
            >
              <Typography
                gutterBottom
                style={{ fontSize: 14, fontWeight: "bold", marginLeft: 16 }}
              >
                MAKE THE MOST OF YOUR SPARK ACCOUNT
              </Typography>
              <Divider variant="middle" />
              <div style={{ marginLeft: 16 }}>
                <List>
                  <ListItem style={{ height: 13, marginBottom: "10px" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/thumb.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 15, width: 15 }}
                    />
                    <Typography
                      style={{
                        fontSize: 13,
                        color: " #474a4f",
                        marginLeft: 10,
                      }}
                    >
                      Please complete your Profile to gain...
                    </Typography>
                  </ListItem>

                  <ListItem style={{ height: 13, marginBottom: "10px" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/check.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 15, width: 15, float: "left" }}
                    />

                    <Typography
                      style={{
                        fontSize: 13,
                        color: " #474a4f",
                        marginLeft: 10,
                      }}
                    >
                      Fully compliant Spark Savings Account
                    </Typography>
                  </ListItem>

                  <ListItem style={{ height: 13, marginBottom: "10px" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/check.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 15, width: 15, float: "left" }}
                    />

                    <p
                      style={{
                        fontSize: 13,
                        color: " #474a4f",
                        margin: "0px",
                        marginLeft: 10,
                      }}
                    >
                      All features unlocked
                    </p>
                  </ListItem>

                  <ListItem style={{ height: 13 }}>
                    <img
                      src={process.env.PUBLIC_URL + "/check.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 15, width: 15, float: "left" }}
                    />
                    <p
                      style={{
                        fontSize: 13,
                        color: " #474a4f",
                        margin: "0px",
                        marginLeft: 10,
                      }}
                    >
                      {" "}
                      No more reminders
                    </p>
                  </ListItem>
                </List>

                <div style={{ textAlign: "center", marginTop: 15 }}>
                  <Button
                    variant="outlined"
                    color="#f7931e"
                    style={{
                      color: "#f7931e",
                      // height: 26,
                      width: "187px",
                      borderColor: "#f7931e",
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>
            <div style={{ height: 250, backgroundColor: "#ffffff" }}>
              <ListItem style={{ height: 5, marginTop: 10 }}>
                <img
                  src={process.env.PUBLIC_URL + "/logo_sp.png"}
                  alt=""
                  className=" img-fluid"
                  style={{ height: 29, width: 71 }}
                />
                <p
                  style={{
                    fontSize: 10,
                    color: " #474a4f",
                    margin: "0px",
                    marginLeft: 10,
                  }}
                >
                  SAVINGS.
                </p>
              </ListItem>

              <p
                style={{
                  color: "#aaadb2",
                  fontSize: 9,
                  marginLeft: 16,
                  marginTop: 5,
                }}
              >
                This is your zero balance account which gives you up to 8% p.a.
                interest credited daily.
              </p>

              <div className={classes.root}>
                <Paper elevation={5}>
                  <p
                    style={{
                      color: "#474a4f",
                      fontSize: 9,
                      marginTop: 10,
                      marginLeft: 10,
                    }}
                  >
                    {" "}
                    A/C no.:222330015165487
                  </p>
                  <ListItem className="d-flex justify-content-between">
                    <p style={{ color: "#474a4f", fontWeight: "bold" }}>
                      ₹ 000.00
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/arrow.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 18, width: 11 }}
                    />
                  </ListItem>

                  <Divider variant="middle" />

                  <ListItem className="d-flex justify-content-around">
                    <p style={{ color: "#f7931e", fontSize: "14px" }}>Load</p>
                    <p>|</p>
                    <p style={{ color: "#f7931e", fontSize: "14px" }}>
                      Transfer
                    </p>
                  </ListItem>
                </Paper>
              </div>
            </div>
            <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>
            <div style={{ height: 250, backgroundColor: "#ffffff" }}>
              <ListItem className="d-flex justify-content-between">
                <p style={{ color: "474a4f", fontSize: "14px" }}>
                  BILL PAYMENT
                </p>

                <p style={{ color: "#f79d32", fontSize: "14px" }}>
                  {" "}
                  Transactions{" "}
                </p>
              </ListItem>

              <div style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <div className="box"></div>
              </div>
            </div>

            <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>

            <div style={{ height: 250, backgroundColor: "#ffffff" }}>
              <ListItem style={{ height: 5, marginTop: 10 }}>
                <img
                  src={process.env.PUBLIC_URL + "/logo_sp.png"}
                  alt=""
                  className=" img-fluid"
                  style={{ height: 29, width: 71 }}
                />
                <p
                  style={{
                    fontSize: 10,
                    color: " #474a4f",
                    margin: "0px",
                    marginLeft: 10,
                  }}
                >
                  FIXED DEPOSITS.
                </p>
              </ListItem>

              <p
                style={{
                  color: "#aaadb2",
                  fontSize: 9,
                  marginLeft: 16,
                  marginTop: 5,
                }}
              >
                You can earn up to 16% interest p.a. Also avail the option to
                earn interest on deposit every month!.
              </p>

              <img
                src={process.env.PUBLIC_URL + "/fd_bg.png"}
                alt=""
                className=" img-fluid"
                style={{ height: "114px", marginLeft: 16 }}
              />

              <ListItem className="d-flex justify-content-between">
                <p style={{ color: "#f7931e", fontSize: "12px" }}> OPEN NEW</p>
                <p style={{ color: "#f7931e", fontSize: "12px" }}>FD RATES</p>
              </ListItem>
            </div>
            <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>
            <div style={{ height: 250, backgroundColor: "#ffffff" }}>
              <ListItem style={{ height: 5, marginTop: 10 }}>
                <img
                  src={process.env.PUBLIC_URL + "/logo_sp.png"}
                  alt=""
                  className=" img-fluid"
                  style={{ height: 29, width: 71 }}
                />
                <p
                  style={{
                    fontSize: 10,
                    color: " #474a4f",
                    margin: "0px",
                    marginLeft: 10,
                  }}
                >
                  RECURRING DEPOSITS.
                </p>
              </ListItem>

              <p
                style={{
                  color: "#aaadb2",
                  fontSize: 9,
                  marginLeft: 16,
                  marginTop: 5,
                }}
              >
                Earn up to 15% p.a. with periodic investment discipline of
                Recurring Deposits..
              </p>

              <img
                src={process.env.PUBLIC_URL + "/rd_bg.png"}
                alt=""
                className="img-fluid"
                style={{ height: "114px", marginLeft: 16, width: 300 }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
