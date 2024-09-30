const API_URL = "https://portal-api.loca.lt/api/";
const convertUTCDateToLocalDate = (serverDate) => {
  const date = new Date(serverDate);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date;
};

const formatToUTCDateTime = (dateString) => {
  const date = new Date(Date.parse(dateString));
  const formattedDate = date.toISOString().split("T")[0].split("-");
  const formattedTime = date.toISOString().split("T")[1].split(":");
  return `${formattedDate[1]}/${formattedDate[2]}/${formattedDate[0]} ${formattedTime[0]}:${formattedTime[1]}`;
};
const parseDaytime = (time) => {
  let [hours, minutes] = time
    .substr(0, time.length - 2)
    .split(":")
    .map(Number);
  if ((time.includes("pm") || time.includes("PM")) && hours !== 12) hours += 12;
  return {
    hours,
    minutes,
  };
};

const setDateTimeForUTC = (date, time) => {
  const updatedData = new Date(date.toDateString());
  const newDate = new Date(
    new Date(updatedData).setHours(
      parseDaytime(time).hours,
      parseDaytime(time).minutes
    )
  );
  return formatToUTCDateTime(newDate);
};
const STORAGE_KEYS = {
  sessionKey: "session-id",
};
export {
  convertUTCDateToLocalDate,
  formatToUTCDateTime,
  setDateTimeForUTC,
  API_URL,
  STORAGE_KEYS,
};
