export const oneDayCityDataAPI = "/weather?q=";
export const apiKey = "&APPID=8496070a6ed3bd27bd80c6c4595509b1";
export const metric = "&units=metric";
export const imperial = "&units=imperial";
export const htmlMode = "&mode=html";
export const forecastFiveDaysAPI =
  "https:/api.openweathermap.org/data/2.5/forecast?id="; //Call 5 day / 3 hour forecast data
export const forecastTenDaysAPI =
  "https:/api.openweathermap.org/data/2.5/forecast/daily?id=";
export const defaultHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    // ":authority": "https:/api.openweathermap.org"
  },
  baseURL: "https:/api.openweathermap.org/data/2.5"
};

// Accept: "application/json",
// "Content-Type": "application/json",

export const citiesArr = [
  {
    id: 776069,
    name: "Białystok"
  },
  {
    id: 3102014,
    name: "Bydgoszcz"
  },
  {
    id: 3099434,
    name: "Gdansk"
  },
  {
    id: 3098722,
    name: "Gorzow Wielkopolski"
  },
  {
    id: 3096472,
    name: "Katowice"
  },
  {
    id: 769250,
    name: "Kielce"
  },
  {
    id: 3094802,
    name: "Krakow"
  },
  {
    id: 765876,
    name: "Lublin"
  },
  {
    id: 3093133,
    name: "Lodz"
  },
  {
    id: 763166,
    name: "Olsztyn"
  },
  {
    id: 3090048,
    name: "Opole"
  },
  {
    id: 3088171,
    name: "Poznan"
  },
  {
    id: 759734,
    name: "Rzeszow"
  },
  {
    id: 3083829,
    name: "Szczecin"
  },
  {
    id: 3083271,
    name: "Torun"
  },
  {
    id: 6695624,
    name: "Warszawa"
  },
  {
    id: 3081368,
    name: "Wroclaw"
  },
  {
    id: 7530991,
    name: "Zielona Góra"
  }
];
