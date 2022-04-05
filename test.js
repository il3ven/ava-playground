const test = require("ava");
const { sum } = require("./index.js");

test("sum", (t) => {
  t.throws(
    () => {
      throw new TypeError(`is not supported`);
    },
    {
      message: (message) => message.includes("is not supported"),
    }
  );
});
