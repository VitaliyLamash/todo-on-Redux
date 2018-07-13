import * as appTypes from "../types/appTypes";

const initialState = {};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.ADD_WEATHER_LIST:
      return {
        ...action.payload
      };

    default:
      return state;
  }
};

export const itemsIsLoading = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.ITEMS_IS_LOADING:
      return {
        ...state,
        itemsIsLoading: action.payload
      };
    default:
      return state;
  }
};

export const itemsIsLoaded = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.ITEMS_IS_LOADED:
    console.log('itemsIsLoaded reducer', action.payload)
      return {
        ...state,
        itemsIsLoaded: action.payload
      };
    default:
      return state;
  }
};

// reselect
