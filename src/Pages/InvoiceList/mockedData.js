function createData(no, date, recipentName, amount, paid) {
  return { no, date, recipentName, amount, paid };
}
export const rows = [
  createData(1, new Date("Fri, 01 Jan 1971 00:00:00 GMT"), "Jerry", 24, "yes"),
  createData(2, new Date("Sat, 02 Jan 1971 00:00:00 GMT"), "Merry", 4, "yes"),
  createData(3, new Date("Sun, 03 Jan 1971 00:00:00 GMT"), "Berry", 124, "no"),
  createData(4, new Date("Mon, 04 Jan 1971 00:00:00 GMT"), "Gerry", 234, "yes"),
  createData(5, new Date("Tue, 05 Jan 1971 00:00:00 GMT"), "Derry", 524, "no"),
];
