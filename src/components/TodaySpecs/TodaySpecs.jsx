import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(255,255,255,0.6);",
  },

  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  box: { textAlign: "center" },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default function TodaySpecs({ data }) {
  //console.log(data);
  const classes = useStyles();
  if (!data) {
    return "Loading...";
  }
  return (
    <Grid className={classes.box} item xs={12} sm={12} md={6} lg={6}>
      <Card className={classes.root}>
        <CardContent className={classes.flexContainer} item xs>
          <Grid className={classes.pos} item xs={6}>
            <Typography variant="subtitle1" component="h2">
              Wind speed{" "}
            </Typography>
            <Typography variant="h6" component="h2">
              {Math.round(data.windSpeed)} km/h
            </Typography>
          </Grid>
          <Grid className={classes.pos} item xs={6}>
            <Typography variant="subtitle1" component="h2">
              Air quality{" "}
            </Typography>
            <Typography variant="h6">{data.airQuality}%</Typography>
          </Grid>
          <Grid className={classes.pos} item xs={6}>
            <Typography variant="subtitle1" component="h2">
              Pressure
            </Typography>
            <Typography variant="h6">{data.pressure} hPa</Typography>
          </Grid>
          <Grid className={classes.pos} item xs={6}>
            <Typography variant="subtitle1" component="h2">
              Precipitation
              <Typography variant="h6">{data.precip} mm/h</Typography>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
