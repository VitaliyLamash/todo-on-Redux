import * as appTypes from "../types/appTypes";

const initialState = {
  isLoaded: false,
  idTown: ''
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.ADD_WEATHER_LIST:
      return {
        ...state,
        ...action.payload
      };
    case appTypes.ITEMS_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      };
    case appTypes.GET_ID_TOWN:
      return {
        ...state,
        idTown: action.payload
      }
    default:
      return state;
  }
};


// reselect
