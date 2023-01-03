import { OPTIONS } from "../constants.js";
import throttle from "../helpers/throttle.js";
import { drain } from "./drain.js";

let idleId = null;
let _throttled;

export const runAtIdle = async () => {
  await drain();

  if (_throttled || (_throttled = throttle())) {
    _throttled.clear(idleId);
    idleId = _throttled.set(runAtIdle);
  } else if (typeof requestIdleCallback === "function") {
    cancelIdleCallback(runAtIdle);
    idleId = requestIdleCallback(runAtIdle);
  } else if (typeof process !== "undefined" && process.nextTick) {
    if (typeof idleId === "function") {
      idleId();
    }
    idleId = setImmediate(runAtIdle);
  }
};
