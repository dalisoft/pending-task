import { runAtIdle } from "./runAtIdle.js";
import { PENDING_ACTIONS } from "../constants.js";

export const schedule = async (action) => {
  PENDING_ACTIONS.push(action);
  await runAtIdle();
};
