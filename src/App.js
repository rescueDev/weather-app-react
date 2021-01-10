import axios from "axios";
import React, { Component } from "react";
import AutoGrid from "./components/TodayWeather/TodayWeather";
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
        //console.log(this.state.coords);

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
            const data = res.data.data[0];
            //filter data fetched from API
            let weatherData = {
              weather: data.weather,
              precip: data.precip,
              humidity: data.rh,
              airQuality: data.aqi,
              temp: data.temp,
              sunrise: data.sunrise,
              pressure: data.pres,
              country: data.country_code,
              ts: data.ts,
              city: data.city_name,
              windSpeed: data.wind_spd,
            };
            this.setState({ data: weatherData });
            console.log(this.state.data);
          });
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>App Weather</h1>
        <TodayWeather data={data} />
      </div>
    );
  }
}

export default App;
