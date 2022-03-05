const timeToDate: (nextDate: Date, currentDate: Date) => TimeObject = (
  nextDate: Date,
  currentDate = new Date()
) => {
  const time = nextDate.getTime() - currentDate.getTime();
  const second = Math.floor((time / 1000) % 60);
  const minute = Math.floor((time / (1000 * 60)) % 60);
  const hour = Math.floor((time / (1000 * 60 * 60)) % 24);
  const day = Math.floor(time / (1000 * 60 * 60 * 24));

  const object: TimeObject = {
    day,
    hour,
    minute,
    second,
  };
  return object;
};

export default timeToDate;
