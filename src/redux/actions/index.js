export const SET_HOURS = "SET_HOURS";
export const SET_AGE = "SET_AGE";
export const SET_DAY = "SET_DAY";
export const SET_HUNGER_ADD = "SET_HUNGER_ADD";
export const SET_HUNGER_SUB = "SET_HUNGER_SUB";
export const SET_LIFE = "SET_LIFE";

export const setHours = (payload) => ({
  type: SET_HOURS,
  payload,
});

export const setAge = (payload) => ({
  type: SET_AGE,
  payload,
});

export const setDay = (payload) => ({
  type: SET_DAY,
  payload,
});

export const setHungerAdd = (payload) => ({
  type: SET_HUNGER_ADD,
  payload,
});

export const setHungerSub = (payload) => ({
  type: SET_HUNGER_SUB,
  payload,
});

export const setLife = (payload) => ({
  type: SET_LIFE,
  payload,
});
