export const SET_HOURS = 'SET_HOURS';
export const SET_AGE = 'SET_AGE';
export const SET_DAY = 'SET_DAY';
export const SET_HUNGER = 'SET_HUNGER';


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

export const setHunger = (payload) => ({
  type: SET_HUNGER,
  payload,
});