import { OPTIONS } from "../constants.js";

export default function throttle() {
  const { throttleMode, throttle } = OPTIONS;

  if (throttleMode === "seconds") {
    return {
      set: (handler) =>
        setInterval(handler, Math.max(100, OPTIONS.throttle * 1000)),
      clear: (id) => clearInterval(id),
    };
  } else if (throttleMode === "calls") {
    return {
      set: (handler) => setInterval(handler, OPTIONS.throttle * 1000),
      clear: (id) => clearInterval(id),
    };
  }
}
