async function getWeatherInfo(location) {
  const API_KEY = "c84cd9993c91fd272162067af20fd931";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
    { mode: "cors" }
  );
  const json = await response.json();
  console.log(json);
}

// getWeatherInfo("Kathmandu");
