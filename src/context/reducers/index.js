import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";

const appReducer = combineReducers({
  weatherData: weatherReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
