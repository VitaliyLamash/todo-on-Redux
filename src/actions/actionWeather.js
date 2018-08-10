import * as appTypes from "../types/appTypes";
import { getRequest } from "../utils/request-handler"

export const addList = list => {
	return {
		type: appTypes.ADD_WEATHER_LIST,
		payload: list
	};
};

export const isLoaded = bool => {
	return {
		type: appTypes.ITEMS_IS_LOADED,
		payload: bool
	};
};

export const getIdTown = id => {
	return{
		type: appTypes.GET_ID_TOWN,
		payload: id
	}
}

export function fetchingData(url) {
	return function (dispatch, getState) {
		let { weatherReducer } = getState();
		if (weatherReducer.id == weatherReducer.idTown) {
			return;

		}
		getRequest(url)
			.then(r => {
				dispatch(addList(r));
			})
			.then(r => {
				dispatch(addList(r));
				dispatch(isLoaded(true));
			})
			.catch(erorr => {
				dispatch(isLoaded(false));
			});
	};
}
