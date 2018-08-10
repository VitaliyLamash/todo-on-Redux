import React, { Component } from "react";
import WeatherList from "../components/WeatherList";
import ChooseWeather from '../components/ChooseWeather';
import { connect } from "react-redux";
import { fetchingData, getIdTown, isLoaded } from "../../actions/actionWeather";
class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ID: '',
		};
	}

	modalHiden = () => {
		this.props.isLoadedFn(false);
	}


	chooseWeather = event => {
		let { value } = event.target;
		return new Promise((resolve) => resolve())
			.then(() => this.setState({ ID: value }))
			.then(() => this.props.getIdTown(this.state.ID))
			.then(() => this.props.fetchingData(`https://api.openweathermap.org/data/2.5/weather?id=${this.props.idTown}&appid=51d78cf816bd1c2c2be853cb3858da92`));
	};

	render() {
		console.log(this.state);
		return (
			<div>
				<ChooseWeather chooseWeather={this.chooseWeather} ID={this.state.ID} />
				<WeatherList
					modalHiden={this.modalHiden}
					list={this.props.list}
					isLoaded={this.props.isLoaded}
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
