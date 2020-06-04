import React from "react";
 import './home.css'
// import PropTypes from 'prop-types';
import { Grid, Card,  Typography, colors, Divider, ListItem, List, Button, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(17),
         marginLeft:16,
          justifyContent: 'center',
      },
    },
  }));
const Home = (props) => {



   
      const classes = useStyles();
  return (
    <Box >
      <Grid container justify="center">
        <Grid item xs={11} lg={5} sm={10} md={8}>
        <Paper>
          <div  >
              <div  style={{height:50, backgroundColor:'#1b1464',}}>
             <div   className="d-flex  justify-content-between header" >
             <img src={process.env.PUBLIC_URL + "/logo.png"} className=" img-fluid"  style={{height:30, width:30, alignSelf: 'center', marginLeft:10 , marginTop:10}}  />

                <img src={process.env.PUBLIC_URL + "/dots.png"} className=" img-fluid d-flex align-items-end"  style={{height:5, width:20,alignSelf: 'center',  marginRight:10,marginTop:10}}  />

 
             </div>


              </div>

              <div style={{height:'30px', backgroundColor:""}}>
                  
              </div>
              <div style={{height:250,backgroundColor:'#ffffff' ,marginHorizontal: 32,}}>
              <Typography gutterBottom  style={{ fontSize:14, fontWeight:'bold' , marginLeft: 16,}}>
              MAKE THE MOST OF YOUR SPARK ACCOUNT
            </Typography>
            <Divider variant="middle" />
<div style={{marginLeft: 16,}}>
    <List>
    <ListItem style={{height:10}}>
    <img src={process.env.PUBLIC_URL + "/thumb.png"} className=" img-fluid"  style={{height:15, width:15, }}  />
    <p style={{fontSize:10, color:' #474a4f' , margin: '0px', marginLeft: 10,  }}>Please complete your Profile to gain...</p>

    </ListItem>
       
        <ListItem style={{height:10}}>
        <img src={process.env.PUBLIC_URL + "/check.png"} className=" img-fluid"  style={{height:15, width:15,float:'left'}}  />

        <p style={{fontSize:10, color:' #474a4f', margin: '0px', marginLeft: 10,  }}>Fully compliant Spark Savings Account</p>
      
        </ListItem>
        
        <ListItem style={{height:10}}>
        <img src={process.env.PUBLIC_URL + "/check.png"} className=" img-fluid"  style={{height:15, width:15,float:'left'}}  />

        <p style={{fontSize:10, color:' #474a4f', margin: '0px', marginLeft: 10, }}>All features unlocked</p>
        </ListItem>
        
                  
        <ListItem style={{height:10}} >
        <img src={process.env.PUBLIC_URL + "/check.png"} className=" img-fluid"  style={{height:15, width:15,float:'left'}}  />
        <p style={{fontSize:10, color:' #474a4f', margin: '0px', marginLeft: 10, }}> No more reminders</p>
        </ListItem>
        </List>
            
            
           <div style={{textAlign:'center', marginTop:20}}>
        <Button variant="outlined" color="#f7931e" style={{color:'#f7931e', height:26, width: '187px', borderColor:'#f7931e'
     
        
    }} >
      Get Started
      </Button>
      </div>
            
            </div>
              </div>    

              
              <div style={{height:20,backgroundColor:'#f5f5ff'}}>

              </div>
              <div style={{height:250 , backgroundColor:'#ffffff'}}>
              <ListItem style={{height:5, marginTop: 10,}}>
    <img src={process.env.PUBLIC_URL + "/logo_sp.png"} className=" img-fluid"  style={{height:29, width:71, }}  />
    <p style={{fontSize:10, color:' #474a4f' , margin: '0px', marginLeft: 10,  }}>SAVINGS.</p>

    </ListItem>

    <p  style={{color:'#aaadb2', fontSize:9, marginLeft: 16,marginTop:5}}>This is your zero balance account which gives you up to 8% p.a. interest credited daily.</p>

    <div className={classes.root}>
     
      <Paper   elevation={5}  >

          <p style={{color:'#474a4f', fontSize:9,marginTop:10, marginLeft:10}}> A/C no.:222330015165487</p>
          <ListItem  className="d-flex justify-content-between">
          <p style={{color:'#474a4f', fontWeight:'bold'}}>₹ 000.00</p>
          <img src={process.env.PUBLIC_URL + "/arrow.png"} className=" img-fluid"  style={{height:18, width:11, }}  />
          
          </ListItem >

          <Divider variant="middle" />

          <ListItem className="d-flex justify-content-around" >
              <p style={{color:'#f7931e', fontSize:'14px', }}>Load</p>
              <p>|</p>
              <p  style={{color:'#f7931e', fontSize:'14px', }}>Transfer</p>
          </ListItem>
          </Paper>
    </div>
              </div>
              <div style={{height:20,backgroundColor:'#f5f5ff'}}>

              </div>
              <div style={{height:'auto', backgroundColor:'#ffffff'}}>
                  <ListItem  className="d-flex justify-content-between" >
                      <p style={{color:'474a4f', fontSize:'14px'}}>BILL PAYMENT</p>

                      <p style={{color:'#f79d32', fontSize:'14px'}}> Transactions </p>
                  </ListItem >

                  <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                 
                  <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '4rem', height: '4rem', borderRadius: 10, }}
      >
          
         <img src={process.env.PUBLIC_URL + "/ph.png"} className=" img-fluid"  style={{height:30, width:22, marginLeft: '10px', }}  />
          <p style={{fontSize:'10px', color:'#474a4f',textAlign:'center'}}>
          Mobile
