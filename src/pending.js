import { drain } from "./functions/drain.js";
import { schedule } from "./functions/schedule.js";
export { OPTIONS } from "./constants.js";

const pending = async (fn, condition) => {
  await drain();

  if (await condition()) {
    await fn();
  } else {
    await schedule({ fn, condition });
  }
};

export default pending;
