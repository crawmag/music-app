import React from "react";
import {
  Button,
  TextField,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import Dashboard from "./components/dashboard";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
      volume: 25,
      quality: "Normal",
      isLoggedIn: false,
    };
  }

  onlineChange = () => {
    this.setState({
      online: !this.state.online,
    });
  };

  volumeChange = (event, value) => this.setState({ volume: value });

  qualityChange = (event) => this.setState({ quality: event.target.value });

  logIn = (e) => {
    this.setState({
      isloggedIn: !this.state.isloggedIn,
    });
  };

  render() {
    return !this.state.isloggedIn ? (
      <div className="App">
        <AppBar position="static" color="secondary">
          <Typography variant="h1" color="white">
            Music
          </Typography>
          <Toolbar justify="center"></Toolbar>
          <form noValidate autoComplete="off">
            <TextField
              required
              variant="filled"
              id="outlined-required"
              label="Username"
              type="text"
            />
            <TextField
              variant="filled"
              id="outlined-required"
              required
              label="Password"
              type="password"
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={this.logIn}
            >
              Login
            </Button>
          </form>
        </AppBar>
      </div>
    ) : (
      <Dashboard
        onlineChange={this.onlineChange}
        volumeChange={this.volumeChange}
        qualityChange={this.qualityChange}
        online={this.state.online}
        volume={this.state.volume}
        quality={this.state.quality}
      />
    );
  }
}

export default App;
