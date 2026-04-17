const getWeatherData = async () => {
  try {
    const res = await fetch(
      "https://pub-54904ef3b9374b6c9f80cf1763a31f5b.r2.dev/cc-datas/weather-data.json",
    );
    if (!res.ok) {
      console.log("Дата авахад алдаа гарлаа");
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Дата авахад алдаа гарлаа", error);
    return null;
  }
};

const parseWeather = (raw) => {
  if (!raw) return null;
  const onlyNumber = (num) => {
    if (typeof num === "number") return num;
    if (!num) return null;
    return parseFloat(num);
  };

  const forecastDays = (raw.forecast?.forecastday).slice(0, 3).map((day) => ({
    date: day.date,
    min: onlyNumber(day.day?.mintemp_c),
    max: onlyNumber(day.day?.maxtemp_c),
    condition: day.day?.condition?.text,
  }));

  const todayHours = raw.forecast?.forecastday[0].hour;

  const last = todayHours.reduce(
    (acc, hour) => {
      const hourTemp = hour.temp_c === null ? hour.feelslike_c : hour.temp_c;
      const hourWind = onlyNumber(hour.wind_kph);

      acc.totalTemp += onlyNumber(hourTemp);
      if (hourWind > acc.maxWind) acc.maxWind = hourWind;
      acc.precipTotal += onlyNumber(hour.precip_mm);
      return acc;
    },
    { totalTemp: 0, maxWind: 0, precipTotal: 0 },
  );

  const hoursAnalyst = {
    date: raw.forecast?.forecastday[0]?.date,
    avgTemp: Number((last.totalTemp / todayHours.length).toFixed(1)),
    maxWind: last.maxWind,
    precipTotal: last.precipTotal.toFixed(1),
  };

  return {
    city: raw.location?.name,
    country: raw.location?.country,
    current: {
      temp: onlyNumber(raw.current?.temp_c),
      condition: raw.current?.condition?.text,
      humidity: onlyNumber(raw.current?.humidity),
      airQuality: {
        pm2_5: onlyNumber(raw.current?.air_quality?.pm2_5),
        pm10: onlyNumber(raw.current?.air_quality?.pm10),
        o3: onlyNumber(raw.current?.air_quality?.o3),
        no2: onlyNumber(raw.current?.air_quality?.no2),
        so2: onlyNumber(raw.current?.air_quality?.so2),
        co: onlyNumber(raw.current?.air_quality?.co),
      },
    },
    forecastDays: forecastDays,
    hoursAnalys: hoursAnalyst,
  };
};

module.exports = { parseWeather, getWeatherData };

getWeatherData().then((data) => {
  const result = parseWeather(data);
  console.log(result);
});
