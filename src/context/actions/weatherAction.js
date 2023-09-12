const WEATHER_SEACRH = (city) => {
  return async (dispatch) => {
    try {
      const Wresponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=cc3d39a94d2b49bc9ff63938230509&q=${city}&days=7&aqi=no&alerts=no`
      );
      const Aresponse = await fetch(
        `https://api.weatherapi.com/v1/astronomy.json?key=cc3d39a94d2b49bc9ff63938230509&q=${city}&dt=2023-09-06`
      );
      const weather = await Wresponse.json();
      const astronomy = await Aresponse.json();
      dispatch({
        type: "WEATHER_SEARCH",
        payload: { weather, astronomy },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default WEATHER_SEACRH;
