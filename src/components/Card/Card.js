import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card1:{
    backgroundColor:"#8A2BE2"
  },
  card2:{
    backgroundColor:"#FFA500"
  },
  card3:{
    backgroundColor:"#EE82EE"
  }
});


const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();
  if (!confirmed) {
    return 'Loading...';
  }
  
  return (
    <div className="container-fluid p-5 d-flex flex-wrap justify-content-between">
      
      <div className="d-flex mt-1 ">
          <Card className={classes.card1}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Card>
        </div>
        
        <div className="d-flex mt-1 ">
          <Card className={classes.card2}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
          </Card>
          </div>

          <div className="d-flex mt-1 ">
          <Card className={classes.card3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
          </Card>
          </div>
    </div>
  );
};
export default Info;