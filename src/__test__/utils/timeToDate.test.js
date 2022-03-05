import timeToDate from "../../utils/timeToDate";

const struct = {
  day: 0,
  hour: 0,
  minute: 0,
  second: 0,
};
describe("Time to date test", () => {
  const time = timeToDate(new Date(), new Date());
  test("should return correct remaining time to a date", () => {
    expect(time).toEqual(struct);
    const currentDate = new Date(2021, 1, 28, 0, 0, 0);
    const nextDate = new Date(2021, 3, 20, 1, 10, 0);
    const time2 = timeToDate(nextDate, currentDate);
    expect(time2).toEqual({
      day: 51,
      hour: 0,
      minute: 10,
      second: 0,
    });
  });
});
