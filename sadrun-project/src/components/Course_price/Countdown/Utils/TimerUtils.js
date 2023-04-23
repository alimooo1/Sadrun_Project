import dayjs from "dayjs";

export default function getRemainingTime(timestamp) {
  const timestampDayjs = dayjs(timestamp);
  const nowDayjs = dayjs();
  if(timestampDayjs.isBefore(nowDayjs)){
    return {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        monthes: 0,
      };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinuts(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDys(nowDayjs, timestampDayjs),
    monthes: getRemainingMonthes(nowDayjs, timestampDayjs),
  };
}

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  return seconds;
};
const getRemainingMinuts = (nowDayjs, timestampDayjs) => {
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  return minutes;
};
const getRemainingHours = (nowDayjs, timestampDayjs) => {
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
  return hours;
};
const getRemainingDys = (nowDayjs, timestampDayjs) => {
  const days = Math.floor(timestampDayjs.diff(nowDayjs, "days") % 30.4167);
  return days;
};
const getRemainingMonthes = (nowDayjs, timestampDayjs) => {
  const months = timestampDayjs.diff(nowDayjs, "months");
  return months;
};
