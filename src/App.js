import axios from "axios";
import React, { Component } from "react";
import TodayWeather from "./components/TodayWeather/TodayWeather";

class App extends Component {
  state = {
    data: "",
    coords: {
      latitude: "",
      longitude: "",
    },
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ coords: newCoords });
        console.log(this.state.coords);
        //Axios Call
        axios
          .get("https://api.weatherbit.io/v2.0/current", {
            params: {
              key: `${process.env.REACT_APP_API_KEY}`,
              lat: this.state.coords.latitude,
              lon: this.state.coords.longitude,
              lang: "it",
            },
          })
          .then((res) => {
            console.log(res.data.data[0]);
            this.setState({ data: res.data.data[0] });
            console.log(this.state.data);
          });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>App Weather</h1>
        <TodayWeather />
      </div>
    );
  }
}

export default App;
