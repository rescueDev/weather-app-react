import axios from "axios";
import React, { Component } from "react";
import DaysWeather from "./components/DaysWeather/DaysWeather";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import "./App.css";
import InputSearch from "./components/InputSearch/InputSearch";

class App extends Component {
  state = {
    city: "",
    data: "",
    coords: {
      latitude: "",
      longitude: "",
    },
    daysData: [],
  };

  inputCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };

  searchCityHandler = (e) => {
    if (e.key === "Enter") {
      this.setState({ city: "" });
      //API call
      axios
        .get("https://api.weatherbit.io/v2.0/current", {
          params: {
            key: `${process.env.REACT_APP_API_KEY}`,
            city: this.state.city,
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
      //Second Api call
      axios
        .get("https://api.weatherbit.io/v2.0/forecast/daily", {
          params: {
            key: `${process.env.REACT_APP_API_KEY}`,
            city: this.state.city,

            days: 8,
          },
        })
        .then((res) => {
          console.log("7 days", res.data.data);
          const data = res.data.data.splice(1);
          this.setState({ daysData: data });
          console.log(this.state.daysData);
        });
    }
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

        //Second Api call
        axios
          .get("https://api.weatherbit.io/v2.0/forecast/daily", {
            params: {
              key: `${process.env.REACT_APP_API_KEY}`,
              lat: this.state.coords.latitude,
              lon: this.state.coords.longitude,
              lang: "it",
              days: 8,
            },
          })
          .then((res) => {
            console.log("7 days", res.data.data);
            const data = res.data.data.splice(1);
            this.setState({ daysData: data });
            console.log(this.state.daysData);
          });
      });
    }
  }

  render() {
    let daysWeather = (
      <div className="container">
        {this.state.daysData.map((day, index) => {
          //console.log(day);
          return (
            <DaysWeather
              key={day.ts}
              weather={day.weather}
              max={day.max_temp}
              min={day.min_temp}
              precip={day.precip}
              ts={new Date(day.ts * 1000).toLocaleDateString("it-IT")}
            />
          );
        })}
      </div>
    );

    const { data } = this.state;
    console.log(data);
    //const { daysData } = this.state;
    return (
      <div
        className={`fullcontainer ${
          this.state.data.temp > 20 ? "hot" : "cold"
        }`}
      >
        <div className="App">
          <header>
            <h2>React Weather</h2>
            <InputSearch
              enter={this.searchCityHandler}
              change={this.inputCityHandler}
              value={this.state.city}
            />
          </header>
          <TodayWeather data={data} />
          {daysWeather}
          <footer className="credits">Credits to @sa-borgia3</footer>
        </div>
      </div>
    );
  }
}

export default App;
