import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/global.css';
import './css/custom.css';
import './css/colors.css';
import WeatherApp from './components/weather-calculator';
import FormApp from './components/form';
import Header from './components/header';

const API_KEY = 'ede8080f6378fcfb399d37596d75fdcf';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      error : undefined

    }
  }
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);

      if(city && country){
        this.setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:''
        });
      }
      else{
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error:'Please enter the values!!!'
        });
      }
    }
  render() {
    return (
      <div className="App">
        <div className="wrapper pink-text">
          <Header />
          <FormApp getWeather={this.getWeather}/>
          <WeatherApp 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
