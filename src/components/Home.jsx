import React from "react";
import "./home.css";
import {
  Grid,
  Typography,
  Divider,
  ListItem,
  List,
  Button,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(14),
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
          <Paper>
            <div>
              <div style={{ height: 50, backgroundColor: "#1b1464" }}>
                <div className="d-flex  justify-content-between header">
                  <ListItem>
                    <img
                      src={process.env.PUBLIC_URL + "/logo.png"}
                      alt=""
                      className=" img-fluid"
                      style={{
                        height: 30,
                        width: 30,
                        alignSelf: "center",
                        marginTop: 10,
                      }}
                    />
                    <div style={{ marginLeft: "5px", marginTop: 5 }}>
                      <Typography style={{ fontSize: 12, color: "#ffffff" }}>
                        {" "}
                        srikanth
                      </Typography>
                      <Typography style={{ fontSize: 12, color: "#ffffff" }}>
                        {" "}
                        Member ID: 1123
                      </Typography>
                    </div>
                  </ListItem>

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
                  height: "auto",
                  backgroundColor: "#ffffff",
                  marginHorizontal: 32,
                }}
              >
                <Typography
                  gutterBottom
                  style={{ fontSize: 12, fontWeight: "bold", marginLeft: 16 }}
                >
                  MAKE THE MOST OF YOUR SPARK ACCOUNT
                </Typography>
                <Divider variant="middle" />
                <div style={{ marginLeft: 16 }}>
                  <List>
                    <ListItem style={{ height: 30 }}>
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

                    <ListItem style={{ height: 30 }}>
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

                    <ListItem style={{ height: 30 }}>
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
                        All features unlocked
                      </Typography>
                    </ListItem>

                    <ListItem style={{ height: 30 }}>
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
                        {" "}
                        No more reminders
                      </Typography>
                    </ListItem>
                  </List>

                  <div
                    style={{
                      textAlign: "center",
                      marginTop: 15,
                      marginBottom: 20,
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="#f7931e"
                      style={{
                        color: "#f7931e",
                        height: 35,
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
                    style={{ height: 23, width: 60 }}
                  />
                  <Typography
                    style={{
                      fontSize: 13,
                       fontWeight:'bold',
                      color: " #474a4f",
                      margin: "0px",
                      marginLeft: 10,
                    }}
                  >
                    SAVINGS.
                  </Typography>
                </ListItem>

                <Typography
                  style={{
                    color: "#aaadb2",
                    fontSize: '12px',
                    marginLeft: 16,
                    marginTop: 5,
                  }}
                >
                  This is your zero balance account which gives you up to 8%
                  p.a. interest credited daily.
                </Typography>

                <div className={classes.root}>
                  <Paper elevation={8}>
                    <Typography
                      style={{
                        color: "#474a4f",
                        fontSize: 14,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                    >
                      {" "}
                      A/C no.:222330015165487
                    </Typography>
                    <ListItem className="d-flex justify-content-between">
                      <Typography style={{ color: "#474a4f", fontWeight: "bold" }}>
                        ₹ 000.00
                      </Typography>
                      <img
                        src={process.env.PUBLIC_URL + "/arrow.png"}
                        alt=""
                        className=" img-fluid"
                        style={{ height: 18, width: 11 }}
                      />
                    </ListItem>

                    <Divider variant="middle" />

                    <ListItem className="d-flex justify-content-around">
                      <Typography style={{ color: "#f7931e", fontSize: "10px" }}>LOAD</Typography>
                      <Typography>|</Typography>
                      <Typography style={{ color: "#f7931e", fontSize: "10px" }}>
                        TRANSFER
                      </Typography>
                    </ListItem>
                  </Paper>
                </div>
              </div>
              <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>
              <div style={{ height: "auto", backgroundColor: "#ffffff" }}>
                <ListItem className="d-flex justify-content-between">
                  <Typography
                    style={{
                      color: "474a4f",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    BILL PAYMENT
                  </Typography>

                  <Typography style={{ color: "#f79d32", fontSize: "14px" }}>
                    {" "}
                    Transactions{" "}
                  </Typography>
                </ListItem>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/ph.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 30, width: 22, marginLeft: "10px" }}
                    />
                    <Typography
                      style={{
                        fontSize: "10px",
                        color: "#474a4f",
                        textAlign: "center",
                      }}
                    >
                      Mobile Prepaid
                    </Typography>
                  </Box>
                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/ph.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 30, width: 22, marginLeft: "10px" }}
                    />
                    <Typography
                      style={{
                        fontSize: "10px",
                        color: "#474a4f",
                        textAlign: "center",
                      }}
                    >
                      Mobile postpaid
                    </Typography>
                  </Box>
                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/Broadband.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 25, width: 38, marginLeft: "5px" }}
                    />

                    <Typography
                      style={{
                        fontSize: "10px",
                        color: "#474a4f",
                        textAlign: "center",
                      }}
                    >
                      Broadband
                    </Typography>
                  </Box>
                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/DTH.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 30, width: 33, marginLeft: "10px" }}
                    />
                    <Typography
                      style={{
                        fontSize: "10px",
                        color: "#474a4f",
                        textAlign: "center",
                      }}
                    >
                      DTH
                    </Typography>
                  </Box>
                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/ele.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 35, width: 35, marginLeft: "5px" }}
                    />
                    <Typography
                      style={{
                        fontSize: "10px",
                        color: "#474a4f",
                        textAlign: "center",
                      }}
                    >
                      Electricity
                    </Typography>
                  </Box>

                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/water.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 33, width: 33, marginLeft: "5px" }}
                    />
                    <Typography
                      style={{
                        fontSize: "10px",
                        color: "#474a4f",
                        textAlign: "center",
                      }}
                    >
                      water
                    </Typography>
                  </Box>

                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/payment.png"}
                      alt=""
                      className=" img-fluid"
                      style={{ height: 30, width: 30, marginLeft: "5px" }}
                    />

                    <Typography
                      style={{
                        fontSize: "10px",
                        color: "#474a4f",
                        textAlign: "center",
                      }}
                    >
                      Loan Payment
                    </Typography>
                  </Box>
                  <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{
                      width: "4rem",
                      height: "4.2rem",
                      borderRadius: 10,
                      alignContent: "center",
                    }}
                  >
                    more
                  </Box>
                </div>
              </div>

              <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>

              <div style={{ height: 220, backgroundColor: "#ffffff" }}>
                <ListItem style={{ height: 5, marginTop: 10 }}>
                  <img
                    src={process.env.PUBLIC_URL + "/logo_sp.png"}
                    alt=""
                    className=" img-fluid"
                    style={{ height: 23, width: 60 }}
                  />
                  <Typography
                    style={{
                      fontSize: 13,
                      color: " #474a4f",
                      marginLeft: 10,
                      fontWeight:'bold'
                    }}
                  >
                    FIXED DEPOSITS.
                  </Typography>
                </ListItem>

                <Typography
                  style={{
                    color: "#aaadb2",
                    fontSize: '12px',
                    marginLeft: 16,
                    marginTop: 5,
                  }}
                >
                  You can earn up to 16% interest p.a. Also avail the option to
                  earn interest on deposit every month!.
                </Typography>

                <img
                  src={process.env.PUBLIC_URL + "/fd_bg.png"}
                  alt=""
                  className=" img-fluid"
                  style={{ height: "114px", marginLeft: 16, width: "90%" }}
                />

                <ListItem
                  className="d-flex justify-content-between"
                  style={{ marginTop: "10px" }}
                >
                  <Typography style={{ color: "#f7931e", fontSize: "12px" }}>
                    {" "}
                    OPEN NEW
                  </Typography>
                  <Typography style={{ color: "#f7931e", fontSize: "12px" }}>FD RATES</Typography>
                </ListItem>
              </div>
              <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>
              <div style={{ height: 220, backgroundColor: "#ffffff" }}>
                <ListItem style={{ height: 5, marginTop: 10 }}>
                  <img
                    src={process.env.PUBLIC_URL + "/logo_sp.png"}
                    alt=""
                    className=" img-fluid"
                    style={{ height: 23, width: 60 }}
                  />
                  <Typography
                    style={{
                      fontSize: 13,
                       fontWeight:'bold',   
                      color: " #474a4f",
                      marginLeft: 10,
                    }}
                  >
                    RECURRING DEPOSITS.
                  </Typography>
                </ListItem>

                <Typography
                  style={{
                    color: "#aaadb2",
                    fontSize: '12px',
                    marginLeft: 16,
                    marginTop: 5,
                  }}
                >
                  Earn up to 15% p.a. with periodic investment discipline of
                  Recurring Deposits..
                </Typography>

                <img
                  src={process.env.PUBLIC_URL + "/rd_bg.png"}
                  alt=""
                  className=" img-fluid"
                  style={{ height: "114px", marginLeft: 16, width: "90%" }}
                />

                <div className="value"></div>
                <ListItem
                  className="d-flex justify-content-between"
                  style={{ marginTop: "10px" }}
                >
                  <Typography style={{ color: "#f7931e", fontSize: "12px" }}>
                    {" "}
                    OPEN NEW
                  </Typography>
                  <Typography style={{ color: "#f7931e", fontSize: "12px" }}>
                    RD RATES
                  </Typography>
                </ListItem>
              </div>

              <div style={{ height: 20, backgroundColor: "#f5f5ff" }}></div>
              <div></div>
            </div>

            <Footer />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

Home.propTypes = {};

export default Home;
