import React from "react";
import "../App.css";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Switch,
  Slider,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";

function Dashboard(props) {
  return (
    <div className="Home">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h1" color="white">
            Music
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 50 }}>
        <Grid container justify="center">
          <Grid container spacing={5} justify="center">
            <Grid container item xs={3} spacing={1}>
              <Card variant="outlined">
                <CardContent>
                  <h4>Online Mode</h4>
                  <p>Is this application connected to the internet?</p>
                  <Switch
                    // checked={}
                    onChange={props.onlineChange}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    online={props.online}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <Card variant="outlined">
                <CardContent>
                  <h4>Master Volume</h4>
                  <p>Overrides all other sound settings in this application</p>
                  <Slider
                    value={props.volume}
                    defaultValue={25}
                    onChange={props.volumeChange}
                    aria-labelledby="discrete-slider-small-steps"
                    valueLabelDisplay="auto"
                    step={10}
                    min={0}
                    max={100}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <Card variant="outlined">
                <CardContent>
                  <h4>Sound Quality</h4>
                  <p>
                    Manually control the music quality in event of poor
                    connection
                  </p>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Quality
                    </InputLabel>
                    <Select
                      style={{ width: 250 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={props.qualityChange}
                      value={props.quality}
                    >
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Normal">Normal</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="center">
            <h2>System Notifications:</h2>
          </Grid>
          <Grid container spacing={5} justify="center">
            <Grid container item xs={2} spacing={2} justify="center">
              <p>
                {props.online === true
                  ? "Your application is online."
                  : "Your application is offline. You won't be able to share or stream music to other devices."}
              </p>
            </Grid>
            <Grid container item xs={2} spacing={1} justify="center">
              <p>
                {props.volume < 80
                  ? `The current volume is set to ${props.volume}.`
                  : `The current volume is set to ${props.volume}. Listening to music at a high volume could cause long-term hearing loss.`}
              </p>
            </Grid>
            <Grid container item xs={1} spacing={1} justify="center"></Grid>
            <p>
              {props.quality === "Low"
                ? "Music quality is degraded. Increase quality if your connection allows it."
                : `The sound is quality is ${props.quality}.`}
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;
