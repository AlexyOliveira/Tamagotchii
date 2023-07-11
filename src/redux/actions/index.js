export const SET_HOURS = "SET_HOURS";
export const SET_AGE = "SET_AGE";
export const SET_DAY = "SET_DAY";
export const SET_HUNGER_ADD = "SET_HUNGER_ADD";
export const SET_HUNGER_SUB = "SET_HUNGER_SUB";
export const SET_ENERGY_ADD = "SET_ENERGY_ADD";
export const SET_ENERGY_SUB = "SET_ENERGY_SUB";
export const SET_LIFE = "SET_LIFE";
export const SET_SICK = "SET_SICK";
export const SET_AREA = "SET_AREA";
export const SET_SLEEP_TOGGLE = "SET_SLEEP_TOGGLE";
export const SET_SYRINGE_TOGGLE = "SET_SYRINGE_TOGGLE";

export const setArea = (payload) => ({
  type: SET_AREA,
  payload,
});

export const setSleepToggle = (payload) => ({
  type: SET_SLEEP_TOGGLE,
  payload,
});

export const setSyringeToggle = (payload) => ({
  type: SET_SYRINGE_TOGGLE,
  payload,
});
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

export const setEnergyAdd = (payload) => ({
  type: SET_ENERGY_ADD,
  payload,
});

export const setEnergySub = (payload) => ({
  type: SET_ENERGY_SUB,
  payload,
});

export const setLife = (payload) => ({
  type: SET_LIFE,
  payload,
});

export const setSick = (payload) => ({
  type: SET_SICK,
  payload,
});
