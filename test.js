import pending, { OPTIONS } from "./src/pending.js";
import assert from "node:assert";

OPTIONS.throttle = 3;

let counter = 0;

setInterval(() => {
  counter++;
}, 10);

let STATUS = "FAIL";

pending(
  () => {
    STATUS = "OK";
  },
  () => counter >= 100
);

await new Promise((resolve) => setTimeout(resolve, 1200));

assert.equal(STATUS, "OK", "Pending task was failed");
process.exit(0);
