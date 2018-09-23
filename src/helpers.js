export function convertUnixTime(unixTime) {
  const convertedTime = new Date(unixTime * 1000);
  return `${convertedTime.getHours()}:${convertedTime.getMinutes()}`;
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
