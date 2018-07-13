import * as appTypes from "../types/appTypes";

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
export const itemsIsLoading = bool => {
  return {
    type: appTypes.ITEMS_IS_LOADING,
    payload: bool
  };
};

export function fetchingData(url) {
  return function(dispatch, getState) {
    let { weatherReducer } = getState();
    if (weatherReducer.name === "London") {
      return;
    }
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => {
        dispatch(addList(items))
        dispatch(isLoaded(true));
      })

      .catch(erorr => console.log("reject", erorr));
  };
}
