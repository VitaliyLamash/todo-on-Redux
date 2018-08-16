import React, { Component } from "react";
import WeatherList from "../components/WeatherList";
import ChooseWeather from '../components/ChooseWeather';
import { connect } from "react-redux";
import { fetchingData, getIdTown, isLoaded } from "../../actions/actionWeather";


class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typeTemp: true
		}
	}
	modalHiden = () => this.props.isLoadedFn(false);

	chooseWeather = event => {
		let { value } = event.target;
		this.props.getIdTown(value);
		console.log('befor')
		this.props.fetchingData(`https://api.openweathermap.org/data/2.5/weather?id=${value}&appid=51d78cf816bd1c2c2be853cb3858da92`);
	};

	changeTemp = () => this.setState({ typeTemp: !this.state.typeTemp});

	render() {
		return (
			<div>
				<ChooseWeather chooseWeather={this.chooseWeather} />
				<WeatherList
					changeTemp={this.changeTemp}
					modalHiden={this.modalHiden}
					list={this.props.list}
					isLoaded={this.props.isLoaded}
					typeTemp={this.state.typeTemp}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		list: state.weatherReducer,
		isLoaded: state.weatherReducer.isLoaded,
		idTown: state.weatherReducer.idTown
	};
};
const mapDispatchToProps = dispatch => {
	return {
		fetchingData: list => dispatch(fetchingData(list)),
		getIdTown: id => dispatch(getIdTown(id)),
		isLoadedFn: bool => dispatch(isLoaded(bool))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Weather);
