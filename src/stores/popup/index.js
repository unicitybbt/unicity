import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const usePopupStore = defineStore('popup', () => {
  const popupState = state();
  const popupGetters = getters(popupState);

  return {
    ...popupState,
    ...popupGetters,
    // ...Object.keys(actions).reduce((acc, key) => {
    //   acc[key] = (...args) => actions[key](popupState, ...args);
    //   return acc;
    // }, {})
    openPopup: (params) => actions.openPopup(popupState, params),
    closePopup: (id) => actions.closePopup(popupState, id),
  };
});