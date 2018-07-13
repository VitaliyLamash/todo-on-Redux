import React, { Component } from "react";
import WeatherList from "../components/WeatherList";
import { connect } from "react-redux";
import { fetchingData } from "../../actions/actionWeather";
class Weather extends Component {


  componentDidMount(){
    const param = {
      method: "GET",
      headers: "Access-Control-Allow-Origin",
      mode: "no-cors"
    };

    this.props.fetchingData(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=51d78cf816bd1c2c2be853cb3858da92",
      param
    );
  }
  render() {

    
    return ( <div>
    
    { this.props.isLoading ?  <p>LOADING </p> : 
      <WeatherList
        list={this.props.list}
        isLoading={this.props.isLoading}
        isLoaded={this.props.isLoaded}
      />}
       </div>)
}
}

const mapStateToProps = state => {
  return {
    isLoading: state.itemsIsLoading.itemsIsLoading,
    list: state.weatherReducer,
    isLoaded: state.itemsIsLoaded.itemsIsLoaded
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchingData: list => {
      dispatch(fetchingData(list));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
