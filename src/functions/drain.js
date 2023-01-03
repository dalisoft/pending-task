import { PENDING_ACTIONS } from "../constants.js";

export const drain = async () => {
  for (const action of PENDING_ACTIONS) {
    const { fn: task, condition: is } = action;
    if (await is()) {
      await task();
      action.done = true;
    }
  }

  // Remove succeed tasks
  let i = 0;
  while (i < PENDING_ACTIONS.length) {
    if (PENDING_ACTIONS[i].done) {
      PENDING_ACTIONS.splice(i, 1);
    } else {
      i++;
    }
  }
};
