const initialState = {
  weatherData: {},
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_SEARCH":
      return {
        ...state,
        weatherData: action.payload,
      };
      default:
        return state;
  }
};

export default weatherReducer;
