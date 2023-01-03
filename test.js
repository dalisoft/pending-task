import pending, { OPTIONS } from "./src/pending.js";

let counter = 0;

OPTIONS.throttle = 3;

setInterval(() => {
  counter++;
}, 10);

pending(
  () => {
    console.log(`Counter is >= 400`);
  },
  () => counter >= 400
);

console.log(process.pid);