Prepaid 
          </p>
      </Box>
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '4rem', height: '4rem', borderRadius: 10, }}
      >
          
         <img src={process.env.PUBLIC_URL + "/ph.png"} className=" img-fluid"  style={{height:30, width:22, marginLeft: '10px', }}  />
          <p style={{fontSize:'10px', color:'#474a4f',textAlign:'center', }}>
          Mobile
           postpaid 
          </p>
      </Box>
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '4rem', height: '4rem', borderRadius: 10, }}
      >
         <img src={process.env.PUBLIC_URL + "/Broadband.png"} className=" img-fluid"  style={{height:25, width:38,marginLeft: '5px', }}  />
        
         <p style={{fontSize:'10px', color:'#474a4f',textAlign:'center', }}>
         Broadband
          </p>
      </Box>
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '4rem', height: '4rem', borderRadius: 10, }}
      >
        <img src={process.env.PUBLIC_URL + "/DTH.png"} className=" img-fluid"  style={{height:30, width:33, marginLeft: '10px',}}  />
        <p style={{fontSize:'10px', color:'#474a4f',textAlign:'center', }}>
         DTH
          </p>
      </Box>
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '4rem', height: '4rem' , borderRadius: 10,}}
      >
        <img src={process.env.PUBLIC_URL + "/ele.png"} className=" img-fluid"  style={{height:35, width:35,marginLeft: '5px', }}  />
        <p style={{fontSize:'10px', color:'#474a4f',textAlign:'center', }}>
        Electricity
          </p> 
      </Box>
      
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '4rem', height: '4rem', borderRadius: 10, }}
      >
         <img src={process.env.PUBLIC_URL + "/water.png"} className=" img-fluid"  style={{height:33, width:33,marginLeft: '5px', }}  />
         <p style={{fontSize:'10px', color:'#474a4f',textAlign:'center', }}>
        water
          </p>
      </Box>
      
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '4rem', height: '4rem' , borderRadius: 10, }}
      >
           <img src={process.env.PUBLIC_URL + "/payment.png"} className=" img-fluid"  style={{height:30, width:30, textAlign:'center', marginLeft: '5px', }}  />
          
           <p style={{fontSize:'10px', color:'#474a4f',textAlign:'center', }}>
           Loan 
Payment
          </p>
      </Box>
      

                  </div>

              </div>

              <div style={{height:20,backgroundColor:'#f5f5ff'}}>

</div>


              <div style={{height:250 , backgroundColor:'#ffffff'}}>
              <ListItem style={{height:5, marginTop: 10,}}>
    <img src={process.env.PUBLIC_URL + "/logo_sp.png"} className=" img-fluid"  style={{height:29, width:71, }}  />
    <p style={{fontSize:10, color:' #474a4f' , margin: '0px', marginLeft: 10,  }}>FIXED DEPOSITS.</p>

    </ListItem>

    <p  style={{color:'#aaadb2', fontSize:9, marginLeft: 16,marginTop:5}}>You can earn up to 16% interest p.a. Also avail the option to earn interest on deposit every month!.</p>
     

    <img src={process.env.PUBLIC_URL + "/fd_bg.png"} className=" img-fluid"  style={{height:'114px',marginLeft: 16,  }}  />
    
<ListItem  className="d-flex justify-content-between"  >
    <p style={{color:'#f7931e', fontSize:'12px'}}> OPEN NEW</p>
    <p style={{color:'#f7931e', fontSize:'12px'}}>FD RATES</p>
    </ListItem>
              </div>
              <div style={{height:20,backgroundColor:'#f5f5ff'}}>

</div>
              <div style={{height:250 , backgroundColor:'#ffffff'}}>
              <ListItem style={{height:5, marginTop: 10,}}>
    <img src={process.env.PUBLIC_URL + "/logo_sp.png"} className=" img-fluid"  style={{height:29, width:71, }}  />
    <p style={{fontSize:10, color:' #474a4f' , margin: '0px', marginLeft: 10,  }}>RECURRING DEPOSITS.</p>

    </ListItem>

    <p  style={{color:'#aaadb2', fontSize:9, marginLeft: 16,marginTop:5}}>Earn up to 15% p.a. with periodic investment discipline of Recurring Deposits..</p>
     


    <img src={process.env.PUBLIC_URL + "/rd_bg.png"} className=" img-fluid"  style={{height:'114px',marginLeft: 16,  }}  />
              </div>
             



          </div>



          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

Home.propTypes = {};

export default Home;
