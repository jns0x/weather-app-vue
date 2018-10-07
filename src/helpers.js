export function convertUnixTime(unixTime) {
  const convertedTime = new Date(unixTime * 1000);
  return `${convertedTime.getHours()}:${
    convertedTime.getMinutes() === 0 ? "00" : convertedTime.getMinutes()
  }`;
}
export function convertUnixTimeToWeekDay(unixTime) {
  const weekDaysArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const convertedTime = new Date(unixTime * 1000);
  return weekDaysArr[convertedTime.getDay()];
}

export function setToLocalStorage(name, obj) {
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
    return localStorage.setItem(name, JSON.stringify(obj));
  } else {
    // Sorry! No Web Storage support..
  }
}
export function getFromLocalStorage(name) {
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
    return JSON.parse(localStorage.getItem(name));
  } else {
    // Sorry! No Web Storage support..
  }
}
