import { Counter } from "./constants";

export const incrementedAction = () => {
  return {
    type: Counter.INCREMENTED,
  };
};

export const decrementedAction = () => {
  return {
    type: Counter.DECREMENTED,
  };
};
