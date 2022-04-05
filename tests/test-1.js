const test = require("ava");
const { sum } = require("../index.js");

test("sum", (t) => {
  t.is(sum(1, 2), 3);
  t.log(process.version);
});
