function createData(no, date, recipentName, amount, isPaid) {
  return { no, date, recipentName, amount, isPaid };
}
export const rows = [
  createData(1, new Date("Fri, 01 Jan 1971 00:00:00 GMT"), "Jerry", 24, true),
  createData(2, new Date("Sat, 02 Jan 1971 00:00:00 GMT"), "Merry", 4, true),
  createData(3, new Date("Sun, 03 Jan 1971 00:00:00 GMT"), "Berry", 124, false),
  createData(4, new Date("Mon, 04 Jan 1971 00:00:00 GMT"), "Gerry", 234, true),
  createData(5, new Date("Tue, 05 Jan 1971 00:00:00 GMT"), "Derry", 524, false),
];

// TODO convert this to json
// TODO read about useReducer
